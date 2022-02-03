const baseUrl = "https://capstonetailgateserviceapi.herokuapp.com/api/review"; //url to pull from server
var reviewList = [];
var myReview = {};

function populateList(){ //populates review with all fields
    const allReviewApiUrl = baseUrl;
    var i = 0;
    var oneStar = 0;
    var twoStar = 0;
    var threeStar = 0;
    var fourStar = 0;
    var fiveStar = 0;
    var averageRating = 0;
    fetch(allReviewApiUrl).then(function(response){
        return response.json();
    }).then(function(json){
        reviewList = json;
        let html = "<select class = \"listBox\" onchange = \"handleOnChange()\" id= \"selectListBox\" name = \"list_box\" size=5 width=\"100%\">";
        json.forEach((review)=>{
            html += "<option value = " + review.id  + ">" + review.reviewstext  +  "</option>";
            if(review.reviewsrating == 1){
                averageRating = averageRating + parseInt(review.reviewsrating);
                i++;
                oneStar++;
                const element = document.getElementById("one-star-count")
                element.innerHTML = oneStar;
                review.reviewsrating = "⭐";
            }
            else if(review.reviewsrating == 2){
                averageRating = averageRating + parseInt(review.reviewsrating);
                i++;
                twoStar++;
                const element = document.getElementById("two-star-count")
                element.innerHTML = twoStar;
                review.reviewsrating = "⭐⭐";
            }
            else if(review.reviewsrating == 3){
                averageRating = averageRating + parseInt(review.reviewsrating);
                i++;
                threeStar++;
                const element = document.getElementById("three-star-count")
                element.innerHTML = threeStar;
                review.reviewsrating = "⭐⭐⭐";
            }
            else if(review.reviewsrating == 4){
                averageRating = averageRating + parseInt(review.reviewsrating);
                i++;
                fourStar++;
                const element = document.getElementById("four-star-count")
                element.innerHTML = fourStar;
                review.reviewsrating = "⭐⭐⭐⭐";
            }
            else if(review.reviewsrating == 5){
                averageRating = averageRating + parseInt(review.reviewsrating);
                i++;
                fiveStar++;
                const element = document.getElementById("five-star-count")
                element.innerHTML = fiveStar;
                review.reviewsrating = "⭐⭐⭐⭐⭐";
            }
        })
        const element = document.getElementById("average-rating")
        averageRating = averageRating / i;
        element.innerHTML = averageRating.toFixed(1) + " average based on " + i + " reviews";

        document.getElementById("bar-5").style.width = (fiveStar / i) * 100 + "%";
        document.getElementById("bar-4").style.width = (fourStar / i) * 100 + "%";
        document.getElementById("bar-3").style.width = (threeStar / i) * 100 + "%";
        document.getElementById("bar-2").style.width = (twoStar / i) * 100 + "%";
        document.getElementById("bar-1").style.width = (oneStar / i) * 100 + "%";
        
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
        date: document.getElementById("date").value
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
        date: document.getElementById("date").value
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


