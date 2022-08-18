


function Sendmail(e){
    e.preventDefault();
    var params= {
        from_name: document.getElementById("fullname").value ,
        email : document.getElementById("email").value,
        message:document.getElementById("message").value
    }
    emailjs.send("service_wapjtdn","template_eksgq3o",params).then(function (res){
        alert("Success" ,res.status);
    })
}