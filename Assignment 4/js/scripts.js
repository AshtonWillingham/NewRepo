function validateForm() {
    

    let name = document.getElementById("name").value;
    let userName = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let age = document.getElementById("age").value;
    let bio = document.getElementById("bio").value;
    let firstLetterOfName = name.charAt(0);
    let validationIsSuccessful = true;
    let outputResult = document.getElementById("output");
  
    if (name === "" || userName === "" || password === "" || age === "" || bio === "") {
      outputResult.innerText = "Please fill out all fields.\n";
      validationIsSuccessful = false;
    }
  
    if (userName.length < 5 || userName.length > 12) {
      outputResult += "Username must be between 6 and 12 characters long.\n";
      validationIsSuccessful = false;
    }
  
    if (password.length < 6 || password.length > 16) {
      outputResult += "Password must be between 8 and 16 characters long.\n";
      validationIsSuccessful = false;
    }
  
    if (isNaN(age) || age < 0 || age > 120) {
      outputResult += "Age must be a snumber between 18 and 120.\n";
      validationIsSuccessful = false;
    }
  
    if (validationIsSuccessful) {
      let genderCode = document.querySelector('input[name="genders"]:checked').value;
      let likeDogCertify = document.getElementById("udogs").checked;
      let gender;
  
      if (genderCode === "xy") {
        gender = "Male";
      } else if (genderCode === "xx") {
        gender = "Female";
      } else if (genderCode === "oth") {
        gender = "Other";
      } else if (genderCode === "pns") {
        gender = "Prefer not to say";
      }
  
      outputResult.innerText= `Name: ${name}\nUsername: ${userName}\nPassword: ${password}\nAge: ${age}\nShort Bio: ${bio}\nFirst Letter of Name: ${firstLetterOfName}\nGender: ${gender}\n`;
    

      if (likeDogCertify) {
        let favoriteDogDreedCode = document.getElementById("topdog").value;
        let favoriteDogDreed;
  
        if (favoriteDogDreedCode === "0") {
          favoriteDogDreed = "I did not say I like dogs";
        } else if (favoriteDogDreedCode === "1") {
          favoriteDogDreed = "Labrador";
        } else if (favoriteDogDreedCode === "2") {
          favoriteDogDreed = "Golden Retriever";
        } else if (favoriteDogDreedCode === "3") {
          favoriteDogDreed = "Corgi";
        } else if (favoriteDogDreedCode === "4") {
          favoriteDogDreed = "Chihuahua";
        } else if (favoriteDogDreedCode === "5") {
          favoriteDogDreed = "Other";
        }
  
        outputResult += `Favorite Dog Breed: ${favoriteDogDreed}\n`;
    }
}

  
    let outputContainer = document.getElementById("output");
    outputContainer.innerHTML = outputResult;
  
    if (!validationIsSuccessful) {
      outputContainer.style.color = "red";
    }

  function selectFavoriteDogBreed() {
    let checkBox = document.getElementById("udogs");
    let selectList = document.getElementById("topdog");
    if (checkBox.checked == true) {
        selectList.disabled = false;
    } else {
        selectList.value = "did-not-say";
        selectList.disabled = true;
    }
    }

    document.addEventListener("DOMContentLoaded", function() {
    let selectList = document.getElementById("topdog");
    selectList.disabled = true;
    let checkBox = document.getElementById("udogs");
    checkBox.addEventListener("change", selectFavoriteDogBreed);
    });


  
}