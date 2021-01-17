const manners = require('./lib/manner')

function random() {
    const mannersArray = manners.map(manner => {
        return manner
    })
    return mannersArray
}

module.exports = random;