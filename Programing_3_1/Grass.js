class Grass extends KendaniEak {
	constructor(x, y) {
		super(x, y)
		this.multiply = 0;

	}


	bazmanal() {
		var norVandak = random(super.yntrelVandak(0));
		var norVandak1 = random(super.yntrelVandak(0));
		this.multiply++;
		if (this.multiply >= 4 && norVandak) {
			var norXot = new Grass(norVandak[0], norVandak[1]);
			var norXot1 = new Grass(norVandak1[0], norVandak1[1]);
			grassArr.push(norXot);
			matrix[norVandak[1]][norVandak[0]] = 1;
			matrix[norVandak1[1]][norVandak1[0]] = 1;
			this.multiply = 0;
		}
	}

}
