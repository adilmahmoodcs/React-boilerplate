import React from 'react';
import { Dialog, Hidden } from '@material-ui/core';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as Actions from '../store/actions';

const AppDialog = (props) => {
    return (
        <>
            <Hidden xsDown>
                <Dialog
                    open={props.state}
                    onClose={props.closeDialog}
                    classes={{paper: 'dialog'}}
                    aria-labelledby="dialog-title"
                    {...props.options}
                />
            </Hidden>
            <Hidden smUp>
                <Dialog
                    open={props.state}
                    onClose={props.closeDialog}
                    classes={{paper: 'dialog'}}
                    aria-labelledby="dialog-title"
                    fullScreen={true}
                    {...props.options}
                />
            </Hidden>
        </>

    );
};

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        closeDialog: Actions.closeDialog
    }, dispatch);
}

function mapStateToProps({ ui }) {
    return {
        state: ui.dialog.state,
        options: ui.dialog.options
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppDialog);
