import React, { Component } from 'react';
import GlobalHeader from 'modules/globalHeader';

class App extends Component {
    render() {
        return (
            <div className="app">
                <GlobalHeader/>
                {this.props.children}
            </div>
        )
    }
}

export default App;