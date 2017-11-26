var uid="";
var config = {
    apiKey: "AIzaSyBXnTXNX2VHn-eodm5r6ABv6Buhrm06fKM",
    authDomain: "homeinventory-36de7.firebaseapp.com",
    databaseURL: "https://homeinventory-36de7.firebaseio.com",
    projectId: "homeinventory-36de7",
    storageBucket: "homeinventory-36de7.appspot.com",
    messagingSenderId: "139424858274"
  };
  firebase.initializeApp(config);
  
$(document).ready(function(){
    
    
    firebase.auth().onAuthStateChanged(function(user) {
     uid= user.uid;
    
    $('p').text('welcome, ' + uid);
    });
    
    
    $("#submit").click(function(){
        var em = $('#email').value;
var pw = $('#password').value
logIn(em,pw);
        $("form").hide();
    });
});


    
   
    





 
 function logIn(em,pw){
     firebase.auth().signInWithEmailAndPassword(em, pw).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
});
 }
 
 function logOut(){
       firebase.auth().signOut();
       console.log("signed out");
  }