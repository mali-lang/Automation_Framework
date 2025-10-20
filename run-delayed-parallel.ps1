# # Start the first test using cmd.exe
# Start-Process -NoNewWindow -FilePath "cmd.exe" -ArgumentList "/c npx codeceptjs run --features --grep `"@CounterOpening1`" --steps --verbose"

# # Wait for 1 seconds
# Start-Sleep -Seconds 1

# # Start the second test using cmd.exe
# Start-Process -NoNewWindow -FilePath "cmd.exe" -ArgumentList "/c npx codeceptjs run --features --grep `"@CounterOpening2`" --steps --verbose"

for ($i = 1; $i -le 20; $i++) {
    Write-Output "Starting CounterOpening$i..."
    Start-Process -NoNewWindow -FilePath "cmd.exe" -ArgumentList "/c npx codeceptjs run --features --grep `"@CounterOpening$i`" --steps --verbose"
    Start-Sleep -Seconds 3
}
