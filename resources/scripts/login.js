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
function logInUser(){
    const useremail = document.getElementById("useremail").value;
    const userpassword = document.getElementById("userpassword").value;

    console.log(useremail, userpassword);

    const url = baseUrl;

    fetch(url, {
        method: 'POST',
        headers: {
            "Accept": "application/json",
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            //get these from the dom at some point; these are hardcoded for now
            userEmail: useremail,
            userPassword: userpassword
        })
    }).then(response => response.json()).then(useremail => {
        if (useremail = "nicksaban@aol.com") {
            alert("SUCCESS: You are now logged in");
            window.location.href="https://www.thebeatles.com/";
        } 
        else{
            alert("You are not logged in");
            window.location.href="file:///C:/JoshuaWigginsMIS321/repos2/CTSclient2/capstonetailgateservicessclient/login.html"
        }
    })
    .catch(error => console.log(error));

}
/*function logInUser()
{
    const postUserApiUrl = baseUrl;
    const sendUser = {
        userEmail: document.getElementById("useremail").value,
        userPassword: document.getElementById("userpassword").value,
        admin: document.getElementById("admin").value,
    }
    fetch(postUserApiUrl, {
        method: "GET",
        headers: {
            "Accept": 'application/json',
            "Content-Type": 'application/json',
        },
    })
    .then((response)=>{
        myUser = sendUser;
        getUsers();
        blankFields();
        alert("User account successfully created. To log in please navigate back to the login page."); 
    });
}*/
