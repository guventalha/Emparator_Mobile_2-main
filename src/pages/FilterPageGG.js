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
} from 'react-native';
import {Header, Left, Right, Body} from 'native-base';
import {Colors, Metrics, Fonts} from '../Themes';
import Icon from 'react-native-vector-icons/FontAwesome5';
import SearchBar from '../components/SearchBar';
import SearchFilter from '../components/SearchFilter';
import {ImageBackground} from 'react-native';

const FilterPageGG = ({navigation, route}) => {
  const CAT = route.params.SelectedCategories

  const [toggleBebek, setToggleBebek] = useState(CAT.indexOf("25") != -1 ? true : false);
  const [toggleHobi, setToggleHobi] = useState(CAT.indexOf("27") != -1 ? true : false);
  const [toggleElektronik, setToggleElektronik] = useState(CAT.indexOf("21") != -1 ? true : false);
  const [toggleEv, setToggleEv] = useState(CAT.indexOf("22") != -1 ? true : false);
  const [toggleModa, setToggleModa] = useState(CAT.indexOf("24") != -1 ? true : false);
  const [toggleKozmetik, setToggleKozmetik] = useState(CAT.indexOf("23") != -1 ? true : false);
  const [toggleSuper, setToggleSuper] = useState(CAT.indexOf("26") != -1 ? true : false);
  const [toggleOto, setToggleOto] = useState(CAT.indexOf("28") != -1 ? true : false);
  const [toggleSpor, setToggleSpor] = useState(CAT.indexOf("29") != -1 ? true : false);

  const [minFiyat, setMinFiyat] = useState(route.params.MinPrice);
  const [minSatıs, setMinSatıs] = useState(route.params.MinSale);
  const [minCiro, setMinCiro] = useState(route.params.MinRevenue);
  const [minYorum, setMinYorum] = useState(route.params.MinComment);
  const [minPuan, setMinPuan] = useState(route.params.MinScore);
  const [minMgzYr, setMinMgzYr] = useState(route.params.MinSellerComment);
  const [minMgzPuan, setMinMgzPuan] = useState(route.params.MinSellerScore);
  const [maxFiyat, setMaxFiyat] = useState(route.params.MaxPrice);
  const [maxSatıs, setMaxSatıs] = useState(route.params.MaxSale);
  const [maxCiro, setMaxCiro] = useState(route.params.MaxRevenue);
  const [maxYorum, setMaxYorum] = useState(route.params.MaxComment);
  const [maxPuan, setMaxPuan] = useState(route.params.MaxScore);
  const [maxMgzYr, setMaxMgzYr] = useState(route.params.MaxSellerComment);
  const [maxMgzPuan, setMaxMgzPuan] = useState(route.params.MaxSellerScore);

  const [keyword, setKeyword] = useState(route.params.Keywords);

  const [selectedCategories, setSelectedCategories] = useState(route.params.SelectedCategories);
  const [isClickedValue, setIsClickedValue] = useState(false);
  const [isClickedCat, setIsClickedCat] = useState(false);

  function onSelect(e) {
    if (selectedCategories.indexOf(e) != -1) {
      return setSelectedCategories(selectedCategories.replace(e, ''));
    } else {
      setSelectedCategories(selectedCategories + e);
    }
  }

  function passKeyword(e) {
    setKeyword(e);
  }

  // console.log('SELECTED', selectedCategories);

  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <Header style={styles.header}>
        <Left style={styles.left}>
          <Icon
            onPress={() => navigation.goBack()}
            name="times"
            size={18}
            color={Colors.primary}
          />
        </Left>
        <Body style={styles.body}>
          <Text style={styles.title}>GittiGidiyor</Text>
        </Body>
        <Right style={styles.right}>
          <Text
            onPress={() => {
              // console.log('basıldı');
              navigation.navigate('GittiGidiyor', {
                SelectedCategories: selectedCategories,
                MinPrice: minFiyat,
                MaxPrice: maxFiyat,
                MinSale: minSatıs,
                MaxSale: maxSatıs,
                MinRevenue: minCiro,
                MaxRevenue: maxCiro,
                MinScore: minPuan,
                MaxScore: maxPuan,
                MinComment: minYorum,
                MaxComment: maxYorum,
                MinSellerComment: minMgzYr,
                MaxSellerComment: maxMgzYr,
                MinSellerScore: minMgzPuan,
                MaxSellerScore: maxMgzPuan,
                Keywords: keyword,
              });
            }}
            style={styles.apply}>
            Uygula
          </Text>
        </Right>
      </Header>
      <ScrollView>
        {/* <ImageBackground resizeMode="cover" source={require("../Images/bg.png")} style={{width: "100%", height: "100%", flex:1}} > */}
        <View style={styles.bigContainer}>
          <TouchableOpacity
            onPress={() => setIsClickedCat(!isClickedCat)}
            style={[
              styles.container2,
              {borderBottomColor: 'rgb(26,179,148)', borderBottomWidth: 0.5},
            ]}>
            <View style={styles.cardContainer}>
              <Text style={styles.text}>Kategoriler</Text>
              <Icon name="chevron-down" color={Colors.primary} size={20} />
            </View>
            <View style={styles.values}>
              {isClickedCat && (
                <View>
                  <TouchableOpacity
                    style={styles.checkBox}
                    onPress={() => {
                      onSelect('25 ');
                      setToggleBebek(!toggleBebek);
                    }}>
                    <Icon
                      name={toggleBebek ? 'check-square' : 'square'}
                      size={16}
                    />
                    <Text style={styles.catText}>Bebek & Anne</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.checkBox}
                    onPress={() => {
                      onSelect('21 ');
                      setToggleElektronik(!toggleElektronik);
                    }}>
                    <Icon
                      name={toggleElektronik ? 'check-square' : 'square'}
                      size={16}
                    />
                    <Text style={styles.catText}>Elektronik</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.checkBox}
                    onPress={() => {
                      onSelect('22 ');
                      setToggleEv(!toggleEv);
                    }}>
                    <Icon
                      name={toggleEv ? 'check-square' : 'square'}
                      size={16}
                    />
                    <Text style={styles.catText}>Ev, Bahçe ve Ofis</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.checkBox}
                    onPress={() => {
                      onSelect('27 ');
                      setToggleHobi(!toggleHobi);
                    }}>
                    <Icon
                      name={toggleHobi ? 'check-square' : 'square'}
                      size={16}
                    />
                    <Text style={styles.catText}>Hobi, Eğlence ve Sanat</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.checkBox}
                    onPress={() => {
                      onSelect('24 ');
                      setToggleKozmetik(!toggleKozmetik);
                    }}>
                    <Icon
                      name={toggleKozmetik ? 'check-square' : 'square'}
                      size={16}
                    />
                    <Text style={styles.catText}>Kozmetik & Kişisel Bakım</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.checkBox}
                    onPress={() => {
                      onSelect('23 ');
                      setToggleModa(!toggleModa);
                    }}>
                    <Icon
                      name={toggleModa ? 'check-square' : 'square'}
                      size={16}
                    />
                    <Text style={styles.catText}>Moda</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.checkBox}
                    onPress={() => {
                      onSelect('28 ');
                      setToggleOto(!toggleOto);
                    }}>
                    <Icon
                      name={toggleOto ? 'check-square' : 'square'}
                      size={16}
                    />
                    <Text style={styles.catText}>
                      Otomobil, Motosiklet ve Aksesuar
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.checkBox}
                    onPress={() => {
                      onSelect('29 ');
                      setToggleSpor(!toggleSpor);
                    }}>
                    <Icon
                      name={toggleSpor ? 'check-square' : 'square'}
                      size={16}
                    />
                    <Text style={styles.catText}>Spor & Outdoor</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.checkBox}
                    onPress={() => {
                      onSelect('26 ');
                      setToggleSuper(!toggleSuper);
                    }}>
                    <Icon
                      name={toggleSuper ? 'check-square' : 'square'}
                      size={16}
                    />
                    <Text style={styles.catText}>Süpermarket</Text>
                  </TouchableOpacity>
                </View>
              )}
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setIsClickedValue(!isClickedValue)}
            style={styles.container2}>
            <View style={[styles.cardContainer]}>
              <Text style={styles.text}>Filtreler</Text>
              <Icon name="chevron-down" color={Colors.primary} size={20} />
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
                      onChangeText={(text) => setMinFiyat(text)}
                      value={minFiyat}
                    />
                  </View>
                  <View style={styles.filterContainer}>
                    <Icon
                      name="tags"
                      size={16}
                      yar
                      color={'#9D9D9D'}
                      style={{marginHorizontal: 5}}
                    />
                    <TextInput
                      placeholder={'Min. Satış'}
                      placeholderTextColor="#9D9D9D"
                      style={styles.filterInput}
                      onChangeText={(e) => setMinSatıs(e)}
                      value={minSatıs}
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
                      onChangeText={(e) => setMinCiro(e)}
                      value={minCiro}
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
                      onChangeText={(e) => setMinYorum(e)}
                      value={minYorum}
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
                      onChangeText={(e) => setMinPuan(e)}
                      value={minPuan}
                    />
                  </View>
                  <View style={styles.filterContainer}>
                    <Icon
                      name="comments"
                      size={16}
                      color={'#9D9D9D'}
                      style={{marginHorizontal: 5}}
                    />
                    <TextInput
                      placeholder={'Min. Mğz. Yr.'}
                      placeholderTextColor="#9D9D9D"
                      style={styles.filterInput}
                      onChangeText={(e) => setMinMgzYr(e)}
                      value={minMgzYr}
                    />
                  </View>
                  <View style={styles.filterContainer}>
                    <Icon
                      name="certificate"
                      size={16}
                      color={'#9D9D9D'}
                      style={{marginHorizontal: 5}}
                    />
                    <TextInput
                      placeholder={'Min. Mğz. Puanı'}
                      placeholderTextColor="#9D9D9D"
                      style={styles.filterInput}
                      onChangeText={(e) => setMinMgzPuan(e)}
                      value={minMgzPuan}
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
                      onChangeText={(e) => setMaxFiyat(e)}
                      value={maxFiyat}
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
                      onChangeText={(e) => setMaxSatıs(e)}
                      value={maxSatıs}
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
                      onChangeText={(e) => setMaxCiro(e)}
                      value={maxCiro}
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
                      onChangeText={(e) => setMaxYorum(e)}
                      value={maxYorum}
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
                      onChangeText={(e) => setMaxPuan(e)}
                      value={maxPuan}
                    />
                  </View>
                  <View style={styles.filterContainer}>
                    <Icon
                      name="comments"
                      size={16}
                      color={'#9D9D9D'}
                      style={{marginHorizontal: 5}}
                    />
                    <TextInput
                      placeholder={'Max. Fav.'}
                      placeholderTextColor="#9D9D9D"
                      style={styles.filterInput}
                      onChangeText={(e) => setMaxMgzYr(e)}
                      value={maxMgzYr}
                    />
                  </View>
                  <View style={styles.filterContainer}>
                    <Icon
                      name="certificate"
                      size={16}
                      color={'#9D9D9D'}
                      style={{marginHorizontal: 5}}
                    />
                    <TextInput
                      placeholder={'Max. Mğz. Sayısı'}
                      placeholderTextColor="#9D9D9D"
                      style={styles.filterInput}
                      onChangeText={(e) => setMaxMgzPuan(e)}
                      value={maxMgzPuan}
                    />
                  </View>
                </View>
              </View>
            )}
          </TouchableOpacity>
          <View style={{marginHorizontal: Metrics.WIDTH * 0.1}}>
            <SearchFilter
              setInput={passKeyword}
              // onSearch={() => navigation.navigate("GittiGidiyor")}
            />
          </View>
          <TouchableOpacity
            onPress={() => {
              // console.log('basıldı');
              navigation.navigate('GittiGidiyor', {
                SelectedCategories: selectedCategories,
                MinPrice: minFiyat,
                MaxPrice: maxFiyat,
                MinSale: minSatıs,
                MaxSale: maxSatıs,
                MinRevenue: minCiro,
                MaxRevenue: maxCiro,
                MinScore: minPuan,
                MaxScore: maxPuan,
                MinComment: minYorum,
                MaxComment: maxYorum,
                MinSellerComment: minMgzYr,
                MaxSellerComment: maxMgzYr,
                MinSellerScore: minMgzPuan,
                MaxSellerScore: maxMgzPuan,
                Keywords: keyword,
              });
            }}>
            <Text
              style={[
                styles.apply,
                {fontSize: 16, textAlign: 'center', marginVertical: 10},
              ]}>
              Uygula
            </Text>
          </TouchableOpacity>
        </View>
        {/* </ImageBackground> */}
      </ScrollView>
    </View>
  );
};

export {FilterPageGG};

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
  title: {
    fontFamily: Fonts.type.base,
    fontSize: 18,
    color: Colors.primary,
  },
  apply: {
    fontFamily: Fonts.type.base,
    fontSize: 14,
    color: Colors.primary,
  },
  bigContainer: {
    flex: 1,
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
    fontSize: 16,
    color: Colors.primary,
    fontFamily: Fonts.type.base,
  },
  values: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  buttonContainer: {
    backgroundColor: Colors.primary,
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
    fontSize: Fonts.moderateScale(14),
    paddingVertical: 0,
    paddingRight: 5,
    fontFamily: Fonts.type.base,
    width: Dimensions.get('window').width * 0.4,
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
