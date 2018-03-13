class Gishatich extends KendaniEak {
	constructor(x, y) {
		super(x, y)
		this.energy = 15;
	}
	sharjvel() {
		var norVandak = random(super.yntrelVandak(0));
		if (norVandak) {
			if (this.energy > 0) {
				this.energy--;
			}
			matrix[this.y][this.x] = 0;
			matrix[norVandak[1]][norVandak[0]] = 3;
			this.x = norVandak[0];
			this.y = norVandak[1];
			//console.log(this.energy);
		}
	}
	utel() {
		var gishatichVandak = random(super.yntrelVandak(2));
		if (gishatichVandak) {
			matrix[this.y][this.x] = 0;
			matrix[gishatichVandak[1]][gishatichVandak[0]] = 3;
			this.x = gishatichVandak[0];
			this.y = gishatichVandak[1];
			console.log("Gishatichy kerav xotakerin");
			for (var i in xotakerner) {
				if (xotakerner[i].x == this.x && xotakerner[i].y == this.y) {
					xotakerner.splice(i, 1);
					if (this.energy < 20) {
						this.energy += 5;
					}
					return true;
				}
			}

		}
		return false;
	}
	mahanal() {
		if (this.energy <= 0) {
			for (var i in gishatichner) {
				if (gishatichner[i].x == this.x && gishatichner[i].y == this.y) {
					gishatichner.splice(i, 1);
					matrix[this.y][this.x] = 0;
					console.log("Gishatichy mahacav");
					break;
				}
			}
		}
	}
	bazmanal() {
		if (this.energy >= 20) {
			// console.log(ran);
			var norVandak = random(super.yntrelVandak(0));
			if (norVandak) {
				var x = norVandak[0];
				var y = norVandak[1];
				if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
					//console.log(norVandak);
					var norGishatich = new Gishatich(x, y);
					console.log("Gishatichy Bazmacav");
					gishatichner.push(norGishatich);
					matrix[y][x] = 3;
					this.energy = 8;
				}
			}
		}
	}
}
