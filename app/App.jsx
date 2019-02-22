import React, { Component } from 'react';
import GlobalHeader from 'modules/globalHeader';
import Footer from 'modules/footer/Footer';

class App extends Component {
    render() {
        return (
            <div className="app">
                <GlobalHeader/>
                {this.props.children}
                <Footer/>
            </div>
        )
    }
}

export default App;