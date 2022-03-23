import React from 'react';
import {
    withStyles,
    Button,
    Dialog,
    DialogActions,
    DialogTitle,
    DialogContent,
    Icon,
    IconButton
} from '@material-ui/core';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';

import classNames from 'classnames';
import moment from "moment";
import { withTranslation } from 'react-i18next';
// redux
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {closeDialog} from "../../../../store/actions/ui";
import { resetOffer } from "../../store/actions";

const styles = theme => ({
    dialogTitle: {
        padding: '0',

    },
    dialogContent: {
        lineHeight: '1.5',
        color: 'rgba(0, 0, 0, 0.54)',
    },
    closeBtn: {
        position: 'absolute',
        right: '20px',
        zIndex: 1,
        color: '#fff'
    },
    fullDescriptionlink: {
        'cursor': 'pointer'
    },
    rsvpBtn: {
        'width': '100%',
        'margin': '0 12px'
    },
    rsvpBtnIcon: {
        marginLeft: '2px',
        fontSize: '16px'
    },
    dialogTitleImageBox: {
        position: 'relative',
        overflow: 'hidden',
        marginBottom: '12px',


    },
    dialogTitleImage: {
        display: 'block',
        width: '100%'
    },
    dialogTitleTextBox: {
        position: 'absolute',
        bottom: '0',
        left: '0',
        width: '100%',
        padding: '20px 0',
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        boxShadow: '7px 8px 12px 20px rgba(0, 0, 0, 0.8)'
    },
    locationAddress: {
        margin: '0',
        color: '#fff',
        paddingLeft: '20px'
    },
    locationName: {
        margin: '0',
        paddingLeft: '20px',
        color: '#fff',
        fontFamily: 'helveticabold'
    },
    geoMap: {
        height: '200px'
    }

});


const Offer = (props) => {
    const { offer, t, classes } = props;
    const [fullDescription, setFullDescription] = React.useState(false)
    const startDate = moment(offer.startDate);
    const endDate = moment(offer.endDate);
    let fullDescriptionText = t('offers.dialog.read_more');

    if (fullDescription) {
        fullDescriptionText = t('offers.dialog.read_less');
    }
    const toggleDescriptionText = (e) => {
        e.preventDefault();
        setFullDescription(!fullDescription);
    };

    const close = () => {
        const {resetOffer, closeDialog} = props;
        closeDialog();
        resetOffer();
    };

    return (
        <React.Fragment>
            <DialogTitle className={classNames(classes.dialogTitle)}>
                 <IconButton
                    className={classNames(classes.closeBtn)}
                    onClick={close}
                >
                    <Icon>close</Icon>
                </IconButton>
                <div className={classNames(classes.dialogTitleImageBox)}>
                    <img src={offer.image} className={classNames(classes.dialogTitleImage)} alt="" />
                    <div className={classNames(classes.dialogTitleTextBox)}>
                        <p className={classNames(classes.locationAddress)}>{`${offer.location.name}, ${offer.location.address.addressLocality}`}</p>
                        <h2 className={classNames(classes.locationName)}>{offer.name}</h2>
                    </div>
                </div>
            </DialogTitle>
            <DialogContent className={classNames(classes.dialogContent)} >
                    <div className="dialog-body">
                        <div>
                            <h5>{t('offers.dialog.date_and_time')}</h5>
                            <p>{startDate.format('dddd, MMMM D')}</p>
                            <p>{`${startDate.format('h:mm A')} - ${endDate.format('h:mm A z')}`}</p>
                        </div>

                        <div>
                            <h5>{t('offers.dialog.description')}</h5>
                            <p className={ !fullDescription ? 'truncate' : '' }>{offer.description}</p>
                            <a onClick={toggleDescriptionText} className={classNames(classes.fullDescriptionlink)}>{fullDescriptionText}</a>
                        </div>

                        <div>
                            <h5>{t('offers.dialog.location')}</h5>
                            <p>{offer.location.name}</p>
                            <p>{offer.location.address.streetAddress}</p>
                            <p>{`${offer.location.address.addressLocality}, ${offer.location.address.addressRegion} ${offer.location.address.postalCode}`}</p>
                            <a href={`https://maps.google.com/?q=${offer.geoLatitude},${offer.geoLongitude}`} className="direction-btn" target='_blank'>{t('offers.dialog.get_directions')}</a>
                        </div>

                        <div className={classNames(classes.geoMap)}>
                            <MapContainer center={[offer.geoLatitude, offer.geoLongitude]} zoom={13} scrollWheelZoom={false}>
                              <TileLayer
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                              />
                              <Marker position={[offer.geoLatitude, offer.geoLongitude]}>
                              </Marker>
                            </MapContainer>
                        </div>
                    </div>
            </DialogContent>
            <DialogActions>

                    <Button
                        href={offer.offerUrl}
                        target="_blank"
                        variant="contained"
                        color="secondary"
                        className={classNames(classes.rsvpBtn)}
                    >
                        {t('offers.dialog.rsvp')}
                        <Icon className={classNames(classes.rsvpBtnIcon)} color="inherit">open_in_new</Icon>
                    </Button>
                </DialogActions>
        </React.Fragment>
    );
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        resetOffer: resetOffer,
        closeDialog: closeDialog
    }, dispatch);
}

function mapStateToProps({ offers }) {
    return {
        offer: offers.offer
    }
}

export default withTranslation()(withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(Offer)));
