import logo from './logo.svg';
import './App.css';

import { useSelector } from 'react-redux'; // Access the state .... READ ONLY
import { useDispatch } from 'react-redux'; // To modify the state

import { increment, decrement,increaseBYAmount } from './redux/slice/counterSlice';
import Products from './components/products';

function App() {
  const counter = useSelector(state => state.Counter.value);

  const dispatch = useDispatch();

  const incre = () => {
    dispatch(increment());
  }
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button onClick={() => dispatch(decrement())}>Decrement</button>
        {counter}
        <button onClick={incre}>Increment</button>
        <button onClick={() => dispatch(increaseBYAmount(10))}>Increment by 10</button>
      </header> */}
      <Products/>
    </div>
  );
}

export default App;
