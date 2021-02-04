function SignUpForm(event){

    // This example treats all 4 input fields (Email, Username, Password, Confirm Password)
    // as elements of the event currentTarget.
    // Pay attention to SignUp-r.js since the form id is "SignUp".
    // You can also implement individual function to validate each input field
    // by modify the online lab6 website example "DOM2 Event Registration",
    // therefore each input field is a function. For example, checkEmail(), CheckUsername(), CheckPswd(), CheckMatchPswd()




    var elements = event.currentTarget;

    //declare variable a for the email value

    var a = elements[0].value;

    // add code here to
    // declare Username,Password and confirm
    // Password as elements in event.curretTarget
    // for example: var b = elements[1].value
   	var b = elements[1].value;
	  var c = elements[2].value;
	  var d = elements[3].value;

    var result = true;

    // declare variables for valid input in regular expression for email, username and password

    var email_v = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    var Uname_v = /^[a-zA-Z0-9_-]+$/;
    var pswd_v = /(?=.*\d)(?=.*[a-zA-Z0-9]).{8}/    /*/^(\S*)?\d+(\S*)?$/*/;


    document.getElementById("email_msg").innerHTML ="";
    document.getElementById("uname_msg").innerHTML ="";
    document.getElementById("pswd_msg").innerHTML ="";
    document.getElementById("pswdr_msg").innerHTML ="";



    //email can not be empty or wrong format
    if (a==null || a==""||!email_v.test(a))
        {
	         alert("Email is empty or invalid(example: cs215@uregina.ca)")
           result = false;
        }




    // add code here to validate username
    // if username is empty or wrong format, print "username is empty or invalid"
	if (b==null || b=="" ||Uname_v.test(b) == false){

      alert("Please enter the correct format for Username. (No leading or trailing spaces)")
      result = false;
    }






    // add code here to validate password
    // if password is empty, wrong format or != 8, print
    //"Invalid password format (8 characters long at least one non-letter)"
	if (c==null || c=="" ||pswd_v.test(c) == false){

      alert("Please enter the password correctly. (8 characters long at least one non-letter)")
      result = false;
    }





    // add code here to validate confirmed password
    // password and confirmed password has to match
	if (d==null || d=="" ||d!=c){

      alert("The comfirmed password should be same as the password above")
      result = false;
    }






    //prevent form to be submitted if one of above field is invalid
    if(result == false )
        {
            //event.preventDefault();
        }
    else{
		alert("Sign up successfully!")
    window.open("Login.html");
	}
}

function ResetForm(event)
{
    document.getElementById("email_msg").innerHTML ="";
    document.getElementById("uname_msg").innerHTML ="";
    document.getElementById("pswd_msg").innerHTML ="";
    document.getElementById("pswdr_msg").innerHTML ="";
}





function LoginForm(event){

  var elements = event.currentTarget;
  var a = elements[0].value;
  var b = elements[1].value;


  var result = true;


  var Uname_v = /^[a-zA-Z0-9_-]+$/;
  var pswd_v = /(?=.*\d)(?=.*[a-zA-Z0-9]).{8}/;



  document.getElementById("uname_msg").innerHTML ="";
  document.getElementById("pswd_msg").innerHTML ="";


  //email can not be empty or wrong format
  if (a==null || a=="" ||Uname_v.test(a) == false){
    alert("Please enter the correct format for Username. (No leading or trailing spaces)");
    result = false;
  }


  if (b==null || b=="" ||pswd_v.test(b) == false){
    alert("Please enter the password correctly. (8 characters long at least one non-letter)");
    result = false;
  }


  if(result == false )
      {
          //event.preventDefault();
      }
  else{
    alert("Login successfully!")
    window.open("main.html");
  }
}

function SearchbarForm(event){

    var elements = event.currentTarget;

    var a = elements[0].value;

    var result = true;

    document.getElementById("search_msg").innerHTML ="";

    if (a==null || a=="")
        {
          alert("Movie's name is empty or invalid");
          result = false;
        }

    if(result == false )
        {
            //event.preventDefault();
        }

}

function watchlistCreatBarForm(event){

    var elements = event.currentTarget;

    var a = elements[0].value;

    var watchlist_v =  /^[a-zA-Z0-9_-]{0,15}$/;

    var result = true;

    document.getElementById("watchlist_msg").innerHTML ="";

    if (a==null || a=="" || !watchlist_v.test(a))
        {
          alert("Watchlist name can not be empty or more than 15 characters");
          result = false;
        }

    if(result == false )
        {
            //event.preventDefault();
        }

}
