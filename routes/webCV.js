const express = require("express");
const router = express.Router();
const WebCV = require("../models/webCV");

router.get("/:orderId/:templateName", async (req, res) => {
	const webCV = await WebCV.find({ orderId: req.params.orderId });

	if (webCV.length == 0) {
		//send form
		res.render("webCV/newForm", {
			id: "/webCV/" + req.params.orderId + "/" + req.params.templateName,
		});
	} else {
		// res.render("xdk lsgi jadi bagi form kosong");
		res.render("webCV/updateForm", {
			data: webCV[0].data,
			id:
				"/webCV/" +
				req.params.orderId +
				"/" +
				req.params.templateName +
				"/update",
		});
		//redirect update page with data
	}
});

router.get("/", async (req, res) => {
	res.render("homeWebCV");
});

router.post("/:orderId/:templateName", async (req, res) => {
	const rawData = req.body;
	console.log(req.params);

	const data = {
		basic: {
			name: rawData.name,
			DOB: rawData.DOB,
			adress: rawData.adress,
			phone: rawData.phone,
			email: rawData.email,
		},
		educations: [
			{
				year: rawData.eduYear1,
				title: rawData.eduTitle1,
				place: rawData.eduPlace1,
				details: rawData.eduNotes1,
			},
		],
		skills: [
			{
				name: rawData.skillName1,
				value: rawData.skillValue1,
			},
			{
				name: rawData.skillName2,
				value: rawData.skillValue2,
			},
			{
				name: rawData.skillName3,
				value: rawData.skillValue3,
			},
			{
				name: rawData.skillName4,
				value: rawData.skillValue4,
			},
			{
				name: rawData.skillName5,
				value: rawData.skillValue5,
			},
			{
				name: rawData.skillName6,
				value: rawData.skillValue6,
			},
			{
				name: rawData.skillName7,
				value: rawData.skillValue7,
			},
			{
				name: rawData.skillName8,
				value: rawData.skillValue8,
			},
			{
				name: rawData.skillName9,
				value: rawData.skillValue9,
			},
		],
		contact: {
			email: rawData.email,
			phone: rawData.phone,
		},
		experiences: [
			{
				year: rawData.expYear1,
				title: rawData.expTitle1,
				place: rawData.expPlace1,
				details: rawData.expDetails1,
			},
			{
				year: rawData.expYear2,
				title: rawData.expTitle2,
				place: rawData.expPlace2,
				details: rawData.expDetails2,
			},
			{
				year: rawData.expYear3,
				title: rawData.expTitle3,
				place: rawData.expPlace3,
				details: rawData.expDetails3,
			},
			{
				year: rawData.expYear4,
				title: rawData.expTitle4,
				place: rawData.expPlace4,
				details: rawData.expDetails4,
			},
		],
		language: [
			{ language: rawData.langName1, level: rawData.langLevel1 },
			{ language: rawData.langName2, level: rawData.langLevel2 },
			{ language: rawData.langName3, level: rawData.langLevel3 },
			{ language: rawData.langName4, level: rawData.langLevel4 },
			{ language: rawData.langName5, level: rawData.langLevel5 },
			{ language: rawData.langName6, level: rawData.langLevel6 },
			{ language: rawData.langName7, level: rawData.langLevel7 },
		],
		portfolios: [
			{
				name: rawData.portName1,
				detail: rawData.portDetail1,
				ref: rawData.portRef1,
			},
			{
				name: rawData.portName2,
				detail: rawData.portDetail2,
				ref: rawData.portRef2,
			},
			{
				name: rawData.portName3,
				detail: rawData.portDetail3,
				ref: rawData.portRef3,
			},
			{
				name: rawData.portName4,
				detail: rawData.portDetail4,
				ref: rawData.portRef4,
			},
		],
		awards: [
			{
				year: rawData.awardYear1,
				name: rawData.awardName1,
				details: rawData.awardDetail1,
			},
			{
				year: rawData.awardYear2,
				name: rawData.awardName2,
				details: rawData.awardDetail2,
			},
			{
				year: rawData.awardYear3,
				name: rawData.awardName3,
				details: rawData.awardDetail3,
			},
			{
				year: rawData.awardYear4,
				name: rawData.awardName4,
				details: rawData.awardDetail4,
			},
			{
				year: rawData.awardYear5,
				name: rawData.awardName5,
				details: rawData.awardDetail5,
			},
		],
		social: {
			fb: rawData.fb,
			twitter: rawData.twitter,
			insta: rawData.insta,
		},
		hobbies: [
			{ hobby: rawData.hobby1 },
			{ hobby: rawData.hobby2 },
			{ hobby: rawData.hobby3 },
		],
		references: [
			{
				name: rawData.refName1,
				title: rawData.refTitle1,
				phone: rawData.refPhone1,
				email: rawData.refEmail1,
				details: rawData.refDetail1,
			},
			{
				name: rawData.refName2,
				title: rawData.refTitle2,
				phone: rawData.refPhone2,
				email: rawData.refEmail2,
				details: rawData.refDetail2,
			},
			{
				name: rawData.refName3,
				title: rawData.refTitle3,
				phone: rawData.refPhone3,
				email: rawData.refEmail3,
				details: rawData.refDetail3,
			},
		],
	};

	function check(params) {
		if (rawData.params) {
			return true;
		}
		return false;
	}

	if (rawData.eduYear2) {
		data.educations.push({
			year: rawData.eduYear2,
			title: rawData.eduTitle2,
			place: rawData.eduPlace2,
			details: rawData.eduNotes2,
		});
	}
	if (rawData.eduYear3) {
		data.educations.push({
			year: rawData.eduYear3,
			title: rawData.eduTitle3,
			place: rawData.eduPlace3,
			details: rawData.eduNotes3,
		});
	}
	if (rawData.eduYear4) {
		data.educations.push({
			year: rawData.eduYear4,
			title: rawData.eduTitle4,
			place: rawData.eduPlace4,
			details: rawData.eduNotes4,
		});
	}
	if (rawData.eduYear5) {
		data.educations.push({
			year: rawData.eduYear5,
			title: rawData.eduTitle5,
			place: rawData.eduPlace5,
			details: rawData.eduNotes5,
		});
	}
	if (rawData.eduYear6) {
		data.educations.push({
			year: rawData.eduYear6,
			title: rawData.eduTitle6,
			place: rawData.eduPlace6,
			details: rawData.eduNotes6,
		});
	}
	if (rawData.eduYear7) {
		data.educations.push({
			year: rawData.eduYear7,
			title: rawData.eduTitle7,
			place: rawData.eduPlace7,
			details: rawData.eduNotes7,
		});
	}
	if (rawData.eduYear8) {
		data.educations.push({
			year: rawData.eduYear8,
			title: rawData.eduTitle8,
			place: rawData.eduPlace8,
			details: rawData.eduNotes8,
		});
	}
	if (rawData.eduYear9) {
		data.educations.push({
			year: rawData.eduYear9,
			title: rawData.eduTitle9,
			place: rawData.eduPlace9,
			details: rawData.eduNotes9,
		});
	}
	const webCV = new WebCV({
		orderId: req.params.orderId,
		templateName: req.params.templateName,
		data: data,
	});
	await webCV
		.save()
		.then(() => console.log("saved to db"))
		.catch((err) => console.log("error masa save"));
	res.send("done");
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
