import './App.css';
import { image1, image2, image3, image4, image5, image6, image7, image8, image9 } from './assets/images';


function App() {
  return (
    <div>
    <header id='header'>
      <nav id='navbar'>
        <div className="container">
          <div className="navbar_content">
            <h1 className='marck-script-regular'>Олег Марков</h1>
            <ul>
              <li><a href="#">Главная</a></li>
              <li><a href="#">Обо мне</a></li>
              <li><a href="#">Связаться</a></li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
    <main>
      <div className="container-xl">
        <div className="main_content">
          <div className="main_content-grid item">
            <img src={image1} alt="" />
          </div>
          <div className="main_content-grid item">
            <img src={image4} alt="" />
          </div>
          <div className="main_content-grid item">
            <img src={image7} alt="" />
          </div>
          <div className="main_content-grid item">
            <img src={image2} alt="" />
          </div>
          <div className="main_content-grid item">
            <img src={image5} alt="" />
          </div>
          <div className="main_content-grid item">
            <img src={image8} alt="" />
          </div>
          <div className="main_content-grid item">
            <img src={image3} alt="" />
          </div>
          <div className="main_content-grid item">
            <img src={image6} alt="" />
          </div>
          <div className="main_content-grid item">
            <img src={image9} alt="" />
          </div>
          
        </div>
      </div>
    </main>
  </div>
  );
}

export default App;
