import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
  ActivityIndicator,
  ImageBackground,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Modal from 'react-native-modal';
import Stars from 'react-native-stars';
import {ScrollView} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome5';
import axios from 'axios';
import {useIsFocused} from '@react-navigation/native';

import ChartModal from '../ChartModal/chartModal';
import ProgressBar from '../ProgressBar';

import styles from './styles';
import {Colors, Fonts, Metrics} from '../../Themes';
import {Alert} from 'react-native';
import images from '../../Themes/Images';

import {useAuth} from '../../Router';

let apiUrl = 'https://api.emparator.com';
let testUrl = 'http://localhost:55956';

// apiUrl = testUrl

const Detail = (props) => {
  const {signOut} = useAuth();

  const [detailData, setDetailData] = useState(null);
  const [change, setChange] = useState(false);
  const [logo, setLogo] = useState();
  const [iconName, setIconName] = useState(true);
  const [saleHistory, setSaleHistory] = useState(false);
  const [commentHistory, setCommentHistory] = useState(false);
  const [priceHistory, setPriceHistory] = useState(false);
  const [stockHistory, setStockHistory] = useState(false);


  const itemId = props.itemId;

  const isFocused = useIsFocused();

  function getDetailPageData() {
    AsyncStorage.multiGet(['@userName', '@userToken']).then((response) => {
      axios
        .post(`${apiUrl}/Mobile/GetProductDetail`, {
          username: response[0][1],
          token: response[1][1],
          productId: itemId,
        })
        .then((veri) => {
          if (veri.data === '') {
            Alert.alert(
              'emparator.com',
              'Oturumunuzun süresi sona erdi. Lütfen giriş yaptıktan sonra tekrar deneyiniz.',
            );
            signOut();
          } else {
            console.log('Detay Bilgi', veri.data.data);
            setDetailData(veri.data.data);
            setIconName(veri.data.data.Product.IsFollowing);
            if (veri.data.data.Product.Url.indexOf('n11') != -1) {
              return setLogo(images.n11);
            } else if (
              veri.data.data.Product.Url.indexOf('gittigidiyor') != -1
            ) {
              return setLogo(images.gg);
            } else if (veri.data.data.Product.Url.indexOf('trendyol') != -1) {
              return setLogo(images.tr);
            } else {
              return setLogo(images.hb);
            }
          }
        });
    });
  }

  function addFollowing(id) {
    console.log('add çalıştı');
    if (
      (props.packageId == 2 && props.followCount >= 5) ||
      (props.packageId == 3 && props.followCount >= 50) ||
      (props.packageId == 1 && props.followCount >= 1)
    ) {
      Alert.alert(
        'emparator.com',
        'Paketinize ait ürün takip limitini doldurdunuz.',
      );
    } else {
      setChange(true)
      AsyncStorage.multiGet(['@userName', '@userToken']).then((response) => {
        axios
          .post(`${apiUrl}/Mobile/AddFollow`, {
            username: response[0][1],
            token: response[1][1],
            productId: id,
          }) 
          .then((res) => {
            console.log('as', res.data.data.ErrorMessage);
            console.log('af', res.data);
            if (res.data.data.ErrorMessage === 'Oturumunuz sona erdi.') {
              Alert.alert(
                'emparator.com',
                'Oturumunuzun süresi sona erdi. Lütfen giriş yaptıktan sonra tekrar deneyiniz.',
              );
              signOut();
            } else {
              console.log(res.data);
              // console.log(res.data.TotalFollowCount)
              console.log('Eklendi');
              setChange(false);
              setIconName(!iconName);
            }
          });
      });
    }
  }

  function deleteItem(id) {
    console.log('ID NE YAKALIYOR', id);
    AsyncStorage.multiGet(['@userName', '@userToken']).then((response) => {
      axios
        .post('https://api.emparator.com/Mobile/DeleteFollow', {
          username: response[0][1],
          token: response[1][1],
          productId: id,
        })
        .then(result => {
          console.log("RES", result)
          if(result.data === ''){
            Alert.alert("emparator.com", "Oturumunuzun süresi sona erdi. Lütfen giriş yaptıktan sonra tekrar deneyiniz.")
            signOut()
          }else{
            console.log('Silindi');
            setIconName(!iconName);
          }
        });
    });
  }

  const title1 = () => {
    if (
      detailData.Product.Url.indexOf('n11') != -1 ||
      detailData.Product.Url.indexOf('gittigidiyor') != -1
    ) {
      return 'Stok Miktarı';
    } else if (detailData.Product.Url.indexOf('trendyol') != -1) {
      return 'Favori Sayısı';
    } else {
      return null;
    }
  };

  const subTitle1 = () => {
    if (
      detailData.Product.Url.indexOf('n11') != -1 ||
      detailData.Product.Url.indexOf('gittigidiyor') != -1
    ) {
      return detailData.Product.StockCount;
    } else if (detailData.Product.Url.indexOf('trendyol') != -1) {
      return detailData.Product.VisitorCount;
    } else {
      return null;
    }
  };

  const title2 = () => {
    if (detailData.Product.Url.indexOf('n11') != -1) {
      return null;
    } else if (detailData.Product.Url.indexOf('gittigidiyor') != -1) {
      return 'Satış Miktarı';
    } else {
      return 'Satıcı Sayısı';
    }
  };

  const subTitle2 = () => {
    if (detailData.Product.Url.indexOf('n11') != -1) {
      return null;
    } else if (detailData.Product.Url.indexOf('gittigidiyor') != -1) {
      return detailData.Product.SaleCount;
    } else {
      return detailData.Product.BuyboxSellerCount;
    }
  };

  const title3 = () => {
    if (
      detailData.Product.Url.indexOf('n11') != -1 ||
      detailData.Product.Url.indexOf('gittigidiyor') != -1
    ) {
      return 'Stok Geçmişi';
    } else {
      return 'Yr. Geçmişi';
    }
  };

  const setIcon = () => {
    if (
      detailData.Product.Url.indexOf('n11') != -1 ||
      detailData.Product.Url.indexOf('gittigidiyor') != -1
    ) {
      return 'archive';
    } else {
      return 'comment';
    }
  };

  useEffect(() => {
    getDetailPageData();
  }, [isFocused]);

  // console.log('son Veri', detailData);

  // console.log("title3", title3())


  return (
    <ImageBackground
      resizeMode="cover"
      source={require('../../Images/bg20.png')}
      style={{width: '100%', height: '100%', flex: 1}}>
      <ScrollView style={{flex: 1}}>
        {detailData === null ? (
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 10,
            }}>
            <ActivityIndicator size="small" color={Colors.primary} />
          </View>
        ) : (
          <View>
            <View style={styles.mainRenderView}>
              <View
                style={{
                  flexDirection: 'row',
                  borderBottomColor: ' #ebeced',
                  borderBottomWidth: 0.5,
                }}>
                <TouchableOpacity style={{flex: 1}}>
                  <Image
                    source={{uri: detailData.Product.PhotoUrl}}
                    style={styles.FoodImg}
                  />
                  <Image style={styles.logo} source={logo} />
                </TouchableOpacity>
                <View style={{flex: 2}}>
                  <TouchableOpacity style={{flexDirection: 'row'}}>
                    <Text style={styles.FoodName}>
                      {detailData.Product.Name}
                    </Text>
                    {/* <Text style={styles.FoodAdd}>{detailData.Product.Name}</Text> */}
                  </TouchableOpacity>
                  <View style={{flexDirection: 'row'}}>
                    <View style={{alignItems: 'center', marginBottom: 5}}>
                      <Stars
                        half={true}
                        default={detailData.Product.Rating}
                        //update={(val)=>{this.setState({stars: val})}}
                        spacing={4}
                        starSize={16}
                        count={5}
                        fullStar={require('../../Images/star.png')}
                        emptyStar={require('../../Images/star-unfilled.png')}
                        halfStar={require('../../Images/rating.png')}
                        disabled={true}
                      />
                    </View>
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      width: '90%',
                      marginBottom: 10,
                    }}>
                    <Text style={styles.MoneyText}>
                      {detailData.Product.Price} ₺
                    </Text>
                    <TouchableOpacity
                      onPress={() => {
                        iconName
                          ? deleteItem(detailData.Product.Id)
                          : addFollowing(detailData.Product.Id);
                        // setIconName(!iconName)
                      }}
                      disabled={change}
                      style={styles.follow}>
                      <Text style={styles.followText}>
                        {iconName ? 'Takipten Çıkar' : 'Takip et'}
                      </Text>
                      <Icon
                        name={iconName ? 'trash-alt' : 'plus-circle'}
                        size={16}
                        color={'#fff'}
                      />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
              <View style={styles.estimatedValue}>
                <View style={styles.saleText}>
                  <Icon
                    name="tags"
                    size={16}
                    color={'#fff'}
                    style={{marginRight: 8}}
                  />
                  <View
                    style={{justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{color: '#fff', fontFamily: Fonts.type.base}}>
                      Günlük Satış
                    </Text>
                    <Text
                      style={{
                        color: '#fff',
                        fontFamily: Fonts.type.base,
                        letterSpacing: 1.5,
                        fontWeight: '700',
                      }}>
                      {
                        detailData.ProductHistory[
                          detailData.ProductHistory.length - 1
                        ].EstimatedSale
                      }{' '}
                    </Text>
                  </View>
                </View>
                <View style={styles.saleText}>
                  <Icon
                    name="wallet"
                    size={16}
                    color={'#fff'}
                    style={{marginRight: 8}}
                  />
                  <View
                    style={{justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{color: '#fff', fontFamily: Fonts.type.base}}>
                      Aylık Ciro
                    </Text>
                    <Text
                      style={{
                        color: '#fff',
                        fontFamily: Fonts.type.base,
                        fontWeight: '700',
                        letterSpacing: 1.5,
                      }}>
                      {' '}
                      {Math.round(
                        detailData.ProductHistory[
                          detailData.ProductHistory.length - 1
                        ].EstimatedRevenue,
                      )}
                      ₺
                    </Text>
                  </View>
                </View>
              </View>
            </View>

            <View style={styles.mainRenderView}>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-around'}}>
                <View style={{padding: 5, alignItems: 'center'}}>
                  <Text style={styles.otherText}>Yorum Sayısı</Text>
                  <Text style={styles.otherText}>
                    {detailData.Product.CommentCount}
                  </Text>
                </View>
                <View style={{padding: 5, alignItems: 'center'}}>
                  <Text style={styles.otherText}>{title1()}</Text>
                  <Text style={styles.otherText}>{subTitle1()}</Text>
                </View>
                {title2() != null ? (
                  <View style={{padding: 5, alignItems: 'center'}}>
                    <Text style={styles.otherText}>{title2()}</Text>
                    <Text style={styles.otherText}>{subTitle2()}</Text>
                  </View>
                ) : null}
              </View>
            </View>

            <View style={styles.progressBarContainer}>
              <View style={styles.average}>
                <Text style={styles.averageText}>
                  {detailData.Product.Rating == -1
                    ? 0
                    : detailData.Product.Rating}
                </Text>
                <Icon name="star" solid size={22} style={{color: '#FFD700'}} />
              </View>
              <View style={{flex: 2, marginLeft: 10}}>
                <ProgressBar
                  number={5}
                  step={detailData.Product.Star5}
                  steps={
                    detailData.Product.Star5 +
                    detailData.Product.Star4 +
                    detailData.Product.Star3 +
                    detailData.Product.Star2 +
                    detailData.Product.Star1
                  }
                  height={8}
                />
                <ProgressBar
                  number={4}
                  step={detailData.Product.Star4}
                  steps={
                    detailData.Product.Star5 +
                    detailData.Product.Star4 +
                    detailData.Product.Star3 +
                    detailData.Product.Star2 +
                    detailData.Product.Star1
                  }
                  height={8}
                />
                <ProgressBar
                  number={3}
                  step={detailData.Product.Star3}
                  steps={
                    detailData.Product.Star5 +
                    detailData.Product.Star4 +
                    detailData.Product.Star3 +
                    detailData.Product.Star2 +
                    detailData.Product.Star1
                  }
                  height={8}
                />
                <ProgressBar
                  number={2}
                  step={detailData.Product.Star2}
                  steps={
                    detailData.Product.Star5 +
                    detailData.Product.Star4 +
                    detailData.Product.Star3 +
                    detailData.Product.Star2 +
                    detailData.Product.Star1
                  }
                  height={8}
                />
                <ProgressBar
                  number={1}
                  step={detailData.Product.Star1}
                  steps={
                    detailData.Product.Star5 +
                    detailData.Product.Star4 +
                    detailData.Product.Star3 +
                    detailData.Product.Star2 +
                    detailData.Product.Star1
                  }
                  height={8}
                />
              </View>
            </View>
            <Modal
              isVisible={saleHistory}
              onBackdropPress={() => setSaleHistory(false)}
              swipeDirection="down"
              animationInTiming={600}
              animationOutTiming={600}>
              <View
                style={{
                  marginHorizontal: Dimensions.get('window').width * 0.005,
                }}>
                <ChartModal
                  history={detailData.ProductHistory}
                  title="Satış Geçmişi"
                />
              </View>
            </Modal>
            <Modal
              isVisible={commentHistory}
              onBackdropPress={() => setCommentHistory(false)}
              swipeDirection="down"
              animationInTiming={600}
              animationOutTiming={600}>
              <View
                style={{
                  marginHorizontal: Dimensions.get('window').width * 0.005,
                }}>
                <ChartModal
                  history={detailData.ProductHistory}
                  title={'Yorum Geçmişi'}
                />
              </View>
            </Modal>
            <Modal
              isVisible={priceHistory}
              onBackdropPress={() => setPriceHistory(false)}
              swipeDirection="down"
              animationInTiming={600}
              animationOutTiming={600}>
              <View
                style={{
                  marginHorizontal: Dimensions.get('window').width * 0.005,
                }}>
                <ChartModal
                  history={detailData.ProductHistory}
                  title="Fiyat Geçmişi"
                />
              </View>
            </Modal>
            <Modal
              isVisible={stockHistory}
              onBackdropPress={() => setStockHistory(false)}
              swipeDirection="down"
              animationInTiming={600}
              animationOutTiming={600}>
              <View
                style={{
                  marginHorizontal: Dimensions.get('window').width * 0.005,
                }}>
                <ChartModal
                  history={detailData.ProductHistory}
                  title="Stok Geçmişi"
                />
              </View>
            </Modal>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginHorizontal: 15,
                marginVertical: 10,
              }}>
              <TouchableOpacity
                onPress={() =>
                  props.userLogin === null ? signOut() : setPriceHistory(true)
                }
                style={styles.chartContainer}>
                <Icon name="lira-sign" size={14} style={{marginRight: 3}} />
                <Text style={styles.chartText}>Fiyat Geçmişi</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() =>
                  props.userLogin === null
                    ? signOut()
                    : title3() === 'Yr. Geçmişi'
                    ? setCommentHistory(true)
                    : setStockHistory(true)
                }
                style={styles.chartContainer}>
                <Icon name={setIcon()} size={14} style={{marginRight: 3}} />
                <Text style={styles.chartText}>{title3()}</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() =>
                  props.userLogin === null ? signOut() : setSaleHistory(true)
                }
                style={styles.chartContainer}>
                <Icon name="shopping-cart" size={14} style={{marginRight: 3}} />
                <Text style={styles.chartText}>Satış Geçmişi</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      </ScrollView>
    </ImageBackground>
  );
};

export default Detail;
