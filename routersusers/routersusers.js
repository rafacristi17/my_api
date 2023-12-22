const express = require('express');
const app=express();
app.use(express.json());


app.post('/users', (request, response) => {
    const { name, email } = request.body;
    connection.query('INSERT INTO users (name, email) VALUES (?, ?)', [name, email], (error) => {
      if (error) {
        console.error(error);
        response.status(500).send('Error creating user');
      } else {
        response.send('User created successfully');
      }
    });
  });
   
  app.put('/users/:id', (request, response) => {
    const { id } = request.params;
    const { name, email } = request.body;
    connection.query('UPDATE users SET name = ?, email = ? WHERE id = ?', [name, email, id], (error) => {
      if (error) {
        console.error(error);
        response.status(500).send('Error updating user');
      } else {
        response.send('User updated successfully');
      }
    });
  });
   
  app.delete('/users/:id', (request, response) => {
    const { id } = request.params;
    connection.query('DELETE FROM users WHERE id = ?', [id], (error) => {
      if (error) {
        console.error(error);
        response.status(500).send('Error deleting user');
      } else {
        response.send('User deleted successfully');
      }
    });
  });

  app.listen(3000,()=>{
    console.log(' our app is running locally...');
  });