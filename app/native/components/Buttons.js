import React from 'react';

import {
    getTheme,
    MKButton,
    MKColor,
} from 'react-native-material-kit';
import {
    Text,
} from 'react-native';

const theme = getTheme();

const flatButton = props => (
    <MKButton
        backgroundColor={MKColor.Transparent}
        maskColor={theme.bgPlain}
        rippleColor={theme.bgPlain}
        shadowAniEnabled={false}
        onPress={props.onPress}
        style={{ borderRadius: 2 }}
    >
        <Text
            pointerEvents="none"
            style={{...flatButtonTextStyle, color: props.color}}
        >
                {props.text}
        </Text>
    </MKButton>
);

const raisedButton = props => (
    <MKButton
        backgroundColor={props.backgroundColor}
        shadowRadius={2}
        shadowOffset={{width:0, height:2}}
        shadowOpacity={.7}
        shadowColor="black"
        onPress={props.onPress}
        style={{marginRight: 30}}
    >
        <Text
            pointerEvents="none"
            style={{...raisedButtonTextStyle}}
        >
            {props.text}
        </Text>
    </MKButton>
)

export const FlatPrimaryButton = props => flatButton({
    color: MKColor.Cyan,
    ...props,
});

export const FlatSecondaryButton = props => flatButton({
    color: `rgb(${MKColor.RGBPink})`,
    ...props,
});

export const RaisedPrimaryButton = props => raisedButton({
    backgroundColor: MKColor.Cyan,
    ...props,
});

export const RaisedSecondaryButton = props => raisedButton({
    backgroundColor: `rgb(${MKColor.RGBPink})`,
    ...props,
})

const flatButtonTextStyle = {
    fontSize: 18,
    fontWeight: 'bold',
    padding: 15,
}

const raisedButtonTextStyle = {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    padding: 15,
}
