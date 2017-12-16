import React from 'react';
import { withStyles } from 'material-ui/styles';
import TextField from 'material-ui/TextField';
import {format} from 'date-fns'
import { gql, graphql } from 'react-apollo'
import compose from 'recompose/compose'
import autobind from 'autobind-decorator'
import AvatarEditor from 'react-avatar-editor'
import Dropzone from 'react-dropzone'
import config from '../config'

const styles = theme => ({
	container: {
		display: 'flex',
		flexWrap: 'wrap',
	},
	textField: {
		marginLeft: theme.spacing.unit,
		marginRight: theme.spacing.unit,
		width: 200,
	},
	menu: {
		width: 200,
	},
});


class BjjClassForm extends React.Component {
	state = {
		name: 'Cat in the Hat',
		files: [],
		test_img_url: ''
	};

	handleChange = name => event => {
		this.setState({
			[name]: event.target.value,
		});
	};

	@autobind
	onClickSave() {
		if (this.editor) {
			// This returns a HTMLCanvasElement, it can be made into a data URL or a blob,
			// drawn on another canvas, or added to the DOM.
			const canvas = this.editor.getImage();
			canvas.toBlob((blob) => {
				console.log(blob)
				var newImg = document.createElement('img'),
					url = URL.createObjectURL(blob);

				this.setState({
					test_img_url: url,
				});

				const data = canvas.toDataURL();
				this.uploadImage(data);
			});
			// If you want the image resized to the canvas size (also a HTMLCanvasElement)
			const canvasScaled = this.editor.getImageScaledToCanvas()
		}
	}


	setEditorRef = (editor) => this.editor = editor

	@autobind
	onDrop(files) {
		this.setState({
			files
		});
	}

	@autobind
	uploadImage (image) {
		const url = `${config.LOCAL_API}image-upload`;

		const data = {
			image
		}

		fetch(url, {
			method: 'POST',
			body: JSON.stringify(data)
		}).then((res) => {
			console.log(res)
		})

	}

	@autobind
	submit () {
		// console.log('submitting')
		// this.props.createActivity();
		this.onClickSave();
	}

	render() {
		const { classes, activity_date} = this.props;
		console.log(format(activity_date, 'yyyy-mm-dd'))
		return (
			<form className={classes.container} noValidate autoComplete="off">
				<TextField
					id="name"
					label="Name"
					className={classes.textField}
					value={this.state.name}
					onChange={this.handleChange('name')}
					margin="normal"
				/>
				<TextField
					id="date"
					label="Activity Date"
					type="date"
					defaultValue={format(activity_date, 'YYYY-MM-DD')}
					className={classes.textField}
					margin="normal"
					InputLabelProps={{
						shrink: true,
					}}
				/>

				<div className="dropzone">
					<Dropzone
						multiple={false}
						onDrop={this.onDrop}
					>
						<p>Try dropping some files here, or click to select files to upload.</p>
					</Dropzone>
					<ul>
						{
							this.state.files.map(f => <li key={f.name}>{f.name} - {f.size} bytes</li>)
						}
					</ul>
				</div>

				<AvatarEditor
					ref={this.setEditorRef}
					image={this.state.files[0]}
					width={250}
					height={250}
					border={10}
					borderRadius={200}
					color={[255, 255, 255, 0.6]} // RGBA
					scale={1.5}
					rotate={0}
				/>
				<button type="button" onClick={this.onClickSave}>click</button>

				<img src={this.state.test_img_url} alt=""/>
			</form>
		);
	}
}

const addClass = gql`
  mutation AddBjjClass($class: BjjClassInput!) {
		addBjjClass(class: $class) {
			id,
			user
		}
	}
`

const gqlWrapper = graphql(addClass, {
	props: ({ ownProps, mutate }) => ({
		createActivity: (data) => mutate({
			variables: {
				"class": {
					"activity_date": 111111,
					"user": "frontend2",
					"time": 45456456,
					"instructor_id": "2gerg2rg2g-2erg2reg",
					"academy_id": "2gerg2rg2g-2erg2reg",
					"class_length": 90,
					"warmup_time": 15,
					"technique_time": 30,
					"rolling_time": 45,
					"techniques_learned": [
						{
							"id": "234-23-4234-sd",
							"notes": "sdfsdf sdf sdf sdf sdfsdfsdf sdf s"
						}
					],
					"sparring_details": [
						{
							"nemesis_id": "2gerg2rg2g-2erg2reg",
							"techniques_hit": ["2gerg2rg2g-2erg2reg", "2gerg2rg2g-2erg2reg"],
							"techniques_succumbed": ["2gerg2rg2g-2erg2reg", "2gerg2rg2g-2erg2reg"],
							"notes": "sdfsdfsdf asdas dasd asd asdsd"
						},
						{
							"nemesis_id": "2gerg2rg2g-2ergasd2reg",
							"techniques_hit": ["2gerg2rg2g-2erg2reg", "2gerg2rgasd2g-2erg2reg"],
							"techniques_succumbed": ["2gerg2rasdsag2g-2erg2reg", "2gerg2rg2g-2erg2reg"],
							"notes": "sdfsdfsdf asdas dasd asd asasdasd222dsd"
						}
					]
				}
			}
		}).then(({ data }) => {
			console.log('got data', data);
		}).catch((error) => {
			console.log('there was an error sending the query', error);
		})
	})
})

export default compose(
	gqlWrapper,
	withStyles(styles),
)(BjjClassForm);


const bjjClass = {
	"activity_date": 3452435245,
	"user": "2regrg-2reg2erg-2ergerg",
	"time": 45456456,
	"instructor_id": "2gerg2rg2g-2erg2reg",
	"academy_id": "2gerg2rg2g-2erg2reg",
	"class_length": 90,
	"warmup_time": 15,
	"technique_time": 30,
	"rolling_time": 45,
	"techniques_learned": [
		{
			"id": "234-23-4234-sd",
			"notes": "sdfsdf sdf sdf sdf sdfsdfsdf sdf s"
		}
	],
	"sparring_details": [
		{
			"nemesis_id": "2gerg2rg2g-2erg2reg",
			"techniques_hit": ["2gerg2rg2g-2erg2reg", "2gerg2rg2g-2erg2reg"],
			"techniques_succumbed": ["2gerg2rg2g-2erg2reg", "2gerg2rg2g-2erg2reg"],
			"notes": "sdfsdfsdf asdas dasd asd asdsd"
		},
		{
			"nemesis_id": "2gerg2rg2g-2ergasd2reg",
			"techniques_hit": ["2gerg2rg2g-2erg2reg", "2gerg2rgasd2g-2erg2reg"],
			"techniques_succumbed": ["2gerg2rasdsag2g-2erg2reg", "2gerg2rg2g-2erg2reg"],
			"notes": "sdfsdfsdf asdas dasd asd asasdasd222dsd"
		}
	]
}