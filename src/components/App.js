import '../scss/main.scss';
import Footer from './Footer';
import Header from './Header';
import Content from '../pages/Content';
import {AiOutlineUp, AiOutlineDown} from 'react-icons/ai';
function App({children}) {
  return (
    <>
    
    <div id='bg'>
            
      
    <div id="wrap">
      
      <Header />

      {/* <Content /> */}
      {children}

      <div id='scroll'>
        <div className='top'>
          <p><AiOutlineUp /></p>
        </div>
        <div className='down'>
          <p><AiOutlineDown /></p>
        </div>
      </div>

      <Footer />
    </div></div>
    </>
  );
}

export default App;
