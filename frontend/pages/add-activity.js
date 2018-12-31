import React, { Component } from 'react';
import { withStyles } from 'material-ui/styles';
import withRoot from '../components/withRoot';
import Page from '../components/page/page'
import BjjClassForm from '../components/add-bjj-class-form'
import {bindActionCreators} from 'redux';
import * as actionCreators from '../lib/actionCreators';
import {connect} from 'react-redux';
import compose from 'recompose/compose'
import withData from '../lib/withData'
import Toast from '../components/toast'

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
				<Toast />
      </div>
		);
	}
}

function mapStateToProps(state) {
	console.log('state', state)
	return{
		activity_date: state.dates.activity_date,
		toast_data: state.toast,
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators(actionCreators, dispatch)
}

const reduxWrapper = connect(mapStateToProps, mapDispatchToProps);

export default compose(
	withData,
	reduxWrapper,
)(AddActivity);

