// YOUR CODE GOES HERE!!!
/*************************/
function getFirstName(person){
  return person.firstName
}

function getLastName(person){
  return person.lastName
}

function getFullName(person){
  return person.firstName + " " + person.lastName
}

function setFirstName(obj, person){
obj.firstName = person
return obj
}

function setAge(obj, person){
  obj.age = person
  return obj
}

function giveBirthday(obj){
  if(obj.age >= 1){
    obj.age += 1
  }else{
    if(!obj.age){
      obj.age = 1
    }
  } return obj
}
function marry(person1, person2){
  //person.married => true
  //person1.spouseName = person2name
  person1.married = true
  person2.married = true
  person1.spouseName = getFullName(person2)
  person2.spouseName = getFullName(person1)

}

function divorce(person1, person2){
  person1.married = false
  person2.married = false
  delete person1.spouseName
  delete person2.spouseName
}
/****************************/
// Our code here. Don't touch!
if (typeof getFirstName === 'undefined') {
  getFirstName = undefined
}

if (typeof getLastName === 'undefined') {
  getLastName = undefined
}

if (typeof getFullName === 'undefined') {
  getFullName = undefined
}

if (typeof setFirstName === 'undefined') {
  setFirstName = undefined
}

if (typeof setAge === 'undefined') {
  setAge = undefined
}

if (typeof giveBirthday === 'undefined') {
  giveBirthday = undefined
}

if (typeof marry === 'undefined') {
  marry = undefined
}

if (typeof divorce === 'undefined') {
  divorce = undefined
}



module.exports = {
  getFirstName,
  getLastName,
  getFullName,
  setFirstName,
  setAge,
  giveBirthday,
  marry,
  divorce,
}
