import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { App } from './app/App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { worker } from './api/mocks/server';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

async function enableMocking() {
    await worker.start();
}

enableMocking().then(() => {
    root.render(
        <React.StrictMode>
            <Provider store={store}>
                <App />
            </Provider>
        </React.StrictMode>,
    );
});

reportWebVitals();
