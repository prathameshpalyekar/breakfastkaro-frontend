import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import './TermsConditions.less';

class Terms extends Component {
    render() {
        return (
            <div className="terms-container container">
                <div className="row">
                    <div className="col-sm-8 col-sm-offset-2">
                        <Paper className="-terms-page" elevation={1}>
                            <div className="-header">
                                Ordering
                            </div>
                            <div className="-content">
                                User is hereby allowed to use the BreakfastKaro subject 
                                to acceptance of the terms and conditions and the Privacy Policy 
                                on the BreakfastKaro Website (“Terms”). BreakfastKaro retains the right 
                                to change the Terms from time to time and such modified Terms shall 
                                be immediately applicable. Every time you use the BreakfastKaro Service, 
                                shall constitute your acceptance of changes made to Terms. For detailed 
                                terms, please refer our website www.BreakfastKaro.com
                            </div>
                        </Paper>
                    </div>
                </div>
            </div>
        )
    }
}

export default Terms;