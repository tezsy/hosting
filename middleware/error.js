module.exports = function (err, req, res, next) {
	req.status(500).send("Something Failed");
};
