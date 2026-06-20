import express from 'express';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 5000;

// Enable CORS for frontend requests
app.use(cors({
  origin: ['http://localhost:5173', 'http://127.0.0.1:5173'],
  methods: ['GET', 'POST'],
  credentials: true
}));

// Parse JSON request bodies
app.use(express.json());

// POST /api/enquiry endpoint
app.post('/api/enquiry', (req, res) => {
  const { name, email, phone } = req.body;

  // 1. Validate name
  if (!name || typeof name !== 'string' || name.trim().length <= 3) {
    return res.status(400).json({
      success: false,
      message: 'Name is required and must be greater than 3 characters.'
    });
  }

  // 2. Validate email
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!email || typeof email !== 'string' || !emailRegex.test(email)) {
    return res.status(400).json({
      success: false,
      message: 'A valid email address is required.'
    });
  }

  // 3. Validate phone number
  const phoneRegex = /^\+?[0-9]{10,15}$/;
  if (!phone || typeof phone !== 'string' || !phoneRegex.test(phone)) {
    return res.status(400).json({
      success: false,
      message: 'A valid phone number is required (10-15 digits, optional + prefix).'
    });
  }

  // Log successful registration to console
  console.log(`[Enquiry Received] Name: ${name}, Email: ${email}, Phone: ${phone}`);

  // Return success response
  return res.status(201).json({
    success: true,
    message: 'Enquiry received successfully! Welcome to Robotix Lab.',
    data: {
      name,
      email,
      phone,
      timestamp: new Date().toISOString()
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
