import './App.css';
import NewProduct from './components/NewProduct';

import Products from './components/Products';

const App = () => {

  const products = [
    {
      id: 'p1',
      title: 'Nirma',
      amount: 100,
      date: new Date(2021, 8, 10)
    },
    {
      id: 'p2',
      title: 'Surf Excel',
      amount: 200,
      date: new Date(2021, 8, 10)
    },
    {
      id: 'p3',
      title: 'Tide',
      amount: 140,
      date: new Date(2021, 8, 10)
    },
    {
      id: 'Ghadi',
      title: 'Nirma',
      amount: 450,
      date: new Date(2021, 8, 10)
    },



  ];
  return (

    <div className='app-js-wrapper'>
      <NewProduct />
      <Products items = {products} />
    </div>
  );
}

export default App;
