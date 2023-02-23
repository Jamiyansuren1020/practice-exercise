import logo from './logo.svg';
import './App.css';
import Bark from './bark-project/bark';
import Interview from './bark-project/interview-exercise/interview';
import RandomPeopleApi from './interview-api/interview-api';
import NumberCounter from './use-localStorage/useCounter';

function App() {
  return (
    <div>
      {/* <BrowserRoute>
      <Route> */}
      {/* <NumberCounter/> */}
      <RandomPeopleApi/>
      {/* <Interview/> */}
     {/* <Bark/> */}
     {/* </Route>
     </BrowserRoute> */}
    </div>
  );
}

export default App;
