#!/bin/bash

cp -R node_modules/materialize-css/dist/css/materialize.min.css app/plugins/materialize/
cp -R node_modules/materialize-css/dist/js/materialize.min.js app/plugins/materialize/

webextension-toolbox dev $*