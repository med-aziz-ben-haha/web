window.onscroll = function() {scrollFunction()};
    
    function scrollFunction() {
      if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
       $("#bar").css("height","90");
       $("#in_bar").css("margin-top","-4.9%");
      }
      else  { $("#bar").css("height","108");
      $("#in_bar").css("margin-top","-5.4%");

    }
    }


    // Get the modal
var modal = $("#signModal");
// Get the button that opens the modal
var btn = $("#signBtn");

// Get the <span> element that closes the modal
var span = $(".close")[0];

// When the user clicks the button, open the modal 
btn.click(function() {
  modal.css("display","block") ;
});

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.css("display","none") ;
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == document.getElementById("signModal"))
    modal.css("display","none") ;
  
}

function valid_name(word)
{
 if((/[0-9]/).test(word)) {
 alert("the name should only contain text ! ");
 return false;
 }
 return true;
}

function Valid_email(inputText)
{
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if(!inputText.match(mailformat)){
alert("You have entered an invalid email address!\na valid adress is blabla@example.xxx");
return false;}
return true;
}


function Valid_phone(inputText)
{
    if(inputText<9999999){
        alert("You have entered an invalid phone number !\nphone number contains 8 digits");
        return false;}
        return true;
}



var currentTab = 0; // Current tab is set to be the first tab (0)
showTab(currentTab); // Display the current tab

function showTab(n) {
  // This function will display the specified tab of the form...
  var x = document.getElementsByClassName("tab");
  x[n].style.display = "block";
  //... and fix the Previous/Next buttons:
  if (n == 0) {
    document.getElementById("prevBtn").style.display = "inline";
    document.getElementById("prevBtn").style.cursor = "not-allowed";
  } else {
    document.getElementById("prevBtn").style.display = "inline";
    document.getElementById("prevBtn").style.cursor = "pointer";

  }
  if (n == (x.length - 1)) {
    document.getElementById("nextBtn").innerHTML = "Submit";
  } else {
    document.getElementById("nextBtn").innerHTML = "Next";
  }
  //... and run a function that will display the correct step indicator:
  fixStepIndicator(n)
}

function nextPrev(n) {
  // This function will figure out which tab to display
  var x = document.getElementsByClassName("tab");
  // Exit the function if any field in the current tab is invalid:
  if (n == 1 && !validateForm()) return false;
  // Hide the current tab:
  x[currentTab].style.display = "none";
  // Increase or decrease the current tab by 1:
  currentTab = currentTab + n;
  // if you have reached the end of the form...
  if (currentTab >= x.length) {
    // ... the form gets submitted:
    document.getElementById("regForm").submit();
    return false;
  }
  // Otherwise, display the correct tab:
  showTab(currentTab);
}

function validateForm() {
  //  alert(currentTab)
  // This function deals with validation of the form fields
  var x, y, i, valid = true;
  x = document.getElementsByClassName("tab");
  y = x[currentTab].getElementsByTagName("input");
  
  // A loop that checks every input field in the current tab:
  for (i = 0; i < y.length; i++) {
    // If a field is empty...
    if (y[i].value == "" ) {
      // add an "invalid" class to the field:
      y[i].className += " invalid";
      // and set the current valid status to false
      valid = false;
    }
   
  }
  if (currentTab==0 && !valid_name(y[0].value))
    {
      y[0].className += " invalid";
      valid = false;
    } 
    if (currentTab==0 && !valid_name(y[1].value))
    {
      y[1].className += " invalid";
      valid = false;
    } 
    if (currentTab==1 && !Valid_email(y[0].value))
    {
      y[0].className += " invalid";
      valid = false;
    } 

    if (currentTab==1 && !Valid_phone(y[1].value))
    {
      y[1].className += " invalid";
      valid = false;
    } 
  
  
  // If the valid status is true, mark the step as finished and valid:
  if (valid) {
    document.getElementsByClassName("step")[currentTab].className += " finish";
  }
  return valid; // return the valid status
}

function fixStepIndicator(n) {
  // This function removes the "active" class of all steps...
  var i, x = document.getElementsByClassName("step");
  for (i = 0; i < x.length; i++) {
    x[i].className = x[i].className.replace(" active", "");
  }
  //... and adds the "active" class on the current step:
  x[n].className += " active";
}

