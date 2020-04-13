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
  goal: 0,
  shots: 0,
  shotsOnTarget: 0,
  fouls: 0,
  corners: 0,
  offsides: 0
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

  const teamA_score_handler = (score_attr, score_value) => {
    let teamA_new_score = {...teamA_score}
    teamA_new_score[score_attr] = score_value
    setTeamA_score(teamA_new_score);
  }

  const teamB_score_handler = (score_attr, score_value) => {
    let teamB_new_score = {...teamB_score}
    teamB_new_score[score_attr] = score_value
    setTeamB_score(teamB_new_score);
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
                    allScoreTypes={Object.keys(score_keys)}
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
