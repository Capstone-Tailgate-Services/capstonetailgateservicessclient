function handleOnLoad() //calls the populateList method and populates the array
{
    populateList();
}

function handleOnChange() //populates all the items in the list box to myReview
{
    const selectedId = document.getElementById("selectListBox").value;
    reviewList.forEach((review)=>{
        if(review.id == selectedId){
            myReview = review;
        }
    });
    
    populateForm();
}
//method that activates the edit button, calls the makeEditable() method allowing the user to edit the review fields, and calls the hideButtons() method which replaces the new, edit, and delete buttons with the save and cancel button
function handleEditClick(){
    makeEditable();
    hideButtons();
    var buttonHtml = "<button class=\"btn btn-primary btn-lg\" onclick=\"handleEditSave("+myReview.id+")\">Save</button>"
    buttonHtml += "<button class=\"btn btn-warning btn-lg btn-cancel\" onclick=\"handleCancelSave()\">Cancel</button>"
    document.getElementById("saveButton").innerHTML = buttonHtml;
    document.getElementById("saveButton").style.display = "inline-block";
}
//method that activates the new button allowing the user to create a new review by 
function handleNewClick(){
    makeEditable();
    hideButtons();
    blankFields();
    var buttonHtml = "<button class=\"btn btn-primary btn-lg\" onclick=\"handleNewSave()\">Save</button>"
    buttonHtml += "<button class=\"btn btn-warning btn-lg btn-cancel\" onclick=\"handleCancelSave()\">Cancel</button>"
    document.getElementById("saveButton").innerHTML = buttonHtml;
    document.getElementById("saveButton").style.display = "inline-block";
}
//method that activates the delete button and allows the user to delete a review by calling the deleteReview() method
function handleDeleteClick(){
    deleteReview();
}
//method that cancels the save by putting the data back on the form, making the data read-only, and showing the new, edit, and delete buttons
function handleCancelSave(){
    populateForm();
    makeReadOnly();
    showButtons();
}
//method that saves for an edit by calling the putReview() method and passing the id, making the fields read-only, and showing the new, edit, and delete buttons 
function handleEditSave(id){
    putReview(id);
    makeReadOnly();
    showButtons();
}
// method that saves for a new review by calling the postReview() method, making the fields read-only, showing the new, edit, and delete buttons, and blanking out the fields 
function handleNewSave(){
    postReview();
    makeReadOnly();
    showButtons();
    blankFields();
}

function populateForm() //populates the form with all the important values
{
    document.getElementById("reviewsrating").value = myReview.reviewsrating;
    document.getElementById("reviewstext").value = myReview.reviewstext;
    document.getElementById("reviewsauthor").value = myReview.reviewsauthor;
    document.getElementById("date").value = myReview.date;
}
//method that hides the buttons by setting the display for each button to none
function hideButtons(){
    document.getElementById("newButton").style.display = "none";
}
//method that displays the buttons
function showButtons(){
    document.getElementById("newButton").style.display = "inline-block";
    document.getElementById("saveButton").style.display = "none";
}
// method that makes the fields editable by setting the readOnly property to false
function makeEditable(){
    reviewsRating = document.getElementById("reviewsrating").readOnly = false;
    reviewsText = document.getElementById("reviewstext").readOnly = false;
    reviewsAuthor = document.getElementById("reviewsauthor").readOnly = false;
    date = document.getElementById("date").readOnly = false;
}

function blankFields() //stores the value of the empty text box
{
    document.getElementById("reviewsrating").value="";
    document.getElementById("reviewstext").value="";
    document.getElementById("reviewsauthor").value="";
    document.getElementById("date").value="";
}


function makeReadOnly() //makes it so user can only edit when he clicks edit
{
    reviewsRating = document.getElementById("reviewsrating").readOnly = true;
    reviewsText = document.getElementById("reviewstext").readOnly = true;
    reviewsAuthor = document.getElementById("reviewsauthor").readOnly = true;
    date = document.getElementById("date").readOnly = true;
}