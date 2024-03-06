import './App.css';
// import About from './Components/About';
import Navbar from './Components/Navbar';
import Textform from './Components/Textform';

function App() {
  return (
    <>
      <Navbar Te="TextUtils" Home ="Home" />
      <Textform heading_paragraph="Enter The Text to Analyze!" />
      {/* <About abouttitle="About Us"/> */}

    </>

  );
}

export default App;