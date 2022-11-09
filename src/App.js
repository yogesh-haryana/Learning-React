import './App.css';
import ClassCounter from './Compoents/ClassCounter';
import HooksCounter from './Compoents/HooksCounter';
import HookCounterTwo from './Compoents/HookCounterTwo';
import HooksWithObjects from './Compoents/HooksWithObjects';
import HooksWithArrays from './Compoents/HooksWithArrays';
import HooksCounterTitleUpdate from './Compoents/HooksCounterTitleUpdate';
import MouseMove from './Compoents/MouseMove';
import MouseContainer from './Compoents/MouseContainer';
import TickComponent from './Compoents/TickComponent';
import GetSinglePost from './Compoents/GetSinglePost';
import Counter from './Compoents/useReducer';
import CounterTwo from './Compoents/useReducerTwo';

function App() {
  return (
    <div className="App">
      {/* <ClassCounter/> */}
      {/* <HooksCounter/> */}
      {/* <HookCounterTwo/> */}
      {/* <HooksWithObjects/> */}
      {/* <HooksWithArrays/> */}
      {/* <HooksCounterTitleUpdate/> */}
      {/* <MouseMove/> */}
      {/* <MouseContainer/> */}
      {/* <TickComponent/> */}
      {/* <GetSinglePost/> */}
      {/* <Counter /> */}
      <CounterTwo />
    </div>
  );
}

export default App;
