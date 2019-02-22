import React, { Component } from 'react';
import GlobalHeader from 'modules/globalHeader';
import Footer from 'modules/footer/Footer';

class App extends Component {
    render() {
        const { location } = this.props;
        return (
            <div className="app">
                <GlobalHeader location={location}/>
                {this.props.children}
                <Footer/>
            </div>
        )
    }
}

export default App;