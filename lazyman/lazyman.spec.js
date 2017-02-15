//import {expect, assert} from 'chai';
var assert = require('chai').assert
var LazyMan = require("./lazyman")

console.log(LazyMan)

describe('test1', function () {
  it('test2', function (done) {
    LazyMan("peter").sleep(1).eat("KFC")
    setTimeout(function(){
      done()
    }, 1000)



  })
})
