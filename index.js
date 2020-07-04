// Your code here
class Polygon {
	constructor(sides) {
		this.sides = sides
	}

	get countSides() {
		return this.sides.length
	}

	get perimeter() {
		let sum = this.sides.reduce((a,b) => a+b, 0)
		return sum
	}

}

class Triangle extends Polygon {
	get isValid() {
		let a = this.sides[0]
		let b = this.sides[1]
		let c = this.sides[2]
		if ((a + b > c) && (a + c > b) && (b + c > a)) {
			return true
		}
		else {
			return false
		}
	}
}

class Square extends Polygon {

	get isValid() {
		let first = this.sides[0]
		return this.sides.every(function(element) {
			return element === first;
		})
	}

	get area() {
		let side = this.sides.map(function(e) {
			if (e === e) {
				return e
			}
		}) 
	 	let squareArea = side[0] ** 2
	 	return squareArea
	}
}