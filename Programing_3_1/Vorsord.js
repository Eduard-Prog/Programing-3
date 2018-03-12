var bool = false;
class Vorsord extends KendaniEak{
	constructor(x, y) {
		super(x, y)
	}
	sharjvel() {
		var norVandak = random(super.yntrelVandak(0));
		if (bool == true) {
			matrix[this.y][this.x] = 1;
		} else {
			matrix[this.y][this.x] = 0;
		}
		if (norVandak) {
			bool = false;
		} else {
			//console.log(ran);
			norVandak = random(super.yntrelVandak(1));
			bool = true;
		}
		if (norVandak) {
			matrix[norVandak[1]][norVandak[0]] = 4;
			this.x = norVandak[0];
			this.y = norVandak[1];
		}
	}
	krakel() {
		var gishatichVandak = random(super.yntrelVandak(3));
		if (gishatichVandak) {
			matrix[gishatichVandak[1]][gishatichVandak[0]] = 0;
			console.log("Vorsordy Spanec Gishatichin");
			for (var i in gishatichner) {
				if (gishatichner[i].x == this.x && gishatichner[i].y == this.y) {
					console.log("Vorsordy spanec gishatichin");
					gishatichner.splice(i, 1);
					return true;
				}
			}
		}

		return false;
	}
}