function validateform(){
    var name=document.myform.name.value;
    var password=document.myform.password.value;
    if(name==null||name==""){
        alert("Name can't be blank");
        return false;
    }
    else if(password.length<6){
        alert("Password must be in 6 characters");
        return false;

    }
    var x=document.myform.email.value;
    var atposition=x.indexOf("@");
    var dotposition=x.lastIndexOf(".");
    if(atposition<1||dotposition<atposition+2||dotposition+2>=x.length){
        alert("Please Enter Valid Mail Address\n at:"+atposition+"\n dot:"+dotposition);
        return false;
    }   
}
