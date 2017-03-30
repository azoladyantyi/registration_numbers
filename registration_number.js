var addRegNumber = document.querySelector('#addRegNumber');
var regNumber = document.querySelector('#regNumber');
var regN = document.querySelector('#regN');
var options = document.querySelector('.options');



options.addEventListener('change', function(evt) {
    var regList = document.querySelectorAll('li');

    for (var i = 0; i < regList.length; i++) {
        var registration = regList[i].innerHTML;

        if (evt.target.value === "All") {
            regList[i].style.display = "block";
        } else if (registration.startsWith(evt.target.value)) {
            regList[i].style.display = "block";
        } else {
            regList[i].style.display = "none";
        }

    }

});


function isValidReg(registration) {
    return registration.startsWith('CA') ||
        registration.startsWith('CJ') ||
        registration.startsWith('CK');
}

regNumber.addEventListener('click', function() {
    var enteredReg = addRegNumber.value;
    if (!isValidReg(enteredReg)) {
        //exit out this function
        return;
    }
    var li = document.createElement('li');

    li.classList.add('bg-yellow');
    li.innerHTML = enteredReg;
    regN.appendChild(li);
});
//}
