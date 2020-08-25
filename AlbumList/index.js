/**
 * @format
 */

// import library to create components
import React, {Component} from 'react';
import {Text, AppRegistry, View} from 'react-native';
import Header from './src/component/header';
import AlbumList from './src/Album/AlbumList'
import LoginForm from "./src/Login/LoginForm";
import App from './App';

// create a component
const MainComp = () => (
    <View style={{flex : 1}}>
        {/*<LoginForm/>*/}
        {/*<AlbumList/>*/}
        <App/>
    </View>
);

// render the component
AppRegistry.registerComponent('SampleApp', () => MainComp);

