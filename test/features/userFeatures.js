var webdriverio = require("webdriverio");
var expect = require("chai").expect;

  var client = {};

  before(function(done) {
    client = webdriverio.remote({ desiredCapabilities : {browserName: 'chrome'} });
    client.init(done);
  });

  beforeEach(function(done) {
    client.url("http://localhost:3000/");
    client.windowHandleSize({width:1280,height:800});
    client.call(done);
  });

  after(function(done) {
    client.end(done);
  });

  describe("User can", function() {
    this.timeout(99999999);

    it("see the page has a title", function(done) {
      client
          .getTitle(function(err, text) {
            expect(text).to.eql("Finding Happiness");
          })  
        .call(done);
    });

    it("see the page has a logo", function(done) {
      client
        .getText(".finding", function(err, text) {
          expect(text).to.eql("Finding");
        })
        .getText(".smallcaps", function(err, text) {
          expect(text).to.eql("HAPPINESS");
        })
        .call(done);
    });

    it("see the page has a footer", function(done) {
      client
        .getText("#down", function(err, text) {
          expect(text).to.eql("Copyright © Hannah Carney 2015");
        })
        .call(done);
    });

    it("fill in form", function(done) {
      client
        .setValue("#sentence", "hi there")
        .click("#submit") 
        .getText("#sentence-again", function(err, text) {
          expect(text).to.eql("hi there");
        })
        .call(done);
    });

    it("get their results", function(done) {
      client
        .setValue("#sentence", "I'm happy!")
        .click("#submit") 
        .getText("#results", function(err, text) {
          expect(text).to.eql("Your sentence is happy.");
        })
        .call(done);
    });

    it("try again", function(done) {
      client
        .click("#submit") 
        .click("#again")
        .setValue("#sentence", "I'm sad!")
        .click("#submit") 
        .getText("#results", function(err, text) {
          expect(text).to.eql("Your sentence is sad.");
        })
        .call(done);
    });
  });