import React, { useState } from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  ScrollView,
  TextInput,
  StatusBar,
} from 'react-native';
import {Header, Left, Right, Body} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome5';
import SearchFilter from '../../components/SearchFilter';
import { useIsFocused } from '@react-navigation/native';

// import { CATDATA, FILTERDATA} from './data'

import styles from "./styles"
import { Colors, Metrics } from '../../Themes';

const FilterPageAMZ = ({navigation, route}) => {
  // console.log("What is this", minFiyat)
  const CAT = route.params.SelectedCategories;
  const [selectedCategories, setSelectedCategories] = useState(CAT);

  const [toggleBahce, setToggleBahce] = useState(
    CAT.indexOf('20283') != -1 ? true : false,
  );
  const [toggleBebek, setToggleBebek] = useState(
    CAT.indexOf('20279') != -1 ? true : false,
  );
  const [toggleBilgisayar, setToggleBilgisayar] = useState(
    CAT.indexOf('20299') != -1 ? true : false,
  );
  const [toggleElektronik, setToggleElektronik] = useState(
    CAT.indexOf('20280') != -1 ? true : false,
  );
  const [toggleEv, setToggleEv] = useState(
    CAT.indexOf('20281') != -1 ? true : false,
  );
  const [toggleYapi, setToggleYapi] = useState(
    CAT.indexOf('20277') != -1 ? true : false,
  );
  const [toggleEvcil, setToggleEvcil] = useState(
    CAT.indexOf('20289') != -1 ? true : false,
  );
  const [toggleGida, setToggleGida] = useState(
    CAT.indexOf('20291') != -1 ? true : false,
  );
  const [toggleVideo, setToggleVideo] = useState(
    CAT.indexOf('20322') != -1 ? true : false,
  );
  const [toggleKitap, setToggleKitap] = useState(
    CAT.indexOf('20327') != -1 ? true : false,
  );
  const [toggleModa, setToggleModa] = useState(
    CAT.indexOf('20282') != -1 ? true : false,
  );
  const [toggleMüzik, setToggleMüzik] = useState(
    CAT.indexOf('20285') != -1 ? true : false,
  );
  const [toggleOfis, setToggleOfis] = useState(
    CAT.indexOf('20300') != -1 ? true : false,
  );
  const [toggleOyuncak, setToggleOyuncak] = useState(
    CAT.indexOf('20288') != -1 ? true : false,
  );
  const [toggleSaglik, setToggleSaglik] = useState(
    CAT.indexOf('20284') != -1 ? true : false,
  );
  const [toggleSpor, setToggleSpor] = useState(
    CAT.indexOf('20292') != -1 ? true : false,
  );

  const [minFiyat, setMinFiyat] = useState(route.params.MinPrice);
  const [minSatis, setMinSatis] = useState(route.params.MinSale);
  const [minCiro, setMinCiro] = useState(route.params.MinRevenue);
  const [minYorum, setMinYorum] = useState(route.params.MinComment);
  const [minPuan, setMinPuan] = useState(route.params.MinScore);
  const [maxFiyat, setMaxFiyat] = useState(route.params.MaxPrice);
  const [maxSatis, setMaxSatis] = useState(route.params.MaxSale);
  const [maxCiro, setMaxCiro] = useState(route.params.MaxRevenue);
  const [maxYorum, setMaxYorum] = useState(route.params.MaxComment);
  const [maxPuan, setMaxPuan] = useState(route.params.MaxScore);

  const [keyword, setKeyword] = useState(route.params.Keywords);

  const [isClickedValue, setIsClickedValue] = useState(false);
  const [isClickedCat, setIsClickedCat] = useState(false);

  const isFocused = useIsFocused();

  // console.log("SELECTED", selectedCategories)

  const CATDATA = [
    {
      catName: 'Bebek',
      catCode: 20279,
      state: toggleBebek,
      setState: setToggleBebek,
    },
    {
      catName: 'Kitap',
      catCode: 20327,
      state: toggleKitap,
      setState: setToggleKitap,
    },
    {
      catName: 'Bilgisayar',
      catCode: 20299,
      state: toggleBilgisayar,
      setState: setToggleBilgisayar,
    },
    {
      catName: 'Elektronik',
      catCode: 20280,
      state: toggleElektronik,
      setState: setToggleElektronik,
    },
    {
      catName: 'Moda',
      catCode: 20282,
      state: toggleModa,
      setState: setToggleModa,
    },
    {
      catName: 'Sağlık ve Kişisel Bakım',
      catCode: 20284,
      state: toggleSaglik,
      setState: setToggleSaglik,
    },
    {
      catName: 'Ev ve Yaşam',
      catCode: 20281,
      state: toggleEv,
      setState: setToggleEv,
    },
    {
      catName: 'Yapı Market',
      catCode: 20277,
      state: toggleYapi,
      setState: setToggleYapi,
    },
    {
      catName: 'Ofis ve Kırtasiye',
      catCode: 20300,
      state: toggleOfis,
      setState: setToggleOfis,
    },
    {
      catName: 'Spor ve Outdoor',
      catCode: 20292,
      state: toggleSpor,
      setState: setToggleSpor,
    },
    {
      catName: 'Oyuncak',
      catCode: 20288,
      state: toggleOyuncak,
      setState: setToggleOyuncak,
    },
    {
      catName: 'Video ve Oyun Konsolu',
      catCode: 20322,
      state: toggleVideo,
      setState: setToggleVideo,
    },
    {
      catName: 'Evcil Hayvan Ürünleri',
      catCode: 20289,
      state: toggleEvcil,
      setState: setToggleEvcil,
    },
    {
      catName: 'Bahçe',
      catCode: 20283,
      state: toggleBahce,
      setState: setToggleBahce,
    },
    {
      catName: 'Müzik Enstrümanları ve DJ',
      catCode: 20285,
      state: toggleMüzik,
      setState: setToggleMüzik,
    },
    {
      catName: 'Gıda Ürünleri',
      catCode: 20291,
      state: toggleGida,
      setState: setToggleGida,
    },
  ];

  const FILTERDATA = [
    {
      name: 'Min. Fiyat',
      logo: 'lira-sign',
      state: minFiyat,
      setState: setMinFiyat,
    },
    {
      name: 'Max. Fiyat',
      logo: 'lira-sign',
      state: maxFiyat,
      setState: setMaxFiyat,
    },
    {
      name: 'Min. Satış',
      logo: 'tags',
      state: minSatis,
      setState: setMinSatis,
    },
    {
      name: 'Max. Satış',
      logo: 'tags',
      state: maxSatis,
      setState: setMaxSatis,
    },
    {
      name: 'Min. Ciro',
      logo: 'wallet',
      state: minCiro,
      setState: setMinCiro,
    },
    {
      name: 'Max. Ciro',
      logo: 'wallet',
      state: maxCiro,
      setState: setMaxCiro,
    },
    {
      name: 'Min. Yorum',
      logo: 'comment',
      state: minYorum,
      setState: setMinYorum,
    },
    {
      name: 'Max. Yorum',
      logo: 'comment',
      state: maxYorum,
      setState: setMaxYorum,
    },
    {
      name: 'Min. Puan',
      logo: 'star',
      state: minPuan,
      setState: setMinPuan,
    },
    {
      name: 'Max. Puan',
      logo: 'star',
      state: maxPuan,
      setState: setMaxPuan,
    },
  ];

  const params = {
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
    Keywords: keyword,
  };
  
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


  React.useEffect(() => {}, [isFocused]);

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
          <Text style={styles.title}>Amazon</Text>
        </Body>
        <Right style={styles.right}>
          <Text
            onPress={() => navigation.navigate('Amazon', params)}
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
              {isClickedCat && (
                <View>
                  {CATDATA.map((obj) => {
                    return (
                      <TouchableOpacity
                        style={styles.checkBox}
                        onPress={() => {
                          onSelect(`${obj.catCode} `);
                          obj.setState(!obj.state);
                        }}>
                        <Icon
                          name={obj.state ? 'check-square' : 'square'}
                          size={16}
                        />
                        <Text style={styles.catText}>{obj.catName}</Text>
                      </TouchableOpacity>
                    );
                  })}
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
            { isClickedValue && (
              <View style={styles.values}>
                {
                  FILTERDATA.map((itm, i) => {
                    if(i % 2 !== 0){
                      <View style={styles.filterContainer}>
                        <Icon
                          name={itm.logo}
                          size={16}
                          color={'#9D9D9D'}
                          style={{marginHorizontal: 5}}
                        />
                        <TextInput
                          placeholder={itm.name}
                          placeholderTextColor="#9D9D9D"
                          style={styles.filterInput}
                          onChangeText={(text) => itm.setState(text)}
                        />
                      </View>
                    }
                    {
                      FILTERDATA.map((itm,i) => {
                        if(i % 2 === 0) {
                          <View style={styles.filterContainer}>
                          <Icon
                            name={itm.logo}
                            size={16}
                            color={'#9D9D9D'}
                            style={{marginHorizontal: 5}}
                          />
                          <TextInput
                            placeholder={itm.name}
                            placeholderTextColor="#9D9D9D"
                            style={styles.filterInput}
                            onChangeText={(text) => itm.setState(text)}
                          />
                        </View>
                        }
                      })
                    }
                  })
                }
              </View>
            )
            }
          </TouchableOpacity>
          <View style={{marginHorizontal: Metrics.WIDTH * 0.1}}>
            <SearchFilter
              setInput={passKeyword}
              // onSearch={() => navigation.navigate("HepsiBurada")}
            />
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate('Amazon', params)}>
            <Text style={[styles.apply, styles.applySpecial]}>Uygula</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export { FilterPageAMZ };


{/* <View style={styles.filterContainer}>
<Icon
  name={item.logo}
  size={16}
  color={'#9D9D9D'}
  style={{marginHorizontal: 5}}
/>
<TextInput
  placeholder={item.name}
  placeholderTextColor="#9D9D9D"
  style={styles.filterInput}
  onChangeText={(text) => item.setState(text)}
/>
</View> */}