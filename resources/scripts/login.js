const baseUrl = `https://capstonetailgateserviceapi.herokuapp.com/api/user`;
var userList = [];
var myUser = {};
function getUsers(){

    const allUsersApiUrl = baseUrl;
    fetch(allUsersApiUrl).then(function(response){
        return response.json();
    }).then(function(json){
        userList = json;
        let html = "<select class = \"listBox\" onchange = \"handleOnChange()\" id= \"selectListBox\" name = \"list_box\" size=5 width=\"100%\">";
        json.forEach((user)=>{
            html += "<option value = " + user.id  + ">" + user.useremail + ">"+ ">" + user.userpassword + ">" + ">" + user.admin + ">" +"</option>";
        })
        html += "</select>";
        document.getElementById("listBox").innerHTML = html;
    }).catch(function(error){
        console.log(error);
    });
}
//method that creates an object from the user data and calls the back end and sends the object across to save the user
function logInUser(id){
    const putUserApiUrl = baseUrl + "/"+id;
    const sendUser = {
        id: id,
        userEmail: document.getElementById("useremail").value,
        userPassword: document.getElementById("userpassword").value
    }
    fetch(putUserApiUrl, {
        method: "GET",
        headers: {
            "Accept": 'application/json',
            "Content-Type": 'application/json',
        },
        body: JSON.stringify(sendUser)
    })
    .then((response)=>{
        myUser = sendUser;
        getUsers();
        populateForm();
        alert("The useremail or password is incorrect please try again."); 
    });
}
/*function logInUser(){
    user = input('useremail')
    mycursor.execute("SELECT * FROM user WHERE useremail = ?", [(user)])
    results = cursor.fetchall()


}*/
/*function logInUser()
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
}*/