$root = "C:\Users\jonpp\Claude Code\Huning Castle"
$listener = New-Object System.Net.HttpListener
$listener.Prefixes.Add("http://localhost:8080/")
$listener.Start()
while ($listener.IsListening) {
    $ctx = $listener.GetContext()
    $req = $ctx.Request
    $res = $ctx.Response
    $path = Join-Path $root ($req.Url.LocalPath.TrimStart('/').Replace('/', '\'))
    if ($path -eq "$root\") { $path = "$root\index.html" }
    if (Test-Path $path -PathType Leaf) {
        $bytes = [System.IO.File]::ReadAllBytes($path)
        $ext = [System.IO.Path]::GetExtension($path).ToLower()
        $mime = @{
            '.html' = 'text/html'
            '.css'  = 'text/css'
            '.js'   = 'application/javascript'
            '.png'  = 'image/png'
            '.jpg'  = 'image/jpeg'
            '.svg'  = 'image/svg+xml'
            '.pdf'  = 'application/pdf'
            '.docx' = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
        }[$ext]
        if (-not $mime) { $mime = 'application/octet-stream' }
        $res.ContentType = $mime
        $res.ContentLength64 = $bytes.Length
        $res.OutputStream.Write($bytes, 0, $bytes.Length)
    } else {
        $res.StatusCode = 404
    }
    $res.OutputStream.Close()
}
