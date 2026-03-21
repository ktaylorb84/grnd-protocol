
const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("GRND Protocol is running");
});

app.post("/earn", (req, res) => {
  const { user, task } = req.body;

  console.log(`User ${user} completed task: ${task}`);

  res.json({
    status: "success",
    reward: Math.floor(Math.random() * 10) + " HUSTL"
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

Yahoo Mail: Search, Organize, Conquer
