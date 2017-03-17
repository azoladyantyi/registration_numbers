var addRegNumber = document.querySelector('#addRegNumber');
var regNumber = document.querySelector('#regNumber');
var regN = document.querySelector('#regN');

function isValidReg(registratin) {
  return registratin.startsWith('CA')
  || registratin.startsWith('CJ')
  || registratin.startsWith('CK');
}

regNumber.addEventListener('click', function() {
  var enteredReg = addRegNumber.value;
  if(!isValidReg(enteredReg))
  //exit out this function
  return;

  var li = document.createElement('li');
  li.innerHTML = enteredReg;
  regN.appendChild(li);



});
