function submitUser(){

    let user_name = document.getElementById("user_name").value;
    let user_password = document.getElementById("user_password").value;
    // console.log(user_name, user_password);

    fetch("https://real-estate.smid.com.ng/api/sign-in",{
        method:"POST",
        body:JSON.stringify(
            {
                email:user_name,
                password:user_password
            }
        )
    })
    
    .then(user_data=>user_data.json())
    .then(json=>console.log(user_name))
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

