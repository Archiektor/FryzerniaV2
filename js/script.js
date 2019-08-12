let imagePath = "woman";
let counter = 1;

// Dropdown Pure JavaScript

document.getElementsByClassName("dropdown")[0].addEventListener('click', function () {

    for (let i = 0; i < this.children.length; i++) {
        if (this.children[i].classList.contains("dropdown-selection")) {
            this.children[i].style.visibility = 'visible';
        }
    }

});

// Close DropDown Pure JS

window.onclick = function (event) {

    if (!event.target.classList.contains("dropdown-button")) {
        document.getElementsByClassName("dropdown-selection")[0].style.visibility = "hidden";
    }

};

// Carousel Pure JavaScript


// for more images use arr with condition firstIndex/ lastIndex
for (let i = 0; i < document.getElementsByClassName("btn").length; i++) {


    document.getElementsByClassName("btn")[i].addEventListener("click", function () {

        if (this.firstChild.classList.value === "fas fa-chevron-circle-left fa-2x") {
            if (counter === 0) {
                counter = 3;
            }
            counter--;
            setImagePath(counter);
        } else {
            if (counter === 2) {
                counter = -1;
            }
            counter++;
            setImagePath(counter);
        }

    })

}

function setImagePath(counter) {
    imagePath = 'images/woman' + counter + '.jpg';
    document.getElementsByTagName("header")[0].style.backgroundImage = "url(" + imagePath + ")";
}

// Expandable Image Pure JS

var modal = document.getElementById("myModal");
var img = document.querySelector(".map-image");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
var screenWidth = window.innerWidth;

makeMapExpandeble(screenWidth);

window.addEventListener('resize', function () {
    let newScreenWidth = window.innerWidth;
    makeMapExpandeble(newScreenWidth);
});

function makeMapExpandeble(width) {
    if (width < 1200) {
        img.onclick = function () {
            modal.style.display = "block";
            modalImg.src = this.src;
            captionText.innerHTML = this.alt;
        };
    }
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
};

// Dynamic animated buttons

for (let i = 0; i < document.querySelectorAll(".animated").length; i++) {
    document.querySelectorAll(".animated")[i].addEventListener("mouseover", function () {

        var currentDiv = this.className;

        switch (currentDiv) {
            case "link-btn1 animated":
                document.getElementsByClassName("fas")[0].classList.add("anima");
                break;
            case "link-btn2 animated":
                document.getElementsByClassName("fas")[1].classList.add("anima");
                break;
            case "link-btn3 animated":
                document.getElementsByClassName("fas")[2].classList.add("anima");
                break;
            case "link-btn4 animated":
                document.getElementsByClassName("fas")[3].classList.add("anima");
                break;
            default :
                alert("Unknown error");
        }

    });
}
