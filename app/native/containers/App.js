import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

class App extends Component {

    render() {
        console.log(this.props);
        return (
            <View>
                {this.props.exercises.map(e =>
                    <Text>{e.name}</Text>
                )}
            </View>
        );
    }

}

function mapStateToProps(state) {
    return state;
}

export default connect(mapStateToProps, {

})(App);
