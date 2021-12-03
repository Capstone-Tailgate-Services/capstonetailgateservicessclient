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

function populateForm() //populates the form with all the important values
{
    document.getElementById("reviewsrating").value = myReview.reviewsrating;
    document.getElementById("reviewstext").value = myReview.reviewstext;
    document.getElementById("reviewsauthor").value = myReview.reviewsauthor;
}

function blankFields() //stores the value of the empty text box
{
    document.getElementById("reviewsrating").value="";
    document.getElementById("reviewstext").value="";
    document.getElementById("reviewsauthor").value="";
}


function makeReadOnly() //makes it so user can only edit when he clicks edit
{
    document.getElementById("reviewsrating").readOnly=true;
    document.getElementById("reviewstext").readOnly=true;
    document.getElementById("reviewsauthor").readOnly=true;
}