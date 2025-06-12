const user = {
    name: "nazar",
    age: "12",
    hobby: "football",
    premium: true,
}
user.mood = "happy";
user.hobby = "skydiving"
user.premium = false;
const userKeys = Object.keys(user);
for (const object of userKeys) {
    console.log(`${object}: ${user[object]}`);
}

function countProps(obj) {
    return Object.keys(obj).length;
}
const userLen = {
    name: "Nazar",
    age: 12,
    hobby: "football"
};
console.log(countProps(userLen));

const team = {
    Ivan: 16,
    Anna: 29,
    Nazar: 20,
    Oleg: 35,
};
function findBestEmployee(employees) {
    const values = Object.keys(employees);
    let findName = "";
    let maxTasks = 0;
    for (const key of values) {
        if (employees[key] > maxTasks) {
            maxTasks = employees[key];
            findName = key;
        }
    }
    return `${findName}: ${maxTasks}`
}
console.log(findBestEmployee(team));

const sallerry = {
    yaroslav: 3399,
    bogdan: 2399,
    maks: 2567,
    artem: 3847,
    nikita: 2619,
}
function countTotalSalary(employees) {
    const value = Object.values(employees);
    let total = 0;
    for (const price of value) {
        total += price
    }
    return total;
}
console.log(countTotalSalary(sallerry));

function getAllPropValues(arr, prop) {
    let newArr = [];
    for (const item of arr) {
        if (prop in item) {
            newArr.push(item[prop])
        }
    }
    return newArr;
}
const products = [
    { name: "Apple", price: 50, category: "Fruits" },
    { name: "Carrot", price: 20, category: "Vegetables" },
    { name: "Banana", price: 30, category: "Fruits" },
    { name: "Potato", price: 15, category: "Vegetables" },
];
console.log(getAllPropValues(products, "name"));
console.log(getAllPropValues(products, "price"));
console.log(getAllPropValues(products, "category"));

function calculateTotalPrice(allProducts, productName) {
    let totalPrice = 0;
    for (const product of allProducts) {
        if (product.name === productName) {
            totalPrice += product.price * product.quantity;
        }
    }
    return totalPrice;
}
const product = [
    { name: "Apple", price: 50, quantity: 5 },
    { name: "Carrot", price: 20, quantity: 10 },
    { name: "Banana", price: 30, quantity: 7 },
    { name: "Potato", price: 15, quantity: 20 }
];
console.log(calculateTotalPrice(product, "Apple"));
console.log(calculateTotalPrice(product, "Potato"));
console.log(calculateTotalPrice(product, "Orange"));