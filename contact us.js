
$(document).ready(function(){

    let persons = [];

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
        
        persons.push(person)
        
        localStorage.setItem('data' , JSON.stringify(persons))
         $('#name').val('');
         $('#email').val('');
         $('#subject').val('');
         $('#msg').val('');
    })

 })

