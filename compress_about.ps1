Add-Type -AssemblyName System.Drawing

function Compress-Image {
    param([string]$path, [int]$targetWidth)
    
    try {
        $img = [System.Drawing.Image]::FromFile($path)
        
        $ratio = $targetWidth / $img.Width
        if ($ratio -ge 1) { 
            $img.Dispose()
            Write-Host "Skipping $path (already small enough)"
            return 
        }
        $newWidth = [int]($img.Width * $ratio)
        $newHeight = [int]($img.Height * $ratio)

        $newImg = New-Object System.Drawing.Bitmap($newWidth, $newHeight)
        $g = [System.Drawing.Graphics]::FromImage($newImg)
        $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
        $g.DrawImage($img, 0, 0, $newWidth, $newHeight)
        $g.Dispose()
        
        $img.Dispose()
        
        $codec = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() | Where-Object { $_.MimeType -eq 'image/jpeg' }
        $encoderParams = New-Object System.Drawing.Imaging.EncoderParameters(1)
        $encoderParams.Param[0] = New-Object System.Drawing.Imaging.EncoderParameter([System.Drawing.Imaging.Encoder]::Quality, 60L)
        
        $tmpPath = $path + ".tmp.jpg"
        $newImg.Save($tmpPath, $codec, $encoderParams)
        $newImg.Dispose()
        
        Remove-Item -Path $path -Force
        Rename-Item -Path $tmpPath -NewName (Split-Path $path -Leaf)
        Write-Host "Compressed $path"
    } catch { 
        Write-Host "Error compressing $path : $_"
    }
}

$picDir = "e:\Personal\portfolio\src\assets\pictures"
$files = Get-ChildItem -Path $picDir -Filter "*.jpg" | Where-Object { $_.Name -notmatch '\.tmp\.jpg$' }

foreach ($file in $files) {
    Compress-Image -path $file.FullName -targetWidth 800
}

$mePic = "e:\Personal\portfolio\src\assets\me.jpg"
if (Test-Path $mePic) {
    Compress-Image -path $mePic -targetWidth 800
}
