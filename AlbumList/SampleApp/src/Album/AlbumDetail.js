import React , { Component } from 'react';
import { View, Text ,Image,Linking} from 'react-native';
import Card from "../component/Card";
import CardSection from "../component/CardSection";
import Button from "../component/Button";

const AlbumDetail = ({album}) => {

    const { textViewStyle,thumbnailStyle,thumbnailContainerStyle,headerTextStyle,headerContainStyle,imageStyle} = styles;
    const { title,artist,thumbnail_image,image,url } = album
    return(

    <Card>
        <CardSection>
            <View style={thumbnailContainerStyle}>
                <Image
                    style={thumbnailStyle}
                    source = {{ uri : thumbnail_image }}
                />
            </View>
            <View style={headerContainStyle}>
              <Text style={headerTextStyle}>{title}</Text>
                <Text>{artist}</Text>
            </View>
        </CardSection>

        <CardSection>
            <Image
                style={imageStyle}
                source={{uri: image}}/>
        </CardSection>

        <CardSection>
            <Button onPress={() => Linking.openURL(url)}>
                Buy Now
            </Button>
        </CardSection>
    </Card>
    )
};

const styles = {
  headerContainStyle : {
      flexDirection : 'column',
      justifyContent : 'space-around'
  },
    headerTextStyle : {
      fontSize : 16,
        fontWeight : 'bold'
    },
  thumbnailStyle : {
      height : 50,
      width : 50,
  },
    thumbnailContainerStyle : {
      justifyContent: 'center',
        alignItems : 'center',
        marginLeft : 10,
        marginRight : 10
    },
    imageStyle : {
      height : 300,
        flex : 1,
        width : null
    }

};

export  default  AlbumDetail;