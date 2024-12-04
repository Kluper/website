document.addEventListener("DOMContentLoaded", function() {
    const menuButton = document.getElementById("menuButton");
    const dropdownMenu = document.getElementById("dropdownMenu");

    // Toggle dropdown menu visibility with height animation
    menuButton.addEventListener("click", function() {
        dropdownMenu.classList.toggle("active");
    });

    // Collapsible sections within the dropdown
    const collapsibles = document.querySelectorAll(".collapsible");
    collapsibles.forEach((collapsible) => {
        collapsible.addEventListener("click", function() {
            const content = this.nextElementSibling;
            content.style.display = content.style.display === "block" ? "none" : "block";
        });


        // Sketch to draw custom shapes for each section
function setup() {
    createCanvas(400, 400);
    noLoop(); // Stop draw loop since we only need static shapes
}

function draw() {
    background(255, 255, 255, 0); // Transparent background
}

// Example function to draw a custom shape for the "About" section
function drawAboutShape() {
    beginShape();
    vertex(50, 150);
    bezierVertex(75, 50, 150, 100, 300, 200);
    bezierVertex(150, 250, 75, 300, 50, 200);
    endShape(CLOSE);
}

// Additional functions for each section can follow similarly (e.g., drawCompositionShape, drawTechnoShape, etc.)

    });
});
