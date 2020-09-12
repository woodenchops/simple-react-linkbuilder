import React from 'react';
import './sass/styles.scss';
import { MasterProvider } from './contexts/MasterContext';
import Header from './components/Header';
import Intro from './components/Intro';
import RequiredFields from './components/RequiredFields';
import OptionalFields from './components/OptionalFields';
import Result from './components/Result';
import PDFSection from './components/PDFSection';

function App() {
  return (
    <div className="App">
      <MasterProvider>
          <Header/>
          <Intro/>
          <RequiredFields/>
          <OptionalFields/>
          <Result/>
          <PDFSection/>
      </MasterProvider>
    </div>
  );
}

export default App;
