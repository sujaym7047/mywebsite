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

function accessLink(){
    const code = (document.getElementById("accessCode") || {}).value || "";
    if(!/^\d{4}$/.test(code)){
        alert("Please enter a valid 4-digit code.");
        return;
    }

    // TODO: Change this to the expected code.
    const expectedCode = "1234";
    if(code === expectedCode){
        window.open("https://sbm.gov.in/SBM_DBT/Secure/DBT/DBT_Registration.aspx", "_blank");
    } else {
        alert("Invalid code. Please try again.");
    }
}

const paymentForm = document.querySelector("form");
if(paymentForm){
    paymentForm.addEventListener("submit",function(e){
        let name = document.getElementById("name").value;
        let mobile = document.getElementById("mobile").value;

        if(mobile.length != 10){
            alert("Please enter valid 10 digit mobile number");
            e.preventDefault();
        }
    });
}
const expectedCode = "1234";