
function registerUser(){
    let user_role_id = document.getElementById("role_id").value;
    let user_purchase_type_id = document.getElementById("purchase_type_id").value;
    let user_name = document.getElementById("name").value;
    let user_email = document.getElementById("email").value;
    
    let user_password = document.getElementById("password").value;
    let user_address = document.getElementById("address").value;
    let user_phone = document.getElementById("phone").value;
    let user_description = document.getElementById("description").value;
    let user_logo = document.getElementById("logo").value;
    let user_image = document.getElementById("image").value;
    let user_rate = document.getElementById("rate").value;
    let user_number_of_rate = document.getElementById("number_of_rate").value;


   
        console.log(user_role_id);
        console.log(user_purchase_type_id);
        console.log(user_name);
        console.log(user_email);
        console.log(user_password);
        console.log(user_address);
        console.log(user_phone);
        console.log(user_description);
        console.log(user_logo);
        console.log(user_image);
        console.log(user_rate);
        console.log(user_number_of_rate);
   

    fetch("https://real-estate.smid.com.ng/api/sign-up",{
    
        method:"POST",
        headers: {"Content-type": "application/json;charset=UTF-8"},
        body:JSON.stringify(

            {
                role_id:user_role_id,
                purchase_type_id:user_purchase_type_id,
                name:user_name,
                email:user_email,
                password:user_password,
                address:user_address,
                phone:user_phone,
                description:user_description,
                logo:user_logo,
                image:user_image,
                rate:user_rate,
                number_of_rate: user_number_of_rate

            }
        )

    })

    .then(user_data=>user_data.json())
    .then(json=>console.log(user_name))

}


    


// function submitUser(){
//     var user_email = document.getElementById("email").value;
//     var user_name = document.getElementById(user_name).value;
//     var user_password = document.getElementById("password").value;
//     var fname = document.getElementById("fname").value;
//     var lname = document.getElementById("lname").value;
    
    


//    fetch('https://fakestoreapi.com/users',{
//             method:"POST",
//             body:JSON.stringify(
//                 {
//                     email:user_email,
//                     username:user_name,
//                     password:user_password,
//                     name:{
//                         firstname:fname,
//                         lastname:lname
//                     },
//                     address:{
//                         city:'kilcoole',
//                         street:'7835 new road',
//                         number:3,
//                         zipcode:'12926-3874',
//                         geolocation:{
//                             lat:'-37.3159',
//                             long:'81.1496'
//                         }
//                     },
//                     phone:'1-570-236-7033'
//                 }
//             )
//         })
//             .then(res=>res.json())
//             .then(json=>console.log(json));

// };




