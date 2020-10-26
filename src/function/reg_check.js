const CheckEmail = (str) =>
{                                                 
    var reg_email = /^([0-9a-zA-Z_\.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/;
    if(!reg_email.test(str)) {                            
        return false;         
    }                            
    else {                       
        return true;         
    }                            
}

const CheckPw = (str) =>
{                                                 
    var reg_pw = /(?=.*\d{1,50})(?=.*[~`!@#$%\^&*()-+=]{1,50})(?=.*[a-zA-Z]{2,50}).{8,50}$/;;
    if(!reg_pw.test(str)) {                            
        return false;         
    }                            
    else {                       
        return true;         
    }                            
}  

const goBack = () => {
    console.log('test');
    window.history.back();
}

export {CheckEmail,CheckPw,goBack};