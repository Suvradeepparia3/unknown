/* typing text*/
    var options = {
    strings : ['','Design Your website.^1000', 'Develop Your website.^1000','Make business online.^2000'],
    typeSpeed: 60,
    loop: true,
    backSpeed: 30,
    };
    var typed = new Typed('.typing', options);

    /*var cursor = document.getElementById('cursor','sm');
    document.addEventListener('mousemove', function(e){
             var x = e.clientX;
             var y = e.clientY;
             cursor.style.left = x + "px";
             cursor.style.top = y + "px";
             sm.style.left = x + "px";
             sm.style.top = y + "px";
         })

/* mail */
function sendEmail(){

  
    var name = $("#name");
    var phnNumber = $("#phnNumber");
    var email = $("#email");
    var body = $("#body");

    if(isNotEmpty(name) && isNotEmpty(email) && isNotEmpty(phnNumber) && isNotEmpty(body)){
      $.ajax({
        url: 'form-control.php',
        method: 'POST',
        dataType: 'json',
        
        data:{
          name: name.val(),
          email: email.val(),
          phnNumber: phnNumber.val(),
          body: body.val()
        }, success: function(response){
          $('#contact-form')[0].reset();
          $('.sent-notification').text("Message sent successfully.");
        }
      });
    }
  }
  function isNotEmpty(caller){
    if(caller.val() == ""){
      caller.css('border','1px solid red');
      return false;
    }
    else
    {
      caller.css('border', '');
      return true;
    }
  }

  /*animation*/
  