var LOGGER = function() {}

LOGGER.prototype.info = function(message){
    console.log(message)
}

module.exports = new LOGGER();