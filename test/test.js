'use strict';

const chai = require('chai');
const chaiHTTP = require('chai-http');
chai.use(chaiHTTP);
const expect = chai.expect;
const should = require('chai').should();
const request = require('chai').request;
//
const ourApp = require(__dirname + '/../app/app');

// require('../server');

// describe('testing ploppability', () => {
//   it('use copies a plop template', (done) => {
//     // console.log(command);
//     expect('use').to.not.eql('Failed to copy template to your project.');
//
//     done();
//   });
//
// });

describe('.action', () => {
  it('should exist and be a function', () => {
    should.exist(vorpal.command.action);
    vorpal.command.shoul.be.type
  });
});
