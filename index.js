const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3000;

// Middleware
app.use(cors()); // Enable CORS for all routes
app.use(express.json()); // Parse JSON body

// Nutrition Data
const nutritionData = [
  {
    id: 1,
    img: "product1.png",
    name: "Greek salad",
    calories: "177kcal",
    protein: "8g",
    carbs: "15",
    fat: "10"
  },
  {
    id: 2,
    img: "product3.png",
    name: "Lasagne",
    calories: "208kcal",
    protein: "5g",
    carbs: "37",
    fat: "10"
  },
  {
    id: 3,
    img: "project 2.png",
    name: "Butternut Pumpkin",
    calories: "543kcal",
    protein: "19g",
    carbs: "45",
    fat: "10"
  },
  {
    id: 4,
    img: "project 3.png",
    name: "Tokusen Wagyu",
    calories: "785kcal",
    protein: "23g",
    carbs: "33",
    Fat: "10"
  },
  {
    id: 5,
    img: "project 4.png",
    name: "Olivas Rellenas",
    calories: "200kcal",
    protein: "45g",
    carbs: "85",
    fat: "10"
  },
  {
    id: 6,
    img: "project5.png",
    name: "Opu Fish",
    calories: "577kcal",
    protein: "12g",
    carbs: "10",
    fat: "10"
  }
];

// Routes
app.get("/", (req, res) => {
  res.send("Welcome to the Nutrition API!");
});

// Get all nutrition items
app.get("/nutrition", (req, res) => {
  res.json(nutritionData);
});

// Get a single nutrition item by ID
app.get("/nutrition/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const item = nutritionData.find((food) => food.id === id);

  if (item) {
    res.json(item);
  } else {
    res.status(404).json({ message: "Item not found" });
  }
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
