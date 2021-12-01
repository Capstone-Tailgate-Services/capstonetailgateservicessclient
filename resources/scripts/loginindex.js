function handleOnLoad() //calls the getUsers method and populates the array
{
    getUsers();
}

function handleOnChange() //populates all the items in the list box to myUser
{
    const selectedId = document.getElementById("selectListBox").value;
    userList.forEach((user)=>{
        if(user.id == selectedId){
            myUser = user;
        }
    });
    
    populateForm();
}

function populateForm() //populates the form with all the important values
{
    document.getElementById("useremail").value = myUser.useremail;
    document.getElementById("userpassword").value = myUser.userpassword;
}

function blankFields() //stores the value of the empty text box
{
    document.getElementById("useremail").value="";
    document.getElementById("userpassword").value="";
}