import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Tooltip } from 'react-native-elements';
import { WebView } from 'react-native-webview';
import { Colors } from '../../../Themes';

import styles from './styles';

function KeywordCardAmz(props) {
  const { data } = props
  console.log('....', data)

  const goToKeyword = (e) => {
    console.log(e._dispatchInstances.memoizedProps.children)
    const asin = e._dispatchInstances.memoizedProps.children
    return <WebView source={{ uri: `'https://reactnative.dev/'` }} />;
  }

  return (
    <>
      {
        data.map((itm, idx) => {
          return (
            <View key={idx} style={styles.container}>
              <View style={styles.keywordContainer}>
                {/* <Tooltip
                  popover={<Text>Tooltip info goes here</Text>}
                  width={200}
                  backgroundColor={Colors.primary}
                  height={30}
                  withOverlay={false}
                > */}
                  <Text style={styles.orderNo}>{itm.OrderNo}</Text>

                {/* </Tooltip> */}
                <Text style={styles.keyword}>{itm.Keyword}</Text>
              </View>
              <View style={styles.border}></View>
              <View style={styles.contentContainer}>
                <View style={styles.asinContainer}>
                  <Text style={[styles.title, { width: '40%' }]}>ASIN</Text>
                  <Text style={styles.title}>TIKLAMA</Text>
                  <Text style={styles.title}>DÖNÜŞÜM</Text>
                </View>
                <View style={styles.asinContainer}>
                  <Text onPress={(e) => goToKeyword(e)} style={styles.asinText}>{itm.Asin1}</Text>
                  <Text style={styles.rateText}>{'%' + itm.ClickRate1}</Text>
                  <Text style={styles.rateText}>{'%' + itm.ConversionRate1}</Text>
                </View>
                <View style={{ borderBottomWidth: 1, borderBottomColor: '#D3D3D3' }}></View>
                <View style={styles.asinContainer}>
                  <Text style={styles.asinText}>{itm.Asin2}</Text>
                  <Text style={styles.rateText}>{'%' + itm.ClickRate2}</Text>
                  <Text style={styles.rateText}>{'%' + itm.ConversionRate2}</Text>
                </View>
                <View style={{ borderBottomWidth: 1, borderBottomColor: '#D3D3D3' }}></View>
                <View style={styles.asinContainer}>
                  <Text style={styles.asinText}>{itm.Asin3}</Text>
                  <Text style={styles.rateText}>{'%' + itm.ClickRate3}</Text>
                  <Text style={styles.rateText}>{'%' + itm.ConversionRate3}</Text>
                </View>
              </View>
            </View>
          )
        })
      }

    </>
  )
}

export { KeywordCardAmz };