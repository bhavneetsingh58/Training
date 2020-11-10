
function nameValidator(){
    let name = document.getElementById('name').value;

    if(name =="" || length(name) == 0 ){
        console.log("Please Enter Your Name");
        document.getElementById('nameSpan').innerHTML="Please Enter Your Name";
        // document.getElementById('nameSpan').style.color =""; 
        return false;  

    }
}

function emailValidator(){
    let email = document.getElementById('email').value;

    if(email =="" || length(email) == 0 ){
        console.log("Please Enter Your Email id");
        document.getElementById('emailSpan').innerHTML="Please Enter Your Email id";    
        return false;  

    }

}
function GenderValidator(){
    let genders = document.getElementsByName('gender');
    if (!(genders[0].checked || genders[1].checked)) {
        document.getElementById('genderSpan').innerHTML="Please Select Gender";
        return false;
    }

}
function StateValidator(){

}
function PasswordValidator(){
    let password = document.getElementById('pass').value;
    let passRejex ="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$";
    if(password =="" || length(password) == 0 ){
        console.log("Please Enter a Password");
        document.getElementById('passSpan').innerHTML="Please Set a Password";    
        return false;  
    }
    else if(!(passRejex.test(Password))){      
        document.getElementById('passSpan').innerHTML="Use atleast 8 characters inchluding a number";
        return false;}
    else{
       return true;
    }
    
}

function validation(){
    // if( nameValidator() &&
    // emailValidator() &&
    // GenderValidator() &&
    // PasswordValidator()){
    //     return true
    // }
    nameValidator();
    emailValidator();
    GenderValidator();
    PasswordValidator();
        
   
    
}