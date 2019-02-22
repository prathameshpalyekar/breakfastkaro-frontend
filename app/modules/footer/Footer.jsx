import React, { Component } from 'react';
import { INSTAGRAM_LINK, PHONE_NUMBER, EMAIL } from './helpers';
import './Footer.less';

class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <div className="-copyright">
                    2019 &#169; Breakfastkaro.com
                </div>
                <div className="-contact">
                    <a className="-phone" href={PHONE_NUMBER}>
                        <i className="material-icons">call</i>
                    </a>
                    <a className="-email" href={EMAIL}>
                        <i className="material-icons">mail_outline</i>
                    </a>
                    <a target="_blank" href={INSTAGRAM_LINK} className="-instagram">
                        <span ></span>
                    </a>
                </div>
            </div>
        )
    }
}

export default Footer;