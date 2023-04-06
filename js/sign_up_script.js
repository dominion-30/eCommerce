function submitUser(){
    var user_email = document.getElementById("email").value;
    var user_name = document.getElementById(user_name).value;
    var user_password = document.getElementById("password").value;
    var fname = document.getElementById("fname").value;
    var lname = document.getElementById("lname").value;
    
    


   fetch('https://fakestoreapi.com/users',{
            method:"POST",
            body:JSON.stringify(
                {
                    email:user_email,
                    username:user_name,
                    password:user_password,
                    name:{
                        firstname:fname,
                        lastname:lname
                    },
                    address:{
                        city:'kilcoole',
                        street:'7835 new road',
                        number:3,
                        zipcode:'12926-3874',
                        geolocation:{
                            lat:'-37.3159',
                            long:'81.1496'
                        }
                    },
                    phone:'1-570-236-7033'
                }
            )
        })
            .then(res=>res.json())
            .then(json=>console.log(json));

};




