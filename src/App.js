// import logo from './logo.svg';
import React from 'react';
// import './App.css';
import Greet from './user-components/greet';
import ClassComp from './user-components/classComp';
import JSXTutorial from './user-components/jsxAndCreatElement';
import LearningProps from './user-components/learningProps';
import LearnStates from './user-components/states';
import StatesAndSetStates from './user-components/statesAndSetStates';
import DestructuringProps from './user-components/DestructuringProps';
import DestructuringWithClasses from './user-components/DestructuringWithClasses';
import FuctionClick from './user-components/fuctionClick';
import ClickFunctionOnClasses from './user-components/ClickFunctionOnClasses';
import EventBinding from './user-components/EventBinding';
import ParentComponent from './user-components/ParentComponent';
import ConditionalRendering from './user-components/ConditionalRendering';
import ListRendering from './user-components/ListRendering';
import StylingReactComponents from './user-components/StylingReactComponents';
import InlineStyling from './user-components/InlineStyling';
import './appStyles.css'
import styles from './appStyles.module.css'
import BasicForm from './user-components/BasicForm';


function App() {
  return (
    <div className="App">
      {/* <h2 className='error'> This is an error</h2>
      <h2 className={styles.success}> This is success</h2> */}
      {/* <Greet />
      <ClassComp />
      <JSXTutorial />
      <LearningProps subject="JavaScript" version="ES6">
        <p>Children = React</p>
      </LearningProps> 
      <LearnStates />
      <StatesAndSetStates addValue = {5}></StatesAndSetStates>
      <DestructuringProps name = 'Sidhu' inspiration = 'Sidhu Moose Wala'></DestructuringProps> */}
      {/* <DestructuringWithClasses shortName = 'Yogesh' fullName = 'Yogesh Yaduvanshi' ></DestructuringWithClasses>
      <FuctionClick/> */} 
      {/* <ClickFunctionOnClasses/>
      {/* <EventBinding/>
      <ParentComponent/> */}
      {/* <ConditionalRendering/> */}
      {/* <ListRendering/>
      <StylingReactComponents primary = {true}></StylingReactComponents>
      <InlineStyling/> */}
      <BasicForm/>

      

    </div>
  );
}

export default App;
