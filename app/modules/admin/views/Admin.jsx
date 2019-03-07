import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Promotion from './Promotion/Promotion';
import Categories from './Categories/Categories';
import FoodItems from './FoodItems/FoodItems';
import './Admin.less';

class Admin extends Component {
    render() {
        return (
            <div className="admin-container container">
                <div className="row">
                    <div className="col-sm-6">
                        <Promotion/>
                    </div>
                    <div className="col-sm-6">
                        <Categories/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12">
                        <FoodItems/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Admin;