import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  FlatList,
  ScrollView,
  ActivityIndicator,
  ImageBackground,
  Alert
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Modal from 'react-native-modal';
import Button from '../components/FilterButton/FilterButton';
import SearchCard from '../components/SearchCard/SearchCard';
import {Colors, Fonts} from '../Themes';
import {useIsFocused} from '@react-navigation/native';
import { useAuth } from '../Router';
import { Platform } from 'react-native';

const SearchHB = ({route, navigation}) => {
  let minPrice = route.params?.MinPrice ?? '';
  let maxPrice = route.params?.MaxPrice ?? '';
  let minSale = route.params?.MinSale ?? '';
  let maxSale = route.params?.MaxSale ?? '';
  let minRevenue = route.params?.MinRevenue ?? '';
  let maxRevenue = route.params?.MaxRevenue ?? '';
  let minScore = route.params?.MinScore ?? '';
  let maxScore = route.params?.MaxScore ?? '';
  let minComment = route.params?.MinComment ?? '';
  let maxComment = route.params?.MaxComment ?? '';
  let minSellerComment = route.params?.MinSellerComment ?? '';
  let maxSellerComment = route.params?.MaxSellerComment ?? '';
  let minSellerScore = route.params?.MinSellerScore ?? '';
  let maxSellerScore = route.params?.MaxSellerScore ?? '';
  let minSellerCount = route.params?.MinSellerComment ?? '';
  let maxSellerCount = route.params?.MaxSellerComment ?? '';
  let selectedCategories = route.params?.SelectedCategories ?? '';
  let keywords = route.params?.Keywords ?? '';

  const isFocused = useIsFocused();
  const { signOut } = useAuth()

  const [open, setOpen] = React.useState(false);
  const [rowData, setRowData] = React.useState();
  const [search, setSearch] = React.useState({});
  const [userInfo, setUserInfo] = React.useState({UserPackage: {}});
  const [followCount, setFollowCount] = React.useState();

  const [loading, setLoading] = React.useState(true);
  const [offset, setOffset] = React.useState(0);

  function getSearchData() {
    setLoading(true);
    AsyncStorage.multiGet(['@userName', '@userToken']).then((response) => {
      axios
        .post('https://api.emparator.com/Mobile/GetSearchResults', {
          username: response[0][1],
          token: response[1][1],
          website: 'hb',
          Keywords: keywords,
          MinPrice: minPrice,
          MaxPrice: maxPrice,
          MinSale: minSale,
          MaxSale: maxSale,
          MinRevenue: minRevenue,
          MaxRevenue: maxRevenue,
          MinScore: minScore,
          MaxScore: maxScore,
          MinComment: minComment,
          MaxComment: maxComment,
          MinSellerComment: minSellerComment,
          MaxSellerComment: maxSellerComment,
          MinSellerScore: minSellerScore,
          MaxSellerScore: maxSellerScore,
          MinSellerCount: minSellerCount,
          MaxSellerCount: maxSellerCount,
          SelectedCategories: selectedCategories,
          Start: offset,
        })
        .then((data) => {
          if(data.data ===""){
            Alert.alert("emparator.com", "Oturumunuzun s??resi sona erdi. L??tfen giri?? yapt??ktan sonra tekrar deneyiniz.")
            signOut()
          }else{
            setRowData(data.data.data);
            setSearch(data.data);
            setLoading(false);
          // console.log("ne geliyor ?", data.data.data)
          }
        });
    });
  }

  function getUserInfo() {
    AsyncStorage.multiGet(['@userName', '@userToken']).then((response) => {
      axios
        .post('https://api.emparator.com/Mobile/UserInfos', {
          username: response[0][1],
          token: response[1][1],
        })
        .then((data) => {
          if(data.data === ""){
            return null
          }else{
          // console.log('userInfo', data.data);
          setUserInfo(data.data.data);
          setFollowCount(data.data.data.User.FollowCount);
          }
        });
    });
  }

  let sortedList;
  function sortPriceAsc() {
    sortedList = rowData.sort((a, b) => (a.Price > b.Price ? 1 : -1));
    // console.log('Sorted', sortedList);
    setRowData(sortedList);
    setOpen(false);
  }
  function sortPriceDesc() {
    sortedList = rowData.sort((a, b) => (b.Price > a.Price ? 1 : -1));
    // console.log('Sorted2', sortedList);
    setRowData(sortedList);
    setOpen(false);
  }

  function sortSaleAsc() {
    sortedList = rowData.sort((a, b) =>
      a.SaleEstimation > b.SaleEstimation ? 1 : -1,
    );
    // console.log('Sorted', sortedList);
    setRowData(sortedList);
    setOpen(false);
  }
  function sortSaleDesc() {
    sortedList = rowData.sort((a, b) =>
      b.SaleEstimation > a.SaleEstimation ? 1 : -1,
    );
    // console.log('Sorted2', sortedList);
    setRowData(sortedList);
    setOpen(false);
  }

  function sortRevenueAsc() {
    sortedList = rowData.sort((a, b) =>
      a.RevenueEstimation > b.RevenueEstimation ? 1 : -1,
    );
    // console.log('Sorted2', sortedList);
    setRowData(sortedList);
    setOpen(false);
  }
  function sortRevenueDesc() {
    sortedList = rowData.sort((a, b) =>
      b.RevenueEstimation > a.RevenueEstimation ? 1 : -1,
    );
    // console.log('Sorted2', sortedList);
    setRowData(sortedList);
    setOpen(false);
  }

  React.useEffect(() => {
    getSearchData();
    getUserInfo();
  }, [route.params, offset]);

  function getSearchCards({item}) {
    return (
      <>
        {rowData == null ? (
          <View
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <ActivityIndicator size="large" color={Colors.primary} />
          </View>
        ) : (
          <View>
            <SearchCard
              rowData={item}
              DetailPageRoute={() => {
                navigation.navigate('??r??n Detay??', {itemId: item.Id});
              }}
              // onDelete={deleteItem}
              followCount={followCount}
              packageId={userInfo.UserPackage.PackageId}
            />
          </View>
        )}
      </>
    );
  }
  
  function renderComponent() {
    return (
      <>
        {route.params != null ? (
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              alignItems: 'center',
              marginBottom: 10,
            }}>
            {offset <= 0 ? (
              <View></View>
            ) : (
              <TouchableOpacity
                activeOpacity={0.9}
                onPress={() => setOffset(offset - 10)}
                style={{flexDirection: 'row', alignItems: 'center'}}>
                <Icon
                  name="chevron-left"
                  size={18}
                  style={{color: Colors.primary}}
                />
                <Text
                  style={{color: Colors.primary, fontFamily: Fonts.type.base}}>
                  ??nceki
                </Text>
              </TouchableOpacity>
            )}

            {offset >= 210 || search.recordsTotal <= (offset+10) ? (
              <View></View>
            ) : (
              <TouchableOpacity
                activeOpacity={0.9}
                onPress={() => setOffset(offset + 10)}
                style={{flexDirection: 'row', alignItems: 'center'}}>
                <Text
                  style={{color: Colors.primary, fontFamily: Fonts.type.base}}>
                  Sonraki
                </Text>
                <Icon
                  name="chevron-right"
                  size={18}
                  style={{color: Colors.primary}}
                />
              </TouchableOpacity>
            )}
          </View>
        ) : null}
      </>
    );
  }

  return (
    <ImageBackground
    resizeMode="cover"
    source={require("../Images/bg20.png")}
    style={{width: '100%', height: '100%', flex: 1}}>
    <ScrollView style={{flex: 1}}>
      {(userInfo.UserPackage.PackageId == 2 && search.searchCount >= 10) ||
      (userInfo.UserPackage.PackageId == 1 && search.searchCount >= 5) ? (
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 10,
            backgroundColor: '#fff',
            margin: 10,
            padding: 10,
            borderRadius: 10,
          }}>
          <Icon name={'exclamation-triangle'} size={50} color={'#ED5666'} />
          <Text
            style={{
              fontFamily: Fonts.type.base,
              fontSize: 22,
              textAlign: 'center',
            }}
            onPress={() => navigation.navigate('??yelik Paketleri')}>
            {userInfo.UserPackage.PackageId == 2 ? '10' : '5'} ??r??n ara??t??rma
            hakk??n??z??n tamam??n?? kullanm???? bulunmaktas??n??z.Daha fazla arama
            yapabilmek i??in paketinizi y??kseltebilirsiniz.??yelik paketlerini
            incelemek ve bir paket sat??n almak i??in
            <Text
              style={{
                fontFamily: Fonts.type.base,
                fontSize: 22,
                textAlign: 'center',
                color: '#325E84',
              }}>
              {' '}
              buraya
            </Text>{' '}
            t??klay??n??z{' '}
          </Text>
        </View>
      ) : (
        <>
          <Modal
            isVisible={open}
            swipeDirection="down"
            onSwipeComplete={() => setOpen(false)}
            onBackdropPress={() => setOpen(false)}
            backdropOpacity={0}
            animationInTiming={400}
            animationOutTiming={400}
            style={{
              justifyContent: 'flex-end',
              width: '100%',
              marginLeft: 0,
              marginBottom: 0,
            }}>
              
            <View style={styles.modalContainer}>
            <View style={styles.modalLine}/>
              <TouchableOpacity
                onPress={() => {
                  sortPriceAsc();
                }}
                style={{padding: 5}}>
                  
                <Text style={styles.text}>Fiyat'a g??re artan</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  sortPriceDesc();
                }}
                style={{padding: 5}}>
                <Text style={styles.text}>Fiyat'a g??re azalan</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  sortSaleAsc();
                }}
                style={{padding: 5}}>
                <Text style={styles.text}>G??nl??k Sat????'a g??re artan</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  sortSaleDesc();
                }}
                style={{padding: 5}}>
                <Text style={styles.text}>G??nl??k Sat????'a g??re azalan</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  sortRevenueAsc();
                }}
                style={{padding: 5}}>
                <Text style={styles.text}>Ciroya g??re artan</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  sortRevenueDesc();
                }}
                style={{padding: 5}}>
                <Text style={styles.text}>Ciroya g??re azalan</Text>
              </TouchableOpacity>
            </View>
          </Modal>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-around',
              backgroundColor: 'white',
              borderBottomColor: Colors.primary,
              borderBottomWidth: 0.5,
              paddingVertical: 10,
            }}>
            <View
              style={{borderRightColor: Colors.primary, borderRightWidth: 0.8}}>
              <Button
                title={'S??rala'}
                name={'sort-amount-down'}
                onClicked={() => setOpen(!open)}
              />
            </View>
            <View>
              <Button
                title={'Filtrele'}
                name={'filter'}
                onClicked={() => navigation.navigate('hepsiburada.com',{
                  Keywords: keywords,
                  MinPrice: minPrice,
                  MaxPrice: maxPrice,
                  MinSale: minSale,
                  MaxSale: maxSale,
                  MinRevenue: minRevenue,
                  MaxRevenue: maxRevenue,
                  MinScore: minScore,
                  MaxScore: maxScore,
                  MinComment: minComment,
                  MaxComment: maxComment,
                  MinSellerComment: minSellerComment,
                  MaxSellerComment: maxSellerComment,
                  MinSellerScore: minSellerScore,
                  MaxSellerScore: maxSellerScore,
                  MinSellerCount: minSellerCount,
                  MaxSellerCount: maxSellerCount,
                  SelectedCategories: selectedCategories,
                })}
              />
            </View>
          </View>
          {loading ? null : 
    
          userInfo.UserPackage.PackageId == 3 ? null : (
            <View style={styles.package}>
              <Icon name="info-circle" size={22} color={'#fff'} />
              {(userInfo.UserPackage.PackageId == 2 && (
                <Text style={styles.packageText}>
                  Toplam 10 arama hakk??n??z??n {search.searchCount} tanesini
                  kulland??n??z
                </Text>
              )) ||
                (userInfo.UserPackage.PackageId == 1 && (
                  <Text style={styles.packageText}>
                    Toplam 5 arama hakk??n??z??n {search.searchCount} tanesini
                    kulland??n??z
                  </Text>
                ))}
            </View>
          )}
          <View>
            {loading ? (
              <View
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginTop: 10,
                }}>
                <ActivityIndicator size="small" color={Colors.primary} />
              </View>
            ) :rowData.length === 0 ? (
              <View
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginTop: 10,
                  backgroundColor: '#fff',
                  margin: 10,
                  padding: 10,
                  borderRadius: 10,
                }}>
                <Icon
                  name={'exclamation-triangle'}
                  size={35}
                  color={'#ED5666'}
                />
                <Text
                  style={{
                    fontFamily: Fonts.type.base,
                    fontSize: Fonts.moderateScale(18),
                    textAlign: 'center',
                  }}>
                  Arad????n??z kriterlere ait ??r??n bulunamad??.
                </Text>
              </View>
            ) : (
              <FlatList
                keyExtractor={(item) => String(item.Id)}
                data={rowData}
                renderItem={getSearchCards}
                ListFooterComponent={renderComponent}
                // enableEmptySections
                // pageSize={4}
                // showsHorizontalScrollIndicator={false}
              />
            )}
          </View>
        </>
      )}
    </ScrollView>
    </ImageBackground>
  );
};

export {SearchHB};

const styles = StyleSheet.create({
  modalContainer: {
    backgroundColor: 'white',
    justifyContent: 'flex-end',
    height: Platform.OS == "ios" ? "30%" : '40%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,
    elevation: 24,
  },
  text: {
    fontSize: 18,
    fontFamily: Fonts.type.base,
    color: Colors.primary,
    textAlign: 'center',
    marginTop:5
  },
  textContainer: {},
  package: {
    backgroundColor: 'rgba(255,0,0,0.6)',
    marginVertical: 5,
    marginHorizontal: 10,
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  packageText: {
    color: '#fff',
    fontFamily: Fonts.type.base,
    fontSize: 15,
    marginLeft: 8,
  },
  modalLine:{
    backgroundColor:'rgba(0,0,0,0.1)',
    height:5,
    width:"12%",
    borderRadius:30,
    justifyContent:"center",
    alignItems:"center",
  }
});
