let items = [
  { name: "laptop", price: 2255 },
  { name: "mobile", price: 355 },
  { name: "cd", price: 155 },
  { name: "headphone", price: 655 },
  { name: "usb", price: 312 },
];

const itemListByName = items.map((item) => {
  const { name, price } = items;
  return item.name;
});

console.log(itemListByName);

let products = [
  { category: "devices", name: "laptop", price: 2255 },
  { category: "devices", name: "mobile", price: 355 },
  { category: "devices", name: "mobile", price: 1355 },
  { category: "accesories", name: "cd", price: 155 },
  { category: "accesories", name: "headphone", price: 655 },
  { category: "accesories", name: "usb", price: 312 },
  { category: "toy", name: "teddyBear", price: 312 },
  { category: "cloths", name: "shirt", price: 312 },
];

const productsCats = products.map((item) => {
  return item.category;
});

console.log("productsCats", productsCats);
