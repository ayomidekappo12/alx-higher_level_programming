#!/usr/bin/node
// web scrapper

const request = require('request');

function countCompletedTasksByUser(todos) {
  const completedTasksByUser = {};

  todos.forEach((todo) => {
    if (todo.completed) {
      const userId = todo.userId;
      if (completedTasksByUser[userId]) {
        completedTasksByUser[userId]++;
      } else {
        completedTasksByUser[userId] = 1;
      }
    }
  });

  return completedTasksByUser;
}
