import React from 'react';
import { View, Text, TextInput } from 'react-native';


const Field = ({ 
    label, placeholder, secureTextEntry, autoCorrect, value, onChangeText, styleContainer, styleLabel, styleTextInput
                }) => {
    const { containerStyle, labelStyle, textInputStyle } = styles;
    return (
        <View style={[containerStyle, styleContainer]}>
            <Text style={[labelStyle, styleLabel]}>{label}</Text>
            <TextInput
            placeholder={placeholder}
            secureTextEntry={secureTextEntry}
            autoCorrect={autoCorrect}
            value={value}
            onChangeText={onChangeText}
            style={[textInputStyle, styleTextInput]}
            />
        </View>
    );
}

const styles ={
    containerStyle: {
        flexDirection: 'column',
        alignItems: 'center',
    },
    labelStyle: {
        fontSize: 20,
    },
    textInputStyle: {
        fontSize: 20,
        lineHeight: 23,
        width: 150,
        borderWidth: 1,
        borderRadius: 5,
    }
}

export { Field };
