import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const nayoks = ["anowar", "desed", "jafor", "alomgir", "bappi", "shuvo", "khaled"]

  const products = [
    { name: 'photoshop', price: '$90.99' },
    { name: 'illustrator', price: '$150.99' },
    { name: 'pdf', price: '$30.99' },
    { name: 'photoeditor', price: '$56.99' },
    { name: 'premierr', price: '$556.99' },
    { name: 'vs code', price: '$46.99' }
  ]

  const nayoksName = nayoks.map(nayok => nayok)
  console.log(nayoksName);
  return (
    <div className="App">
      <header className="App-header">
        <p>I am a react person</p>
        <Counter></Counter>
        <Users></Users>
        <ul>
          {
            nayoks.map(nayok => <li>{nayok}</li>)
          }
          {
            products.map(product => <li>{product.name}</li>)
          }
        </ul>
        {
          products.map(pd => <Product product={pd}></Product>)
        }
      </header>
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(0);
  const handleIncrease = () =>setCount(count + 1);
  const handleDecrease = () =>setCount(count - 1);
  return (
    <div>
      <h1>Count:{count}</h1>
      <button onMouseMove={handleDecrease}>Decrease</button>
      <button onClick={handleIncrease}>Increase</button>
    </div>
  )
}

function Users(){
  const [users,setUsers]=useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUsers(data));
  },[])
  return(
    <div>
      <h3>Dynamic Users:{users.length}</h3>
      {
        console.log(users)
      }
      <ul>
        {
          // users.map(user=><li>{user.name}</li>)
          // users.map(user=><li>{user.phone}</li>)
          users.map(user=><li>{user.email}</li>)
        }
      </ul>
    </div>
  )
}

function Product(props) {
  const productStyle = {
    border: '1px solid grey',
    borderRadius: '5px',
    backgroundColor: 'lightgrey',
    height: '200px',
    width: '200px',
    float: 'left',
    margin: '10px'
  }
  const { name, price } = props.product;
  return (
    <div style={productStyle}>
      <h3>{name}</h3>
      <h2>{price}</h2>
      <button>Buy Now</button>
    </div>
  )
}


export default App;
