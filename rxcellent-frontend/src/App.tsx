import './App.css';
import Navbar from './components/navbar/navbar';
import Banner from './pages/shopping/components/banner';
import { ShoppingCartProvider } from './pages/shopping/context/ShoppingCartContext';

function App() {
    return (
        <ShoppingCartProvider>
            <div className="App">
                {/* <header className="App-header"> */}
                <div className="body">
                    <Navbar></Navbar>
                    <Banner></Banner>
                </div>
                {/* </header> */}
            </div>
        </ShoppingCartProvider>
    );
}

export default App;
