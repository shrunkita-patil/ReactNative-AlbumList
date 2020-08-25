import React, { Component } from 'react';
import {View, Text, TextInput, Image} from 'react-native';
import CardSection from "../component/CardSection";
import Card from "../component/Card";
import Button from "../component/Button";
import Input from "../component/Input";

class LoginForm extends Component{
    // static navigationOptions = {
    //     title: 'Taylor Swift',
    // };

    state = {email:''};

    onButtonPress(){
        const {navigate} = this.props.navigation;
        navigate('List', {name: 'Jane'})
    }

    render(){
        const {textInputStyle,imageStyle} = styles;
        return(
            <View style={{flex: 1}}>
                <Image
                    style={imageStyle}
                    source = {{ uri : 'https://i.imgur.com/K3KJ3w4h.jpg' }}
                />
            <Card>
                <CardSection>
                     <Input
                            label='Email :'
                            placeholder="Enter email address"
                            value={this.state.text}
                            onChangeText={email => this.setState({email})}
                            style={textInputStyle}/>
                </CardSection>

                    <CardSection>
                        <Input
                            secureTextEntry
                            label='Password :'
                            placeholder="Enter password"
                            value={this.state.text}
                            onChangeText={password => this.setState({password})}
                            style={textInputStyle}/>
                    </CardSection>

                    <CardSection>
                        <Button onPress={this.onButtonPress.bind(this)}>
                            Log In</Button>
                    </CardSection>

                </Card>
            </View>
        );
    }

}

const styles = {

    textInputStyle : {
       height: 40,
        flex : 1,
        borderWidth : 1,
        borderColor : 'gray',
        borderRadius : 5
    },
    imageStyle :{
        height: 80,
        width: 80,
        borderRadius: 40,
        alignItems :'center',
        justifyContent : 'center',
        marginTop : 30,
        marginBottom : 30,
        alignSelf : 'center'
    }

};

export  default LoginForm;