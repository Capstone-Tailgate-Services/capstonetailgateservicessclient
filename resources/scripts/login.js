const baseUrl = `https://capstonetailgateserviceapi.herokuapp.com/api/user`;

//method that creates an object from the user data and calls the back end and sends the object across to save the user
function logInUser(){
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
}
