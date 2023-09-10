const ratingE1s = document.querySelectorAll(".rating");
const btnE1 = document.getElementById("btn");

const containerE1 = document.getElementById("container")

let selectedRating = "";

ratingE1s.forEach((ratingE1s)=>{
    ratingE1s.addEventListener("click", (event) =>{
        removeActive();
        selectedRating = event.target.innerText || event.target.parentNode.innerText;
        event.target.classList.add("active");
        event.target.parentNode.classList.add("active");
    });
});

btnE1.addEventListener("click", ()=> {
    if(selectedRating != ""){
        containerE1.innerHTML = `
        <strong>Thank you!</strong>
        <br>
        <br>
        <strong>Feedback: ${selectedRating}</strong>
        <p>We'll use your feedbacck to imprve our customer support.</p>
        `
    }
})

function removeActive(){
    ratingE1s.forEach((ratingE1s) => {
       ratingE1s.classList.remove("active") 
    })

}