#! /usr/bin/env node

const adage = require('adage');

adage({}, (error, a) => {
  console.log(a || '🤔');
});