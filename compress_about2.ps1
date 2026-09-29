Add-Type -AssemblyName System.Drawing

function Compress-Image {
    param([string]$path, [int]$targetWidth)
    
    try {
        $img = [System.Drawing.Image]::FromFile($path)
        
        # Check EXIF orientation (PropertyTagOrientation = 0x0112 / 274)
        if ($img.PropertyIdList -contains 274) {
            $prop = $img.GetPropertyItem(274)
            $orientation = [BitConverter]::ToUInt16($prop.Value, 0)
            
            switch ($orientation) {
                2 { $img.RotateFlip([System.Drawing.RotateFlipType]::RotateNoneFlipX) }
                3 { $img.RotateFlip([System.Drawing.RotateFlipType]::Rotate180FlipNone) }
                4 { $img.RotateFlip([System.Drawing.RotateFlipType]::Rotate180FlipX) }
                5 { $img.RotateFlip([System.Drawing.RotateFlipType]::Rotate90FlipX) }
                6 { $img.RotateFlip([System.Drawing.RotateFlipType]::Rotate90FlipNone) }
                7 { $img.RotateFlip([System.Drawing.RotateFlipType]::Rotate270FlipX) }
                8 { $img.RotateFlip([System.Drawing.RotateFlipType]::Rotate270FlipNone) }
            }
        }
        
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
