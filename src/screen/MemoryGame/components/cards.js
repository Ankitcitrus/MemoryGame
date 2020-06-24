import React from 'react';
import styles from './card.styles';
import {View, Text} from 'react-native';

const Card = props => {
  const {card} = props;
  return (
    <View style={styles.cardStyle}>
      <Text style={{textAlign: 'center'}}>{card.value}</Text>
    </View>
  );
};

export default Card;
