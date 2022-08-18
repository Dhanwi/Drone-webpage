const ename= document.querySelector(".name");
      pass = document.querySelector(".password");
      uname = document.querySelector(".Uname");
      email = document.querySelector(".email");
      upass = document.querySelector(".Upassword");
      uagaipass = document.querySelector(".Uagainpassword");
      console.log("Helooooppppppppppppppppppppppp");
function validateform1(){
    console.log("Heloooo");
    checkname(ename);
}      

function validateform2(){
    console.log("Heloooofghjg");
    checkname(uname);
    checkpass(upass,uagaipass);
}
function checkname(sname){
    if (sname.value.length == 0)
    { 
        console.log("Helllooo there");
        alert("Username can't be empty.");  	
        return false; 
    }
    else{  	
        return true; 
    }
}
function checkpass(spass,sagaipass){
    if (spass == sagaipass) {
        return true;
    }
    else{
        alert("Password entered is not same" );
        return false;
    }
}


