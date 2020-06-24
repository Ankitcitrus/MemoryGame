import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import useTimer from '../hooks/useTimer';
import {generateCards, showTimer} from './memory.game.constant';
import styles from './memory.game.styles';
import Card from './components/cards';


const MemoryGame = props => {
  const [seconds] = useTimer(120);
  const {currentLevel, setCurrentLevel} = useState(1);
  const [cards, setCards] = useState(generateCards(4));

  const onCardClick = () => {};

  return (
    <View>
      <Text>Memory Game</Text>
      <Text>Level 1</Text>
      <Text>Score</Text>
      <Text> {showTimer(seconds)}</Text>
      <View style={{flex: 1, flexDirection: 'row', flexWrap: 'wrap'}}>
        {cards.map((cards, index) => (
          <Card
            onClick={() => onCardClick(cards)}
            key={cards.id}
            card={cards}
          />
        ))}
      </View>
    </View>
  );
};

export default MemoryGame;
