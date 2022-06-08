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

const FilterPageHB = ({navigation, route}) => {
  const CAT = route.params.SelectedCategories

  const [toggleAltın, setToggleAltın] = useState(CAT.indexOf("16205") != -1 ? true : false);
  const [toggleAnne, setToggleAnne] = useState(CAT.indexOf("16228") != -1 ? true : false);
  const [toggleBeyaz, setToggleBeyaz] = useState(CAT.indexOf("16233") != -1 ? true : false);
  const [toggleBilgisayar, setToggleBilgisayar] = useState(CAT.indexOf("16143") != -1 ? true : false);
  const [toggleEv, setToggleEv] = useState(CAT.indexOf("16248") != -1 ? true : false);
  const [toggleElektronik, setToggleElektronik] = useState(CAT.indexOf("16081") != -1 ? true : false);
  const [toggleFoto, setToggleFoto] = useState(CAT.indexOf("16171") != -1 ? true : false);
  const [toggleGiyim, setToggleGiyim] = useState(CAT.indexOf("16260") != -1 ? true : false);
  const [toggleHobi, setToggleHobi] = useState(CAT.indexOf("16182") != -1 ? true : false);
  const [toggleOfis, setToggleOfis] = useState(CAT.indexOf("16465") != -1 ? true : false);
  const [toggleKitap, setToggleKitap] = useState(CAT.indexOf("16378") != -1 ? true : false);
  const [toggleKozmetik, setToggleKozmetik] = useState(CAT.indexOf("16471") != -1 ? true : false);
  const [togglePet, setTogglePet] = useState(CAT.indexOf("16399") != -1 ? true : false);
  const [toggleSaat, setToggleSaat] = useState(CAT.indexOf("16396") != -1 ? true : false);
  const [toggleSpor, setToggleSpor] = useState(CAT.indexOf("16374") != -1 ? true : false);
  const [toggleMarket, setToggleMarket] = useState(CAT.indexOf("16326") != -1 ? true : false);
  const [toggleTelefon, setToggleTelefon] = useState(CAT.indexOf("16140") != -1 ? true : false);
  const [toggleYapi, setToggleYapi] = useState(CAT.indexOf("16179") != -1 ? true : false);

  const [minFiyat, setMinFiyat] = useState(route.params.MinPrice);
  const [minSatis, setMinSatis] = useState(route.params.MinSale);
  const [minCiro, setMinCiro] = useState(route.params.MinRevenue);
  const [minYorum, setMinYorum] = useState(route.params.MinComment);
  const [minPuan, setMinPuan] = useState(route.params.MinScore);
  const [minMgzSayısı, setMinMgzSayısı] = useState(route.params.MinSellerCount);
  const [minMgzYr, setMinMgzYr] = useState(route.params.MinSellerComment);
  const [minMgzPuan, setMinMgzPuan] = useState(route.params.MinSellerScore);
  const [maxFiyat, setMaxFiyat] = useState(route.params.MaxPrice);
  const [maxSatis, setMaxSatis] = useState(route.params.MaxSale);
  const [maxCiro, setMaxCiro] = useState(route.params.MaxRevenue);
  const [maxYorum, setMaxYorum] = useState(route.params.MaxComment);
  const [maxPuan, setMaxPuan] = useState(route.params.MaxScore);
  const [maxMgzSayısı, setMaxMgzSayısı] = useState(route.params.MaxSellerCount);
  const [maxMgzYr, setMaxMgzYr] = useState(route.params.MaxSellerComment);
  const [maxMgzPuan, setMaxMgzPuan] = useState(route.params.MaxSellerScore);

  const [keyword, setKeyword] = useState(route.params.Keywords);

  const [selectedCategories, setSelectedCategories] = useState("");
  const [isClickedValue, setIsClickedValue] = useState(false);
  const [isClickedCat, setIsClickedCat] = useState(false);

  // console.log("SELECTED", selectedCategories)

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
          <Text style={styles.title}>HepsiBurada</Text>
        </Body>
        <Right style={styles.right}>
          <Text
            onPress={() => {
              // console.log('basıldı');
              navigation.navigate('HepsiBurada', {
                SelectedCategories: selectedCategories,
                MinPrice: minFiyat,
                MaxPrice: maxFiyat,
                MinSale: minSatis,
                MaxSale: maxSatis,
                MinRevenue: minCiro,
                MaxRevenue: maxCiro,
                MinScore: minPuan,
                MaxScore: maxPuan,
                MinComment: minYorum,
                MaxComment: maxYorum,
                MinSellerCount: minMgzSayısı,
                MaxSellerCount: maxMgzSayısı,
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
              {
                isClickedCat && (
                  <View>
                    <TouchableOpacity
                      style={styles.checkBox}
                      onPress={() => {
                        onSelect('16205 ');
                        setToggleAltın(!toggleAltın);
                      }}>
                      <Icon
                        name={toggleAltın ? 'check-square' : 'square'}
                        size={16}
                      />
                      <Text style={styles.catText}>
                        Altın / Takı / Mücevher
                      </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={styles.checkBox}
                      onPress={() => {
                        onSelect('16228 ');
                        setToggleAnne(!toggleAnne);
                      }}>
                      <Icon
                        name={toggleAnne ? 'check-square' : 'square'}
                        size={16}
                      />
                      <Text style={styles.catText}>Anne / Bebek / Oyuncak</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={styles.checkBox}
                      onPress={() => {
                        onSelect('16233 ');
                        setToggleBeyaz(!toggleBeyaz);
                      }}>
                      <Icon
                        name={toggleBeyaz ? 'check-square' : 'square'}
                        size={16}
                      />
                      <Text style={styles.catText}>Beyaz Eşya / Mutfak</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={styles.checkBox}
                      onPress={() => {
                        onSelect('16143 ');
                        setToggleBilgisayar(!toggleBilgisayar);
                      }}>
                      <Icon
                        name={toggleBilgisayar ? 'check-square' : 'square'}
                        size={16}
                      />
                      <Text style={styles.catText}>Bilgisayar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={styles.checkBox}
                      onPress={() => {
                        onSelect('16248 ');
                        setToggleEv(!toggleEv);
                      }}>
                      <Icon
                        name={toggleEv ? 'check-square' : 'square'}
                        size={16}
                      />
                      <Text style={styles.catText}>Ev & Dekorasyon</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={styles.checkBox}
                      onPress={() => {
                        onSelect('16081 ');
                        setToggleElektronik(!toggleElektronik);
                      }}>
                      <Icon
                        name={toggleElektronik ? 'check-square' : 'square'}
                        size={16}
                      />
                      <Text style={styles.catText}>Ev Elektroniği</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={styles.checkBox}
                      onPress={() => {
                        onSelect('16171 ');
                        setToggleFoto(!toggleFoto);
                      }}>
                      <Icon
                        name={toggleFoto ? 'check-square' : 'square'}
                        size={16}
                      />
                      <Text style={styles.catText}>Foto / Kamera</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={styles.checkBox}
                      onPress={() => {
                        onSelect('16260 ');
                        setToggleGiyim(!toggleGiyim);
                      }}>
                      <Icon
                        name={toggleGiyim ? 'check-square' : 'square'}
                        size={16}
                      />
                      <Text style={styles.catText}>Giyim / Ayakkabı</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={styles.checkBox}
                      onPress={() => {
                        onSelect('16182 ');
                        setToggleHobi(!toggleHobi);
                      }}>
                      <Icon
                        name={toggleHobi ? 'check-square' : 'square'}
                        size={16}
                      />
                      <Text style={styles.catText}>
                        Hobi ve Oyun Konsolları
                      </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={styles.checkBox}
                      onPress={() => {
                        onSelect('16465 ');
                        setToggleOfis(!toggleOfis);
                      }}>
                      <Icon
                        name={toggleOfis ? 'check-square' : 'square'}
                        size={16}
                      />
                      <Text style={styles.catText}>Kırtasiye / Ofis</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={styles.checkBox}
                      onPress={() => {
                        onSelect('16378 ');
                        setToggleKitap(!toggleKitap);
                      }}>
                      <Icon
                        name={toggleKitap ? 'check-square' : 'square'}
                        size={16}
                      />
                      <Text style={styles.catText}>Kitap Film Müzik</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={styles.checkBox}
                      onPress={() => {
                        onSelect('16471 ');
                        setToggleKozmetik(!toggleKozmetik);
                      }}>
                      <Icon
                        name={toggleKozmetik ? 'check-square' : 'square'}
                        size={16}
                      />
                      <Text style={styles.catText}>Kozmetik Kişisel Bakım</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={styles.checkBox}
                      onPress={() => {
                        onSelect('16399 ');
                        setTogglePet(!togglePet);
                      }}>
                      <Icon
                        name={togglePet ? 'check-square' : 'square'}
                        size={16}
                      />
                      <Text style={styles.catText}>Pet Shop</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={styles.checkBox}
                      onPress={() => {
                        onSelect('16396 ');
                        setToggleSaat(!toggleSaat);
                      }}>
                      <Icon
                        name={toggleSaat ? 'check-square' : 'square'}
                        size={16}
                      />
                      <Text style={styles.catText}>Saat/Gözlük/Aksesuar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={styles.checkBox}
                      onPress={() => {
                        onSelect('16374 ');
                        setToggleSpor(!toggleSpor);
                      }}>
                      <Icon
                        name={toggleSpor ? 'check-square' : 'square'}
                        size={16}
                      />
                      <Text style={styles.catText}>Spor Outdoor</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={styles.checkBox}
                      onPress={() => {
                        onSelect('16326 ');
                        setToggleMarket(!toggleMarket);
                      }}>
                      <Icon
                        name={toggleMarket ? 'check-square' : 'square'}
                        size={16}
                      />
                      <Text style={styles.catText}>Süpermarket</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={styles.checkBox}
                      onPress={() => {
                        onSelect('16140 ');
                        setToggleTelefon(!toggleTelefon);
                      }}>
                      <Icon
                        name={toggleTelefon ? 'check-square' : 'square'}
                        size={16}
                      />
                      <Text style={styles.catText}>Telefon</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={styles.checkBox}
                      onPress={() => {
                        onSelect('16179 ');
                        setToggleYapi(!toggleYapi);
                      }}>
                      <Icon
                        name={toggleYapi ? 'check-square' : 'square'}
                        size={16}
                      />
                      <Text style={styles.catText}>
                        Yapı Market / Bahçe / Oto
                      </Text>
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
                      onChangeText={(text) => setMinSatis(text)}
                      value={minSatis}
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
                      onChangeText={(text) => setMinCiro(text)}
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
                      onChangeText={(text) => setMinYorum(text)}
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
                      onChangeText={(text) => setMinPuan(text)}
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
                      placeholder={'Min. Mğz. Yorumu'}
                      placeholderTextColor="#9D9D9D"
                      style={styles.filterInput}
                      onChangeText={(text) => setMinMgzYr(text)}
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
                      onChangeText={(text) => setMinMgzPuan(text)}
                      value={minMgzPuan}
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
                      onChangeText={(text) => setMinMgzSayısı(text)}
                      value={minMgzSayısı}
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
                      onChangeText={(text) => setMaxFiyat(text)}
                      value={maxFiyat}
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
                      placeholder={'Max. Satış'}
                      placeholderTextColor="#9D9D9D"
                      style={styles.filterInput}
                      onChangeText={(text) => setMaxSatis(text)}
                      value={maxSatis}
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
                      onChangeText={(text) => setMaxCiro(text)}
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
                      onChangeText={(text) => setMaxYorum(text)}
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
                      onChangeText={(text) => setMaxPuan(text)}
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
                      placeholder={'Max. Mğz. Yorumu'}
                      placeholderTextColor="#9D9D9D"
                      style={styles.filterInput}
                      onChangeText={(text) => setMaxMgzYr(text)}
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
                      placeholder={'Max. Mğz. Puanı'}
                      placeholderTextColor="#9D9D9D"
                      style={styles.filterInput}
                      onChangeText={(text) => setMaxMgzPuan(text)}
                      value={maxMgzPuan}
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
                      onChangeText={(text) => setMaxMgzSayısı(text)}
                      value={maxMgzSayısı}
                    />
                  </View>
                </View>
              </View>
            )}
          </TouchableOpacity>
          <View style={{marginHorizontal: Metrics.WIDTH * 0.1}}>
            <SearchFilter
              setInput={passKeyword}
              // onSearch={() => navigationnavigation.navigate("HepsiBurada")}
            />
          </View>
          <TouchableOpacity
            onPress={() => {
              // console.log('basıldı');
              navigation.navigate('HepsiBurada', {
                SelectedCategories: selectedCategories,
                MinPrice: minFiyat,
                MaxPrice: maxFiyat,
                MinSale: minSatis,
                MaxSale: maxSatis,
                MinRevenue: minCiro,
                MaxRevenue: maxCiro,
                MinScore: minPuan,
                MaxScore: maxPuan,
                MinComment: minYorum,
                MaxComment: maxYorum,
                MinSellerCount: minMgzSayısı,
                MaxSellerCount: maxMgzSayısı,
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
      </ScrollView>
    </View>
  );
};

export {FilterPageHB};

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
