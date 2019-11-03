"use strict";

const rc = require("rc");
const debug = require("debug")("rc-typed");
const parse = require("parse-strings-in-object");

/**
 * Drop-in replacement for 'rc' package with recursive type parsing
 * This package also fixes the currently broken d.ts of rc package so vscode shows correct paths in IntelliSense
 * @template T configuration type
 * @param {string} name rc namespace
 * @param {T} defaults default configuration
 * @returns {T} read and parsed configuration
 */
function rcTyped(name, defaults) {
  debug("reading config for namespace: %s and defaults: %o", name, defaults);
  const userConfig = rc(name, defaults);
  debug("rc read configuration: %o", userConfig);
  const parsedConfig = parse(userConfig);
  debug("parsed configuration: %o", parsedConfig);
  return parsedConfig;
}

module.exports = rcTyped;
