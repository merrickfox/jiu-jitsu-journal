import { autobind } from 'core-decorators';
import { techniqueMap } from '../config/technique-map';
import { fetchVideoFromId } from '../api/youtube-api';
import { gql, graphql } from 'react-apollo';


class TechniqueForm extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			youtube_value: '',
			youtube_id: '',
			youtube_data: '',
			position: 'GUARD',
			dominance: 'TOP',
			technique_type: 'SUBMISSION',

		};
	}

	@autobind
	youtubeIdParser (url) {
		const regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
		const match = url.match(regExp);
		return (match&&match[7].length==11)? match[7] : false;
  }

	@autobind
	async handleYoutubeUrlChange(event) {
		const value = event.target.value;
		const id = this.youtubeIdParser(value);

		if (id) {
			const apiData = await fetchVideoFromId(id);
			if (apiData.items.length && apiData.items[0].snippet) {
				this.setState({
					youtube_value: value,
					youtube_id: id,
					youtube_data: apiData.items[0].snippet
				});
			}
		}

	}

	@autobind
	handleChange(event) {
		this.setState({[event.target.name]: event.target.value});
	}

	@autobind
	handleSubmit(event) {
		if (this.state.youtube_id) {
			this.props.mutate({
				variables: {
					youtube_id: this.state.youtube_id,
					title: this.state.youtube_data.title,
					position: this.state.position,
					dominance: this.state.dominance,
					technique_type: this.state.technique_type,
				}
			})
		}
		event.preventDefault();
	}

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<label>
					Which position is this technique from?:
					<select
						name="position"
						id="position"
						value={this.state.position}
						onChange={this.handleChange}
					>
						{techniqueMap.position.map(item => (
							<option
								value={item.option}
								key={item.option}
							>
								{item.name}
							</option>
						))}
					</select>
				</label>

				<label>
					From top (or dominant) or bottom?:
					<select
						name="dominance"
						id="dominance"
						value={this.state.position}
						onChange={this.handleChange}
					>
						{techniqueMap.dominance.map(item => (
							<option
								value={item.option}
								key={item.option}
							>
								{item.name}
							</option>
						))}
					</select>
				</label>

				<label>
					What kind of technique is demonstrated?:
					<select
						name="technique_type"
						id="technique_type"
						value={this.state.position}
						onChange={this.handleChange}
					>
						{techniqueMap.technique_type.map(item => (
							<option
								value={item.option}
								key={item.option}
							>
								{item.name}
							</option>
						))}
					</select>
				</label>

				<label>
					Youtube URL (eg: https://www.youtube.com/watch?v=2kvM6ACOxHw):
					<input type="text" value={this.state.value} onChange={this.handleYoutubeUrlChange} />
				</label>
				{this.state.youtube_data &&
				<div className="submission-preview">
					<h3>{this.state.youtube_data.title}</h3>
					<img src={this.state.youtube_data.thumbnails.default.url} alt=""/>
				</div>
				}
				<input type="submit" value="Submit" />


				{ /*language=SCSS*/ }
				<style jsx>{`

      		form {
      			display: flex;
						flex-direction: column;
      			justify-content: center;
      		}

					label {
            margin: 14px;
					}

					select, input{
						margin: 0 16px;
					}

    		`}</style>
			</form>
		);
	}

}

const submitTechnique = gql`
  mutation createTechnique($youtube_id: String!, $title: String!, $position: String!, $dominance: String!, $technique_type: String!) {
    createTechnique(youtube_id: $youtube_id, title: $title, position: $position, dominance: $dominance, technique_type: $technique_type) {
      youtube_id
    }
  }
`;

export default graphql(submitTechnique)(TechniqueForm);