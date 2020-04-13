import React from 'react';
import {
  View,
  StyleSheet,
  Image
} from 'react-native';
import TitleText from './TitleText';

const ImageText = props => {

    return (
            <View style={styles.teamInputContainer}>
                <Image
                    source={props.img}
                    resizeMode="center"
                    style={styles.image}
                />
                <TitleText>{props.children}</TitleText>
            </View>
        );
};

const styles = StyleSheet.create({
  teamInputContainer: {
    height: 200,
    width: 200,
    alignItems: "center"
  },
  image: {
    width: '100%',
    height: '100%'
  },
});

export default ImageText;
