function showQR(){

let name = document.getElementById("name").value;
let mobile = document.getElementById("mobile").value;

if(name === "" || mobile === ""){
    alert("Please enter name and mobile number");
    return;
}

document.getElementById("qrcode").style.display = "block";

}

function paymentSuccess(){

alert("Payment Successful");

window.location.href="/success/";

}
document.querySelector("form").addEventListener("submit",function(e){

let name = document.getElementById("name").value;
let mobile = document.getElementById("mobile").value;

if(mobile.length != 10){
    alert("Please enter valid 10 digit mobile number");
    e.preventDefault();
}

});