function validate()
{
    var username=document.getElementById("username").value;
    var password=document.getElementById("password").value;
    if(username=="admin" && password=="admin@1234"){
        alert("Login Successfully!");
        return false;
    }
    else{
        alert("Login Failed");
    }
}