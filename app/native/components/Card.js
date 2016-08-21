import React, { Component } from 'react';
import { getTheme } from 'react-native-material-kit';
import { View, Text } from 'react-native';

const theme = getTheme();

class Card extends Component {

    render() {

        const cardStyle = {...theme.cardStyle, marginTop: 40 };

        return (
            <View style={cardStyle}>
                {
                //<Image source={{uri : base64Icon}} style={theme.cardImageStyle} />
                }
                <Text style={theme.cardContentStyle}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Mauris sagittis pellentesque lacus eleifend lacinia...
                </Text>
                {
                //<View style={theme.cardMenuStyle}>{menu}</View>
                }
                <Text style={theme.cardActionStyle}>My Action</Text>
            </View>
        )
    }

}

export default Card;
