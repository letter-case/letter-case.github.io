import React, { Component } from "react";
import _ from "lodash";

import { Textarea } from "../../components/Form";

export default class LetterCase extends Component {
	handleChangeCase(type) {
		const { value } = this.textarea.state;

		switch(type) {
			case "camel":
				console.log(_.camelCase(value))
				this.textarea.setState({ value: _.camelCase(value) });
				break;
			case "kebab":
				this.textarea.setState({ value: _.kebabCase(value) });
				break;
			case "snake":
				this.textarea.setState({ value: _.snakeCase(value) });
				break;
			case "start":
				this.textarea.setState({ value: _.startCase(value) });
				break;
			case "lower":
				this.textarea.setState({ value: value.toLocaleLowerCase() });
				break
			case "upper":
				this.textarea.setState({ value: value.toLocaleUpperCase() });
				break;
			default:
		} 
	}

	render() {
		return (
			<div className={"container"}>
				<Textarea ref={textarea => this.textarea = textarea} />
				<div className={"actions"}>
					<button onClick={() => this.handleChangeCase("camel")}>
						camelCase
					</button>
					<button onClick={() => this.handleChangeCase("kebab")}>
						kebab-case
					</button>
					<button onClick={() => this.handleChangeCase("snake")}>
						snake_case
					</button>
					<button onClick={() => this.handleChangeCase("start")}>
						Start Case
					</button>
					<button onClick={() => this.handleChangeCase("lower")}>
						lower case
					</button>
					<button onClick={() => this.handleChangeCase("upper")}>
						UPPER CASE
					</button>
				</div>
			</div>
		);
	}
}
