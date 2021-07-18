
var btn = document.getElementById("submit1");

//adding event listener on the click button//

btn.addEventListener("click", function () {
    var year = Number(document.getElementById("year").value);
    var month = Number(document.getElementById("month").value);
    var date = Number(document.getElementById("date").value);
    var gender = document.querySelector('input[name="gender"]:checked');

    //control structer//
    if (date <= 0 || date > 31) {
        alert("Enter valid date of birth");
    }
    else if (month <= 0 || month > 12) {
        alert("Enter valid month of birth");
    }
    else if (year <= 1900 || year > 2100) {
        alert("Enter valid year of birth");

    }
    else if (gender == null) {
        alert("Select your gender");
    }

    let boys = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"]
    let girls = [" Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"]
    let days = ["sunday", "monday", "teusday", "wednesday", "thursday", "friday", "saturday"]
    let fullBirthday = year + "-" + month + "-" + date;
    let dayvalue = new Date(fullBirthday);
    console.log(dayvalue);
    let dayOfTheWeek = dayvalue.getDay()
    console.log(dayOfTheWeek);
    
    //Getting the Akan Name//

    if (gender.value == "male") {
        alert(`Your Akan Name is ${boys[dayOfTheWeek]}. You were born on a ${days[dayOfTheWeek]} `)
    }
    else if (gender.value == "female") {
        alert(`Your Akan Name is ${girls[dayOfTheWeek]}. You were born on a ${days[dayOfTheWeek]} `)
    }
})


