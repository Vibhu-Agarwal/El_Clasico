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
                    <View style={styles.numberContainer}>
                        <BodyText style={styles.number}>{props.scoreA}</BodyText>
                    </View>
                </View>
                <BodyText>{props.children}</BodyText>
                <View style={styles.scoreAddContainer}>
                    <View style={styles.numberContainer}>
                        <BodyText style={styles.number}>{props.scoreB}</BodyText>
                    </View>
                    <MainButton onPress={props.scoreBHandler}>+</MainButton>
                </View>
            </Card>
        </View>
    );
};

const styles = StyleSheet.create({
    tileContainer: {
        marginBottom: "3%",
        paddingHorizontal: "2%",
        width: "100%"
    },
    tileContainerCard: {
        flexDirection: 'row',
        paddingVertical: "0%",
        paddingHorizontal: "2%",
        textAlignVertical: "center",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%"
    },
    scoreAddContainer: {
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: "space-between",
        width: "30%",
    },
    numberContainer: {
        flexDirection: 'row',
        paddingHorizontal: 5
    },
    number: {
      fontSize: 22
    }
});

export default ScoreTile;
