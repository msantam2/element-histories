const expect = require('chai').expect;
const elementHistories = require('../index.js');
const image = elementHistories.image;
const country = elementHistories.country;
const story = elementHistories.story;

describe('elementHistories', function() {
  describe('#image', function() {
    it('returns a string', function () {
      let elementImageLink = image('silver');
      expect(elementImageLink).to.be.a('string');
    });

    it('returns a URL link', function() {
      let elementImageLink = image('fermium');
      expect(elementImageLink).to.match(/^http/);
    });

    it('is not case sensitive to element name', function() {
      let elementImageLink1 = image('fLuOrInE');
      let elementImageLink2 = image('FLUORINE');
      expect(elementImageLink1).to.equal(elementImageLink2);
    });
  });

  describe('#country', function() {
    it('returns a string', function() {
      let discoveryCountry = country('berkelium');
      expect(discoveryCountry).to.be.a('string');
    });

    it('is not case sensitive to element name', function() {
      let discoveryCountry1 = country('fLuOrInE');
      let discoveryCountry2 = country('FLUORINE');
      expect(discoveryCountry1).to.equal(discoveryCountry2);
    });
  });

  describe('#story', function() {
    it('returns a string with a brief story behind each element', function() {
      let discoveryStory = story('polonium');
      expect(discoveryStory).to.be.a('string');
    });

    it('is not case sensitive to element name', function() {
      let discoveryStory1 = story('fLuOrInE');
      let discoveryStory2 = story('FLUORINE');
      expect(discoveryStory1).to.equal(discoveryStory2);
    });
  });
});
