import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import IconButton from '@material-ui/core/IconButton';
import './Modal.less';

class Modal extends Component {
    renderHeader() {
        const { title } = this.props;
        if (!title) {
            return null;
        }

        return (
            <div className="-modal-header">
                {title}
            </div>
        );
    }

    render() {
        const { closeForm } = this.props;
        return (
            <Dialog open={this.props.open} onClose={closeForm} className="-modal" fullWidth>
                {this.renderHeader()}
                <IconButton aria-label="Delete" className="-close-modal" onClick={closeForm}>
                    <i className="material-icons">clear</i>
                </IconButton>
                <div className="-modal-body">
                    {this.props.children}
                </div>
            </Dialog>
        );
    }
}

export default Modal;