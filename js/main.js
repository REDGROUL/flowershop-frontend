

let btn_login = document.getElementById("btn_login");

console.log(document.cookie)
if(btn_login) {
    btn_login.addEventListener("click",()=>{
        let login = document.getElementById("login").value;
        let password = document.getElementById("password").value;
        
        if(login.length < 5 || password.length < 5) {

            let resp = JSON.stringify({
                "username": login,
                "password": password
            });

            console.log(resp)

            fetch('http://localhost:8080/auth', {
                method: 'POST',
                body: resp,
                headers: {
                    "Content-Type": "application/json",
                },
        
            })
        
                .then(response => response.json())
        
                .then(data => {
                    if(data.token) {
                        console.log(data.token)
                        document.cookie = "jwtToken="+data.token+"; Path=/; Expires=Tue, 31 Aug 2025 15:56:04 GMT";
                    }
                })
                .catch(error => {
                    console.log(error);
                   
                })
        }
        

    })
}