import React , { Component } from 'react';
import  {ScrollView,ActivityIndicator} from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail'
import CardSection from "../component/CardSection";

// Class Component
class AlbumList extends Component {

    state = { album : [], animating: true };

    componentDidMount() {
        axios.get('https://rallycoding.herokuapp.com/api/music_albums').then( 
            response => this.setState({album: response.data}),this.state.animating=false);
    }

    renderAlbums(){
        return this.state.album.map(album => <AlbumDetail key = {album.title} album={album}/>);
    }

    render() {
        console.log(this.state);
        return (
            <ScrollView>
                {this.state.animating ? <ActivityIndicator animating={this.state.animating} style={[{
                    height : 600,
                    alignItems: 'center',
                    justifyContent: 'center'
                   }]} size="large" />: this.renderAlbums()}

            </ScrollView>
        );
    }
}

export default AlbumList;