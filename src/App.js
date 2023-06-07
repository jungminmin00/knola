import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Content from './components/Content';
import {AiOutlineUp, AiOutlineDown} from 'react-icons/ai';
function App() {
  return (
    <div id="wrap">
      <Header />
      <Content />
      <div id='scroll'>
        <div className='top'>
          <p><AiOutlineUp /></p>
        </div>
        <div className='down'>
          <p><AiOutlineDown /></p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
