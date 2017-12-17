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

const sliderStyles = `${rcSliderIndex} ${rcToolTip}`;

const styles = theme => ({
	dropzone_container: {
		width: '100%'
	},
	grid: {
		flexGrow: 1,
	},
	grid_item: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center'
	},
	button: {
		margin: theme.spacing.unit,
	},
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
			<Grid container spacing={16} className={classes.grid}>
				<Grid item xs={12}>
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
				</Grid>

				{this.state.files.length > 0 &&
				<Grid container spacing={16} justify="center" className={classes.grid}>
					<Grid item xs={6} className={classes.grid_item}>
						<AvatarEditor
							ref={this.setEditorRef}
							image={this.state.files[0]}
							width={200}
							height={200}
							border={10}
							borderRadius={200}
							color={[250, 250, 250, 1]} // RGBA
							scale={this.state.scale}
							rotate={0}
						/>
						<Typography type="body1">Drag to reposition your image</Typography>
					</Grid>
					<Grid item xs={6} className={classes.grid_item}>
						<Typography type="body1">Scale your image</Typography>
						<div style={wrapperStyle}>
							<Slider min={0} max={200} defaultValue={100} handle={handle} onChange={this.onSliderChange} />
						</div>
						<Button raised color="primary" className={classes.button}>
							Done
						</Button>
					</Grid>
				</Grid>
				}
				
				<style global jsx>
					{sliderStyles}
				</style>
			</Grid>
		);
	}
}



export default withRoot(withStyles(styles)(ImageUpload));