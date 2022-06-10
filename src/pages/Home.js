import React, {useEffect} from 'react';
import {
  View,
  Dimensions,
  StatusBar,
  Image,
  StyleSheet,
  ActivityIndicator,
  Alert,
  Platform,
  ImageBackground,
  ScrollView,
} from 'react-native';
import {Container, Header, Left, Right, Body} from 'native-base';
import Chart from '../components/Chart/chart';
import Popular2 from '../components/Popular/Popular2';
// import {Platform} from 'react-native';
import axios from 'axios';
import {Animated} from 'react-native';
import Colors from '../Themes/Colors';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useIsFocused} from '@react-navigation/native';
// import {ScrollView} from 'react-native';
// import {ImageBackground} from 'react-native';
import {useAuth} from '../Router';

// ANSAYFA : https://api.emparator.com/Mobile/GetFrontValue
// SEARCH : https://api.emparator.com/Mobile/GetSearchResults
// UYELIK : https://api.emparator.com/Mobile/UserInfos

const Home = ({navigation}) => {
  const isFocused = useIsFocused();
  const [popularData, setPopularData] = React.useState(null);
  const [graphData, setGraphData] = React.useState(null);
  const [graphDataHistory, setGraphDataHistory] = React.useState([]);
  const [userLogin, setUserLogin] = React.useState();

  const {signOut} = useAuth();

  function renderData({item}) {
    // console.log("what is the popular ???", popularData)
    return (
      <Popular2
        data={item}
        onDetail={() => navigation.navigate('Ürün Detayı', {itemId: item.Id})}
      />
    );
  }

  useEffect(() => {
    function getData() {
      AsyncStorage.getItem('@userName').then((response) => {
        AsyncStorage.getItem('@userToken').then((token) => {
          axios
            .post('https://api.emparator.com/Mobile/GetFrontValues', {
              username: response,
              token: token,
            })
            .then((res) => {
              if (res.data === '') {
                Alert.alert(
                  'emparator.com',
                  'Oturumunuzun süresi sona erdi. Lütfen giriş yaptıktan sonra tekrar deneyiniz.',
                );
                signOut();
              } else {
                setPopularData(res.data.data.Products);
                setGraphData(res.data.data.GraphProduct);
                setGraphDataHistory(res.data.data.GraphProductHistory);
                // console.log("ne geliyor", res.data.data)
              }
              // console.log(res.data.data)
            })
            .catch((err) => console.log(err));
        });
      });
    }
    console.log(Colors.primary);
    getData();
  }, [isFocused]);

  return (
    <Container style={styles.container}>
      <StatusBar hidden />
      <Header style={styles.header}>
        <Left style={styles.left} />
        <Body style={styles.body}>
          <Image
            source={require('../Images/newLogo3.png')}
            style={{
              width: Platform.OS === 'android' ? '90%' : '75%',
              height: Platform.OS === 'android' ? '48%' : '53%',
            }}
          />
        </Body>
        <Right style={styles.right} />
      </Header>
      <ImageBackground
        resizeMode="cover"
        source={require('../Images/bg20.png')}
        style={{width: '100%', height: '100%', flex: 1}}>
        <ScrollView>
          {popularData === null ? (
            <View style={{flex: 2, justifyContent: 'center', marginTop: 10}}>
              <ActivityIndicator size="small" color={Colors.primary} />
            </View>
          ) : (
            <View
              style={{
                flex: 1,
                flexDirection: 'column',
                marginVertical: 8,
              }}>
              <View style={styles.flatList}>
                <Animated.FlatList
                  data={popularData}
                  renderItem={renderData}
                  horizontal
                  keyExtractor={(item) => String(item.Id)}
                  showsHorizontalScrollIndicator={false}
                  // contentContainerStyle={{paddingBottom: 100}}
                  // pagingEnabled
                />
              </View>
              <View
                style={{
                  marginHorizontal: Dimensions.get('window').width * 0.04,
                  marginTop: 5,
                }}>
                {graphDataHistory.length > 1 && (
                  <Chart
                    onClick={() =>
                      navigation.navigate('Ürün Detayı', {
                        itemId: graphData.Id,
                      })
                    }
                    image={graphData.PhotoUrl}
                    title={graphData.Name}
                    data={graphData}
                    history={graphDataHistory}
                  />
                )}
              </View>
            </View>
          )}
        </ScrollView>
      </ImageBackground>
    </Container>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f0f0f0',
    flex: 1,
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
  },

  left: {
    flex: 0.25,
    backgroundColor: 'transparent',
  },

  body: {
    flex: 2,
    alignItems: 'center',
    backgroundColor: 'transparent',
  },

  right: {
    flex: 0.25,
  },
  flatList: {
    marginHorizontal: Dimensions.get('screen').width * 0.025,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
