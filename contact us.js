
$(document).ready(function(){
    $('#send').on('click' , function(){
        let name = $('#name').val();
        let email = $('#email').val();
        let subject = $('#subject').val();
        let msg = $('#msg').val();
    
        let person = {
            name:name,
            email:email,
            subject:subject,
            msg:msg
        }
        localStorage.setItem('data' , JSON.stringify(person))
         $('#name').val('');
         $('#email').val('');
         $('#subject').val('');
         $('#msg').val('');
    })

 })

