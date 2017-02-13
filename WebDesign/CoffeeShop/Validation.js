/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
$(document).ready(function()
{
	$("#form").submit(function(event){
		
		event.preventDefault();
		return ValidateData();
	});
});

function ValidateData()
 {
     
               if(!validateform()){
                   //alert('Error in data..!!');
                    return false;
                }
                else
                {
                    alert('Request completed successfully..!!');
					var tags = $("input");
					  for(var i=0;i<tags.length;i++)
					  {
						  if(tags[i].type == "text")
							{
								tags[i].value = "";
							}
						
						  else if(tags[i].type == "password")
							{
								tags[i].value = "";
							}
					  }
                    return true;
                }
 }


 function validateform()
 {
  
  var present = false;
	var message = "";
      var tags = $("input");
      for(var i=0;i<tags.length;i++)
      {
          
           present = false;
          if(tags[i].type == "text")
          {
              
                var tagid = tags[i].id;
                
              var tagval = tags[i].value;
              var documentid = $("#"+tagid);
              documentid.css('border-color', '#D9D9D9');
                if(tagid.substr(0,4) == "text")
                {
                    
                    if(!isAlpha(tagval))
                    {
                        //alert('Invalid data');
						message = message+"Error in text field";
                       present = true;
                       documentid.css('border-color', 'red');
					   alert(message);
                        return false;
                    }
                }
                else if(tagid.substr(0,3) == "num")
                {
                    
                    if(!isNumber(tagval))
                    {
                        
                       message = message+"Error in zipcode ";
					   present = true;
                        documentid.css('border-color', 'red');
						alert(message);
                        return false;
                    }
                }
                else if(tagid.substr(0,8) == "alphanum")
                {
                    if(!isAlphanumeric(tagval))
                    {
                        //alert('Invalid data');
						message = message+"Error in address ";
                        present = true;
                        documentid.css('border-color', 'red');
						alert(message);
                        return false;
                    }
                }
                 else if(tagid.substr(0,5) == "phone")
                {
                    if(!isPhone(tagval))
                    {
                        //alert('Invalid data');
						message = message+"Error in phone ";
                        present = true;
                        documentid.css('border-color', 'red');
						alert(message);
                        return false;
                    }
                }
              
                else if(tagid.substr(0,4) == "date")
                {
                    if(!isDate(tagval))
                    {
                        //alert('Invalid data');
						message = message+"Error in birthdate ";
                        present = true;
                        documentid.css('border-color', 'red');
						alert(message);
                        return false;
                    }
                }
                
                  
             
          }             
                      
        }
         if(present == false)
        {
            
            return true;
        }
       
 }
 function isTextarea(tagval)
 {
      
     if(tagval.match(/^[a-zA-Z0-9]+[ a-zA-Z0-9.,?+]*$/))
     {
         return true;
     }
     else
     {
         return false;
     }
 }
 function isAlpha(tagval)
 {
      
     if(tagval.match(/^[a-zA-Z]+[ a-zA-Z+]*$/))
     {
         return true;
     }
     else
     {
         return false;
     }
 }
function isNumber(tagval) {
                                    
               
if(!isNaN(tagval) && tagval>0){

return true;
}
 else{
 
return false;   
 }
 }
 
function checkEmail()
{
	var email2 = $("#email2");
	var email1 = $("#email1");
	
	if(email1.value == email2.value)
	{
		email2.css('border-color', 'white');
		return true;
	}
	else{
		email2.value="";
		alert("please enter same email address");
		email2.css('border-color', 'red');
		return false;
	}
} 

function checkPwd()
{
	var pwd2 = $("#pwd2");
	var pwd1 = $("#pwd1");
	
	if(pwd1.value == pwd2.value)
	{
		pwd2.css('border-color', 'white');
		return true;
	}
	else{
		pwd2.value="";
		alert("please enter same password..!!");
		pwd2.css('border-color', 'red');
		return false;
	}
}
function isAlphanumeric(tagval)
{
    if(tagval.match(/^[a-zA-Z0-9]+[ a-zA-Z0-9+]*$/) )
     {
         return true;
     }
     else
     {
         return false;
     }
}
function isPhone(tagval)
{
    if(isNumber(tagval) && tagval.length ==10 )
     {
         return true;
     }
     else
     {
         return false;
     }
}

function cancleReq()
{
	var tags = $("input");
      for(var i=0;i<tags.length;i++)
      {
		  
		  tags[i].value = "";
	  }
	  alert("request cancelled..!!")
}
function isDate(tagval)
{
    re = /^(\d{1,2})\/(\d{1,2})\/(\d{4})$/;

      if(regs = tagval.match(re)) {
        
        // day value between 1 and 31
        if(regs[2] < 1 || regs[2] > 31) {
               
    // month value between 1 and 12         
                if(regs[1] < 1 || regs[1] > 12) {
                    
                    // year value between 1902 and 2016
                         if(regs[3] < 1902 || regs[3] > (new Date()).getFullYear()) {
                            
                             return false;
                           }
                    }
        }
        else
        {
            return true;
        }
        
    
        
        
        
      } else {
        
        return false;
      }
}