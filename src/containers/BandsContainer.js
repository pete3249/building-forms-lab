import React, { Component } from 'react'
import { connect } from 'react-redux';
import BandInput from '../components/BandInput';
import Bands from '../components/Bands';

class BandsContainer extends Component {
  render() {
    return(
      <div>
        < BandInput addBand={this.props.addBand} />
        <ul>< Bands bands={this.props.bands} /></ul>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    bands: state.bands
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addBand: (name) => dispatch({ type: 'ADD_BAND', name: name})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer);
