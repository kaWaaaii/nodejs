const mother = require('./mother')
const father = require('./father')
const children = require('./children')

const makeFamily = () => `Мать: ${mother.name}, Отец: ${father.name}, Дети: ${children}`

module.exports = makeFamily();