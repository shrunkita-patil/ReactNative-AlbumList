import React from 'react';
import {View,TextInput,Text} from 'react-native';

const Input = ({label, value, onChangeText,placeholder,secureTextEntry}) => {

    const {textInputStyle,labelStyle,containerStyle} = styles;

    return (
        <View style={containerStyle}>
            <Text style={labelStyle}>{label}</Text>
            <TextInput
                secureTextEntry={secureTextEntry}
                placeholder={placeholder}
                autoCorrect={false}
                value={value}
                onChangeText={onChangeText}
                style={textInputStyle}/>
        </View>
    );
};

const styles = {

    textInputStyle : {
        height: 30,
        flex : 2,
        paddingRight : 5,
        paddingLeft : 5,
        color : '#000',
        fontSize : 16,
        lineHeight : 20
    },
    labelStyle: {
        fontSize: 18,
        paddingLeft: 20,
        flex: 1
    },
    containerStyle : {
        height: 50,
        flex : 1,
        flexDirection : 'row',
        alignItems : 'center'
    }

};

export default Input;