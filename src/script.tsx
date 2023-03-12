import { createRoot } from 'react-dom/client';
import './scss/style.scss';
import { App } from './app';

const container = document.getElementById('root') as HTMLElement;
createRoot(container).render(<App />);
