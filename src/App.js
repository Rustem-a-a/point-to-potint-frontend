import './App.css';
import Header from "./components/UI/header/Header";
import NavbarJS from "./components/UI/navbar/NavbarJS";
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter";
import {useDispatch} from "react-redux";
import {useEffect} from "react";
import Footer from "./components/UI/footer/Footer";
import {authAuth} from "./store/slices/auth";

function App() {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(authAuth())
    }, [])
    return (
        <div className="App">
            <BrowserRouter>
                <div className='content__wrap'>
                    <Header/>
                    <NavbarJS/>
                    <AppRouter/>
                </div>
                <Footer/>
            </BrowserRouter>
        </div>
    );
}

export default App;
