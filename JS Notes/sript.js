const friendsAge = [20 , 19 , 22 , 21 , 23]
const sum = friendsAge[0] + friendsAge[1] + friendsAge[2] + friendsAge[3] + friendsAge[4]

console.log("Sum of friends age", sum)
const totalFriends = 5
console.log("total friends",totalFriends)
const average = sum / totalFriends
console.log("Average friends age", average)



let myAge = 25

myAge = myAge + 1


const myAge = 25
const amIabove18 = true
const myname = 'erick'
const friends = [25,ture,'erick']
let someSpecialValue = null
const bigIntNumber = 111111111111111111111111111111111111111111111111111111111n

const typeofMyAge = (typeof myAge)

console.log('typeofMyAge')

someSpecialValue = 25

console.log('someSpecialValue')


let myFirstVariable = 250

console.log('Hello world')

myFirstVariable = 251

const timer = document.querySelector('#time span')

setInterval(() => {
	timer.innerText = new Date().toLocaleString()
}, 1000)


//Button counter using event listener. can also make it decrese by making a decrement button.

const incrementBtn = document.querySelector('#increment')
let counter = 0

function incrementCounter() {
	const counterEl = document.getElementById('counter')
	counter++
	counterEl.innerText = counter
}

incrementBtn.addEventListener('click', incrementCounter)