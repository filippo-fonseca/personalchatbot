function calcDistance(pointA, pointB, unit) {
    let totalDistance = pointB - pointA;
    console.log(totalDistance + " " + unit);
}
function calcDisplacement(initialPoint, endPoint, unit, direction) {
    let totalDisplacement = endPoint - initialPoint;
    console.log(totalDisplacement + " " + unit + direction);
}

calcDistance(9, 27, "centimeters");
calcDisplacement(5, 9, "meters", " to the north");
