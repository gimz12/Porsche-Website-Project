function vali(){

    var emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    var phoneNumberRegex = /^\d{10}$/;

    if(document.myForm.fname.value==""||!/^[a-zA-Z]+$/.test(document.myForm.fname.value)){
        alert("Please Provide First Name");
        document.myForm.fname.focus();
        return false;
    }
    if(document.myForm.sname.value==""||!/^[a-zA-Z]+$/.test(document.myForm.sname.value)){
        alert("Please Provide Last Name");
        document.myForm.sname.focus();
        return false;
    }
    if(document.myForm.email.value==""||!emailRegex.test(document.myForm.email.value)){
        alert("Please Provide a valid Email");
        document.myForm.email.focus();
        return false;
    }    
    if(document.myForm.phonenumber.value==""||!phoneNumberRegex.test(document.myForm.phonenumber.value)){
        alert("Please Provide a valid Phone Number");
        document.myForm.phonenumber.focus();
        return false;
    }
    if(document.myForm.message1.value==""){
        alert("Please Provide Qustion or a Message");
        document.myForm.message1.focus();
        return false;
    }
}