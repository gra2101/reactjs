import logo from './logo.svg';
import './App.css';
// import Greet from './components/greet'
// import GreetClass from './components/greetClass';
import Car from './components/car.js';
import Book from './components/books.js'
import HeloButton from './components/button.js'
import Counter from './components/counter';

function App() {
  return (
    <div>
   {/* <Car brand = "Toyota" model = "corolla" year = "2022" color = "red" />
   <br/>
   <Car brand = "Toyota" model = "corolla" year = "2022" color = "red" />
   <br/>
   <Car brand = "Toyota" model = "corolla" year = "2022" color = "red" /> */}
   <Book />
   <HeloButton />
   <Counter />
   </div>
  );
}

export default App;
