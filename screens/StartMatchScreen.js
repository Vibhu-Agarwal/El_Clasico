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
import GoalTile from '../components/GoalTile';

import { teamAimg, teamBimg } from '../constants/images';
import Colors from '../constants/colors';

const StartMatchScreen = props => {

    const scoreHandlerA = attr => {
      let valueObj = {}
      valueObj[attr] = props.teamA_score[attr]+1
      if (attr === 'On Target')
      {
        valueObj['Shots'] = props.teamA_score['Shots']+1
      }
      props.setTeamA(valueObj)
    }
    const scoreHandlerB = attr => {
      let valueObj = {}
      valueObj[attr] = props.teamB_score[attr]+1
      if (attr === 'On Target')
      {
        valueObj['Shots'] = props.teamB_score['Shots']+1
      }
      props.setTeamB(valueObj)
    }

    return (
      <View style={styles.screen}>
        <View style={styles.teamNameContainer}>
          <ImageText img={require('../assets/img/real-madrid.png')}>{props.teamA}</ImageText>
          <ImageText img={require('../assets/img/barcelona.png')}>{props.teamB}</ImageText>
        </View>
        <GoalTile
            style={{marginTop: "10%"}}
            scoreA={props.teamA_score['Goal']}
            scoreB={props.teamB_score['Goal']}
            scoreAHandler={() => scoreHandlerA('Goal')}
            scoreBHandler={() => scoreHandlerB('Goal')}
            colorTeamA={Colors.teamA}
            colorTeamB={Colors.teamB}
            textColorTeamA={Colors.teamAText}
            textColorTeamB={Colors.teamBText}
          >
        </GoalTile>
        <View style={styles.scoreBoardContainerView}>
          <ScrollView>
            {props.allScoreTypes.map(scoreType => {
              return (
                <ScoreTile
                  key={scoreType}
                  scoreA={props.teamA_score[scoreType]}
                  scoreB={props.teamB_score[scoreType]}
                  scoreAHandler={() => scoreHandlerA(scoreType)}
                  scoreBHandler={() => scoreHandlerB(scoreType)}
                  colorTeamA={Colors.teamA}
                  colorTeamB={Colors.teamB}
                  textColorTeamA={Colors.teamAText}
                  textColorTeamB={Colors.teamBText}
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
  scoreBoardContainerView: {
    width: "90%",
  }
})

export default StartMatchScreen;