import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AllLaptop from './Component/AllLaptop';
import BonusQuestion from './BonusQuestion';

function App() {

  return (
    <div>
        <h1 className='text-primary text-center'>Laptop Store</h1>
        <AllLaptop></AllLaptop>
        <BonusQuestion></BonusQuestion>
    </div>
  );
}

export default App;
