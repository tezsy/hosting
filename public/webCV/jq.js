$(document).ready(function () {
	var max_fields = 10;
	var wrapper = $(".container1");
	var wrapper2 = $(".container2");
	var wrapper3 = $(".container3");
	var wrapper4 = $(".container4");

	var add_button = $(".add_form_field");
	var add_button2 = $(".add_form_field2");
	var add_button3 = $(".add_form_field3");
	var add_button4 = $(".add_form_field4");

	var x = 1;
	$(add_button).click(function (e) {
		e.preventDefault();
		if (x < max_fields) {
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
              <input type="text" name="eduNotes${x}"> <a href="#" class="delete">Delete</a><hr></div>`
			); //add input box
		} else {
			alert("You Reached the limits");
		}
	});

	var x2 = 1;
	$(add_button2).click(function (e) {
		e.preventDefault();
		if (x2 < max_fields) {
			x2++;
			$(wrapper2).append(
				`<div>    <label style="visibility: hidden;" for="" >Skill</label>
        <input type="text" name="skillName${x2}">
        <input type="text" name="skillValue${x2}"><a href="#" class="delete">Delete</a></div>`
			); //add input box
		} else {
			alert("You Reached the limits");
		}
	});

	var x3 = 1;
	$(add_button3).click(function (e) {
		e.preventDefault();
		if (x3 < max_fields) {
			x3++;
			$(wrapper3).append(
				` <div> <label style="visibility: hidden;"  for="">Skill</label>
        <input type="text" name="expYear${x3}">
        <input type="text" name="expTitle1${x3}">
        <input type="text" name="expPlace1${x3}">
        <input type="text" name="expDetails1${x3}"><a href="#" class="delete">Delete</a></div>`
			); //add input box
		} else {
			alert("You Reached the limits");
		}
	});

	var x4 = 1;
	$(add_button4).click(function (e) {
		e.preventDefault();
		if (x4 < max_fields) {
			x4++;
			$(wrapper4).append(
				` <div>  <label for="">Lang</label>
        <input type="text" name="langName${x4}">
        <input type="text" name="langLevel${x4}"><a href="#" class="delete">Delete</a></div>`
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
		x--;
	});
	$(wrapper3).on("click", ".delete", function (e) {
		e.preventDefault();
		$(this).parent("div").remove();
		x--;
	});
	$(wrapper4).on("click", ".delete", function (e) {
		e.preventDefault();
		$(this).parent("div").remove();
		x--;
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
