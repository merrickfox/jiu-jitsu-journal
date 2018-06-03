import React from 'react';
import Box from 'grommet/components/Box';
import FormField from 'grommet/components/FormField';

import Select from 'grommet/components/Select';

class BeltSelect extends React.Component {
	state = {
		belt: ''
	};

	handleSelectChange = name => event =>  {
		console.log('select change', name)
		console.log('select change', event)
		this.setState({
			[name]: event.value,
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
											label: <Box direction='row'  justify='between' className='select-value'>  <span title='White'>White</span>  <span className='secondary'>  <div className='belt white'><div className="strap"></div> </div>   </span></Box>
										},
										{
											value: 'Blue',
											label: <Box direction='row'  justify='between' className='select-value'>  <span title='White'>Blue</span>  <span className='secondary'>  <div className='belt blue'><div className="strap"></div> </div>   </span></Box>
										},
										{
											value: 'Purple',
											label: <Box direction='row'  justify='between' className='select-value'>  <span title='White'>Purple</span>  <span className='secondary'>  <div className='belt purple'><div className="strap"></div> </div>   </span></Box>
										},
										{
											value: 'Brown',
											label: <Box direction='row'  justify='between' className='select-value'>  <span title='White'>Brown</span>  <span className='secondary'>  <div className='belt brown'><div className="strap"></div> </div>   </span></Box>
										},
										{
											value: 'Black',
											label: <Box direction='row'  justify='between' className='select-value'>  <span title='White'>Black</span>  <span className='secondary'>  <div className='belt black'><div className="strap red"></div> </div>   </span></Box>
										},
									]}
									value={this.state.belt}
									onChange={this.handleSelectChange('belt')} />
				</FormField>
				{ /*language=CSS*/ }
				<style jsx global >{`
          .belt {
            border: 1px solid black;
            width: 100px;
            height: 100%;
            position: relative;
          }

          .strap {
            width: 42%;
            right: 13px;
            height: 100%;
            background-color: black;
            position: absolute;

          }

          .white {
            background-color: white;
          }

          .blue {
            background-color: #2c4fff;
          }

          .purple {
            background-color: rebeccapurple;
          }

          .brown {
            background-color: saddlebrown;
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

				`}</style>
			</div>

		);
	}
}


export default BeltSelect;