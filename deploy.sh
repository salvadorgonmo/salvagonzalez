#!/bin/sh

echo "Switching to branch master"
git checkout main

echo "Building app"
npm run build

echo "Deploying files to server"
rsync -avP build/ salgonmo@72.167.51.185:/var/www/salvadorgonmo.dev/
echo "Deployment completed"