import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Button } from './component';

class Main extends Component {
    onButtonPress(){
        Actions.add();        
    }

    render() {
       const { containerStyle, styleWrapButton, styleButton, styleText } = styles;
        return (
            <View style={containerStyle}>
                <View style={styleWrapButton}>
                    {/* tombol buat pindah ke Add Form */}
                    <Button
                    styleButton={styleButton}
                    styleText={styleText}
                    onPress={this.onButtonPress.bind(this)}
                    >
                    +
                    </Button>
                </View>
            </View>
        );
    }
}

const styles = {
    containerStyle: {
        flex: 1,
        flexDirection: 'column'
    },
    styleWrapButton: {
        position: 'absolute',
        alignItems: 'flex-end',
        bottom: 0,
        left: 0,
        right: 0
    },
    styleButton: {
        borderColor: 'black',
        borderRadius: 40,
        width: 80,
        height: 80,
        borderWidth: 1,
        backgroundColor: 'black'
    },
    styleText: {
        color: 'white',
        fontSize: 20,
    },
};

export default Main;
