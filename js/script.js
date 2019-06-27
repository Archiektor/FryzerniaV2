let imagePath = "woman";
let counter = 1;

// Dropdown Pure JavaScript

document.getElementsByClassName("dropdown")[0].addEventListener('click', function () {

    for (let i = 0; i < this.children.length; i++) {
        if (this.children[i].classList.contains("dropdown-selection")) {
            // activeDropdown.id = this.id;
            // activeDropdown.element = this.children[i];
            this.children[i].style.visibility = 'visible';
        }
    }

});

// Close DropDown Pure JS

window.onclick = function (event) {

    if (!event.target.classList.contains("dropdown-button")) {
        document.getElementsByClassName("dropdown-selection")[0].style.visibility = "hidden";
        // activeDropdown.element.style.visibility = 'hidden';
    }

};

// Carousel Pure JavaScript

for (let i = 0; i < document.getElementsByClassName("btn").length; i++) {


    document.getElementsByClassName("btn")[i].addEventListener("click", function () {

        if (this.firstChild.classList.value === "fas fa-chevron-circle-left fa-2x") {
            if (counter === 0) {
                counter = 3;
            }
            counter--;
            imagePath = 'images/woman' + counter + '.jpg';
            // console.log(imagePath);
            document.getElementsByTagName("header")[0].style.backgroundImage = "url(" + imagePath + ")";
        } else {
            if (counter === 2) {
                counter = -1;
            }
            counter++;
            imagePath = 'images/woman' + counter + '.jpg';
            // console.log(imagePath);
            document.getElementsByTagName("header")[0].style.backgroundImage = "url(" + imagePath + ")";
        }

    })

}

// Expandable Image Pure JS

var modal = document.getElementById("myModal");

var img = document.querySelector(".map-image");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

img.onclick = function () {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
};

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
};
