import { useState } from 'react';
import './App.css';
import ClassComponet from './components/basic/ClassComponet';
import FuctionalComponet from './components/basic/FuctionalComponet';
import Counter from './components/codeTour/Counter';
import StateLessCounnter from './components/codeTour/StateLessCounnter';

function App() {
  const [showClass, setshowClass] = useState(true)
  return (
    <div className="App">
       <h1>Welcome people to our react session</h1>
      <button onClick = {() => setshowClass(!showClass) }> toggel View</button>
      {showClass ? <ClassComponet /> : <FuctionalComponet />}
      {/* <StateLessCounnter /> */}
      {/* <Counter /> */}
    </div>
  );
}

export default App;
