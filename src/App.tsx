import { createRoot } from 'react-dom/client';
import TenziesGame from './Components';

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(<TenziesGame />);
