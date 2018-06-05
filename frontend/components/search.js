import React from 'react';
import SearchInput from 'grommet/components/SearchInput';
import Button from 'grommet/components/Button';
import FormField from 'grommet/components/FormField';
import {search} from '../lib/algolia'

class Search extends React.Component {
	
	state = {
		query: '',
		results: [],
		number_of_results: 0
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

	createNewAcademy = event  =>  {

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
								<div className="suggestion" key={result.id}>
									<Suggestion data={result} key={result.id} className='suggestion'/>
								</div>
							)}
						</div>
						<Button label="Can't find it? Create it!"
										onClick={this.createNewAcademy}
										href='#'
										accent={false}
										primary={true}
										className='create'/>
					</div>


				}



				{ /*language=CSS*/ }
				<style jsx  >{`
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


				`}</style>
			</div>

		);
	}
}


export default Search;