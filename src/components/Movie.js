import  React from 'react';
import { Text, View, Image, Linking,TouchableOpacity } from 'react-native';
import { Rating } from 'react-native-elements';

export const Movie = (props) => {
    const loadInBrowser = () => {
        Linking.openURL(props.image).catch(err => console.error("Couldn't load page", err));
      };

    return (
        <View
            style={{
                flex: 1,
                flexDirection: 'column',
                alignItems: 'flex-start',
                width: 200,
                borderRadius: 10,
                margin: 3,
            }}>
            <TouchableOpacity style={{flex:0.7}} onPress={loadInBrowser}>
                <Image
                style={{height:120, width:120, borderRadius: 20}}
                resizeMode="contain"
                source={{ uri: props.image }}>
                </Image>
            </TouchableOpacity>
            <Text style={{fontSize: 7}}>
                {props.category}
            </Text>
            <Rating  readonly imageSize={12} style={{ paddingVertical: 10 }}/>
            <TouchableOpacity onPress={loadInBrowser}>
                <Text style={{fontWeight: 'bold', fontSize: 15}}>
                    {props.title}
                </Text>
            </TouchableOpacity>
        </View>
    )
  }