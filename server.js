const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/nha-viec', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Kết nối đến cơ sở dữ liệu thành công!'))
  .catch(err => console.error('Lỗi kết nối đến cơ sở dữ liệu:', err));

// Định nghĩa các route ở đây

app.listen(PORT, () => {
  console.log(`Máy chủ đang chạy trên cổng ${PORT}`);
});