import React from 'react';
import MainPage from "./pages/MainPage/MainPage";
import { isMobile } from 'react-device-detect';
import './styles/common.scss'
import './styles/reset.scss'
import '@fontsource/rowdies';
import './locales/i18n.ts'

function App() {

  return (
    <div className={`app ${isMobile ? 'mobile' : ''}`}>
      <MainPage />
    </div>
  );
}

export default App;
