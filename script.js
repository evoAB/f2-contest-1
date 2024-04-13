/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
  //Write your code here , just console.log
  let newArr = arr.map((val)=>{if(val.profession==="developer") return val;})

  let developers = newArr.filter(function(value){
    return  value !== undefined;
  })
  console.log(developers);
}

function PrintDeveloperbyForEach() {
  //Write your code here , just console.log
  let a=[]
  arr.forEach(val=>{if(val.profession==="developer") a.push(val)})
  console.log(a);
}

function addData() {
  //Write your code here, just console.log
  let val = { id: 4, name: "susan", age: "20", profession: "intern" };
  arr.push(val);
  console.log(arr);
}

function removeAdmin() {
  //Write your code here, just console.log
  arr = arr.filter(employee => employee.profession !== "admin");
  console.log(arr);
}

function concatenateArray() {
  //Write your code here, just console.log
  let a = [
    { id: 4, name: "Amar", age: "17", profession: "developer" },
    { id: 5, name: "Akbar", age: "21", profession: "admin" },
    { id: 6, name: "Anthony", age: "23", profession: "admin" },
  ];
  arr = arr.concat(a);
  console.log(arr);
}
