let interval = 1

logHello = (interval) => {
	const intervalId = setInterval(() => {
		interval++
		clearInterval(intervalId)
		logHello(interval)
	}, interval * 100)
}

logHello(interval)