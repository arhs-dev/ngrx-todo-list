const express = require('express');
const http = require('http');
const fs = require('fs');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

let todos = JSON.parse(fs.readFileSync('./todos.json', 'utf-8'));

app.use(cors());
app.use(bodyParser.json());

app.use((req, res, next) => {
  console.log(req.method, req.path);
  next();
});

app.get('/todos', (req, res) => {
  res.send(todos);
});

app.post('/todos', (req, res) => {
  const newTodo = req.body;

  newTodo.id = Date.now().toString().slice(-5) + todos.length.toString();
  newTodo.isDone = false;
  todos.push(newTodo);

  res.send(newTodo);
});

app.put('/todos/:id', (req, res) => {
  const todoToUpdate = todos.find((todo) => todo.id === req.params.id);
  const updatedTodo = { ...todoToUpdate, ...req.body };
  todos = todos.map((todo) => (todo.id === req.params.id ? updatedTodo : todo));
  res.send(updatedTodo);
});

const server = http.createServer(app);

server.listen(8001, () => console.log('Ngrx example api started on http://localhost:8001'));
