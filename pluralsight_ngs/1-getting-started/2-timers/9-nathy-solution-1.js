let interval = 1

logHello = (interval) => {
	// use setTimeout as we're inside a function then no need for clearInterval
	// see solution for deets
	const intervalId = setInterval(() => {
		console.log(`Hello Nathy! ${interval}`)
		interval++
		clearInterval(intervalId)
		logHello(interval)
	}, interval * 1000)
}

logHello(interval)
