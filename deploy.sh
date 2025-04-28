#!/bin/bash

# Production deployment script for Wild & Woven

echo "Starting deployment process..."

# Install dependencies
echo "Installing dependencies..."
npm install

# Run linting
echo "Running linting..."
npm run lint

# Run production build
echo "Building for production..."
npm run build

# Run production start (comment this out if deploying to hosting platform)
# echo "Starting production server..."
# npm start

echo "Deployment process completed!"
echo "To start the production server, run: npm start"
echo "If deploying to a hosting platform like Vercel, upload the build files." 