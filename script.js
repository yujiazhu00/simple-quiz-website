function validateForm() {
  var name = document.forms.myForm2.zname.value;
  if (name === "") {
    document.getElementById("error_name").innerHTML = "<p>*Please enter a name</p>";
  }
  else {
    document.getElementById("error_name").innerHTML = "";
    return true;
  }
}

function validateEmail() {
  var name = document.forms.myForm2.email.value;
  var length = name.length;
  var aLength = 0;
  var aAddress = 0;
  var dotLength = 0;
  var dotAddress = 0;
  for (var i =0;i<length;i++){
    if (name[i] == "@") {
    aLength += 1;
    aAddress = i;
    }
    if (name[i] == "."){
      dotLength += 1;
      dotAddress = i;
    }
  }
  if (aLength != 1){
    document.getElementById("error_email").innerHTML = "<p>*Please enter a valid email</p>";
  }
  else if (dotLength != 1){
    document.getElementById("error_email").innerHTML = "<p>*Please enter a valid email</p>";
  }
  else if (Math.abs(dotAddress-aAddress) == 1){
    document.getElementById("error_email").innerHTML = "<p>*Please enter a valid email</p>";
  }
  else if (dotAddress == 0){
    document.getElementById("error_email").innerHTML = "<p>*Please enter a valid email</p>";
  }
  else if (length == 0){
    document.getElementById("error_email").innerHTML = "<p>*Please enter a valid email</p>";
  }
  else if (aAddress == 0){
    document.getElementById("error_email").innerHTML = "<p>*Please enter a valid email</p>";
  }
  else if (Math.abs(length-dotAddress) == 2){
    document.getElementById("error_email").innerHTML = "<p>*Please enter a valid email</p>";
  }
  else if (dotAddress == length - 1){
    document.getElementById("error_email").innerHTML = "<p>*Please enter a valid email</p>";
  }
  else if (aAddress == length - 1){
    document.getElementById("error_email").innerHTML = "<p>*Please enter a valid email</p>";
  }
  else {
    document.getElementById("error_email").innerHTML = "";
    return true;
  }
}

function validateAge(){
  var myAge = document.forms.myForm2.age.value;
  if (myAge < 0 || isNaN(myAge) || myAge > 120 || myAge === ""){
    document.getElementById("error_age").innerHTML = "<p>*Please enter age in whole numbers between 0 and 120</p>";
  }
  else {
    document.getElementById("error_age").innerHTML = "";
    return true;
  }
}

function validateRadio(){
  var name = document.forms.myForm2.radio.value;
  if (name === ''){
    document.getElementById("error_radio").innerHTML = "<p>*Please select an option</p>";
  }
  else {
    document.getElementById("error_radio").innerHTML = "";
    return true;
  }
}

function validateCity(){
  var name = document.forms.myForm2.city.value;
  if (name === ''){
    document.getElementById("error_city").innerHTML = "<p>*Please select an option</p>";
  }
  else {
    document.getElementById("error_city").innerHTML = "";
    return true;
  }
}

function validateOpen(){
  var name = document.forms.myForm2.question3.value;
  if (name === ''){
    document.getElementById("error_qn3").innerHTML = "<p>*Please input an answer</p>";
  }
  else {
    document.getElementById("error_qn3").innerHTML = "";
    return true;
  }
}

function validateEverything(){
  if (validateForm() && validateEmail() && validateAge() && validateRadio() && validateCity() && validateOpen()){
    return true;
  }
  else {
    return false;
  }
}

function checkAnswers(){
  var qn1 = document.forms.myForm2.radio.value;
  var qn2 = document.forms.myForm2.city.value;
  var qn3 = document.forms.myForm2.question3.value;
  var userName = document.forms.myForm2.zname.value;
  var score = 0;
  if (validateEverything()){
    if (qn1 == "option1"){
      document.getElementById("error_radio").innerHTML = "Correct";
      score += 1;
    }
    if (qn2 == "option1"){
        document.getElementById("error_city").innerHTML = "Correct";
        score += 1;
    }
    if (qn1 != "option1"){
      document.getElementById("error_radio").innerHTML = "Wrong";
    }
    if (qn2 != "option1"){
       document.getElementById("error_city").innerHTML = "Wrong";
    }
    if (qn3 == "China" || qn3 =="china"){
      document.getElementById("error_qn3").innerHTML = "Correct";
      score += 1;
    }
    if (qn3 != "China" && qn3 !="china"){
     document.getElementById("error_qn3").innerHTML = "Wrong"; 
    }
    if (score == 3){
      document.getElementById("total_score").innerHTML = 'Total score: ' + score + ' /3. Congrats ' + userName +"!";
    }
    else if (score < 3){
      document.getElementById("total_score").innerHTML = 'Total score: ' + score + ' /3. Try harder next time, ' + userName + '.';
    }
  }
  else {
    document.getElementById("total_score").innerHTML = '';
    document.getElementById("error_qn3").innerHTML = "";
    document.getElementById("error_city").innerHTML = "";
    document.getElementById("error_radio").innerHTML = "";
  }
  score = 0;
}
