import React from 'react';
import Box from 'grommet/components/Box';
import FormField from 'grommet/components/FormField';

import Select from 'grommet/components/Select';

class BeltSelect extends React.Component {
	state = {
		belt: ''
	};

	handleSelectChange = name => event =>  {
		this.setState({
			[name]: event.value,
		}, () => {
			this.props.reduxUpdater(this.state.belt.value)
		});
	};

	render() {

		return (
			<div>
				<FormField label='Belt'
									 className='form-field'
									 htmlFor='belt'
									 size='large'
									 error=''>
					<Select placeHolder='Select Belt'
									inline={false}
									multiple={false}
									options={[
										{
											value: 'White',
											label: <Box direction='row'  justify='between' className='select-value'>  <span title='White'>White</span>  <span className='secondary'>  <div className='belt white'><div className="strap"></div> <div className="texture top"></div><div className="texture middle"></div><div className="texture middle-2"></div><div className="texture middle-3"></div><div className="texture bottom"></div> </div>   </span></Box>
										},
										{
											value: 'Blue',
											label: <Box direction='row'  justify='between' className='select-value'>  <span title='White'>Blue</span>  <span className='secondary'>  <div className='belt blue'><div className="strap"></div><div className="texture top"></div><div className="texture middle"></div><div className="texture middle-2"></div><div className="texture middle-3"></div><div className="texture bottom"></div> </div>   </span></Box>
										},
										{
											value: 'Purple',
											label: <Box direction='row'  justify='between' className='select-value'>  <span title='White'>Purple</span>  <span className='secondary'>  <div className='belt purple'><div className="strap"></div><div className="texture top"></div><div className="texture middle"></div><div className="texture middle-2"></div><div className="texture middle-3"></div><div className="texture bottom"></div> </div>   </span></Box>
										},
										{
											value: 'Brown',
											label: <Box direction='row'  justify='between' className='select-value'>  <span title='White'>Brown</span>  <span className='secondary'>  <div className='belt brown'><div className="strap"></div><div className="texture top"></div><div className="texture middle"></div><div className="texture middle-2"></div><div className="texture middle-3"></div><div className="texture bottom"></div> </div>   </span></Box>
										},
										{
											value: 'Black',
											label: <Box direction='row'  justify='between' className='select-value'>  <span title='White'>Black</span>  <span className='secondary'>  <div className='belt black'><div className="strap red"></div><div className="texture top"></div><div className="texture middle"></div><div className="texture middle-2"></div><div className="texture middle-3"></div><div className="texture bottom"></div> </div>   </span></Box>
										},
									]}
									value={this.state.belt}
									onChange={this.handleSelectChange('belt')} />
				</FormField>
				{ /*language=CSS*/ }
				<style jsx global >{`
          .belt {
            border: 1px solid #c7c7c7;
            width: 100px;
            height: 24px;
            position: relative;
          }

          .strap {
            width: 42%;
            right: 13px;
            height: 100%;
            background-color: black;
            position: absolute;
            z-index: 10;
          }

          .white {
            background-color: white;
          }

          .blue {
            background: linear-gradient(90deg, #2c4fff, #3393ff);
          }

          .purple {
            background: linear-gradient(90deg, rebeccapurple, #7b6399);
          }

          .brown {
            background: linear-gradient(90deg, saddlebrown, #8b6248);
          }

          .black {
            background-color: black;
          }

          .red {
            background-color: red;
          }

          .form-field {
            min-width: 330px;
          }

          .grommetux-select__options {
            padding: 0 1em;
            background-color: white;
          }

          .select-value {
            padding: 0 15px;
            align-items: center;
          }

          .texture {
            width: 100%;
            height: 2px;
            position: absolute;
            box-shadow: inset 5px 6px 5px -7px rgba(0, 0, 0, 0.75);
          }

          .bottom {
            top: 2px;
          }

          .middle {
            top: 6px;
          }

          .middle-2 {
            top: 10px;
          }

          .middle-3 {
            top: 14px;
          }

          .top {
            top: 18px;
          }

				`}</style>
			</div>

		);
	}
}


export default BeltSelect;