import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import UserForm from './components/UserForm'
import ViewList from './components/ViewList'
//import { render } from '@testing-library/react';

class App extends Component {
    state = {
        ruta: 'lista',
    }
    render() {
        const { ruta } = this.state
        return ( <
            div className = "App" > {
                ruta === 'lista' && <
                ViewList / >
            } {
                ruta === 'formulario' && <
                    UserForm / >
            } <
            /div>
        );
    }
}

export default App;