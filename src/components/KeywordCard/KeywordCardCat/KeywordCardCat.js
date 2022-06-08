import React, { useState, useEffect } from 'react';
import { TouchableWithoutFeedback } from 'react-native';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import images from '../../../Themes/Images';

import styles from './styles';

// const DATA = [

// ]

const KeywordCardCat = ({ data, id }) => {
  console.log('aaa', data)
  let logo;
  const [chosen, setChosen] = useState(false);


  if (data.WebsiteId === 1) {
    logo = images.n11
  } else if (data.WebsiteId === 2) {
    logo = (images.gg)
  } else if (data.WebsiteId === 3) {
    logo = (images.tr)
  } else if (data.WebsiteId === 4) {
    logo = (images.hb)
  }

  return (
    <>
      <View onPress={() => props.DetailPageRoute()}>
        <View style={styles.container}>
          <View style={styles.catContainer}>
            <TouchableOpacity onPress={() => setChosen(!chosen)} style={styles.open} >
              <View style={styles.title}>
                <Image
                  style={styles.logo}
                  source={logo}
                />
                <Text style={styles.catText} >{data.Category}</Text>
              </View>
              <Icon name="chevron-down" />
            </TouchableOpacity>
          </View>
          {chosen && (
            <>
              <View style={styles.borderHorizontal} />
              <View style={styles.keywordContainer}>
                <Text style={styles.textKw}>1 Kelime</Text>
              </View>
              <View style={styles.datatContainer}>
                {
                  data._1Keyword.map((obj, idx) => {
                    return (
                      <View key={idx} style={styles.rateContainer}>
                        <Text style={styles.text}><Text style={styles.order}>{obj.Order + ' - '}</Text>{obj.Keyword}</Text>
                        <Text style={styles.text}>{'%' + ' ' + obj.Volume}</Text>
                      </View>

                    )
                  })
                }
              </View>

              <View style={styles.borderHorizontal} />

              <View style={styles.keywordContainer}>
                <Text style={styles.textKw}>2 Kelime</Text>
              </View>
              <View style={styles.datatContainer}>
                {
                  data._2Keyword.map((obj, idx) => {
                    return (
                      <View key={idx} style={styles.rateContainer}>
                        <Text style={styles.text}><Text style={styles.order}>{obj.Order + ' - '}</Text>{obj.Keyword}</Text>
                        <Text style={styles.text}>{'%' + ' ' + obj.Volume}</Text>
                      </View>
                    )
                  })
                }
              </View>

              <View style={styles.borderHorizontal} />


              <View style={styles.keywordContainer}>
                <Text style={styles.textKw}>3 Kelime</Text>
              </View>

              <View style={styles.datatContainer}>
                {
                  data._3Keyword.map((obj, idx) => {
                    return (
                      <View key={idx} style={styles.rateContainer}>
                        <Text style={styles.text}><Text style={styles.order}>{obj.Order + ' - '}</Text>{obj.Keyword}</Text>
                        <Text style={styles.text}>{'%' + ' ' + obj.Volume}</Text>
                      </View>

                    )
                  })
                }
              </View>
            </>
          )}
        </View>
      </View>

    </>
  );
};

export { KeywordCardCat };
