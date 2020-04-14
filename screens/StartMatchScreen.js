import React, { useState, useRef, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
} from 'react-native';
import ImageText from '../components/ImageText';
import ScoreTile from '../components/ScoreTile';

import { teamAimg, teamBimg } from '../constants/images';

const StartMatchScreen = props => {

    const scoreHandlerA = attr => {
      props.setTeamA(attr, props.teamA_score[attr]+1)
    }
    const scoreHandlerB = attr => {
      props.setTeamB(attr, props.teamB_score[attr]+1)
    }

    return (
      <View style={styles.screen}>
        <View style={styles.teamNameContainer}>
          <ImageText img={require('../assets/img/real-madrid.png')}>{props.teamA}</ImageText>
          <ImageText img={require('../assets/img/barcelona.png')}>{props.teamB}</ImageText>
        </View>
        <View style={styles.scoreBoardContainerView}>
          <ScrollView style={styles.scoreBoardContainer}>
            {props.allScoreTypes.map(scoreType => {
              return (
                <ScoreTile
                  key={scoreType}
                  scoreA={props.teamA_score[scoreType]}
                  scoreB={props.teamB_score[scoreType]}
                  scoreAHandler={() => scoreHandlerA(scoreType)}
                  scoreBHandler={() => scoreHandlerB(scoreType)}
                >
                  {scoreType}
                </ScoreTile>
              );
            })}
          </ScrollView>
        </View>
      </View>
    );
}


const styles = StyleSheet.create({
  screen: {
    padding: 10,
    alignItems: 'center',
  },
  teamNameContainer: {
    flexDirection: 'row'
  },
  scoreBoardContainer: {
    marginTop: "7%",
  },
  scoreBoardContainerView: {
    width: "90%",
  }
})

export default StartMatchScreen;