import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';

import Header from './components/Header';
import EnterTeamScreen from './screens/EnterTeamsScreen';
import StartMatchScreen from './screens/StartMatchScreen';


const fetchFonts = () => {
  return Font.loadAsync({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
  });
};

const score_keys = {
  'Goal': 0,
  'Shots': 0,
  'On Target': 0,
  'Fouls': 0,
  'Corners': 0,
  'Offsides': 0
}

export default function App() {
  const [dataLoaded, setDataLoaded] = useState(false);
  const [teamA_Name, setTeamA_Name] = useState();
  const [teamB_Name, setTeamB_Name] = useState();
  const [teamA_score, setTeamA_score] = useState({...score_keys})
  const [teamB_score, setTeamB_score] = useState({...score_keys})

  if (!dataLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setDataLoaded(true)}
        onError={err => console.log(err)}
      />
    );
  }

  let screenView = <EnterTeamScreen setTeamA={setTeamA_Name} setTeamB={setTeamB_Name}/>;

  const teamA_score_handler = new_score => {
    setTeamA_score({...teamA_score, ...new_score});
  }

  const teamB_score_handler = new_score => {
    setTeamB_score({...teamB_score, ...new_score});
  }

  if (teamA_Name && teamB_Name)
  {
    screenView = <StartMatchScreen
                    teamA={teamA_Name}
                    teamB={teamB_Name}
                    teamA_score={teamA_score}
                    teamB_score={teamB_score}
                    setTeamA={teamA_score_handler}
                    setTeamB={teamB_score_handler}
                    allScoreTypes={Object.keys(score_keys).filter(value => value!=='Goal')}
                  />;
  }

  return (
    <View style={styles.screen}>
      <Header title="El Clásico" />
      {screenView}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1
  }
});
