import React, { Component } from 'react';
import AvatarEditor from 'react-avatar-editor'
import Dropzone from 'react-dropzone'
import config from '../../config/config'
import Tooltip from 'rc-tooltip';
import Slider from 'rc-slider';
import rcSliderIndex from 'rc-slider/assets/index.css';
import rcToolTip from 'rc-tooltip/assets/bootstrap.css';
import LoadingTick from '../loading-tick/loading-tick';
import CONFIG from '../../config/config';
import Button from '../button/button';

{ /*language=CSS*/ }
const styles = `	
	.editor-container {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	
	.editor {
		display: flex;
		flex-direction: column;
		margin-bottom: 2em;
	}
	
	.slider {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	
	.loading {
		width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
	}
`

const sliderStyles = `${styles} ${rcSliderIndex} ${rcToolTip}`;

const createSliderWithTooltip = Slider.createSliderWithTooltip;
const Range = createSliderWithTooltip(Slider.Range);
const Handle = Slider.Handle;
const wrapperStyle = { width: 400, margin: 25 };

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
		loading: false,
		done: false,
	};


	onDrop = (files) => {
		this.setState({
			files
		});
	}

	onClickSave = () => {
		if (this.editor) {
			const canvas = this.editor.getImage();
			const data = canvas.toDataURL();
			this.uploadImage(data);
		}
	}

	onClickCancel = () => {
		this.setState({
			files: []
		});
	}


	setEditorRef = (editor) => this.editor = editor

	onSliderChange = (value) => {
		const scale = value / 100;
		this.setState({
			scale,
		});
	}

	uploadImage = async (image) => {
		const url = `${config.API_URL}image-upload`;

		const data = {
			image
		}

		this.setState({loading: true});

		const response = await fetch(url, {
			method: 'POST',
			body: JSON.stringify(data)
		})

		this.setState({loading: false});

		if (response.status !== 200) {
			console.log('Looks like there was a problem. Status Code: ' +
				response.status);
			return;
		} else {
			this.setState({done: true});

			const data = await response.json();
			this.props.reduxUpdater(data.s3Response.Location);
		}
	}



	render() {
		return (
			<div className="image-upload">

				{this.state.files.length === 0 &&
				<Dropzone
					multiple={false}
					onDrop={this.onDrop}
					accept=".jpeg,.jpg,.png"
					style={{
						textAlign: 'center',
						color: '#515F6C',
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
						borderColor: '#B3ECFF',
						borderStyle: 'dashed',
						borderRadius: '10px',
						backgroundColor: '#E6F9FF'
					}}
					rejectStyle={{
						backgroundColor: 'red'
					}}
				>
					<h4 >
						{CONFIG.COPY.IMAGE_UPLOAD.DROPZONE}
					</h4>
					<div>
						<h4 >
							{
								this.state.files.map(f => <span key={f.name}>{f.name} - {f.size} bytes</span>)
							}
						</h4>

					</div>
				</Dropzone>
				}

				{this.state.files.length > 0 && (this.state.loading || this.state.done) &&
					<div className='loading'>
						<LoadingTick done={this.state.done} message='Image saved, you can always change it later.' />
					</div>
				}

				{this.state.files.length > 0 && !this.state.loading && !this.state.done &&
					<div className='editor-container'>

						<div className="step">
							<div className="labelling">
								<label>Step 1.</label>
								<span className="additional">
								{CONFIG.COPY.IMAGE_UPLOAD.STEP_ONE}
							</span>
							</div>

							<div className="hackoutline"></div>
							<AvatarEditor
								ref={this.setEditorRef}
								image={this.state.files[0]}
								width={200}
								height={200}
								border={10}
								borderRadius={200}
								color={[245,247,250, 1]} // RGBA
								scale={this.state.scale}
								rotate={0}
							/>
						</div>

						<div className="step">
							<div className="labelling">
								<label>Step 2.</label>
								<span className="additional">
								{CONFIG.COPY.IMAGE_UPLOAD.STEP_TWO}
							</span>
							</div>

							<div className="slider">
								<div style={wrapperStyle}>
									<Slider min={0} max={200} defaultValue={100} handle={handle} onChange={this.onSliderChange} />
								</div>
							</div>
						</div>

						<div className="step">
							<div className="labelling">
								<label>Step 3.</label>
								<div className="additional">
									<Button clickHandler={this.onClickSave} text="Save" />
									<button onClick={this.onClickCancel}>cancel</button>
								</div>
							</div>

						</div>




					</div>
				}

				<style global jsx>
					{sliderStyles}
				</style>
			</div>
		);
	}
}



export default ImageUpload;