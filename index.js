const express = require('express')
	const app = express()
	const PORT = 3000

	app.listen (PORT, ( ) => {
		console.log('app is running in port 3000')
	})

    app.get('/', (req, res) => {
        res.send('Hello World');
    })