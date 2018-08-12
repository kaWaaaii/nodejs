console.log(`Создание детей...`);
const sister = require('./sister')
const brother = require('./brother')

const children = `${brother.name + ' ' + sister.name}`

module.exports = children