const expect = require('chai').expect;
const elementHistories = require('../index.js');
const year = elementHistories.year;
const location = elementHistories.location;
const story = elementHistories.story;

describe('elementHistories', function() {
  describe('#year', function() {
    it('returns a string', function() {
      let discoveryYear = year('rhenium');
      expect(discoveryYear).to.be.a('string');
    });

    it('returns a valid year if known', function() {
      let discoveryYear = year('hafnium');
      expect(parseInt(discoveryYear)).to.not.be.a(NaN);
    });

    it('returns ancient where appropriate', function() {
      let discoveryYear = year('gold');
      expect(discoveryYear).to.equal('ancient');
    });

    it('is not case sensitive to element name', function() {
      let discoverYear1 = year('fLuOrInE');
      let discoverYear2 = year('FLUORINE');
      expect(discoverYear1).to.equal(discoverYear2);
    });
  });

  describe('#location', function() {
    it('returns an object', function() {
      let discoverLocation = location('berkelium');
      expect(discoverLocation).to.be.a('object');
    });
    // lat and lng used in Google Maps API
    it('returns an object with lat property', function() {
      let discoverLocation = location('xenon');
      expect(discoverLocation).to.include.keys('lat');
    });

    it('returns an object with lng property', function() {
      let discoverLocation = location('xenon');
      expect(discoverLocation).to.include.keys('lng');
    });

    it('is not case sensitive to element name', function() {
      let discoverLocation1 = location('fLuOrInE');
      let discoverLocation2 = location('FLUORINE');
      expect(discoverLocation1).to.equal(discoverLocation2);
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
