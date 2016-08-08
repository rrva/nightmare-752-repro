#!/bin/sh
export LANG=en_US.UTF-8
export LANGUAGE=en_US:en
export LC_ALL=en_US.UTF-8
export DEBUG="*"
xvfb-run -a --server-args="-screen 0 1440x900x24" node --harmony app.js
