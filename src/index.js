import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import Button from './components/Button';
import ColorPicker from './components/ColorPicker';
import RegForm from './components/RegForm';
import Page from './components/Page';
import Home from './components/pages/home/Home';
import Footer from './components/footer/Footer';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Button/>
    <ColorPicker />
    <RegForm />
    <Page />
    <Home />
    <Footer/>
  </React.StrictMode>
);

