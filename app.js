const body = document.getElementsByTagName("body");
let count = 0;
const allRes = [];
function Restaurant(foodName, type, price) {
  this.id = ++count;
  this.foodName = foodName;
  this.type = type;
  this.price = price;
  allRes.push(this);
} //end const resturant

// let form = document.getElementById("form");
// form.addEventListener("submit", handleSubmit);
// function handleSubmit(event) {
//   event.preventDefault();
//   let foodName = event.target.FoodName.value;
//   let type = event.target.Typesfood.value;
//   let price = event.target.price.value;
//   let foodID = function(Id) {
//     let count = 1;
//     id += count;
//     return id;
//   }
var tEl = document.getElementById("tableF");

Restaurant.prototype.render = function () {
  let trEl = document.createElement("tr");
  tEl.appendChild(trEl);

  let tdId = document.createElement("td");
  tdId.textContent = this.id;
  trEl.appendChild(tdId);

  let tdFn = document.createElement("td");
  tdFn.textContent = this.foodName;
  trEl.appendChild(tdFn);

  let tdT = document.createElement("td");
  tdT.textContent = this.type;
  trEl.appendChild(tdT);

  let tdP = document.createElement("td");
  tdP.textContent = this.price;
  trEl.appendChild(tdP);
}; //end Restaursnt prototype

let form = document.getElementById("form");
form.addEventListener("submit", handleSubmit);
function handleSubmit(event) {
  event.preventDefault();
  let name = event.target.FoodName.value;
  let type = event.target.Typesfood.value;
  let price = event.target.price.value;
  const newFood = new Restaurant(name, type, price);

  newFood.render();
} //end handleSubmit
