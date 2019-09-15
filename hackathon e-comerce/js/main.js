function myBold() {
    document.getElementById("Mytext").style.fontWeight = "bold";
    }
    function myPX() {
    var val= document.getElementById("selectPX").value;
    document.getElementById("Mytext").style.fontSize= val;
    }
    function myFontFamily() {
    var val= document.getElementById("selectFont").value;
    document.getElementById("Mytext").style.fontFamily= val;
    }
    
    function myItalic() {
    document.getElementById("Mytext").style.fontStyle = "italic";
    }
    function myUnderline() {
    document.getElementById("Mytext").style.textDecoration = "underline";
    }
    
function checkAlpha(champ)
{
    champ.value=champ.value.replace(/[^a-z]$/,'');
}

function checkNum(champ)
{
    champ.value=champ.value.replace(/[^1-9]$/,'');
}



// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyC6DewM2nxOa7fHCrvKaOG7-_L69Juq-UM",
    authDomain: "checkpointgmc.firebaseapp.com",
    databaseURL: "https://checkpointgmc.firebaseio.com",
    projectId: "checkpointgmc",
    storageBucket: "",
    messagingSenderId: "533445424708",
    appId: "1:533445424708:web:1fb5b53114e242e3"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


  var messageRef= firebase.database().ref('myDatabase');

  function submitform(e)
  {
  
    var name= document.getElementById('name').value;
    var email= document.getElementById('courriel').value;
    var phone= document.getElementById('phoneNumber').value;
    var msg=document.getElementById('Mytext');
    saveMessage(name,email,phone,msg);
  }

  document.getElementById('contactForm').addEventListener('submit',submitform);

  function saveMessage(name,email,phone,msg)
  {
      var newMessageRef= messageRef.push();
      newMessageRef.set({
          name: name,
          email: email,
          phone:phone,
          msg: msg
      })
  }