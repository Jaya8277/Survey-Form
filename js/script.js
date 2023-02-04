const InputMobile = document.querySelector("#mobile");
    const Input = window.intlTelInput(InputMobile, {
      utilsScript:
        "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
    });
   document.querySelector("form").addEventListener("submit",check)
   var arr=[];
   function check()
   {
   event.preventDefault();
           var  Email=document.querySelector("#email").value
           var  Mobile=document.querySelector("#mobile").value
           if(Email=="") {
            document.getElementById('emailId').innerHTML = "Required field";
            document.getElementById('mobileId').innerHTML ="Required field";
         return false;
           }
             if(Mobile== ""){
            document.getElementById('mobileId').innerHTML ="Required field";
            return false;
           }
           if(Mobile.length > 10 || Mobile.length < 10){
            document.getElementById('mobileId').innerHTML = "You have entered an invalid Mobile number";
         return false;
           }
       

        var obj={
             email:Email,
             mobile:Mobile,
             code:Input
        
        }
        
        arr.push(obj)
         console.log(arr)
        localStorage.setItem("detail",JSON.stringify(arr))
        alert("Thankyou For The Survey")
        window.location.href="./thanku.html"

   }