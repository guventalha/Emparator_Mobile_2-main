import React, {useState} from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  ScrollView,
  StyleSheet,
  Dimensions,
  TextInput,
  StatusBar,
  Image
} from 'react-native';
import {Container, Header, Left, Right, Body} from 'native-base';
import CategoriesTD from '../Categories/CategoriesTD';
import MaximumValuesTD from '../InputValues/MaximumValuesTD';
import {Colors, Metrics, Fonts} from '../../Themes';
import Icon from 'react-native-vector-icons/FontAwesome5';
import colors from '../../Themes/Colors';
import MinimumValuesTD from '../InputValues/MinimumValuesTD';
import SearchBar from '../SearchBar';

const FilterValuesTD = (props) => {
  const [toggleAksesuar, setToggleAksesuar] = useState(false);
  const [toggleAnne, setToggleAnne] = useState(false);
  const [toggleElektronik, setToggleElektronik] = useState(false);
  const [toggleAyakkabı, setToggleAyakkabı] = useState(false);
  const [toggleEv, setToggleEv] = useState(false);
  const [toggleGiyim, setToggleGiyim] = useState(false);
  const [toggleKozmetik, setToggleKozmetik] = useState(false);
  const [toggleMarket, setToggleMarket] = useState(false);
  const [toggleYasam, setToggleYasam] = useState(false);
  const [toggleSpor, setToggleSpor] = useState(false);

  const [minFiyat, setMinFiyat] = useState("")
  const [minSatıs, setMinSatıs] = useState("")
  const [minCiro, setMinCiro] = useState("")
  const [minYorum, setMinYorum] = useState("")
  const [minPuan, setMinPuan] = useState("")
  const [minFav, setMinFav] = useState("")
  const [minMgz, setMinMgz] = useState("")
  const [maxFiyat, setMaxFiyat] = useState("")
  const [maxSatıs, setMaxSatıs] = useState("")
  const [maxCiro, setMaxCiro] = useState("")
  const [maxYorum, setMaxYorum] = useState("")
  const [maxPuan, setMaxPuan] = useState("")
  const [maxFav, setMaxFav] = useState("")
  const [maxMgz, setMaxMgz] = useState("")

  
  const [isClickedValue, setIsClickedValue] = useState(false);
  const [isClickedCat, setIsClickedCat] = useState(false);

  return (
    <View style={styles.container}>
        {/* <StatusBar hidden /> */}
      <Header style={styles.header}>
        <Left  style={styles.left} >
          <Icon onPress={() => props.onBack()} name="times" size={18} color={Colors.primary}/>
        </Left>
        <Body style={styles.body}>
          <Text onPress={() =>{
            console.log("basıldı")
            props.navigation.navigate("Trendyol")}} style={styles.title}>trendyol.com</Text>
        </Body>
        <Right style={styles.right}>
          <Text style={styles.apply}>Uygula</Text>
        </Right>
      </Header>
      <ScrollView>
        <View style={styles.bigContainer}>
          <TouchableOpacity
            onPress={() => setIsClickedCat(!isClickedCat)}
            style={[
              styles.container2,
              {borderBottomColor: 'rgb(26,179,148)', borderBottomWidth: 0.5},
            ]}>
            <View style={styles.cardContainer}>
              <Text style={styles.text}>Kategoriler</Text>
              <Icon name="chevron-down" color={colors.primary} size={20} />
            </View>
            <View style={styles.values}>
              {
                isClickedCat && (
                  <View>
                    <TouchableOpacity
                      style={styles.checkBox}
                      onPress={() => setToggleAksesuar(!toggleAksesuar)}>
                      <Icon
                        name={toggleAksesuar ? 'check-square' : 'square'}
                        size={16}
                      />
                      <Text style={styles.catText}>Aksesuar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={styles.checkBox}
                      onPress={() => setToggleAnne(!toggleAnne)}>
                      <Icon
                        name={toggleAnne ? 'check-square' : 'square'}
                        size={16}
                      />
                      <Text style={styles.catText}>Anne & Bebek & Çocuk</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={styles.checkBox}
                      onPress={() => setToggleElektronik(!toggleElektronik)}>
                      <Icon
                        name={toggleElektronik ? 'check-square' : 'square'}
                        size={16}
                      />
                      <Text style={styles.catText}>Ayakkabı</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={styles.checkBox}
                      onPress={() => setToggleAyakkabı(!toggleAyakkabı)}>
                      <Icon
                        name={toggleAyakkabı ? 'check-square' : 'square'}
                        size={16}
                      />
                      <Text style={styles.catText}>Elektronik</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={styles.checkBox}
                      onPress={() => setToggleEv(!toggleEv)}>
                      <Icon
                        name={toggleEv ? 'check-square' : 'square'}
                        size={16}
                      />
                      <Text style={styles.catText}>Ev & Mobilya</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={styles.checkBox}
                      onPress={() => setToggleGiyim(!toggleGiyim)}>
                      <Icon
                        name={toggleGiyim ? 'check-square' : 'square'}
                        size={16}
                      />
                      <Text style={styles.catText}>Giyim</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={styles.checkBox}
                      onPress={() => setToggleKozmetik(!toggleKozmetik)}>
                      <Icon
                        name={toggleKozmetik ? 'check-square' : 'square'}
                        size={16}
                      />
                      <Text style={styles.catText}>
                        Kozmetik & Kişisel Bakım
                      </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={styles.checkBox}
                      onPress={() => setToggleMarket(!toggleMarket)}>
                      <Icon
                        name={toggleMarket ? 'check-square' : 'square'}
                        size={16}
                      />
                      <Text style={styles.catText}>Süpermarket</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={styles.checkBox}
                      onPress={() => setToggleYasam(!toggleYasam)}>
                      <Icon
                        name={toggleYasam ? 'check-square' : 'square'}
                        size={16}
                      />
                      <Text style={styles.catText}>Yaşam</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={styles.checkBox}
                      onPress={() => setToggleSpor(!toggleSpor)}>
                      <Icon
                        name={toggleSpor ? 'check-square' : 'square'}
                        size={16}
                      />
                      <Text style={styles.catText}>Spor & Outdoor</Text>
                    </TouchableOpacity>
                  </View>
                )
                // <CategoriesTD/>
              }
            </View>
          </TouchableOpacity>
          {/* <TouchableOpacity style={styles.buttonContainer}>
        <Text style={[styles.text, {color: "white", textAlign: "center"}]}>Uygula</Text>
      </TouchableOpacity> */}
          <TouchableOpacity
            onPress={() => setIsClickedValue(!isClickedValue)}
            style={styles.container2}>
            <View style={[styles.cardContainer]}>
              <Text style={styles.text}>Filtreler</Text>
              <Icon name="chevron-down" color={colors.primary} size={20} />
            </View>
            {isClickedValue && (
              <View style={styles.values}>
                <View>
                  <View style={styles.filterContainer}>
                    <Icon
                      name="lira-sign"
                      size={16}
                      color={'#9D9D9D'}
                      style={{marginHorizontal: 5}}
                    />
                    <TextInput
                      placeholder={'Min. Fiyat'}
                      placeholderTextColor="#9D9D9D"
                      style={styles.filterInput}
                      onChangeText={() => setMinFiyat()}
                    />
                  </View>
                  <View style={styles.filterContainer}>
                    <Icon
                      name="tags"
                      size={16}yar
                      color={'#9D9D9D'}
                      style={{marginHorizontal: 5}}
                    />
                    <TextInput
                      placeholder={'Min. Satış'}
                      placeholderTextColor="#9D9D9D"
                      style={styles.filterInput}
                      onChangeText={() => setMinSatıs()}
                    />
                  </View>
                  <View style={styles.filterContainer}>
                    <Icon
                      name="wallet"
                      size={16}
                      color={'#9D9D9D'}
                      style={{marginHorizontal: 5}}
                    />
                    <TextInput
                      placeholder={'Min. Ciro'}
                      placeholderTextColor="#9D9D9D"
                      style={styles.filterInput}
                      onChangeText={() => setMinCiro()}
                    />
                  </View>
                  <View style={styles.filterContainer}>
                    <Icon
                      name="comment"
                      size={16}
                      color={'#9D9D9D'}
                      style={{marginHorizontal: 5}}
                    />
                    <TextInput
                      placeholder={'Min. Yorum'}
                      placeholderTextColor="#9D9D9D"
                      style={styles.filterInput}
                      onChangeText={() => setMinYorum()}
                    />
                  </View>
                  <View style={styles.filterContainer}>
                    <Icon
                      name="star"
                      size={16}
                      color={'#9D9D9D'}
                      style={{marginHorizontal: 5}}
                    />
                    <TextInput
                      placeholder={'Min. Puan'}
                      placeholderTextColor="#9D9D9D"
                      style={styles.filterInput}
                      onChangeText={() => setMinPuan()}
                    />
                  </View>
                  <View style={styles.filterContainer}>
                    <Icon
                      name="heart"
                      size={16}
                      color={'#9D9D9D'}
                      style={{marginHorizontal: 5}}
                    />
                    <TextInput
                      placeholder={'Min. Fav.'}
                      placeholderTextColor="#9D9D9D"
                      style={styles.filterInput}
                      onChangeText={() => setMinFav()}
                    />
                  </View>
                  <View style={styles.filterContainer}>
                    <Icon
                      name="list"
                      size={16}
                      color={'#9D9D9D'}
                      style={{marginHorizontal: 5}}
                    />
                    <TextInput
                      placeholder={'Min. Mğz. Sayısı'}
                      placeholderTextColor="#9D9D9D"
                      style={styles.filterInput}
                      onChangeText={() => setMinMgz()}
                    />
                  </View>
                </View>
                <View>
                  <View style={styles.filterContainer}>
                    <Icon
                      name="lira-sign"
                      size={16}
                      color={'#9D9D9D'}
                      style={{marginHorizontal: 5}}
                    />
                    <TextInput
                      placeholder={'Max. Fiyat'}
                      placeholderTextColor="#9D9D9D"
                      style={styles.filterInput}
                      onChangeText={() => setMaxFiyat()}
                    />
                  </View>
                  <View style={styles.filterContainer}>
                    <Icon
                      name="tags"
                      size={16}
                      color={'#9D9D9D'}
                      style={{marginHorizontal: 5}}
                    />
                    <TextInput
                      placeholder={'Max. Satış'}
                      placeholderTextColor="#9D9D9D"
                      style={styles.filterInput}
                      onChangeText={() => setMaxSatıs()}
                    />
                  </View>
                  <View style={styles.filterContainer}>
                    <Icon
                      name="wallet"
                      size={16}
                      color={'#9D9D9D'}
                      style={{marginHorizontal: 5}}
                    />
                    <TextInput
                      placeholder={'Max. Ciro'}
                      placeholderTextColor="#9D9D9D"
                      style={styles.filterInput}
                      onChangeText={() => setMaxCiro()}
                    />
                  </View>
                  <View style={styles.filterContainer}>
                    <Icon
                      name="comment"
                      size={16}
                      color={'#9D9D9D'}
                      style={{marginHorizontal: 5}}
                    />
                    <TextInput
                      placeholder={'Max. Yorum'}
                      placeholderTextColor="#9D9D9D"
                      style={styles.filterInput}
                      onChangeText={() => setMaxYorum()}
                    />
                  </View>
                  <View style={styles.filterContainer}>
                    <Icon
                      name="star"
                      size={16}
                      color={'#9D9D9D'}
                      style={{marginHorizontal: 5}}
                    />
                    <TextInput
                      placeholder={'Max. Puan'}
                      placeholderTextColor="#9D9D9D"
                      style={styles.filterInput}
                      onChangeText={() => setMaxPuan()}
                    />
                  </View>
                  <View style={styles.filterContainer}>
                    <Icon
                      name="heart"
                      size={16}
                      color={'#9D9D9D'}
                      style={{marginHorizontal: 5}}
                    />
                    <TextInput
                      placeholder={'Max. Fav.'}
                      placeholderTextColor="#9D9D9D"
                      style={styles.filterInput}
                      onChangeText={() => setMaxFav()}
                    />
                  </View>
                  <View style={styles.filterContainer}>
                    <Icon
                      name="list"
                      size={16}
                      color={'#9D9D9D'}
                      style={{marginHorizontal: 5}}
                    />
                    <TextInput
                      placeholder={'Max. Mğz. Sayısı'}
                      placeholderTextColor="#9D9D9D"
                      style={styles.filterInput}
                      onChangeText={() => setMaxMgz()}
                    />
                  </View>
                </View>
              </View>
            )}
          </TouchableOpacity>
          <View style={{marginHorizontal: Metrics.WIDTH * 0.05}}>
            <SearchBar />
          </View>
        </View>
      </ScrollView>
     </View>
  );
};

export default FilterValuesTD;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f0f0f0',
  },

  header: {
    backgroundColor: 'white',
    borderBottomColor: '#f0f0f0',
    borderBottomWidth: 1,
    height: Platform.OS == 'android' ? 80 : 66,
    shadowColor: '#000',
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 0.4,
    shadowRadius: 3,
    elevation: 5,
    // marginHorizontal:10
  },

  left: {
    flex: 0.5,
    // marginLeft:5,
    backgroundColor: 'transparent',
  },

  body: {
    flex: 2,
    alignItems: 'center',
    backgroundColor: 'transparent',
  },

  right: {
    flex: 0.5,
  },
  title:{
    fontFamily: Fonts.type.base,
    fontSize:18,
    color: Colors.primary
  },
  apply:{
    fontFamily: Fonts.type.base,
    fontSize:14,
    color: Colors.primary
  },
  bigContainer: {
    flex:1,
    backgroundColor: 'white',
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
  container2: {
    flexGrow: 1,
    borderRadius: 10,
  },
  cardContainer: {
    flexGrow: 1,
    flexDirection: 'row',
    height: Metrics.HEIGHT * 0.1,
    marginBottom: 5,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  text: {
    fontSize: 18,
    color: Colors.primary,
    fontFamily: Fonts.type.base,
  },
  values: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  buttonContainer: {
    backgroundColor: colors.primary,
    marginHorizontal: Metrics.WIDTH * 0.3,
    marginVertical: 10,
    padding: 8,
  },
  filterContainer: {
    width: Dimensions.get('window').width * 0.4,
    height: Dimensions.get('window').height * 0.05,
    borderColor: '#e5e6e7',
    borderBottomWidth: 2,
    marginVertical: 5,
    marginHorizontal: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  filterInput: {
    fontSize: 14,
    paddingVertical: 0,
    paddingRight: 5,
    fontFamily: Fonts.type.base,
  },
  checkBox: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomColor: '#f0f0f0',
    borderBottomWidth: 1,
    paddingVertical: 10,
  },
  catText: {
    fontSize: 16,
    fontFamily: Fonts.type.base,
    marginLeft: 3,
  },
});
