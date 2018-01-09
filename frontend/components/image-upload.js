import React, { Component } from 'react';
import { withStyles } from 'material-ui/styles';
import withRoot from './withRoot';
import autobind from 'autobind-decorator'
import AvatarEditor from 'react-avatar-editor'
import Dropzone from 'react-dropzone'
import config from '../config'
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import Tooltip from 'rc-tooltip';
import Slider from 'rc-slider';
import rcSliderIndex from 'rc-slider/assets/index.css';
import rcToolTip from 'rc-tooltip/assets/bootstrap.css';
import Button from 'material-ui/Button';
import Paper from 'material-ui/Paper';

const sliderStyles = `${rcSliderIndex} ${rcToolTip}`;

const styles = theme => ({
	dropzone_container: {
		width: '100%'
	},
	grid: {
		flexGrow: 1,
	},
	grid_item: {

	},
	button: {
		margin: theme.spacing.unit,
	},
	paper: theme.mixins.gutters({
		paddingTop: 16,
		paddingBottom: 16,
		marginTop: theme.spacing.unit * 3,
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		minHeight: '250px'
	}),
});


const createSliderWithTooltip = Slider.createSliderWithTooltip;
const Range = createSliderWithTooltip(Slider.Range);
const Handle = Slider.Handle;
const wrapperStyle = { width: 400, margin: 50 };

const handle = (props) => {
	const { value, dragging, index, ...restProps } = props;
	return (
		<Tooltip
			prefixCls="rc-slider-tooltip"
			overlay={value}
			visible={dragging}
			placement="top"
			key={index}
		>
			<Handle value={value} {...restProps} />
		</Tooltip>
	);
};



class ImageUpload extends Component {
	state = {
		files: [],
		test_img_url: '',
		scale: 1,
	};

	@autobind
	onDrop(files) {
		this.setState({
			files
		});
	}

	@autobind
	onClickSave() {
		if (this.editor) {
			const canvas = this.editor.getImage();
			const data = canvas.toDataURL();
			this.props.onSave(data);
			this.props.openToast('Image cropped');
		}
	}


	setEditorRef = (editor) => this.editor = editor

	@autobind
	onSliderChange (value) {
		const scale = value / 100;
		this.setState({
			scale,
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



	render() {
		const {classes} = this.props;
		return (
			<div>
				<Dropzone
					multiple={false}
					onDrop={this.onDrop}
					accept=".jpeg,.jpg,.png"
					style={{
						display: 'flex',
						flexDirection: 'column',
						justifyContent: 'center',
						alignItems: 'center',
						pointer: 'cursor',
						width: '100%',
						height: '200px',
						boxSizing: 'border-box',
						padding: '2em',
						borderWidth: '3px',
						borderColor: '#8f8f8f',
						borderStyle: 'dashed',
						borderRadius: '10px',
						backgroundColor: '#fafafa'
					}}
					rejectStyle={{
						backgroundColor: 'red'
					}}
				>
					<Typography type="headline">Please drag your image file here, or click here to select an image.</Typography>
					<div>
						<Typography type="body2">

								{
									this.state.files.map(f => <span key={f.name}>{f.name} - {f.size} bytes</span>)
								}

						</Typography>
					</div>
				</Dropzone>


				{this.state.files.length > 0 &&
					<div>
						<Paper className={classes.paper} elevation={4}>
							<AvatarEditor
								ref={this.setEditorRef}
								image={this.state.files[0]}
								width={200}
								height={200}
								border={10}
								borderRadius={200}
								color={[255, 255, 255, 1]} // RGBA
								scale={this.state.scale}
								rotate={0}
							/>
							<Typography type="body1">Drag to reposition your image</Typography>
						</Paper>

						<Paper className={classes.paper} elevation={4}>
							<Typography type="body1">Scale your image</Typography>
							<div style={wrapperStyle}>
								<Slider min={0} max={200} defaultValue={100} handle={handle} onChange={this.onSliderChange} />
							</div>
							<Button raised color="primary" className={classes.button} onClick={this.onClickSave}>
							Done
							</Button>
						</Paper>
					</div>
				}

				<style global jsx>
					{sliderStyles}
				</style>
			</div>
		);
	}
}



export default withRoot(withStyles(styles)(ImageUpload));