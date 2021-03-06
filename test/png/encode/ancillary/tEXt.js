// Copyright 2015 Yahoo! Inc.
// Copyrights licensed under the Mit License. See the accompanying LICENSE file for terms.

var os = require('os');
var testGen = require('../../testGen');

describe('tEXt', function () {

	describe('Single', function () {

		testGen.addEncodeTests({
			resourceGroup: [],
			resourceFile: 'base',
			outputGroup: ['ancillary', 'text'],
			outputFile: 'tEXt_single',

			imageCheck: true,
			width: 32,
			height: 32,

			encodeOptions: {
				texts: [
					{
						keyword: "test",
						content: "hello world"
					}
				]
			}
		});
	});

	describe('Multiple', function () {

		testGen.addEncodeTests({
			resourceGroup: [],
			resourceFile: 'base',
			outputGroup: ['ancillary', 'text'],
			outputFile: 'tEXt_multiple',

			imageCheck: true,
			width: 32,
			height: 32,

			encodeOptions: {
				texts: [
					{
						keyword: "test1",
						content: "hello world1"
					},
					{
						keyword: "test2",
						content: "hello world2"
					},
					{
						keyword: "test3",
						content: "hello world3"
					}
				]
			}
		});
	});

	describe('Empty', function () {

		testGen.addEncodeTests({
			resourceGroup: [],
			resourceFile: 'base',
			outputGroup: ['ancillary', 'text'],
			outputFile: 'tEXt_empty',

			imageCheck: true,
			width: 32,
			height: 32,

			encodeOptions: {
				texts: []
			}
		});
	});

	describe('Special Characters', function () {

		testGen.addEncodeTests({
			resourceGroup: [],
			resourceFile: 'base',
			outputGroup: ['ancillary', 'text'],
			outputFile: 'tEXt_special_chars',

			imageCheck: true,
			width: 32,
			height: 32,

			encodeOptions: {
				texts: [
					{
						keyword: "test",
						content: "hello © world"
					}
				]
			}
		});
	});

	describe('Long Keyword', function () {

		testGen.addEncodeTests({
			resourceGroup: [],
			resourceFile: 'base',
			outputGroup: ['ancillary', 'text'],
			outputFile: 'tEXt_long_keyword',

			expectFailure: true,
			expectMessage: 'Keyword cannot be longer than 79 characters.',

			width: 32,
			height: 32,

			encodeOptions: {
				texts: [
					{
						keyword: "12345678901234567890123456789012345678901234567890123456789012345678901234567890", // 80
						content: "hello world"
					}
				]
			}
		});
	});

	describe('Empty Keyword', function () {

		testGen.addEncodeTests({
			resourceGroup: [],
			resourceFile: 'base',
			outputGroup: ['ancillary', 'text'],
			outputFile: 'tEXt_empty_keyword',

			expectFailure: true,
			expectMessage: 'Keyword needs to have a least one character.',

			width: 32,
			height: 32,

			encodeOptions: {
				texts: [
					{
						keyword: "",
						content: "hello world"
					}
				]
			}
		});
	});

	describe('Default Keyword', function () {

		testGen.addEncodeTests({
			resourceGroup: [],
			resourceFile: 'base',
			outputGroup: ['ancillary', 'text'],
			outputFile: 'tEXt_default_keyword',

			imageCheck: true,
			width: 32,
			height: 32,

			encodeOptions: {
				texts: [
					{ // Keyword: "Title"
						content: "hello world"
					}
				]
			}
		});
	});

	describe('No Content Keyword', function () {

		testGen.addEncodeTests({
			resourceGroup: [],
			resourceFile: 'base',
			outputGroup: ['ancillary', 'text'],
			outputFile: 'tEXt_no_content',

			imageCheck: true,
			width: 32,
			height: 32,

			encodeOptions: {
				texts: [
					{
						keyword: "test"
					}
				]
			}
		});
	});

	describe('New linew', function () {

		testGen.addEncodeTests({
			resourceGroup: [],
			resourceFile: 'base',
			outputGroup: ['ancillary', 'text'],
			outputFile: 'tEXt_new_line',

			imageCheck: true,
			width: 32,
			height: 32,

			encodeOptions: {
				texts: [
					{
						keyword: "test",
						content: "hello" + os.EOL + "world"
					}
				]
			}
		});
	});
});
