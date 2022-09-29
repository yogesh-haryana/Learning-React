// import logo from './logo.svg';
import React from 'react';
import './App.css';
import Greet from './user-components/greet';
import ClassComp from './user-components/classComp';
import JSXTutorial from './user-components/jsxAndCreatElement';
import LearningProps from './user-components/learningProps';

function App() {
  return (
    <div className="App">
      <Greet />
      <ClassComp />
      <JSXTutorial />
      <LearningProps subject="JavaScript" version="ES6">
        <p>Children = React</p>

      </LearningProps>

    </div>
  );
}

export default App;
