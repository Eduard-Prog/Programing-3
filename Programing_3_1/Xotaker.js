class Xotaker extends KendaniEak {
	constructor(x, y) {
		super(x, y)
		this.energy = 5;
	}
	sharjvel() {
		var norVandak = random(super.yntrelVandak(0));
		if (norVandak) {
			if (this.energy > 0) {
				this.energy--;
			}
			matrix[this.y][this.x] = 0;
			matrix[norVandak[1]][norVandak[0]] = 2;
			this.x = norVandak[0];
			this.y = norVandak[1];
		}
	}
	bazmanal() {
		if (this.energy >= 7) {
			var ran = Math.round(Math.random());
			// console.log(ran);
			var norVandak = random(super.yntrelVandak(ran));
			if (!norVandak) {
				ran = 1 - ran;
			}
			norVandak = random(super.yntrelVandak(ran));
			if (norVandak) {
				var x = norVandak[0];
				var y = norVandak[1];
				if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
					//console.log(norVandak);
					var norXotaker = new Xotaker(x, y);
					console.log("Xotakery bazmacav");
					xotakerner.push(norXotaker);
					matrix[y][x] = 2;
					this.energy = 4;
				}
			}
		}
	}
	utel() {
		var xotVandak = random(super.yntrelVandak(1));
		if (xotVandak) {
			matrix[this.y][this.x] = 0;
			matrix[xotVandak[1]][xotVandak[0]] = 2;
			this.x = xotVandak[0];
			this.y = xotVandak[1];
			//console.log("aa");
			for (var i in grassArr) {
				if (grassArr[i].x == this.x && grassArr[i].y == this.y) {
					grassArr.splice(i, 1);
					if (this.energy < 7) {
						this.energy += 2;
					}
					return true;
				}
			}

		}
		return false;
	}
	mahanal() {
		if (this.energy <= 0) {
			for (var i in xotakerner) {
				if (xotakerner[i].x == this.x && xotakerner[i].y == this.y) {
					xotakerner.splice(i, 1);
					matrix[this.y][this.x] = 0;
					console.log("Xotakery mahacav");
					break;
				}
			}
		}
	}

}
