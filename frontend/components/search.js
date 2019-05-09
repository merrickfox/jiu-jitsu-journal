import React from 'react';
import {search} from '../lib/algolia'
import * as actionCreators from '../lib/actionCreators';
import {connect} from 'react-redux';
import compose from 'recompose/compose';
import {bindActionCreators} from 'redux';


class Search extends React.Component {
	
	state = {
		query: '',
		results: [],
		number_of_results: 0,
		selected_academy: ''
	}
	
	handleChange = event  =>  {
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

	selectAcademy = id => {
		this.setState({
			query: '',
			selected_academy: id,
		}, () => {
			this.props.selectAcademyRegister(id);
		});
	}

	createNewAcademy = event  =>  {
		this.props.showCreateAcademy();
		this.setState({
			query: '',
		});
	};

	render() {
		const {placeholder} = this.props;
		const Suggestion = this.props.suggestion;

		return (
			<div className='search-container'>
				<FormField
									 className='form-field'
									 htmlFor='search'
									 size='large'
									 error=''>
					<SearchInput
						placeHolder={placeholder}
						className='search'
						value={this.state.query}
						onDOMChange={this.handleChange}
					/>
				</FormField>
				{ this.state.number_of_results > 0 && this.state.query.length > 0 &&
					<div className='suggestions-container'>
						<div className='suggestions'>
							{this.state.results.map( result =>
								<div className="suggestion" key={result.id} onClick={()=>{this.selectAcademy(result.id)}}>
									<Suggestion data={result} key={result.id} />
								</div>
							)}
						</div>
						<div className="button-container">
							<Button label="Can't find it? Create it!"
											onClick={this.createNewAcademy}
											href='#'
											accent={false}
											primary={true}
											className='create'/>
						</div>

					</div>


				}



				{ /*language=CSS*/ }
				<style jsx >{`
          .search-container {
						width: 100%;
            position: relative;
					}

					.suggestions-container {
						background-color: white;
						display: flex;
						flex-direction: column;
						border: 1px solid;
            border-color: rgba(0,0,0,.15);
					}

					.suggestions {
            margin-bottom: 1em;
					}

					.suggestion {
						border-bottom: 1px solid gray;

					}

          .suggestion:hover {
            background-color: lemonchiffon;

          }

					.button-container {
						width: 100%;
						display: flex;
						justify-content: center;
						margin-bottom: 1em;
					}

				`}</style>
			</div>

		);
	}
}

function mapStateToProps(state) {
	return{
		show_create_academy: state.register.show_create_academy,
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators(actionCreators, dispatch)
}

const reduxWrapper = connect(mapStateToProps, mapDispatchToProps);

export default compose(
	reduxWrapper,
)(Search);