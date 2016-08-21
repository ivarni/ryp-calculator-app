import React, { Component } from 'react';
import {
    getTheme,
    MKButton,
    MKColor,
} from 'react-native-material-kit';
import {
    View,
    Text,
} from 'react-native';

import BaseRypField from '../../common/BaseRypField';
import {
    FlatPrimaryButton,
    FlatSecondaryButton,
    RaisedPrimaryButton,
    RaisedSecondaryButton,
} from './Buttons';
import Br from './Br';

const theme = getTheme();

class RypField extends BaseRypField {


    render() {
        const {
            header,
            text,
        } = this.props;

        const {
            editLabel,
            editValue,
        } = this.state;

        return (
            <View style={cardStyle}>
                <Text style={titleStyle}>
                    {header}
                    <Br />
                    <Text style={textStyle} fontSize={18}>
                        {text}
                    </Text>
                </Text>
                <View style={theme.cardActionStyle}>
                    <View style={{flexDirection: 'row'}}>
                        <RaisedPrimaryButton
                            onPress={this.onEditValue}
                            text="Endre vekt"
                        />
                        <RaisedSecondaryButton
                            text="Endre øvelse"
                        />
                    </View>
                </View>
            </View>
        )
    }
}

const cardStyle = {
    ...theme.cardStyle,
    marginTop: 0,
};
const titleStyle = {
    ...theme.cardContentStyle,
    fontSize: 20,
    fontWeight: 'bold',
    color: 'rgba(0, 0, 0, 0.870588)',
};
const textStyle = {
    ...theme.cardContentStyle,
    fontSize: 18,
}

export default RypField;
