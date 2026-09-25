class Product {
    constructor(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }

    getDiscountedPrice(d) {
        return this.price - (this.price * d / 100);
    }

    display() {
        console.log(this.id, this.name, this.price);
    }

    static compareProducts(p1, p2) {
        (p1.price > p2.price ? p1 : p2).display();
    }
}

class Electronics extends Product {
    constructor(id, name, price, warranty) {
        super(id, name, price);
        this.warranty = warranty;
    }

    display() {
        console.log(this.id, this.name, this.price, this.warranty);
    }
}

let p1 = new Product(1, "Laptop", 60000);
let p2 = new Electronics(2, "Mobile", 30000, "2 Years");

console.log(p1.getDiscountedPrice(10));
p2.display();
Product.compareProducts(p1, p2);