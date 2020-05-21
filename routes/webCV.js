const express = require("express");
const router = express.Router();
const WebCV = require("../models/webCV");

router.get("/:orderId/:templateName", async (req, res) => {
	const webCV = await WebCV.find({ orderId: req.params.orderId });
	if (webCV.length == 0) {
		//send form
		res.render("webCV/newForm");
	} else {
		// res.render("xdk lsgi jadi bagi form kosong");
		res.send("redirect ke update page");
		//redirect update page with data
	}
});

router.get("/", async (req, res) => {
	res.render("homeWebCV");
});

// router.get("/:name", async (req, res) => {
// 	const zikir = await Zikir.find({ name: req.params.name });
// 	if (zikir.length == 0) {
// 		const nzikir = new Zikir({
// 			name: req.params.name,
// 		});

// 		try {
// 			const result = await nzikir.save();
// 			console.log(result);
// 		} catch (error) {
// 			console.log(error.errors);
// 		}
// 	}
// 	res.render("zikir/auth", { name: req.params.name, error: false });
// });

// router.post("/:name", async (req, res) => {
// 	const zikir = await Zikir.find({ name: req.params.name });
// 	console.log(zikir);

// 	if (req.body.password == zikir[0].password) {
// 		res.redirect("/zikir/" + req.params.name + "/counter");
// 	} else {
// 		res.render("zikir/auth", {
// 			name: req.params.name,
// 			error: "wrong password",
// 		});
// 	}
// });

// router.get("/:name/counter", (req, res) => {
// 	res.render("zikir/counter", { name: req.params.name });
// });

// router.get("/:name/counter/manual", (req, res) => {
// 	res.render("zikir/manual", { name: req.params.name });
// });

// router.get("/:name/data", async (req, res) => {
// 	const zikir = await Zikir.find({ name: req.params.name }).limit(50);
// 	console.log(zikir[0].data.reverse());
// 	res.render("zikir/data", { data: zikir[0].data.reverse() });
// });

// router.post("/:name/counter", async (req, res) => {
// 	const zikir = await Zikir.find({ name: req.params.name });
// 	console.log(zikir);
// 	var today = new Date();
// 	console.log(today);

// 	var dd = String(today.getDate()).padStart(2, "0");
// 	var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
// 	var yyyy = today.getFullYear();
// 	today = dd + "/" + mm + "/" + yyyy;
// 	var holder = 0;
// 	zikir[0].data.forEach((element) => {
// 		if (element.date === today) {
// 			run();
// 			async function run() {
// 				element.zikirDone =
// 					parseInt(element.zikirDone) + parseInt(req.body.data);
// 				const result = await zikir[0].save();
// 				console.log(result);
// 				res.status(200).redirect("/zikir/" + req.params.name + "/counter");
// 			}
// 		} else {
// 			holder++;
// 		}
// 	});

// 	if (holder === zikir[0].data.length) {
// 		newData = { date: today, zikirDone: req.body.data };
// 		zikir[0].data.push(newData);
// 		const result = await zikir[0].save();
// 		res.status(200).redirect("/zikir/" + req.params.name + "/counter");
// 	}
// });

// router.post("/:name/counter/manual", async (req, res) => {
// 	const zikir = await Zikir.find({ name: req.params.name });
// 	console.log(zikir);
// 	var today = new Date();
// 	console.log(today);

// 	var dd = String(today.getDate()).padStart(2, "0");
// 	var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
// 	var yyyy = today.getFullYear();
// 	today = dd + "/" + mm + "/" + yyyy;
// 	var holder = 0;
// 	zikir[0].data.forEach((element) => {
// 		if (element.date === today) {
// 			run();
// 			async function run() {
// 				element.zikirDone =
// 					parseInt(element.zikirDone) + parseInt(req.body.data);
// 				const result = await zikir[0].save();
// 				console.log(result);
// 				res.status(200).redirect("/zikir/" + req.params.name + "/counter");
// 			}
// 		} else {
// 			holder++;
// 		}
// 	});

// 	if (holder === zikir[0].data.length) {
// 		newData = { date: today, zikirDone: req.body.data };
// 		zikir[0].data.push(newData);
// 		const result = await zikir[0].save();
// 		console.log(result);
// 	}
// });

module.exports = router;
