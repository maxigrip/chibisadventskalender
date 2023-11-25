document.addEventListener("DOMContentLoaded", function () {
    // Make the movable images draggable
    makeMovable(document.getElementById("image1"));
    makeMovable(document.getElementById("image2"));
    // Add more movable images as needed
});

function makeMovable(element) {
    let offsetX, offsetY, isDragging = false;

    element.addEventListener("mousedown", function (e) {
        isDragging = true;
        offsetX = e.clientX - element.getBoundingClientRect().left;
        offsetY = e.clientY - element.getBoundingClientRect().top;

        document.addEventListener("mousemove", drag);
        document.addEventListener("mouseup", function () {
            isDragging = false;
            document.removeEventListener("mousemove", drag);
        });
    });

    function drag(e) {
        if (isDragging) {
            element.style.left = e.clientX - offsetX + "px";
            element.style.top = e.clientY - offsetY + "px";
        }
    }
}
