import React, { Component } from 'react';
import { UserForm } from './components/UserForm';

import index from './index';




class App extends Component {
    render() {
        return (
            <div className="App">
                <UserForm  />
            </div>
        );
    }
}


export default App;