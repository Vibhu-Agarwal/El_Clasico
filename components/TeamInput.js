import React from 'react';
import {
  View,
  StyleSheet,
  Image
} from 'react-native';
import Input from './Input';

const TeamInput = props => {

    return (
            <View styles={styles.teamInputContainer}>
                {/* <Image
                    source={props.teamImg}
                    resizeMode="cover"
                /> */}
                <Input 
                    onChangeText={props.onChangeText}
                    value={props.value}
                    maxLength={30}
                />
            </View>
        );
};

const styles = StyleSheet.create({
  teamInputContainer: {
    height: 200,
    width: 200,
  }
});

export default TeamInput;
