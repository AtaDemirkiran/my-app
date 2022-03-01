import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
function App() {
  
  return (
    <div>

    
      <Header
        home = 'anasayfa'
        contact = 'iletisim'
        about ='hakkimizda'
      />
        <Footer
        name ='ata'
        surname ='demirkiran'
        city= 'istanbul'
      />
    </div>

  );
}

export default App;
