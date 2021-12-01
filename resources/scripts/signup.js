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
            html += "<option value = " + user.id  + ">" + user.useremail + ">"+ ">" + user.userpassword + ">" + ">" + user.admin + ">" + "</option>";
        })
        html += "</select>";
        document.getElementById("listBox").innerHTML = html;
    }).catch(function(error){
        console.log(error);
        
    });
}
//method that creates an object from the user data and calls the back end and sends the object across to save the user
/*function putUser(id){
    const putUserApiUrl = baseUrl + "/"+id;
    const sendUser = {
        id: id,
        userEmail: document.getElementById("useremail").value,
        userPassword: document.getElementById("userpassword").value
    }
    fetch(putUserApiUrl, {
        method: "PUT",
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
    });
}*/
//method that allows you to save a new user that didn't exist before
function postUser(){
    const postUserApiUrl = baseUrl;
    const sendUser = {
        userEmail: document.getElementById("useremail").value,
        userPassword: document.getElementById("userpassword").value,
        admin: document.getElementById("admin").value,
    }
    fetch(postUserApiUrl, {
        method: "POST",
        headers: {
            "Accept": 'application/json',
            "Content-Type": 'application/json',
        },
        body: JSON.stringify(sendUser)
    })
    .then((response)=>{
        myUser = sendUser;
        getUsers();
        blankFields();
        /*alert("User account successfully created. To log in please navigate back to the login page.");*/ 
    });
}