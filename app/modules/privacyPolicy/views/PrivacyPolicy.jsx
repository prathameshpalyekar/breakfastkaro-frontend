import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import './PrivacyPolicy.less';

class PrivacyPolicy extends Component {
    render() {
        return (
            <div className="policy-container container">
                <div className="row">
                    <div className="col-sm-8 col-sm-offset-2">
                        <Paper className="-policy-page" elevation={1}>
                            <div className="-header">
                                Privacy Policy
                            </div>
                            <div className="-content">
                                In addition to the Personal Information identified above, 
                                our web servers automatically identify computers by their IP addresses. 
                                Company may use IP addresses to analyze trends, administer the site track 
                                users movement and gather broad demographic information for aggregate use. 
                                To emphasize, IP addresses are not linked to Personal.
                            </div>
                        </Paper>
                    </div>
                </div>
            </div>
        )
    }
}

export default PrivacyPolicy;