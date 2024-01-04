function calculate() {
    var base = parseFloat(document.getElementById('base').value);
    var height = parseFloat(document.getElementById('height').value);

    if (isNaN(base) || isNaN(height)) {
        alert("Please enter valid numbers for base and height.");
        return;
    }

    var area = 0.5 * base * height;
    var hypotenuse = Math.sqrt(base * base + height * height);
    var circumference = base + height + hypotenuse;

    document.getElementById('areaResult').innerText = "Area: " + area.toFixed(2);
    document.getElementById('circumferenceResult').innerText = "Circumference: " + circumference.toFixed(2);

    // Update side inputs
    document.getElementById('sideA').value = base.toFixed(2);
    document.getElementById('sideB').value = height.toFixed(2);
    document.getElementById('sideC').value = hypotenuse.toFixed(2);
}

function calculatePerimeter() {
    var sideA = parseFloat(document.getElementById('sideA').value);
    var sideB = parseFloat(document.getElementById('sideB').value);
    var sideC = parseFloat(document.getElementById('sideC').value);

    if (isNaN(sideA) || isNaN(sideB) || isNaN(sideC)) {
        alert("Please enter valid numbers for side lengths.");
        return;
    }

    var perimeter = sideA + sideB + sideC;
    document.getElementById('perimeterResult').innerText = "Perimeter: " + perimeter.toFixed(2);
}
