import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Header from './Component/header';
import Footer from './Component/footer';
import Employees from './Component/Employee';

function App() {
  return (
    <div className="App">
     <Header />
     <Employees />
     <Footer />
    </div>
  );
}

export default App;
