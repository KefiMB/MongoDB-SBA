const express = require('express')
	const app = express()
	const PORT = 3000

	
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
      });
    app.get('/', (req, res) => {
        res.send('Hello World');
    })

    app.get('/about', (req, res) => {
        res.send('<h1>About page</h1>')
    })

    app.get('contact', (req, res) => {
        res.send('The parameter' +req.params.id)
    })
