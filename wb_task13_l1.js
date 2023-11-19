// Задача на классы и наследование: создайте базовый класс Shape (фигура), который имеет методы для расчета площади и периметра. Затем создайте подклассы, представляющие различные фигуры, такие как прямоугольник, круг и треугольник. Реализуйте методы расчета площади и периметра для каждой фигуры.

//создайте базовый класс Shape (фигура), который имеет методы для расчета площади и периметра
class Shape {
  calculateArea() {}
  calculatePerimeter() {}
}
// создаем подкласс прямоугольник
class Rectangle extends Shape {
  constructor(width, height) {
    super();
    this.width = width;
    this.height = height;
  }

  calculateArea() {
    return this.width * this.height;
  }

  calculatePerimeter() {
    return 2 * (this.width + this.height);
  }
}
// создаем подкласс круг
class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }

  calculateArea() {
    return Math.PI * Math.pow(this.radius, 2);
  }

  calculatePerimeter() {
    return 2 * Math.PI * this.radius;
  }
}
// создаем подкласс треугольник
class Triangle extends Shape {
  constructor(side1, side2, side3) {
    super();
    this.side1 = side1;
    this.side2 = side2;
    this.side3 = side3;
  }

  calculateArea() {
    // Используем формулу Герона для расчета площади треугольника
    // Формула Герона гласит: S = √(p * (p — a) * (p — b) * (p — c)), где S — площадь треугольника, p — полупериметр (p = (a + b + c) / 2), а a, b, c — длины сторон треугольника.
    const s = (this.side1 + this.side2 + this.side3) / 2;
    return Math.sqrt(
      s * (s - this.side1) * (s - this.side2) * (s - this.side3)
    );
  }

  calculatePerimeter() {
    return this.side1 + this.side2 + this.side3;
  }
}

const rectangle = new Rectangle(5, 6);
console.log(rectangle.calculateArea()); // 30
console.log(rectangle.calculatePerimeter()); // 22

const circle = new Circle(7);
console.log(circle.calculateArea()); // 150.93804002589985
console.log(circle.calculatePerimeter()); // 43.982297150257104

const triangle = new Triangle(3, 4, 5);
console.log(triangle.calculateArea()); // 6
console.log(triangle.calculatePerimeter()); // 12
