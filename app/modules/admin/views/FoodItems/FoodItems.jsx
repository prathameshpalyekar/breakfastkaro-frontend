import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Formsy from 'formsy-react';
import FC from 'components/formsy';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import Chip from '@material-ui/core/Chip';
import './FoodItems.less';

class FoodItems extends Component {
    constructor(props) {
        super(props);
        this.state = {
            canSubmit: false
        };
        this.submit = this.submit.bind(this);
        this.enableButton = this.enableButton.bind(this);
        this.disableButton = this.disableButton.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        const { isFetching, errorMessage } = nextProps;
        if (this.state.submitted && !isFetching) {
            if (errorMessage) {
                this.props.showResponse(errorMessage);
            } else {
                const { user } = nextProps;
                const { signedToken } = user;
                localStorage.setItem('breakfastkaro_token', signedToken)
                this.props.showResponse('Logged in successfully.');
                this.props.closeForm();
            }

            this.setState({
                submitted: false
            });
        }
    }

    submit(model) {
        const { dispatch } = this.props;
        dispatch(login(model));
        this.setState({
            submitted: true
        });
    }

    enableButton() {
        this.setState({
            canSubmit: true
        });
    }

    disableButton() {
        this.setState({
            canSubmit: false
        });
    }

    render() {
        const { canSubmit, submitted } = this.state;
        return (
            <Paper className="-category" elevation={1}>
                <div className="-header">
                    Categories
                </div>
                <div className="-existing-categories">
                    <div className="-title">
                        Existing categories
                    </div>
                    <div className="-categories">
                        <Chip label="Basic Chip" className="-chip"/>
                        <Chip label="Basic Chip" className="-chip"/>
                        <Chip label="Basic Chip" className="-chip"/>
                        <Chip label="Basic Chip" className="-chip"/>
                        <Chip label="Basic Chip" className="-chip"/>
                        <Chip label="Basic Chip" className="-chip"/>
                        <Chip label="Basic Chip" className="-chip"/>
                        <Chip label="Basic Chip" className="-chip"/>
                    </div>
                </div>
                <div className="-form">
                    <Formsy onValidSubmit={this.submit} onValid={this.enableButton} onInvalid={this.disableButton}>
                        <FC.Input type="text" name="category" label="New Category" required/>
                        <Button type="submit" disabled={!canSubmit || submitted} variant="outlined" className="-action-submit">
                            Submit
                            {submitted && <CircularProgress size={24} className="-loader"/>}
                        </Button>
                    </Formsy>
                </div>
            </Paper>
        );
    }
}

export default FoodItems;
