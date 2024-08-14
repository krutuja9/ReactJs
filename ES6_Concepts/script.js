function getName (name){
  return name;
}

let a = false
let b = false
console.log( a &&  getName("Rutuja kokate"))

// Template Literals

let name1 = "Jhon"
let name2 = 'Doe'

console.log( `${name1} ${name2}`)

// Terbary Oprators

const showRecipeone = false;

function getRecipeOne(name){
  return name;
}
function getReciptwo(name){
  return name;
}

showRecipeone ? console.log("pizza") : console.log("cake");

//  Destructuring 
const id = 1;
const productName = "Product Apple watch"
const rating = 5;

const product ={
  id,
  productName,
  rating,
}

// console.log(product)

const product2 ={
  description : "PRoduct 2 description",
  id,
  productName,
  rating,
}
// const getProductTwoDescription  = product2.description
// console.log(getProductTwoDescription)

const {description} = product2
console.log(description)

const arry = [1,2,3]
let getArrayFirstVal = arry[0]
let getArrayFirstVal2 = arry[1]
console.log(getArrayFirstVal, getArrayFirstVal2)

// Default parameters spred and rest oprators

// function mulofTwoNumbers(num1, num2){
//   return num1 * num2
// }

// console.log(mulofTwoNumbers(2,3))

function mulofTwoNumbers (num1 =1, num2=20){
  return num1 * num2
}
console.log(mulofTwoNumbers(10))

// spread 

const arr = [2,3,4]
const arr2 = [6,5,7,4]
console.log([...arr], 999,...arr2)

// rest 

function getInfo(...a){
  return a
}
console.log(getInfo(1,2,3,4,5,6))

// Array method
// map filter find some every include indexof findIndex

const personArray = [
  {
    name: 'person 1',
    age : 30,
    country: "USA"
  },
  {
    name: 'person 2',
    age : 80,
    country: "USA"
  },
  {
    name: 'person 3',
    age : 23,
    country: "INdia"
  }

]

let getAllNAme = personArray.map((singlePerson, index) =>{
  console.log(singlePerson, index)
  return singlePerson.name
})
console.log(getAllNAme)

let getPersonFromUSA = personArray.filter((singlePerson, index) =>{
  return singlePerson.country === "USA"
})

console.log(getPersonFromUSA)

let checkSomeArrayMethodWithExample  = personArray.some((singlePerson) =>{
  return singlePerson.age > 40
})

console.log(checkSomeArrayMethodWithExample)

let checkEveryArrayMethod = personArray.every((singlePerson) =>{
  return singlePerson.age > 40 
})
console.log(checkEveryArrayMethod)

// include
const fruitArray = ['apple', 'banana', 'orange']
console.log(fruitArray.includes('papaya'), fruitArray.indexOf("rk"))

// findIndex
let getIndexOfPerson = personArray.findIndex((singleperson)=>{
  return singleperson.country === "uk"
})

console.log(getIndexOfPerson)




let getListOfproductElement = document.querySelector('.listOfproduct')

function renderProducts(getProducts) {
  getListOfproductElement.innerHTML = getProducts.map((singleProductItem) => `<p>${singleProductItem.title}</p>`).join(" ")
}
async function fetchListOfProducts() {
  try{
    const apiResponse  = await fetch('https://dummyjson.com/products', {
      method: "GET",
    })
    const result =  await apiResponse.json()
    console.log(result)
    if(result ?.products?.length > 0) renderProducts(result.products)
  }catch(e){
    console.log(e)
  }
}

fetchListOfProducts()
