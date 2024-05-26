import { createRoot } from 'react-dom/client';

const App = () => {
  return (
    <div>
      <p>Tenzies Game</p>
    </div>
  );
};
const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);
