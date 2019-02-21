import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Content from './Content';
import './AboutUs.less';

class AboutUs extends Component {
    render() {
        return (
            <div className="about-us-container container">
                <div className="row">
                    <div className="col-sm-8 col-sm-offset-2">
                        <Content/>
                    </div>
                </div>
            </div>
        )
    }
}

export default AboutUs;