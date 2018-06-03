import React, { Component } from 'react';
import withRoot from './withRoot';
import autobind from 'autobind-decorator'
import AvatarEditor from 'react-avatar-editor'
import Dropzone from 'react-dropzone'
import config from '../config'
import Tooltip from 'rc-tooltip';
import Slider from 'rc-slider';
import rcSliderIndex from 'rc-slider/assets/index.css';
import rcToolTip from 'rc-tooltip/assets/bootstrap.css';
import Heading from 'grommet/components/Heading';
import Button from 'grommet/components/Button';
import Spinning from 'grommet/components/icons/Spinning';
import LoadingTick from './loading-tick'

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
			this.uploadImage(data);
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
	async uploadImage (image) {
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
			this.props.handleAvatarUrl(data);
		}
	}



	render() {
		return (
			<div>
				{this.state.files.length === 0 &&
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
					<Heading tag='h4'>
						Please drag your image file here, or click here to select an image.
					</Heading>
					<div>
						<Heading tag='h4'>
							{
								this.state.files.map(f => <span key={f.name}>{f.name} - {f.size} bytes</span>)
							}
						</Heading>

					</div>
				</Dropzone>
				}

				{this.state.files.length > 0 && (this.state.loading || this.state.done) &&
					<div className='loading'>
						<LoadingTick done={this.state.done} message='Image saved, you can always change it later.' />
					</div>
				}

				{this.state.files.length > 0 && !this.state.loading && !this.state.done &&
					<div>
						<div className='editor-container'>

							<div className="editor">
								<AvatarEditor
									ref={this.setEditorRef}
									image={this.state.files[0]}
									width={200}
									height={200}
									border={10}
									borderRadius={200}
									color={[245,245,245, 1]} // RGBA
									scale={this.state.scale}
									rotate={0}
								/>
								<div >Drag to reposition your image</div>
							</div>

							<div className="slider">
								<div type="body1">Scale your image</div>
								<div style={wrapperStyle}>
									<Slider min={0} max={200} defaultValue={100} handle={handle} onChange={this.onSliderChange} />
								</div>
							</div>



						</div>
						<Button label='Save'
										onClick={this.onClickSave}
						/>


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