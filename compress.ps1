Add-Type -AssemblyName System.Drawing
$dir = "e:\Personal\portfolio\src\assets\img"
$files = Get-ChildItem -Path $dir -Filter "*.jpg"

foreach ($file in $files) {
    $img = [System.Drawing.Image]::FromFile($file.FullName)
    $ratio = 800.0 / $img.Width
    if ($ratio -ge 1) { $ratio = 1 }
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
    
    $newImg.Save($file.FullName, $codec, $encoderParams)
    $newImg.Dispose()
    Write-Host "Compressed $($file.Name)"
}
