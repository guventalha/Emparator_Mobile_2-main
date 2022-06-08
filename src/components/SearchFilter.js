import React, {useState} from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  Platform,
  Dimensions,
  Keyboard,
  TouchableOpacity,
  TouchableWithoutFeedback
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import Button from "../components/FilterButton/FilterButton"
import { Fonts, Metrics } from '../Themes';
import colors from '../Themes/Colors';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const SearchFilter = (props) => {
  const [iconName, setIconName] = useState(null);
  const [keyword, setKeyword] = useState('');

  function iconShow() {
    setIconName('times');
  }

  function iconClose() {
    setIconName(null);
    setKeyword('');
  }

  function onClear() {
    setKeyword('');
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={{flexDirection: 'row', alignItems:'center'}}>
        <View  style={[styles.container]}>
        <Icon name="search" size={20} style={[styles.icon, {color: 'grey'}]} />
        <TextInput
          placeholderTextColor="grey"
          placeholder="Kelime Arama"
          style={styles.textInput}
          onChangeText={(value) => props.setInput(value)}
          onSubmitEditing={Keyboard.dismiss}
          value
          onFocus={iconShow}
          clearButtonMode="always"
          onBlur={iconClose}
          multiline={true}
        />
        <Icon
          name={iconName}
          size={20}
          onPress={onClear}
          style={{position: 'absolute', right: 8, color: 'grey'}}
        />
        </View>
        {/* <TouchableOpacity onPress={() => props.onSearch()} style={styles.button}>
          <Icon name="search" size={22} style={styles.icon} />
        </TouchableOpacity> */}
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    // padding: Platform.OS == "android" ?5 : 15,
    borderRadius: 3,
    marginVertical: 15,
    width: width * 0.72,
    height: height * 0.06,
    borderBottomColor :"#e5e6e7",
    borderBottomWidth: 2
    // position: "absolute"
  },
  textInput: {
    fontSize: Fonts.moderateScale(14),
    fontFamily: Fonts.type.base,
    justifyContent: 'center',
    width:width * 0.60
  },
  icon: {
    marginLeft:3,
    color: "white"
  },
  button:{
    backgroundColor: colors.primary,
    height: Metrics.HEIGHT * 0.06,
    padding: 12,
    justifyContent: 'center',
            shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.36,
        shadowRadius: 6.68,
        elevation: 11,
        borderRadius: 5,
  }
});

export default SearchFilter;
