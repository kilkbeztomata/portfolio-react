// server/index.js
const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
const port = 5000;

// Включаем CORS, чтобы React мог взаимодействовать с сервером
app.use(cors());
app.use(express.json());  // Для работы с JSON-данными

// Настройка подключения к MySQL
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '', // Если у тебя нет пароля для MySQL
  database: 'portfolio'  // Имя твоей базы данных
});

db.connect((err) => {
  if (err) {
    console.error('Ошибка подключения к базе данных:', err);
    return;
  }
  console.log('Успешно подключено к базе данных MySQL');
});

// Получение проектов из базы данных
app.get('/projects', (req, res) => {
  const query = 'SELECT * FROM portfolio_projects';
  db.query(query, (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(results);
  });
});

// Запуск сервера
app.listen(port, () => {
  console.log(`Сервер запущен на http://localhost:${port}`);
});