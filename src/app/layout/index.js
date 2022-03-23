import React from 'react';
import {withRouter} from 'react-router-dom';
import {renderRoutes} from 'react-router-config'
import {withStyles} from '@material-ui/core';
import {connect} from 'react-redux';
import classNames from 'classnames';
import AppContext from '../AppContext';
import Dialog from '../components/Dialog';

const styles = theme => ({
    root          : {

    }
});

const Layout = ({classes, settings, children}) => {
            return (
                <AppContext.Consumer>
                    {({routes}) => (
                        <div id="layout" className={classNames(classes.root)}>
                            <Dialog/>
                            {renderRoutes(routes)}
                            {children}
                        </div>
                    )}
                </AppContext.Consumer>
            );
};

function mapStateToProps({})
{
    return {
    }
}

export default withStyles(styles, {withTheme: true})(withRouter(connect(mapStateToProps)(Layout)));
