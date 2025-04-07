import ReactDOM from 'react-dom/client';
import App from './App.js';
import './index.css';
import { FronteggProvider } from '@frontegg/react';

const contextOptions = {
  baseUrl: 'https://app-k7tpth9wa3dy.frontegg.com',
  clientId: '4d2bc93c-ea2e-42ee-80fa-479b8016aa88', 
  appId: 'aef099de-0004-435d-943b-8df624ea4d2a'
};

const authOptions = {
 keepSessionAlive: true // Uncomment this in order to maintain the session alive
};


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <FronteggProvider 
    contextOptions={contextOptions} 
    hostedLoginBox={true}
    authOptions={authOptions}>
        <App />
    </FronteggProvider>,
    document.getElementById('root')
);