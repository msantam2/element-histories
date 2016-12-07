let elementInfo = require('./element-info.js');

module.exports = {
  image: elementName => {
    return elementInfo[elementName.toLowerCase()]['image'];
  },
  country: elementName => {
    return elementInfo[elementName.toLowerCase()]['country'];
  },
  story: elementName => {
    return elementInfo[elementName.toLowerCase()]['story'];
  }
}
