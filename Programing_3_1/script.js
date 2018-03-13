var matrix = [
    [0, 0, 1, 0, 3, 0, 0, 1, 0, 3, 0, 0, 1, 0, 3, 0, 0, 1, 0, 3, ],
    [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, ],
    [0, 1, 2, 0, 1, 0, 1, 2, 0, 1, 0, 1, 2, 0, 1, 0, 1, 2, 0, 1, ],
    [2, 0, 1, 0, 5, 2, 0, 1, 0, 5, 2, 0, 1, 0, 5, 2, 0, 1, 0, 1, ],
    [1, 1, 2, 0, 0, 1, 1, 2, 0, 0, 1, 1, 2, 0, 0, 1, 1, 2, 0, 0, ],
    [1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, ],
    [1, 1, 1, 1, 2, 1, 1, 1, 1, 2, 1, 1, 1, 1, 2, 1, 1, 1, 1, 2, ],
	[0, 0, 1, 0, 3, 4, 0, 1, 0, 3, 0, 0, 1, 0, 3, 0, 0, 1, 0, 3, ],
    [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 4, 0, ],
    [0, 1, 2, 0, 1, 0, 1, 2, 0, 1, 0, 1, 2, 0, 1, 0, 1, 2, 0, 1, ],
    [2, 0, 1, 0, 5, 2, 0, 1, 0, 0, 2, 0, 1, 0, 5, 2, 0, 1, 0, 5, ],
    [1, 1, 2, 0, 0, 1, 1, 2, 0, 0, 1, 1, 2, 0, 0, 1, 1, 2, 0, 0, ],
    [1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, ],
    [1, 1, 1, 1, 2, 1, 1, 1, 1, 2, 1, 1, 1, 1, 2, 1, 1, 1, 1, 2, ],
	[0, 0, 1, 0, 3, 0, 0, 1, 0, 3, 0, 0, 1, 0, 3, 0, 0, 1, 0, 3, ],
    [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, ],
    [0, 1, 2, 0, 1, 0, 1, 2, 0, 1, 0, 1, 2, 0, 1, 0, 1, 2, 4, 1, ],
    [2, 0, 1, 0, 5, 2, 0, 1, 0, 0, 2, 0, 1, 0, 5, 2, 0, 1, 0, 5, ],
    [1, 1, 2, 0, 0, 1, 1, 2, 0, 0, 1, 1, 2, 0, 0, 1, 1, 2, 0, 0, ],
    [1, 1, 0, 0, 4, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, ],
    [1, 1, 1, 1, 2, 1, 1, 1, 1, 2, 1, 1, 1, 1, 2, 1, 1, 1, 1, 2, ]
];

var side = 30;
//var emptyCells = [];
var grassArr = [];
var xotakerner = [];
var gishatichner = [];
var vorsordArr = [];
var dinosaurArr = [];

function setup() {
	// fillMatrix(8, 7);
	frameRate(5);
	createCanvas(matrix[0].length * side, matrix.length * side);
	background('#acacac');

	// var xot = new Grass(1, 2, 1);
	// emptyCells = xot.yntrelVandak(0);
	//console.log(datarkVandakner);
	for (var y = 0; y < matrix.length; y++) {
		for (var x = 0; x < matrix[y].length; x++) {
			if (matrix[y][x] == 1) {
				grassArr.push(new Grass(x, y));
			} else if (matrix[y][x] == 2) {
				xotakerner.push(new Xotaker(x, y));
			} else if (matrix[y][x] == 3) {
				gishatichner.push(new Gishatich(x, y));
			} else if (matrix[y][x] == 4) {
				vorsordArr.push(new Vorsord(x, y));
			} else if (matrix[y][x] == 5) {
				dinosaurArr.push(new Dinosaur(x, y));
			}

		}
	}
	//console.log(emptyCells);
}
// var datarkVandakner = [];

function draw() {
	for (var y = 0; y < matrix.length; y++) {
		for (var x = 0; x < matrix[y].length; x++) {
			if (matrix[y][x] == 0) {
				fill("#acacac");
			} else if (matrix[y][x] == 1) {
				fill("green");
			} else if (matrix[y][x] == 2) {
				fill("yellow");
			} else if (matrix[y][x] == 3) {
				fill("red");
			} else if (matrix[y][x] == 4) {
				fill("orange");
			} else if (matrix[y][x] == 5) {
				fill("#614019");
			}
//			if(matrix[y][x] == 2){
//				break;
//				matrix[random([0, matrix.length])][random([0, matrix[y].length])];
//			}
			rect(x * side, y * side, side, side);
		}
	}

		for (var i in grassArr) {
			grassArr[i].bazmanal();
			//console.log("bb");
	
		}
	for (var i in xotakerner) {
		xotakerner[i].bazmanal();
		if (xotakerner[i].utel()) {} else {
			xotakerner[i].sharjvel();
		}
		xotakerner[i].mahanal();
	}
	for (var i in gishatichner) {
		gishatichner[i].bazmanal();
		if (gishatichner[i].utel()) {} else {
			gishatichner[i].sharjvel();
			//console.log("bb");
		}
		gishatichner[i].mahanal();
	}
	for (var i in vorsordArr) {
		if (vorsordArr[i].krakel()) {} else {
			vorsordArr[i].sharjvel();
			//console.log("bb");
		}
	}
		for (var i in dinosaurArr) {
			dinosaurArr[i].bazmanal();
			//  console.log("cc");
			if (dinosaurArr[i].utel()) {} else {
				dinosaurArr[i].sharjvel();
				//console.log("bb");
			}
			dinosaurArr[i].mahanal();
		}


}


// function fillMatrix(n, m) {
//     for (var i = 0; i < n; i++) {
//         matrix[i] = []
//     }

//     for (var i = 0; i < n; i++) {
//         for (var j = 0; j < m; j++) {
//             matrix[i][j] = Math.round(Math.random());
//         }
//     }
// }
