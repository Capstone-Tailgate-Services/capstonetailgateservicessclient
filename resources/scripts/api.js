const baseUrl = "https://capstonetailgateserviceapi.herokuapp.com/api/review"; //url to pull from server
var reviewList = [];
var myReview = {};

function populateList(){ //populates review with all fields

    const allReviewApiUrl = baseUrl;
    fetch(allReviewApiUrl).then(function(response){
        return response.json();
    }).then(function(json){
        reviewList = json;
        let html = "<select class = \"listBox\" onchange = \"handleOnChange()\" id= \"selectListBox\" name = \"list_box\" size=5 width=\"100%\">";
        json.forEach((review)=>{
            html += "<option value = " + review.id  + ">" + review.reviewstext  +  "</option>";
        })
        html += "</select>";
        document.getElementById("listBox").innerHTML = html;
    }).catch(function(error){
        console.log(error);
    });
}

function putReview(id){ 
    const putReviewApiUrl = baseUrl + "/"+id;
    const sendReview = {
        id: id,
        reviewsRating: document.getElementById("reviewsrating").value,
        reviewsText: document.getElementById("reviewstext").value,
        reviewsAuthor: document.getElementById("reviewsauthor").value,
    }
    fetch(putReviewApiUrl, {
        method: "PUT",
        headers: {
            "Accept": 'application/json',
            "Content-Type": 'application/json',
        },
        body: JSON.stringify(sendReview)
    })
    .then((response)=>{
        myReview = sendReview;
        populateList();
        populateForm();
    });
}

function postReview(){
    const postReviewApiUrl = baseUrl;
    const sendReview = {
        reviewsRating: document.getElementById("reviewsrating").value,
        reviewsText: document.getElementById("reviewstext").value,
        reviewsAuthor: document.getElementById("reviewsauthor").value,
    }
    fetch(postReviewApiUrl, {
        method: "POST",
        headers: {
            "Accept": 'application/json',
            "Content-Type": 'application/json',
        },
        body: JSON.stringify(sendReview)
    })
    .then((response)=>{
        myReview = sendReview;
        populateList();
        blankFields();
    });
}

function deleteReview(){
    const deleteReviewApiUrl = baseUrl + "/" + myReview.id;
    fetch(deleteReviewApiUrl, {
        method: "DELETE",
        headers: {
            "Accept": 'application/json',
            "Content-Type": 'application/json',
        }
    })
    .then((response)=>{
        blankFields();
        populateList();
    });
}


