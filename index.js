const express = require('express');
const multer = require('multer');
const app = express();

// Multer setup
const upload = multer({ dest: 'uploads/' });

// Test route
app.get('/', (req, res) => res.send('GRND Protocol Backend is running!'));

// Upload route
app.post('/upload', upload.single('file'), (req, res) => {
  res.send({ filename: req.file.filename });
});

// Fly.io requires listening on process.env.PORT
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
