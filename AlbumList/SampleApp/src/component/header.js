// import library to create components
import React from 'react';
import {Text, View, StatusBar, SafeAreaView} from 'react-native';

// make a functional component
const Header = (props) => {
    const  { textStyle , viewStyle, statusBarStyle, parentViewStyle} = styles;
    return (
      //  <View style={parentViewStyle}>
            <SafeAreaView>
                <StatusBar style={statusBarStyle} />
                    <View style={viewStyle}>
                        <Text style={textStyle}> {props.headerText} </Text>
                    </View>
            </SafeAreaView>
     //   </View>
    );
};

// make a style for component

const styles ={
    textStyle : {
        fontSize : 20,
        fontWeight : 'bold'
    },
    viewStyle : {
        justifyContent : 'center',
        alignItems : 'center',
        backgroundColor : '#F8F8F8',
        height: 60,
        padding : 20,
        shadowColor : 'gray',
        shadowOffset : { width : 0, height: 8 },
        shadowOpacity : 0.5
    },
    statusBarStyle: {
        statusBarStyle: 'dark-content',
        flex : 1
    },
    parentViewStyle: {
        flex: 1
    }

}

// make the component available to other files in app
// AppRegistry.registerComponent('SampleApp', () => Header);
export default Header;