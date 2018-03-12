var dinoBool = false;
class Dinosaur  extends KendaniEak{
	constructor(x, y) {
		super(x, y)
		this.energy = 20;
	}


	sharjvel() {
		var norVandak = random(super.yntrelVandak(1));
		if (dinoBool == true) {
			matrix[this.y][this.x] = 0;
		} else {
			matrix[this.y][this.x] = 1;
		}
		if (norVandak) {
			dinoBool = false;
		} else {
			//console.log(ran);
			norVandak = random(super.yntrelVandak(0));
			dinoBool = true;
		}
		if (norVandak) {
			matrix[norVandak[1]][norVandak[0]] = 5;
			this.x = norVandak[0];
			this.y = norVandak[1];
			this.energy -= 2;
		}
	}
	//console.log(this.energy);


	utel() {
		var gishatichVandak = random(super.yntrelVandak(3));
		if (gishatichVandak) {
			matrix[this.y][this.x] = 0;
			matrix[gishatichVandak[1]][gishatichVandak[0]] = 5;
			this.x = gishatichVandak[0];
			this.y = gishatichVandak[1];
			for (var i in gishatichner) {
				if (gishatichner[i].x == this.x && gishatichner[i].y == this.y) {
					console.log("Dinozavry kerav gishatichin");
					gishatichner.splice(i, 1);
					if (this.energy < 30) {
						this.energy += 6;
					}
					return true;
				}
			}
		} else {
			var xotakerVandak = random(super.yntrelVandak(2));
			if (xotakerVandak) {
				matrix[this.y][this.x] = 0;
				matrix[xotakerVandak[1]][xotakerVandak[0]] = 5;
				this.x = xotakerVandak[0];
				this.y = xotakerVandak[1];
				for (var i in xotakerner) {
					if (xotakerner[i].x == this.x && xotakerner[i].y == this.y) {
						console.log("Dinozavry kerav xotakerin");
						xotakerner.splice(i, 1);
						if (this.energy < 30) {
							this.energy += 8;
						}
						return true;
					}
				}
			} else {
				var vorsordVandak = random(super.yntrelVandak(4));
				if (vorsordVandak) {
					matrix[this.y][this.x] = 0;
					matrix[vorsordVandak[1]][vorsordVandak[0]] = 5;
					this.x = vorsordVandak[0];
					this.y = vorsordVandak[1];
					for (var i in vorsordArr) {
						if (vorsordArr[i].x == this.x && vorsordArr[i].y == this.y) {
							console.log("Dinozavry kerav vorsordin");
							vorsordArr.splice(i, 1);
							if (this.energy < 35) {
								this.energy += 4;
							}
							return true;
						}
					}
				}
			}
		}
		return false;
	}
	mahanal() {
		if (this.energy <= 0) {
			for (var i in dinosaurArr) {
				if (dinosaurArr[i].x == this.x && dinosaurArr[i].y == this.y) {
					dinosaurArr.splice(i, 1);
					matrix[this.y][this.x] = 1;
					console.log("Dinozavry mahacav");
					break;
				}
			}
		}
	}
	bazmanal() {
		if (this.energy >= 35) {
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
					var norDinosaur = new Dinosaur(x, y);
					console.log("Dinozavry Bazmacav");
					dinosaurArr.push(norDinosaur);
					matrix[y][x] = 5;
					this.energy = 5;
				}
			}
		}
	}
}