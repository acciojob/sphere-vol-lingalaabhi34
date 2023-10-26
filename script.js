function volume_sphere() {
    // Prevent the form from submitting and refreshing the page
    event.preventDefault();

    // Get the radius value from the input field
    var radius = parseFloat(document.getElementById("radius").value);

    // Check if the entered value is a valid number
    if (isNaN(radius)) {
        alert("Please enter a valid number for the radius.");
        return;
    }

    // Calculate the volume of the sphere using the formula V = (4/3) * π * r^3
    var volume = (4 / 3) * Math.PI * Math.pow(radius, 3);

    // Display the volume in the volume input field
    document.getElementById("volume").value = volume.toFixed(2); // Rounded to 2 decimal places
}

window.onload = function () {
    // Add an event listener to the form submit button
    document.getElementById('MyForm').onsubmit = volume_sphere;
};
