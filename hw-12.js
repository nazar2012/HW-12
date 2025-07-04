const user = {
    name: "nazar",
    age: "12",
    hobby: "football",
    premium: true,
};
user.mood = "happy";
user.hobby = "skydiving";
user.premium = false;
const userKeys = Object.keys(user);
for (const key of userKeys) {
    const { [key]: value } = user;
    console.log(`${key}: ${value}`);
}

function countProps(obj) {
    const keys = Object.keys(obj);
    return keys.length;
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
    let bestName = "";
    let maxTasks = 0;
    for (const [name, tasks] of Object.entries(employees)) {
        if (tasks > maxTasks) {
            maxTasks = tasks;
            bestName = name;
        }
    }
    return `${bestName}: ${maxTasks}`;
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
    const newArr = [];
    for (const item of arr) {
        const { [prop]: value } = item;
        if (value !== undefined) {
            newArr.push(value);
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
    for (const { name, price, quantity } of allProducts) {
        if (name === productName) {
            totalPrice += price * quantity;
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