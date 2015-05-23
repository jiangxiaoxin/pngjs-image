// Copyright 2015 Yahoo! Inc.
// Copyrights licensed under the Mit License. See the accompanying LICENSE file for terms.

/**
 * @class Scale
 * @module PNG
 * @submodule PNGCore
 * @param chunks
 * @param data
 * @param offset
 * @constructor
 */
var Scale = function (chunks, data, offset) {
	this._chunks = chunks;
	this._data = data;
	this._offset = offset || 0;
};


Scale.prototype.getHeaderChunk = function () {
	return this._headerChunk;
};

Scale.prototype.getData = function () {
	return this._data;
};

Scale.prototype.getOffset = function () {
	return this._offset;
};


Scale.prototype.scaleToOutput = function () {
};

Scale.prototype.scaleToImage = function () {

};

module.exports = Scale;