#!/usr/bin/env node

'use strict';

const dns = require('dns');
const request = require('request');
const cheerio = require('cheerio');
const url = 'http://nsanamegenerator.com';

if (process.argv[2] === 'help') {
  console.log('\nUsage');
  console.log('  $ nsacg\n');
  console.log('Example\n');
  console.log('  $ nsacg\n');
  console.log('  BULLDOZERORGAN\n');
} else {
  dns.lookup(url.substring(7), function (err) {
    if (err && err.code === 'ENOTFOUND') {
		  console.log('Please check your internet connection');
		  process.exit(1);
	  } else {
      request(url, function (err, res, body) {
        if (!err && res.statusCode == 200) {
          let $ = cheerio.load(body);

          console.log(($('body').text()).trim());
        }
      });
    }
  });
}

