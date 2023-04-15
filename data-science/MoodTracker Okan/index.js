import React from 'react';
import ReactDOM from 'react-dom';
import { createServer, Model } from 'miragejs';
import App from './App';
import axios from 'axios';

createServer({
  models: {
    mood: Model,
  },

  routes() {
    this.namespace = 'api';

    this.get('/moods', () => {
      return this.schema.all('mood');
    });

    this.post('/moods', (schema, request) => {
      const attrs = JSON.parse(request.requestBody);
      return schema.create('mood', attrs);
    });
  },
});

axios.defaults.baseURL = 'http://localhost:3000';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
