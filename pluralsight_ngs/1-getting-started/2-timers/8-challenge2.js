// Print "Hello World"
// Every second
// And stop after 5 times

// After 5 times. Print "Done" and let Node exit.

let counter = 0
let myTimer

function startTimer() {
	myTimer = setInterval(() => {
		counter++
		if (counter === 5) {
			console.log('done')
			stopTimer()
		}

		console.log(counter)
		console.log('hello world')
	}, counter * 1000)
}

function stopTimer() {
	clearInterval(myTimer)
}

startTimer()