#!/bin/bash -x

rm -rf build
mkdir -p build/tmp
cp -rT common build/tmp
cp -rT en build/tmp

cd build/tmp
mkdocs build
mv site ../out
cd ..
rm -rf tmp
mkdir tmp
cp -rT ../common tmp
cp -rT ../es tmp
cd tmp
echo '{INHERIT: mkdocs.yml, site_name: "PageKey Español", theme: {language: "es"}, extra: { social: [ { icon: "fontawesome/brands/youtube", link: "https://youtube.com/@PageKey-es" }] } }' | mkdocs build -f -
rm -rf ../out/es
mv site ../out/es
cd ..
rm -rf tmp
mv out/* .
rmdir out
cd ..
