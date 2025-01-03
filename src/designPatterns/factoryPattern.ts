class Circle {
  draw() {
    console.log('Circle is drawn');
  }
}

class Square {
  draw() {
    console.log('Square is drawn');
  }
}

class ShapeFactory {
  getShape(shapeType: string) {
    if (shapeType === 'circle') {
      return new Circle();
    } else if (shapeType === 'square') {
      return new Square();
    }
  }
}

const shapeFactory = new ShapeFactory();

const circle = shapeFactory.getShape('circle');
circle?.draw();

const square = shapeFactory.getShape('square');
square?.draw();
