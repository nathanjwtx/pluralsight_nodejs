// Print "Hello World"
// Every second
// And stop after 5 times

// After 5 times. Print "Done" and let Node exit.

let counter = 0
let myTimer

function startTimer() {
	if (counter === 6) { stopTimer() }
	myTimer = setInterval(() => {
		counter++

		console.log('hello world')
	}, counter * 1000)
}

function stopTimer() {
	clearInterval(myTimer)
}

startTimer()