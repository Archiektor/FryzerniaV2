(function () {
    let domStrings = {
        header: '#header',
        myModal: "myModal",
        myImg: "myImg",
    };


    window.onscroll = function () {
        if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
            document.querySelector(domStrings.header).style.display = 'block';
            document.querySelector(domStrings.header).classList.add('visible');
        } else {
            document.querySelector(domStrings.header).style.display = 'none';
        }
    };

    // Get the modal
    var modal = document.getElementById(domStrings.myModal);

    // Get the image and insert it inside the modal - use its "alt" text as a caption
    document.getElementById(domStrings.myImg).onclick = function () {
        // debugger;
        var modalImg = document.getElementById("img01");
        modal.style.display = "block";
        modalImg.src = "images/map.png";
        captionText.innerHTML = "road to salon";
    };


// Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
    span.onclick = function () {
        modal.style.display = "none";
    }
})();