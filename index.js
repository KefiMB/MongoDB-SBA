const express = require("express");
const mongoose = require("mongoose");
const app = express();
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/about", (req, res) => {
  res.send("<h1>About page</h1>");
});

app.get("contact", (req, res) => {
  res.send("The parameter" + req.params.id);
});
// Validation
db.createCollection("users", {
  validator: {
    jsonSchema: {
      bsonType: "object",
      required: ["name", "email", "city"],
      properties: {
        name: {
          bsonType: "string",
          description: "must be a string and is required",
        },
        email: {
          bsonType: "string",
          pattern: "@example.com",
          description:
            "must be a string and match the regular expression pattern",
        },
        city: {
          bsonType: "string",
          description: "must be a string and is required",
        },
      },
    },
  },
});

const clientSchema = new mongoose.Schema({
   name: { type: String, required: true },
   email: { type: String, required: true, unique: true },
   city: { type: String, required: true }
 });
 // POST route to create a new client
app.post('/clients', async (req, res) => {
   try {
     const { name, email, phone } = req.body;
 
     // Create a new client
     const client = new Client({ name, email, city });
     await client.save();
 
     res.status(201).json(client);
   } catch (err) {
     res.status(400).json({ error: err.message });
   }
 });
 const Client = mongoose.model('Client', clientSchema);

db.users.createIndex({ email: 1, city: 1 }, { unique: true });
