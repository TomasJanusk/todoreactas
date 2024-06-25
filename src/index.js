import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './components/app/App';
import { AppProvider } from './context/TasksContext';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AppProvider>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </AppProvider>

);


