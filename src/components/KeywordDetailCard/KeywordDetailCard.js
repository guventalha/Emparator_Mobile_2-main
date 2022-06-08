import React, {useState} from 'react';
import {View, Text, Image, ImageBackground} from 'react-native';
import {Metrics, Fonts, Colors} from '../../Themes';
import Icon from 'react-native-vector-icons/FontAwesome5';


import styles from './styles';

export default function KeywordDetailCard() {
  const [oneKeyword, setOneKeyword] = useState(true);
  const [twoKeyword, setTwoKeyword] = useState(false);
  const [threeKeyword, setThreeKeyword] = useState(false);

  return (
    <>
      <View style={styles.mainContainer}>
        <View style={{display:'flex', flexDirection:'row', justifyContent:'space-between', alignItems:'center', marginHorizontal:5 }}>
        <Text style={styles.title}>1 Kelime</Text>
        <Icon name="chevron-down" />
        </View>
        <View style={styles.borderHorizontal} />
        <View style={styles.datatContainer}>
          <View style={styles.rateContainer}>
            <Text style={styles.text}>
              <Text style={styles.number}>1</Text> agagagagg
            </Text>
            <Text style={styles.text}>% 25</Text>
          </View>
          <View style={styles.rateContainer}>
            <Text style={styles.text}>
              <Text style={styles.number}>2</Text> agagagagg
            </Text>
            <Text style={styles.text}>% 25</Text>
          </View>
          <View style={styles.rateContainer}>
            <Text style={styles.text}>
              <Text style={styles.number}>3</Text> agagagagg
            </Text>
            <Text style={styles.text}>% 25</Text>
          </View>
        </View>
      </View>
    </>
  );
}
