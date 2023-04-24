import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {decrement, increment} from "./redux/action";

function App() {
  const isLogger = useSelector(state => state.isLogger)
  const counter = useSelector(state => state.counter)
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>Counter {counter}</h1>
      <button onClick={()=> dispatch(increment())}>+</button>
      <button onClick={()=> dispatch(decrement())}>-</button>
      {isLogger ? <h3>Login = true</h3> : ''}
    </div>
  );
}

export default App;
