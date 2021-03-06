'use strict';

var gulp = require('gulp'),
    config = require('../../config'),
    fs = require('fs'),
    path = require('path'),
    eslint = require('gulp-eslint');

module.exports = function () {

    var lintFile,
        themeLintFile = config.lintfiles.eslint;

    lintFile = path.join(__dirname, '../../lintfiles/', '.eslintrc');

    if (fs.existsSync(themeLintFile)) {
        lintFile = themeLintFile;
    }

    return gulp
        .src(config.src.js)
        .pipe(eslint({
            configFile: lintFile
        }))
        .pipe(eslint.format());
};
