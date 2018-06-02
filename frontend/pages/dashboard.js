import React, { Component } from 'react';
import { withStyles } from 'material-ui/styles';
import withRoot from '../components/withRoot';
import Page from '../components/page'
import Week from '../components/week-picker'
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
      <div >
        <Page title="Dashboard">
          <div>
            <Week {...this.props} />
						<div>sdfsfd</div>
          </div>
        </Page>
      </div>
    );
  }
}

function mapStateToProps(state) {
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
)(Dashboard);

