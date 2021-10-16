import React from 'react';

export class Button extends React.Component {
	render() {
		return (
			<button
				className={ this.props.light ? 'light-button' : 'dark-button' }
        onClick={this.props.onClick}
        >
				Refresh
			</button>
		);
	}
}
//giving an onCLick attribute with the value equal to the passed-in prop
