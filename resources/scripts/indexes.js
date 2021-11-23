function handleOnLoad() //calls the populateList method and populates the array
{
    populateList();
}

function handleOnChange() //populates all the items in the list box to myBook
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
    document.getElementById("Reviewsrating").value = myReview.reviewRating;
    document.getElementById("Reviewstext").value = myReview.reviewText;
    document.getElementById("Reviewsauthor").value = myReview.reviewAuthor;
    document.getElementById("Reviewsdate").value = myReview.reviewDate;
}

function blankFields() //stores the value of the empty text box
{
    document.getElementById("Reviewsrating").value="";
    document.getElementById("Reviewstext").value="";
    document.getElementById("Reviewsauthor").value="";
    document.getElementById("Reviewsdate").value="";
}


function makeReadOnly() //makes it so user can only edit when he clicks edit
{
    document.getElementById("Reviewsrating").readOnly=true;
    document.getElementById("Reviewstext").readOnly=true;
    document.getElementById("Reviewsauthor").readOnly=true;
    document.getElementById("Reviewsdate").readOnly=true;
}