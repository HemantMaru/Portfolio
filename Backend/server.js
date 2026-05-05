const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const rateLimit = require('express-rate-limit');
const Message = require('./models/Message');

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Rate Limiting (Prevent Spam)
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
  message: { success: false, error: 'Too many requests, please try again later' }
});
app.use('/api/contact', limiter);

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/portfolio')
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Could not connect to MongoDB', err));

// Routes
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, message } = req.body;
    
    if (!name || !email || !message) {
      return res.status(400).json({ success: false, error: 'All fields are required' });
    }

    const newMessage = new Message({ name, email, message });
    await newMessage.save();

    res.status(201).json({ success: true, message: 'Message sent successfully' });
  } catch (error) {
    console.error('Error saving message:', error);
    res.status(500).json({ success: false, error: 'Server error, please try again later' });
  }
});

app.get('/api/messages', async (req, res) => {
  try {
    const adminPassword = req.headers['x-admin-password'];
    
    if (adminPassword !== (process.env.ADMIN_PASSWORD || 'admin123')) {
      return res.status(401).json({ success: false, error: 'Unauthorized access' });
    }

    const messages = await Message.find().sort({ createdAt: -1 });
    res.status(200).json({ success: true, data: messages });
  } catch (error) {
    res.status(500).json({ success: false, error: 'Server error' });
  }
});

app.get('/', (req, res) => {
  res.send('Portfolio API is running...');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
