import React, { Component } from 'react';

class BaseRypField extends Component {

    constructor() {
        super();
        this.onEditValue = this.onEditValue.bind(this);
        this.state = {
            editLabel: false,
            editValue: false,
        };
    }

    onEditValue() {
        this.setState({
            editLabel: false,
            editValue: true,
        });
    }
}

export default BaseRypField;
