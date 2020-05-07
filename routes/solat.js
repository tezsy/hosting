const express = require("express");
const router = express.Router();
const fetch = require("node-fetch");
const Solat = require("../models/solat");

router.get("/", async (req, res) => {
	const today = await getCurrentDay();
	const solat = await Solat.find({ date: today });
	if (solat.length == 0) {
		await fetch(
			"https://api.azanpro.com/times/today.json?zone=KTN01&format=24-hour"
		)
			.then((res) => res.json())
			.then((data) => {
				saveToDB(data).then(() => console.log("dah simpan"));
			});
	}
	res.render("solat/home", { solat });
});

router.get("/statistics", async (req, res) => {
	const solat = await Solat.find().limit(100);
	let subuh = 0.0;
	let zohor = 0.0;
	let asar = 0.0;
	let maghrib = 0.0;
	let isyak = 0.0;
	const total = solat.length;
	const today = await getCurrentDay();
	let daily = 0.0;
	const time = await getCurrentTime();

	solat.forEach((element) => {
		subuh = subuh + parseFloat(element.doneSubuh);
		zohor = zohor + parseFloat(element.doneZohor);
		asar = asar + parseFloat(element.doneAsar);
		maghrib = maghrib + parseFloat(element.doneMaghrib);
		isyak = isyak + parseFloat(element.doneIsyak);
	});
	const hundredDays = [
		subuh / total,
		zohor / total,
		asar / total,
		isyak / total,
		maghrib / total,
	];

	function getSolat(s) {
		if (time > s.subuh && time < s.syuruk) {
			return 1;
		} else if (time > s.zohor && time < s.asar) {
			return 2;
		} else if (time > s.asar && time < s.maghrib) {
			return 3;
		} else if (time > s.maghrib && time < s.isyak) {
			return 4;
		} else if (time > s.isyak && time < "23:59") {
			return 5;
		} else {
			return 0;
		}
	}
	solat.forEach((s) => {
		if (s.date == today) {
			const now = getSolat(s);
			daily =
				(s.doneZohor + s.doneAsar + s.doneMaghrib + s.doneSubuh + s.doneIsyak) /
				now;
		}
	});

	res.render("solat/statistics", { hundredDays, daily });
});

router.post("/", async (req, res) => {
	const today = await getCurrentDay();
	const solat = await Solat.find({ date: today });
	const time = await getCurrentTime();

	console.log(time);

	let gap = undefined;
	const s = solat[0];

	if (time > s.subuh && time < s.syuruk) {
		gap = getScore(time, s.syuruk, s.subuh);
		if (!s.doneSubuh) {
			s.doneSubuh = (Math.round(gap * 100) / 100).toFixed(5);
			const logger = await s.save();
			console.log(logger);
		}
	} else if (time > s.zohor && time < s.asar) {
		gap = getScore(time, s.asar, s.zohor);
		if (!s.doneZohor) {
			s.doneZohor = (Math.round(gap * 100) / 100).toFixed(5);
			const logger = await s.save();
			console.log(logger);
		}
	} else if (time > s.asar && time < s.maghrib) {
		gap = getScore(time, s.maghrib, s.asar);
		if (!s.doneAsar) {
			s.doneAsar = (Math.round(gap * 100) / 100).toFixed(5);
			const logger = await s.save();
			console.log(logger);
		}
	} else if (time > s.maghrib && time < s.isyak) {
		gap = getScore(time, s.isyak, s.maghrib);
		if (!s.doneMaghrib) {
			s.doneMaghrib = (Math.round(gap * 100) / 100).toFixed(5);
			const logger = await s.save();
			console.log(logger);
		}
	} else if (time > s.isyak && time < "23:59") {
		gap = getScore(time, "23:59", s.isyak);
		if (!s.doneIsyak) {
			s.doneIsyak = (Math.round(gap * 100) / 100).toFixed(5);
			const logger = await s.save();
			console.log(logger);
		}
	} else {
		gap = 0;
		console.log("Item has been marked");
	}
	res.redirect("solat/statistics");
});

function getScore(timeNow, solatEnd, solatStart) {
	const timeLimit =
		(parseInt(solatEnd.substring(0, 2)) -
			parseInt(solatStart.substring(0, 2))) *
			60 +
		(parseInt(solatEnd.substring(3, 5)) - parseInt(solatStart.substring(3, 5)));

	const timeTaken =
		(parseInt(solatEnd.substring(0, 2)) - parseInt(timeNow.substring(0, 2))) *
			60 +
		parseInt(solatEnd.substring(3, 5)) -
		parseInt(timeNow.substring(3, 5));
	if (timeTaken > timeLimit - 15) {
		return 100;
	} else {
		return (timeTaken / (timeLimit - 15)) * 100;
	}
}

async function saveToDB(data) {
	masukWaktu = data.prayer_times;
	const solat = new Solat({
		date: data.start,
		subuh: masukWaktu.subuh,
		syuruk: masukWaktu.syuruk,
		zohor: masukWaktu.zohor,
		asar: masukWaktu.asar,
		maghrib: masukWaktu.maghrib,
		isyak: masukWaktu.isyak,
	});
	await solat.save().then(() => console.log("saved to db"));
}

function getCurrentTime() {
	return new Promise((resolve) => {
		fetch("http://worldtimeapi.org/api/timezone/Asia/Kuala_Lumpur")
			.then((res) => res.json())
			.then((data) => {
				utc = data.datetime.slice(11, 16);
				let hrs = utc.substring(0, 2);
				let min = utc.substring(3, 5);

				resolve(hrs + ":" + min);
			});
	});
}

function getCurrentDay() {
	return new Promise((resolve) => {
		fetch("http://worldtimeapi.org/api/timezone/Asia/Kuala_Lumpur")
			.then((res) => res.json())
			.then((data) => {
				utc = data.datetime.slice(0, 10);
				let yyyy = utc.substring(0, 4);
				let mm = utc.substring(5, 7);
				let dd = utc.substring(8, 10);
				resolve(dd + "-" + mm + "-" + yyyy);
			});
	});
}
module.exports = router;
