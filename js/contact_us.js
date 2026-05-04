document.getElementById("contactForm").addEventListener("submit", function(e){
  e.preventDefault();
let fname = document.querySelector(".fname").value;
let lname = document.querySelector(".lname").value;
let email = document.querySelector(".email").value;
let phone = document.querySelector(".phone").value;
let message = document.getElementById("textarea").value; 
if (fname === "") {
  alert("Please enter your first name");
  return;
}
if (lname === "") {
  alert("Please enter your last name");
  return;
}
if (!email.includes("@")) {
alert("Please enter a valid email");
return;
}  
if (phone === "") {
  alert("Please enter your phone number");
  return;
}  
if (message.length < 10) {
  alert("Message must be at least 10 characters");
  return;
}
let contactData ={
  fname:fname,
  lname:lname,
  email:email,
  phone:phone,
  message:message
};
localStorage.setItem("contact_Form_Data",JSON.stringify(contactData));
  alert("Message sent successfully ");
  this.reset();
});

