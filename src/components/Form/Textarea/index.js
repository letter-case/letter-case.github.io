import React, { Component } from "react";

import "./Textarea.scss";

export class Textarea extends Component {
	constructor(props) {
		super(props);

		this.state = {
			value: ""
		};
	}

	render() {
		return (
			<textarea className={"textarea"} onChange={event => this.setState({ value: event.currentTarget.value })} value={this.state.value} />
		);
	}
}
