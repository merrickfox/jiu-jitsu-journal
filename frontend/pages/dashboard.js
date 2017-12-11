import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import withRoot from '../components/withRoot';
import Page from '../components/page'
import Week from '../components/week-picker'
import Grid from 'material-ui/Grid';
import {bindActionCreators} from 'redux';
import * as actionCreators from '../lib/actionCreators';
import {connect} from 'react-redux';
import compose from 'recompose/compose'
import withData from '../lib/withData'

const styles = {
};

class Dashboard extends Component {

  render() {
    return (
      <div className={this.props.classes.root}>
        <Page>
          <div>
            <Week {...this.props} />
          </div>
        </Page>
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log('state', state)
	return{
		date: state.date,
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators(actionCreators, dispatch)
}

const reduxWrapper = connect(mapStateToProps, mapDispatchToProps);

export default compose(
	withData,
	reduxWrapper,
  withRoot,
	withStyles(styles),
)(Dashboard)

//export default withData(connect(mapStateToProps, mapDispatchToProps)(withRoot(withStyles(styles)(Dashboard))));
