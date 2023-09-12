
const express = require('express');
const app = express();
const PORT = process.env.RUNNING_PORT || 5500;


app.use(express.json());


const apiRoutes = require('./Routes/api');

app.use('/api', apiRoutes);


app.use((req, res) => {
  res.status(404).json({ status: 'error', message: 'Route not found' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
