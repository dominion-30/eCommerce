function submitUser(){

    let user_email = document.getElementById("email").value;
    let user_password = document.getElementById("password").value;
    // console.log(user_name, user_password);

    fetch("https://real-estate.smid.com.ng/api/sign-in",{
        method:"POST",
        headers: {"Content-type": "application/json;charset=UTF-8"},
        body:JSON.stringify(
            {
                email:user_email,
                password:user_password
            }
        )
    })
    
    .then(user_data=>user_data.json())
    .then(json=>console.log(user_data))
}
// let user_value = document.getElementById("user_name").value;
// console.log(user_value);





// fetch('https://fakestoreapi.com/auth/login',{
//             method:'POST',
//             body:JSON.stringify({
//                 username: "johnd",
//                 password: "m38rmF$"
//             })
//         })
//             .then(res=>res.json())
//             .then(json=>console.log(json));

