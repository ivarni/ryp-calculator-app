import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

import RypField from '../components/RypField';

class App extends Component {
    render() {
console.log(this.props.exercises)
        return (
            <View>
                <View>
                    {this.props.exercises.map(e =>
                        <RypField
                            key={`input-${e.name}`}
                            header={e.label}
                            text={`${e.value} kg`}
                        >
                        </RypField>
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
