const baseUrl = "https://capstonetailgateserviceapi.herokuapp.com/api/user";
/*function logInUser(){
    user = input('useremail')
    mycursor.execute("SELECT * FROM user WHERE useremail = ?", [(user)])
    results = cursor.fetchall()


}*/
function logInUser()
{
        const useremail = document.getElementById("useremail").value;
        const userpassword = document.getElementById("userpassword").value;
    
        console.log(useremail, userpassword);
    
        const url = baseUrl;
    
        fetch(url, {
            method: 'PUT',
            headers: {
                "Accept": "application/json",
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                userEmail: useremail,
                userPassword: userpassword
            })
        })
}