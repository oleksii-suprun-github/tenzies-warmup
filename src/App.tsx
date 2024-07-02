import { createRoot } from 'react-dom/client';
import i18n from './i18n';
import { I18nextProvider } from 'react-i18next';
import TenziesGame from './Components';

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(
  <I18nextProvider i18n={i18n} defaultNS={'translation'}>
    <TenziesGame />
  </I18nextProvider>,
);
