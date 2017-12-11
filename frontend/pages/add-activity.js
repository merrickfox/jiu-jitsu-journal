import React, { Component } from 'react';
import { withStyles } from 'material-ui/styles';
import withRoot from '../components/withRoot';
import Page from '../components/page'
import BjjClassForm from '../components/addBjjClassForm'
import {bindActionCreators} from 'redux';
import * as actionCreators from '../lib/actionCreators';
import {connect} from 'react-redux';
import compose from 'recompose/compose'
import withData from '../lib/withData'

const styles = {
};

class AddActivity extends Component {

	render() {
		return (
      <div className={this.props.classes.root}>
        <Page title="Add Activity">
          <div>
            <BjjClassForm {...this.props}/>
          </div>
        </Page>
      </div>
		);
	}
}

function mapStateToProps(state) {
	console.log('state', state)
	return{
		activity_date: state.dates.activity_date,
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
)(AddActivity);

