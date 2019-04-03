#!/bin/bash

cp -rf node_modules/materialize-css/dist/css/materialize.min.css app/styles/
cp -rf node_modules/materialize-css/dist/js/materialize.min.js app/scripts/

webextension-toolbox build $*