

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
  
  //var db = firebase.firestore();

$( document ).ready(function() {
    console.log( "ready!" );


firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
   uid=user.id
   $('form').hide();
   var appender = $('#appender');
    var div = $('<div></div>').addClass('col s12  pink-text text-lighten-4 title center-align').text('Welcome back!').css('font-size','50px');
    appender.append(div);
   
  }
  
  });   
$('#submit').click(
    function(){logIn($('#email').val(), $('#password').val())})
    
$('#logout').click(
    function(){logOut();}
);

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