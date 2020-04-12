import React, { useState, useRef, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const StartMatchScreen = props => {
    return (
      <View style={styles.screen}>
        <Text>{props.teamA}</Text>
        <Text>{props.teamB}</Text>
      </View>
    );
}


const styles = StyleSheet.create({
  screen: {
    // flexDirection: 'row'
    padding: 10,
    alignItems: 'center'
  }
})

export default StartMatchScreen;