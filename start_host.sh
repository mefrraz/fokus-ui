#!/bin/bash

# Check if node_modules exists, if not, install dependencies
if [ ! -d "node_modules" ]; then
  echo "📦 Installing dependencies (this may take a minute)..."
  npm install
fi

# Try to detect IP using ip route (more robust on Linux)
IP=$(ip route get 1.1.1.1 2>/dev/null | grep -oP 'src \K\S+')

# Fallback if ip route fails
if [ -z "$IP" ]; then
  IP=$(hostname -i 2>/dev/null | awk '{print $1}')
fi

if [ -z "$IP" ] || [ "$IP" = "127.0.0.1" ]; then
  echo "Could not detect local LAN IP address."
  echo "Starting server on localhost..."
  npm run dev
else
  echo "===================================================="
  echo "  🚀 Server starting!"
  echo "  📱 Access on your device: http://$IP:5000"
  echo "===================================================="
  echo ""
  npm run dev
fi
