import './App.css';
import Footer from './Components/Footer/footer';
import Home from './Pages/Home';
// import Home from './Components/Home/Home';

function App() {
  return (
    <>
    <div className='main-container'>
      <Home />
    </div>
    <div className='footer-div'>
      <Footer />
    </div>
    </>
  );
}

export default App;
