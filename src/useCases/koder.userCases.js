

const Koder = require("../models/koder.model")

const create = (koderData) => {

    const koder = Koder.create(koderData)
    return koder
}

module.exports = {create}