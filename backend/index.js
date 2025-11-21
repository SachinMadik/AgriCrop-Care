const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/crophealth", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const predictionSchema = new mongoose.Schema({
  disease: String,
  confidence: Number,
  remedy: String,
  timestamp: { type: Date, default: Date.now }
});

const Prediction = mongoose.model('Prediction', predictionSchema);

app.post('/save', async (req, res) => {
  const { disease, confidence, remedy } = req.body;
  const prediction = new Prediction({ disease, confidence, remedy });
  await prediction.save();
  res.json({ message: "Saved" });
});

app.get('/history', async (req, res) => {
  const history = await Prediction.find().sort({ timestamp: -1 });
  res.json(history);
});

app.listen(4000, () => console.log("Server started on port 4000"));
