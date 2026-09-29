Add-Type -AssemblyName System.Drawing
$dir = "e:\Personal\portfolio\src\assets\img"
$files = Get-ChildItem -Path $dir -Filter "*.jpg" | Where-Object { $_.Name -notmatch '\.tmp\.jpg$' }

foreach ($file in $files) {
    try {
        $img = [System.Drawing.Image]::FromFile($file.FullName)
        
        $ratio = 800.0 / $img.Width
        if ($ratio -ge 1) { 
            $img.Dispose()
            continue 
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
        
        $tmpPath = $file.FullName + ".tmp.jpg"
        $newImg.Save($tmpPath, $codec, $encoderParams)
        $newImg.Dispose()
        
        Remove-Item -Path $file.FullName -Force
        Rename-Item -Path $tmpPath -NewName $file.Name
    } catch { }
}
