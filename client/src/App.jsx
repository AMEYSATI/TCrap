import { Navbar, Welcome, Footer, Services, Transactions } from './components';

const App=()=> {
  return (
    <div className="min-width-screen">
      <div className="gradient-welcome">
        <Navbar/>
        <Welcome/>
      </div>
      <Services/>
      <Transactions/>
      <Footer/>
    </div>
  );
}

export default App
