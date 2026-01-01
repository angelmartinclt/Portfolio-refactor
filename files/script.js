// HOME PAGE //
let slideIndex = 1;
const slides = document.querySelectorAll(".mySlides");

if (slides.length > 0){
    showSlides(slideIndex);
}

function plusSlides (n){
    showSlides(slideIndex += n);
}

function showSlides (n) {
    if (slides.length === 0) return;

    if (n > slides.length) slideIndex = 1;
    if (n < 1) slideIndex = slides.length;

    slides.forEach(slide => {
        slide.style.display = "none";
    });

    slides[slideIndex - 1].style.display = "block";
}

document.querySelector(".prev")?.addEventListener("click", (e) => {
    e.preventDefault();
    plusSlides(-1);
});

document.querySelector(".next")?.addEventListener("click", (e) => {
    e.preventDefault();
    plusSlides(1);
});

// contact form 
   const form = document.getElementById("form");
   const popUp = document.getElementById("pop-up");
   const closePopUp = document.getElementById("close-pop-up");

    if (form && popUp && closePopUp){ // make sure on the contact page 
        form.addEventListener("submit", (e) => {
            e.preventDefault();

        const requiredFields = form.querySelectorAll("[required]");
        let valid = true;

        requiredFields.forEach((field) => {
            if(!field.value.trim()){
                valid = false;
                field.style.border = "4px solid #ff4d4d";
            } else{
                field.style.border = "4px solid #f7dde2";
            }
        });

        if (!valid){
            alert("Please fill out all required fields before submitting.");
            return; //make sure pop up doesnt show until everything required is complete
        }

        popUp.style.display = "flex";
        form.reset();
    });

    closePopUp.addEventListener("click", () => {
        popUp.style.display = "none";
    });
}
