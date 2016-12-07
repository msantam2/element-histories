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
  });

  describe('#country', function() {
    it('returns an object', function() {
      let discoverCountry = country('berkelium');
      expect(discoverCountry).to.be.a('string');
    });

    it('is not case sensitive to element name', function() {
      let discoverCountry1 = country('fLuOrInE');
      let discoverCountry2 = country('FLUORINE');
      expect(discoverCountry1).to.equal(discoverCountry2);
    });
  });

  describe('#story', function() {
    it('returns a string with a brief story behind each element', function() {
      let discoverStory = story('polonium');
      expect(discoverStory).to.be.a('string');
    });

    it('is not case sensitive to element name', function() {
      let discoverStory1 = story('fLuOrInE');
      let discoverStory2 = story('FLUORINE');
      expect(discoverStory1).to.equal(discoverStory2);
    });
  });
});
