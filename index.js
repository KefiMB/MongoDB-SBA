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
// Validation
    db.createCollection("users", {
        validator: {
           jsonSchema: {
              bsonType: "object",
              required: ["name", "email", "city"],
              properties: {
                 name: {
                    bsonType: "string",
                    description: "must be a string and is required"
                 },
                 email: {
                    bsonType: "string",
                    pattern: "@example\.com",
                    description: "must be a string and match the regular expression pattern"
                 },
                 city: {
                    bsonType: "string",
                    description: "must be a string and is required"
                 }
              }
           }
        }
     })

    db.users.createIndex({email: 1, city: 1}, {unique: true})