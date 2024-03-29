function Words() {

  this.happyWords = ["delight", "delighted", "delightful", "happy", "glad", "joy", "joyful", "merry", "pleasant"];
  this.sadWords = ["disappointed", "miserable", "sad", "sorrow", "unhappy"];
  this.sentence = "";
  this.sadCounter = 0;
  this.happyCounter = 0;
  
}

  Words.prototype.add = function(sentence) {
    this.sentence = sentence;
    this.sadCounter = 0;
    this.happyCounter = 0;
  };

  Words.prototype.splitSentence = function() {
    var sentence = (this.sentence).replace(/[^a-zA-Z0-9]/g, " ").toLowerCase().split(" ");
    for (var i = 0; i < +sentence.length; i ++) {
      if (this.happyWords.indexOf(sentence[i]) > -1) {
        this.happyCounter ++;
      }
      else if (this.sadWords.indexOf(sentence[i]) > -1) {
        this.sadCounter ++;
      }
    }
    return sentence;
  };

  Words.prototype.getResult = function() {
    this.splitSentence();
    if (this.happyCounter === 0 && this.sadCounter === 0) {
      return "unknown";
    }
    else if (this.happyCounter >= this.sadCounter * 1.5) {
      return "happy.";
    }
    else if (this.sadCounter  >= this.happyCounter * 1.5) {
      return "sad.";
    }
    else {
      return "unknown.";
    }
  };

module.exports = Words;