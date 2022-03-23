import React from 'react';
import {
    withStyles,
    Button
} from '@material-ui/core';
import classNames from 'classnames';
import { withTranslation } from 'react-i18next';
import Offer from "./offer"

import { bindActionCreators } from "redux";
import { connect } from 'react-redux';
import withReducer from '../../../store/withReducer';
import reducer from '../store/reducers';
import { getOffer } from "../store/actions";
const styles = theme => ({
    root: {
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    }
});

const Offers = (props) => {
    const { getOffer, t, classes } = props
    const dialogOptions = {
        children: <Offer />,
        maxWidth: 'xs'
    }
    return (
        <div className={classNames(classes.root)}>
            <Button
                onClick={() => getOffer("5d3752f1310000fc74b0788d", dialogOptions)}
                variant="contained"
                color="secondary"
            >
                {t('offers.open_offer')}
            </Button>
        </div>
    )
};

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        getOffer: getOffer
    }, dispatch);
}

function mapStateToProps({ offers, ui }) {
    return {
    }
}

export default withReducer('offers', reducer)(withTranslation()(withStyles(styles, { withTheme: true })(connect(mapStateToProps, mapDispatchToProps)(Offers))));
