window.onload = function(){
    displayInfo();
    
    setTimeout(function() {
        localStorage.clear();

   }, 3500 ); 
}

function displayInfo(){
    var time = localStorage.getItem("selectedTime");
    var name = localStorage.getItem("FirstName");
    var surname = localStorage.getItem("LastName");
    var email = localStorage.getItem("email");
    var phone = localStorage.getItem("phone");
    var result = document.querySelector(".results");

    if (time || name || surname || email || phone ){
        result.innerHTML= `
        <p><strong>Selected Time : </strong> ${time} </p>
        <p><strong>First Name : </strong> ${name} </p>
        <p><strong>Last Name : </strong> ${surname} </p>
        <p><strong>Email : </strong> ${email} </p>
        <p><strong>Phone : </strong> ${phone} </p>
        `;
    }
    
}