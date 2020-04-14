import React from 'react';
import {
  View,
  StyleSheet,
} from 'react-native';

import BodyText from './BodyText';
import Card from './Card';
import MainButton from './MainButton';

const GoalTile = props => {

    return (
        <View style={{...styles.tileContainer, ...props.style}}>
            <Card style={styles.tileContainerCard}>
                <View style={styles.scoreAddContainer}>
                    <View style={styles.numberContainer}>
                        <BodyText style={styles.number}>{props.scoreA}</BodyText>
                    </View>
                    <MainButton
                        onPress={props.scoreAHandler}
                        style={{backgroundColor: props.colorTeamA}}
                        textStyle={{color: props.textColorTeamA}}
                    >
                        Goal
                    </MainButton>
                </View>
                <BodyText>{props.children}</BodyText>
                <View style={styles.scoreAddContainer}>
                    <View style={styles.numberContainer}>
                        <BodyText style={styles.number}>{props.scoreB}</BodyText>
                    </View>
                    <MainButton
                        onPress={props.scoreBHandler}
                        style={{backgroundColor: props.colorTeamB}}
                        textStyle={{color: props.textColorTeamB}}
                    >
                        Goal
                    </MainButton>
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
        width: "100%",
        elevation: 0,
    },
    scoreAddContainer: {
        alignItems: "center",
        justifyContent: "center",
        width: "40%",
    },
    numberContainer: {
        flexDirection: 'row',
        paddingHorizontal: 5
    },
    number: {
      fontSize: 22
    }
});

export default GoalTile;
