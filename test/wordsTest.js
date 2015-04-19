var expect = require('chai').expect;
var Words = require('../public/js/words');

describe('Sentences', function() {

  beforeEach(function(done) {
    words = new Words();
    done();
  });

  afterEach(function (done) {
    setTimeout(done, 30);
  });

  it('can be added', function(done) {
    words.add("hi");
    expect(words.sentence).to.eql("hi");
    done();
  });

  it('can be split into seperate strings', function(done) {
    words.add("hi hannah");
    expect(words.splitSentence()).to.eql(["hi", "hannah"]);
    done();
  });

  it('can get rid of unwanted symbols', function(done) {
    words.add("hi hannah!");
    expect(words.splitSentence()).to.eql(["hi", "hannah", ""]);
    done();
  });

  it('can contain happy words', function(done) {
    words.add("happy");
    words.splitSentence();
    expect(words.happyCounter).to.eql(1);
    done();
   });

  it('can contain sad words', function(done) {
    words.add("sad");
    words.splitSentence();
    expect(words.sadCounter).to.eql(1);
    done();
  });

  it('can contain unknown words', function(done) {
    words.add("hi");
    words.splitSentence();
    expect(words.sadCounter).to.eql(0);
    expect(words.happyCounter).to.eql(0);
    done();
  });

  it('can have an overall count of happiness', function(done) {
    words.add("glad glad sad");
    expect(words.getResult()).to.eql("happy.");
    done();
  });

  it('can have an overall count of sadness', function(done) {
    words.add("glad sad sad");
    expect(words.getResult()).to.eql("sad.");
    done();
  });

  it('can have an overall count of unknown', function(done) {
    words.add("glad glad sad sad");
    expect(words.getResult()).to.eql("unknown.");
    done();
  });
});