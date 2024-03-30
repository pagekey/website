#!/bin/bash -x

# Make sure no build dir
rm -rf build
# Build the site
cd astrowind
npm i
npm run build
# Move the build dir up
mv dist ../build
cd ..
# Configure CNAME
echo pagekey.io >> build/CNAME
