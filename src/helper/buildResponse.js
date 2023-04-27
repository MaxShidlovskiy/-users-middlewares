function buildResponse(res, data, number) {
    res.status(number).send(data);
};

module.exports = { buildResponse };