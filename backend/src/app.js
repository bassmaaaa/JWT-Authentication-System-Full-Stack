import express from 'express';


// Create Express app
const app = express();

// Middleware

app.use(express.json()); // Parse JSON bodies
 // Parse URL-encoded bodies

// Routes
// TODO: Add your routes here
// app.use('/api/auth', authRoutes);

// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'OK', message: 'Server is running' });
});

// 404 handler


// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

export default app;