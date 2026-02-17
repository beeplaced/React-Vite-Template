import { createRoot } from 'react-dom/client';
import './style/app.css';
import App from './App';

const container = document.getElementById('root')!;
const root = createRoot(container);

const Main = () => {

  return (
    <App />
  );
};

root.render(<Main />);