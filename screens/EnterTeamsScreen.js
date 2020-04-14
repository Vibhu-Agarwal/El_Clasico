import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from 'react-native';

import Card from '../components/Card';
import MainButton from '../components/MainButton';
import TeamInput from '../components/TeamInput';
import { teamAimg, teamBimg } from '../constants/images';
import Colors from '../constants/colors';

const EnterTeamsScreen = props => {
    const [teamA, setTeamA] = useState('');
    const [teamB, setTeamB] = useState('');

    const enterGameHandler = () => {
        console.log('\n');
        console.log('-- EnterTeamsScreen | enterGameHandler --')
        console.log('TeamA:', teamA);
        console.log('TeamB:', teamB);
        console.log('-----------------------------------------')

        props.setTeamA(teamA);
        props.setTeamB(teamB);
    }

    const teamTextChangeHandler = (value, setTeam) => {
        setTeam(value);
        console.log('\n');
        console.log('-- EnterTeamsScreen | teamTextChangeHandler --')
        console.log('Value:', value)
        console.log('TeamA:', teamA);
        console.log('TeamB:', teamB);
        console.log('----------------------------------------------')
    }

    return (
        <TouchableWithoutFeedback
          onPress={() => {
            Keyboard.dismiss();
          }}
        >
            <View style={styles.screen}>
                <Card>
                    <View style={styles.teamInputContainer}>
                        <TeamInput
                            onChangeText={value => teamTextChangeHandler(value, setTeamA)}
                            teamImg={require('../assets/img/real-madrid.png')}
                            value={teamA}
                            style={{color: Colors.teamA}}
                        />
                        <TeamInput
                            onChangeText={value => teamTextChangeHandler(value, setTeamB)}
                            teamImg={require('../assets/img/barcelona.png')}
                            value={teamB}
                            style={{color: Colors.teamB}}
                        />
                    </View>
                    <View style={styles.startGameButtonContainer}>
                        <MainButton onPress={enterGameHandler}>
                            Enter Game
                        </MainButton>
                    </View>
                </Card>
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    screen: {
      flex: 1,
      padding: 10,
      alignItems: 'center'
    },
    teamInputContainer: {
        flexDirection: 'row',
    },
    startGameButtonContainer: {
        width: "60%",
        alignSelf: "center",
        marginTop: "5%"
    }
})

export default EnterTeamsScreen;