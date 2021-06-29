interface Point {
    x: number;
    y: number;
}

function printPoint(p: Point) {
    console.log(`${p.x}, ${p.y}`);
}

// print "12, 26"
const point = { x: 12, y: 26 }
printPoint(point)