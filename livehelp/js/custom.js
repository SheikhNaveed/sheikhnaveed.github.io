// This file contains all custom js related to scripts used in site for Main Site Only

// Tooltip
$('.toolTipHover').tooltip() 

// Custom JS for login page


var focus = false;

function validateForm(form) {
	var userName = document.getElementById("userName");
	var password = document.getElementById("password");

	userName.className = userName.className.replace('parsley-error', '');
	password.className = password.className.replace('parsley-error', '');

	focus = false;
	var errors = "<ul>";
	
	errors += setErrorMsg('userName', 'Enter User Name.');
	errors += setErrorMsg('password', 'Enter Password.');

	if (errors != "<ul>") {
		errors += "</ul>";
		document.getElementById("error-container").innerHTML = errors;
	} else {
		document.getElementById(form).submit();
	}
};


function validateForgetForm(form) {
	
	var email = document.getElementById('eMail')
	
	focus = false;
	var errors = "<ul>";
	
	var tmpError = setErrorMsg('eMail', 'Enter email address.');
	if(tmpError != "")
		errors += tmpError;
	else if(!validateEmail(email.value)) {
		focusElement(email);
		setErrorClass(email);
		errors += '<li>Enter valid email address.</li>';
		
	}
	
	if (errors != "<ul>") {
		errors += "</ul>";
		document.getElementById("error-container").innerHTML = errors;
	} else {
		document.getElementById(form).submit();
	}
	
}

function showPassword() {
	var password = document.getElementById("password");
	var retypePassword = document.getElementById("retype_password");
	var eyebtn = document.getElementById("eye-button");
	
	if(password.type == "password") {
		password.type = "text";
		if(retypePassword != null)
			retypePassword.type = "text";
		eyebtn.className = "fa-eye-slash fa";
	} else {
		password.type = "password";
		if(retypePassword != null)
			retypePassword.type = "password";
		eyebtn.className = "fa-eye fa";
	}
}


function validateRegisterForm(form) {

	var urlInput = document.getElementById("url_input");
	var email = document.getElementById("email");
	var chbTerms = document.getElementById("chb_terms");
	
	
	var allInputs = document.getElementsByName("reg_input")
	for(var i=0; i<allInputs.length; i++) {
		if(allInputs[i] != null)
			allInputs[i].className = allInputs[i].className.replace('parsley-error', '');
	}

	focus = false;
	var errors = "<ul>";
	errors += setErrorMsg('full_name', 'Enter Full Name.');
	errors += setErrorMsg('user_name', 'Enter User Name.');
	errors += setErrorMsg('company', 'Enter Company Name.');
	
	var tmpError = setErrorMsg('url_input', 'Enter URL.');
	if(tmpError != "")
		errors += tmpError;
	else if(!validateURL(urlInput.value)) {
		focusElement(urlInput);
		setErrorClass(urlInput);
		errors += '<li>Enter valid URL.</li>';
	}
	
	tmpError = setErrorMsg('email', 'Enter email address.');
	if(tmpError != "")
		errors += tmpError;
	else if(!validateEmail(email.value)) {
		focusElement(email);
		setErrorClass(email);
		errors += '<li>Enter valid email address.</li>';
		
	}
	errors += setErrorMsg('password', 'Enter Password.');
	//errors += setErrorMsg('retype_password', 'Retype password.');
	
	var password = document.getElementById("password");
	var retypePassword = document.getElementById("retype_password");
	
	if(password.value != retypePassword.value)
		errors += "<li>Passwords do not match</li>";
		
	if(!chbTerms.checked) {
		focusElement(chbTerms);
		errors += "<li>check agree to the terms & conditions and privacy policy.</li>"
	}
	
	if (errors != "<ul>") {
		errors += "</ul>";
		document.getElementById("error-container").innerHTML = errors;
	} else {
		document.getElementById(form).submit();
	}
}
 
function setErrorMsg(elemName, msg) {

	var errors = "";
	var elem = document.getElementById(elemName);
	if (elem.value == '' || elem.value.trim().length <= 0) {
		focusElement(elem);
		setErrorClass(elem);
		errors += "<li>" + msg + "</li>";
	}
	
	return errors;

}

function setErrorClass(elem) {
	elem.className = elem.className + " parsley-error";
}

function focusElement(elem) {
	if(!focus) {
		elem.focus();
		focus = true;
	}	
}

function validateEmail(email) {
	var emailExp = /^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i
	
	return emailExp.test(email);
}

function validateURL(url) {
	var urlExp = /^(ht|f)tps?:\/\/[a-z0-9-\.]+\.[a-z]{2,4}\/?([^\s<>\#%"\,\{\}\\|\\\^\[\]`]+)?$/
	return urlExp.test(url);
}


// Not sure for what I used that
// IE 10 == Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2; Trident/6.0)
var b = document.documentElement;
b.setAttribute('data-useragent', navigator.userAgent);
b.setAttribute('data-platform', navigator.platform);










// IE8+ script for placeHolder to work
$('input, textarea').placeholder();




