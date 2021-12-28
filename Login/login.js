function validate()
{
    var username=document.getElementById("uname").value;
	var password=document.getElementById("pass").value;
	
	if (username == null||username=="")
	{
	alert("Please Enter Username");
	return false;
	}
	if (password==null ||password=="")
	{
	alert("Please Enter Password");
	return false;
	}
	if(username==password)
	{
	alert("Login Successful");
	setTimeout(function(){window.location="./home/home.html"});
	}
	else
	{
	 alert("Your Username and Password does not match");
	}
}