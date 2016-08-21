import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

import Card from '../components/Card';

class App extends Component {

    render() {
        console.log(this.props);
        return (
            <View>
                <View>
                    {this.props.exercises.map(e =>
                        <Card key={e.name}>{e.name}</Card>
                    )}
                </View>
            </View>
        );
    }

}

function mapStateToProps(state) {
    return state;
}

export default connect(mapStateToProps, {

})(App);
