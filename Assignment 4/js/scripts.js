function validateForm() {
	var name = document.getElementById("name").value;
	var outputResult = "";
	if (name == "") {
		outputResult = "Everything must be filled out";
		document.getElementById("output").innerText = outputResult;
		// alert("Name must be filled out");
		return false;
	}
}
