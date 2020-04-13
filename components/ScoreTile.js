import React from 'react';
import {
  View,
  StyleSheet,
} from 'react-native';

import BodyText from './BodyText';
import Card from './Card';
import MainButton from './MainButton';

import Colors from '../constants/colors';

const ScoreTile = props => {

    return (
        <View style={styles.tileContainer}>
            <Card style={styles.tileContainerCard}>
                <View style={styles.scoreAddContainer}>
                    <MainButton onPress={props.scoreAHandler}>+</MainButton>
                    <BodyText>{props.scoreA}</BodyText>
                </View>
                <BodyText>{props.children}</BodyText>
                <View style={styles.scoreAddContainer}>
                    <BodyText>{props.scoreB}</BodyText>
                    <MainButton onPress={props.scoreBHandler}>+</MainButton>
                </View>
            </Card>
        </View>
    );
};

const styles = StyleSheet.create({
    tileContainer: {
        
    },
    tileContainerCard: {
        flexDirection: 'row',
        marginVertical: 10,
        paddingVertical: "5%",
        paddingHorizontal: "5%",
    },
    scoreAddContainer: {
        flexDirection: 'row',
        alignItems: "center",
    }
});

export default ScoreTile;
