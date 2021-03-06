'use strict';

var gulp = require('gulp'),
    config = require('../../config'),
    fs = require('fs'),
    path = require('path'),
    jscs = require('gulp-jscs');

module.exports = function () {

    var lintFile,
        themeLintFile = config.lintfiles.jscs;

    lintFile = path.join(__dirname, '../../lintfiles/', '.jscsrc');

    if (fs.existsSync(themeLintFile)) {
        lintFile = themeLintFile;
    }

    return gulp
        .src(config.src.js)
        .pipe(jscs({
            configPath: lintFile
        }));
};
