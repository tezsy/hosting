$(document).ready(function () {
	var max_fields = 9;
	var wrapper = $(".container1");
	var wrapper2 = $(".container2");
	var wrapper3 = $(".container3");
	var wrapper4 = $(".container4");
	var wrapper5 = $(".container5");
	var wrapper6 = $(".container6");
	var wrapper7 = $(".container7");
	var wrapper8 = $(".container8");

	var add_button = $(".add_form_field");
	var add_button2 = $(".add_form_field2");
	var add_button3 = $(".add_form_field3");
	var add_button4 = $(".add_form_field4");
	var add_button5 = $(".add_form_field5");
	var add_button6 = $(".add_form_field6");
	var add_button7 = $(".add_form_field7");
	var add_button8 = $(".add_form_field8");

	var x = 1;
	$(add_button).click(function (e) {
		e.preventDefault();
		if (x < 9) {
			x++;
			$(wrapper).append(
				`  <div class="email">
              <label for="">Year</label>
              <input type="text" name="eduYear${x}">
              <label for="">Title Name</label>
              <input type="text" name="eduTitle${x}">
              <label for="">Institution/School Name</label>
              <input type="text" name="eduPlace${x}">
              <label for="">Details</label>
              <input type="text" name="eduNotes${x}"> <br><a href="#" class="delete">Delete</a><hr></div>`
			); //add input box
		}
	});

	var x2 = 1;
	$(add_button2).click(function (e) {
		e.preventDefault();
		if (x2 < max_fields) {
			x2++;
			$(wrapper2).append(
				`<div class="email">
				<label for="">Skill name</label>
				<input type="text" name="skillName${x2}">
				<label for="">Skill Level (1-100)</label>
				<input type="text" name="skillValue${x2}">
			<br><a href="#" class="delete">Delete</a><hr></div>`
			); //add input box
		} else {
			alert("You Reached the limits");
		}
	});

	var x3 = 1;
	$(add_button3).click(function (e) {
		e.preventDefault();
		if (x3 < 4) {
			x3++;
			$(wrapper3).append(
				` <div class="email"><hr>
				<label for="">Year</label>
				<input type="number" name="expYear${x3}">
				<label for="">Title</label>
				<input type="text" name="expTitle${x3}">
				<label for="">Company Names/ Place</label>
				<input type="text" name="expPlace${x3}">
				<label for="">Details</label>
				<input type="text" name="expDetails${x3}">
			<br><a href="#" class="delete">Delete</a></div>`
			); //add input box
		} else {
			alert("You Reached the limits");
		}
	});

	var x4 = 1;
	$(add_button4).click(function (e) {
		e.preventDefault();
		if (x4 < 7) {
			x4++;
			$(wrapper4).append(
				` <div class="email"><hr>
				<label for="">Language</label>
				<input type="text" name="langName${x4}">
				<label for="">Language level (1-100)</label>
				<input type="text" name="langLevel${x4}">
			<br><a href="#" class="delete">Delete</a></div>`
			); //add input box
		} else {
			alert("You Reached the limits");
		}
	});

	var x5 = 1;
	$(add_button5).click(function (e) {
		e.preventDefault();
		if (x5 < 4) {
			x5++;
			$(wrapper5).append(
				`            <div class="email"><hr>
				<input type="text" name="portName${x5}">
				<label for="">Link</label>
				<input type="text" name="portDetail${x5}">
				<label for="">Details</label>
				<input type="text" name="portRef${x5}">
			<br><a href="#" class="delete">Delete</a></div>`
			); //add input box
		} else {
			alert("You Reached the limits");
		}
	});

	var x6 = 1;
	$(add_button6).click(function (e) {
		e.preventDefault();
		if (x6 < 5) {
			x6++;
			$(wrapper6).append(
				`<div class="email"><hr>
				<label for="">Year</label>
				<input type="text" name="awardYear${x6}">
				<label for="">Name</label>
				<input type="text" name="awardName${x6}">
				<label for="">Details</label>
				<input type="text" name="awardDetail${x6}">
				<br><a href="#" class="delete">Delete</a></div>`
			); //add input box
		} else {
			alert("You Reached the limits");
		}
	});

	var x7 = 1;
	$(add_button7).click(function (e) {
		e.preventDefault();
		if (x7 < 3) {
			x7++;
			$(wrapper7).append(
				`   <div class="email"><hr>
				<label for="">Hobby</label>
				<input type="text" name="hobby${x7}">
			<br><a href="#" class="delete">Delete</a></div>`
			); //add input box
		} else {
			alert("You Reached the limits");
		}
	});

	var x8 = 1;
	$(add_button8).click(function (e) {
		e.preventDefault();
		if (x8 < 3) {
			x8++;
			$(wrapper8).append(
				`  <div class="email"><hr>
				<label for="">Name</label>
				<input type="text" name="refName${x8}">
				<label for="">Title</label>
				<input type="text" name="refTitle${x8}">
				<label for="">Phone Number</label>
				<input type="text" name="refPhone${x8}">
				<label for="">Email</label>
				<input type="text" name="refEmail${x8}">
				<label for="">Relationship</label>
				<input type="text" name="refDetail${x8}">
			<br><a href="#" class="delete">Delete</a></div>`
			); //add input box
		} else {
			alert("You Reached the limits");
		}
	});

	$(wrapper).on("click", ".delete", function (e) {
		e.preventDefault();
		$(this).parent("div").remove();
		x--;
	});
	$(wrapper2).on("click", ".delete", function (e) {
		e.preventDefault();
		$(this).parent("div").remove();
		x2--;
	});
	$(wrapper3).on("click", ".delete", function (e) {
		e.preventDefault();
		$(this).parent("div").remove();
		x3--;
	});
	$(wrapper4).on("click", ".delete", function (e) {
		e.preventDefault();
		$(this).parent("div").remove();
		x4--;
	});

	$(wrapper5).on("click", ".delete", function (e) {
		e.preventDefault();
		$(this).parent("div").remove();
		x5--;
	});

	$(wrapper6).on("click", ".delete", function (e) {
		e.preventDefault();
		$(this).parent("div").remove();
		x6--;
	});

	$(wrapper7).on("click", ".delete", function (e) {
		e.preventDefault();
		$(this).parent("div").remove();
		x5--;
	});

	$(wrapper8).on("click", ".delete", function (e) {
		e.preventDefault();
		$(this).parent("div").remove();
		x5--;
	});

	$(".textBox1").on("change", function () {
		$(".textBox2").val($(this).val());
	});
	$(".textBox3").on("change", function () {
		$(".textBox4").val($(this).val());
	});
});

function mf(test) {
	var x = document.getElementById(test);
	if (x.style.display === "none") {
		x.style.display = "block";
	} else {
		x.style.display = "none";
	}
}
