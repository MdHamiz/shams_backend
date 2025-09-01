const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/connectDB');
const formRouter = require('./routes/formRouter');

dotenv.config();
connectDB();

const app = express();
const PORT = process.env.PORT || 6000;

const allowedOrigins = [
  "http://localhost:5173",
  "https://shams-25kj2rzyl-mdhamizs-projects.vercel.app",
   "https://shams-backend-ajrd.onrender.com" 
];

app.use(cors({
  origin: allowedOrigins,
  methods: ["GET","POST","PUT","DELETE"],
  credentials: true
}));

 
app.use(express.json());
app.use(express.static("public"));

app.get("/", (req, res) => {
    res.send("Hello server is working well");
});

app.use("/api", formRouter);

app.listen(PORT, () => {
    console.log(`App is running on port: ${PORT}`);
});
