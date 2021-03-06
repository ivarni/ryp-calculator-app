import React, { Component, PropTypes } from 'react';
import { Provider } from 'react-redux';

import App from './App';

class Root extends Component {

    render() {
        return (
            <Provider store={this.props.store}>
                <App />
            </Provider>
        );
    }
}

Root.propTypes = {
    store: PropTypes.object.isRequired,
};

export default Root;
