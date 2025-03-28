function redirect(){
    var selectTime = document.getElementById("SelectTime").value;
    if (selectTime){
        localStorage.setItem("selectedTime",selectTime);
    }
    window.location.href ="page2.html"
}

function redirect2(){
    var fName = document.getElementById("name").value;
    var lName = document.getElementById("surname").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;

    if (fName || lName || email ||phone){
        localStorage.setItem("FirstName",fName);
        localStorage.setItem("LastName",lName);
        localStorage.setItem("email",email);
        localStorage.setItem("phone",phone);
    }
    window.location.href ="getResults.html"
}