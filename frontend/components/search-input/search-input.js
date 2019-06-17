import React from 'react';
import {search} from '../../lib/algolia'
import * as actionCreators from '../../lib/actionCreators';
import {connect} from 'react-redux';
import compose from 'recompose/compose';
import {bindActionCreators} from 'redux';
import FormInput from '../form-input/form-input';
import Button from '../button/button';
import RoundedAvatar from '../rounded-avatar/rounded-avatar';
import TertiaryCta from "../tertiary-cta/tertiary-cta";

class SearchInput extends React.Component {

	state = {
		hasSelectedAcademy: false,
		query: '',
		results: [],
		number_of_results: 0,
		selected_academy: ''
	}

	handleChange = event => {
		this.setState({
			query: event.target.value,
		});
		this.search(this.state.query);
	};

	search = async query => {
		const results = await search(query);
		console.log('search results', results)
		this.setState({
			results: results.hits,
			number_of_results: results.nbHits
		});
	}

	/*TODO: genericise this search component, right now it's tightly coupled to academy search*/
	selectAcademy = academy => {
		this.setState({
			hasSelectedAcademy: true,
			query: '',
			selected_academy: academy,
		}, () => {
			this.props.selectAcademyRegister(academy.id);
		});
	}

	createNewAcademy = event => {
		this.props.showCreateAcademy();
		this.setState({
			query: '',
		});
	};

	onClickCancel = event => {
		this.setState({
			hasSelectedAcademy: false,
			query: '',
			selected_academy: null,
		}, () => {
			this.props.selectAcademyRegister(null);
		});
	}

	render() {
		const {placeholder} = this.props;
		const Suggestion = this.props.suggestion;

		return (
			<div className='search-input'>

				{!this.state.hasSelectedAcademy &&
				<div>
					<div className='form-field'>
						<FormInput
							placeHolder={placeholder}
							className='search'
							value={this.state.query}
							handleChange={this.handleChange}
						/>
					</div>

					{this.state.number_of_results > 0 && this.state.query.length > 0 &&
					<div className='suggestions-container'>
						<div className='suggestions'>
							{this.state.results.map(result =>
								<div className="suggestion" key={result.id} onClick={() => {
									this.selectAcademy(result)
								}}>
									<Suggestion data={result} key={result.id}/>
								</div>
							)}
						</div>
						<div className="button-container">
							<Button text="Can't find it? Create it!"
											clickHandler={this.createNewAcademy}
											color="blue"
							/>
						</div>

					</div>
					}

				</div>
				}

				{this.state.hasSelectedAcademy &&
				<div className="selected-academy-container">
					<div className="academy-details">
						<RoundedAvatar
							imageUrl={this.state.selected_academy.avatar_url}
							alt="academy image"
							size="regular"
						/>
						<div className="name">
							<h4>{this.state.selected_academy.name}</h4>
							<TertiaryCta clickHandler={this.onClickCancel} text="Remove" color="blue" />
						</div>
					</div>
				</div>

				}


			</div>

		);
	}
}

function mapStateToProps(state) {
	return {
		show_create_academy: state.register.show_create_academy,
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators(actionCreators, dispatch)
}

const reduxWrapper = connect(mapStateToProps, mapDispatchToProps);

export default compose(
	reduxWrapper,
)(SearchInput);