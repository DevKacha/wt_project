const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb+srv://kachadev1111:Dev__007@cluster0.6xllw.mongodb.net/clientdata', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('Connected to MongoDB Cloud');
}).catch(err => console.error(err));

const clientSchema = new mongoose.Schema({
    clientId: String,
    name: String,
    email: String,
    phone: String
});

const Client = mongoose.model('Client', clientSchema);

// Create client
app.post('/clients', async (req, res) => {
    const client = new Client(req.body);
    await client.save();
    res.status(201).json(client);
});

// Get all clients
app.get('/clients', async (req, res) => {
    const clients = await Client.find();
    res.json(clients);
});

// Delete client
app.delete('/clients/:id', async (req, res) => {
    await Client.findByIdAndDelete(req.params.id);
    res.status(204).send();
});

// Update client details
app.put('/clients/:id', async (req, res) => {
    const updatedClient = await Client.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedClient);
});


app.listen(5001, () => {
    console.log('Server running on port 5001');
});
