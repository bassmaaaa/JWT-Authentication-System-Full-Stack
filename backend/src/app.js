import express from 'express';
import swaggerUi from "swagger-ui-express";
import swaggerSpec from "./config/swagger.js";
import authRoutes from "./routes/auth.routes.js";

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



// Only enable in development
if (process.env.NODE_ENV !== "production") {
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
}

console.log("Swagger available at http://localhost:5000/api-docs");


// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});


app.use("/auth", authRoutes);

export default app;