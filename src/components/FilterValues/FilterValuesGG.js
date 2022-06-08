import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import {View, TextInput, TouchableOpacity, Animated, Text, ScrollView} from 'react-native';
import CategoriesGG from '../Categories/CategoriesGG';
import { Colors, Metrics, Fonts } from "../../Themes"
import Icon  from 'react-native-vector-icons/FontAwesome5';
import colors from '../../Themes/Colors';
import MinimumValuesGG from '../InputValues/MinimumValuesGG';
import MaximumValuesGG from '../InputValues/MaximumValuesGG';
import SearchBar from '../SearchBar';

const FilterValuesGG = () => {
  const [ isClickedValue, setIsClickedValue ] = useState(false)
  const [ isClickedCat, setIsClickedCat ] = useState(false)

  return (
    <ScrollView>
    <View style={styles.bigContainer}>
      <TouchableOpacity 
      onPress={() => setIsClickedCat(!isClickedCat)}
      style={styles.container}>
        <View style={[styles.cardContainer, {borderBottomColor:"rgb(26,179,148)", borderBottomWidth:0.5 }]}>
          <Text style={styles.text}>Kategoriler</Text>
          <Icon name="chevron-down" color={colors.primary}  size={20}/>
        </View>
           <View style={styles.values}>
            {isClickedCat && <CategoriesGG/>}
          </View>
      </TouchableOpacity>
      <TouchableOpacity 
      onPress={() => setIsClickedValue(!isClickedValue)}
      style={styles.container}>
        <View style={[styles.cardContainer]}>
          <Text style={styles.text}>Filtreler</Text>
          <Icon name="chevron-down" color={colors.primary}  size={20}/>
        </View> 
          {
            isClickedValue && 
            <View style={styles.values}>
            <MinimumValuesGG/>
            <MaximumValuesGG/>
          </View>
          }
      </TouchableOpacity>
      <View style={{marginHorizontal: Metrics.WIDTH * 0.05}}>
        <SearchBar/>
      </View>
    </View>

    </ScrollView>
  );
};

export default FilterValuesGG;

const styles = StyleSheet.create({
  bigContainer: {
    backgroundColor: "white",
    shadowColor: '#000',
    shadowOffset: {
        width: 0,
        height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,
    elevation: 11,
    marginTop: 10,
    marginHorizontal: 10,
  },
  container : {
    flexGrow: 1,
    borderRadius: 10,
  },
  cardContainer: {
    flexGrow: 1,
    flexDirection: "row",
    height: Metrics.HEIGHT * 0.1,
    marginBottom: 5,
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 10,

  },
  text: {
    fontSize: 18,
    color: Colors.primary,
    fontFamily: Fonts.type.base
  },
  values:{
    flexDirection: "row",
    justifyContent: 'space-around',
    alignItems: "center"
  },
  buttonContainer: {
    backgroundColor: colors.primary,
    marginHorizontal: Metrics.WIDTH * 0.3,
    marginVertical: 10,
    padding:8,
  }
})