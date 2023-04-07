function validateForm()
{
    let name = ????; //string variable for holding/storing name entered.
    let userName = ????; //string variable for holding/storing username entered.
    let password = ????; //string variable for holding/storing password entered.
    let age = ????; //string variable for holding/storing age entered.
    let bio = ????; //string variable for holding/storing short bio entered.
    let firstLetterOfName = ????; //string variable for holding/storing frist letter of name entered.
    let validationIsSuccessful = ????; //boolean variable for holding/storing the intial value of true, which will change
                                       //to false when the form validation fails.
    let outputResult = ????; //string variable for holding/storing the entire messages displayed to the form user.

    /*
    if name, username, password, age, short bio, first letter Of name and/or length of username or password entered is invalid.
    {
        Add appropriate error notification to the string stored/held in the outputResult variable.
        set the value of the boolean variable validationIsSuccessful to false.
    }
    */

    /*
    if all the data that the user entered is valid.
    {*/
        let genderCode = ????; //this string variable holds the gender code used in the form.
        let likeDogCertify = ????; //this boolean variable holds the value of true or false, depending
                                   //on whether the "I certify that I like dogs" checkbox is checked or not.
        let gender; //this is a string variable that stores/holds any of the four gender choices.
        /*
        (1.) Use a multi-block if statement here to determine which of the following gender values/strings the
        gender variable should store/hold, depending on what the gender code used in the form is:
        - "Male"
        - "Female"
        - "Other"
        - "Prefer not to say"
        
        (2.) Add appropriate notification, for the form user, to the string stored/held in the outputResult variable.
             (Hint: This notification provides the user with all the valid data that they entered into the form.)

        if the "I certify that I like dogs" check box is checked
        {*/
            let favoriteDogDreedCode = ????; //this string variable holds the favorite dog breed code used in the form.
            let favoriteDogDreed; //this is a string variable that stores/holds any of the six favorite dog breed choices.
            /*
            (3.) Use a multi-block if statement here to determine which of the following favorite dog breed values/strings the
            favoriteDogDreed variable should store/hold, depending on what the favoriteDogDreed code used in the form is:
            - "I did not say I like dogs"
            - "Labrador"
            - "Golden Retreiver"
            - "Corgi"
            - "Chihuahua"
            - "Other"
            
            (4.) Add appropriate notification, for the form user, to the string stored/held in the outputResult variable.
                 (Hint: This notification provides the user with all the valid favorite dog breed data that they entered into the form.)
        }
    }*/
    
    let outputContainer = ????; //variable that holds/stores the object that represents the output or results container element.
    /*
    (5.) Assign the string value of outputResult variable to the innerHTML property or variable of the outputContainer object.

    if all the data that the user entered is invalid.
    {
        Change the color of the text contents of the results container element to red.
    }*/
}

function selectFavoriteDogBreed()
{/*
    if the "I certify that I like dogs" check box is checked
    {
        (6.) Enable the drop down list on the form.
    }
    else
    {
        (7.) Set the value of the dropdown list to "I did not say I like dogs".
        (8.) Disable the drop down list on the form.

        Step 7 means that, when the user unchecks this check box, the user has effectively selected the "I did not say I like dogs" choice.
        Step 8 prevents the user from choosing any of the favorite dog breeds after they have unchecked this check box. 
    }*/
}


//Add an event listener to the selectFavoriteDogBreed() function.