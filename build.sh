#!/bin/sh

set -eu

npm ci
npm run build

rm -rf dist
mkdir -p dist
cp -R out/. dist/
