import React from 'react';
import {
  View,
  StyleSheet,
  Image
} from 'react-native';
import Input from './Input';

const TeamInput = props => {

    return (
            <View style={styles.teamInputContainer}>
                <Image
                    source={props.teamImg}
                    resizeMode="center"
                    style={styles.image}
                />
                <Input 
                    onChangeText={props.onChangeText}
                    value={props.value}
                    maxLength={30}
                    style={{...props.style}}
                />
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
    height: '80%'
  },
});

export default TeamInput;
