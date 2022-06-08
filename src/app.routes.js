import React, { useEffect } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  Home,
  SearchPage,
  Settings,
  ProductDetail,
  ProductHistory,
  SearchGG,
  SearchHB,
  SearchN11,
  SearchTD,
  SearchAMZ,
  KeywordSearch,
  KeywordSearchDetail,
  FilterPageN11,
  FilterPageTD,
  FilterPageHB,
  FilterPageGG,
  FilterPageAMZ,
  Packages,
  PackageDetailFull,
  PackageDetailStandart
} from './pages';
import Uyelik from "../src/pages/Uyelik"
import { BackHandler } from "react-native"
import colors from './Themes/Colors';
import AnimationSearch from "./components/AnimationSearch"
import Favorites from './pages/Favorites';
import OnBoarding from './components/Walkthrough/onBoarding';
import Colors from './Themes/Colors';


const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();


const options = {
  options : (site) => ({
    headerShown: false,
    gestureDirection: 'vertical',
    cardStyleInterpolator: ({current, layouts}) => {
      return {
        cardStyle: {
          transform: [
            {
              translateY: current.progress.interpolate({
                inputRange: [0, 1],
                outputRange: [layouts.screen.height, 0],
              }),
            },
          ],
        },
      };
    },
    headerLeft:() => <Icon name="times" style={{color: "#179D82",marginLeft:10}} size={22} onPress={() => props.navigation.navigate(site)}/>,
  })
}

const screenOptions = {
  headerStyle: {
    backgroundColor: "white",
    height: Platform.OS == "android" ? 80  : 85,
  },
  headerTitleAlign: 'center',
  headerTintColor: colors.primary,
  headerTitleStyle: {
    fontFamily: "Quicksand-Medium",
    fontSize:18,
    letterSpacing:1.5
  },
}

const homeOptions = {
  title: 'Anasayfa',
  headerStyle: {
    backgroundColor: colors.primary,
    height: Platform.OS == "android" ? 80  : 66,
  },
  headerShown: false,
  headerTitleAlign: 'center',
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold',
  },
}

function HomeStack(props) {
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name="Home" component={Home} options={homeOptions}/>
      <Stack.Screen name="Trendyol" component={SearchTD}/>
      <Stack.Screen name="HepsiBurada" component={SearchHB} />
      <Stack.Screen name="N11" component={SearchN11} />
      <Stack.Screen name="GittiGidiyor" component={SearchGG} />
      <Stack.Screen name="Amazon" component={SearchAMZ} />
      <Stack.Screen name="n11.com" component={FilterPageN11} options={options.options('N11')} />
      <Stack.Screen name="trendyol.com" component={FilterPageTD} options={options.options('Trendyol')}/>
      <Stack.Screen name="hepsiburada.com" component={FilterPageHB} options={options.options('HepsiBurada')}/>
      <Stack.Screen name="gittigidiyor.com" component={FilterPageGG} options={options.options("GittiGidiyor")}/>
      <Stack.Screen name="amazon.com" component={FilterPageAMZ} options={options.options('Amazon')}/>
      <Stack.Screen name="Takip Ettiklerim" component={Favorites}/>
      <Stack.Screen name="Ürün Detayı" component={ProductDetail} />
      <Stack.Screen name="Product History" component={ProductHistory} />
      <Stack.Screen name="Profil" component={KeywordSearch} />
      <Stack.Screen name="Üyelik Paketleri" component={Packages}/>
    </Stack.Navigator>
  );
}

function SearchStack(props) {
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name="Trendyol" component={SearchTD} />
      <Stack.Screen name="HepsiBurada" component={SearchHB} />
      <Stack.Screen name="N11" component={SearchN11} />
      <Stack.Screen name="GittiGidiyor" component={SearchGG} />
      <Stack.Screen name="Amazon" component={SearchAMZ} />
      <Stack.Screen name="n11.com" component={FilterPageN11} options={options.options('N11')} />
      <Stack.Screen name="trendyol.com" component={FilterPageTD} options={options.options('Trendyol')}/>
      <Stack.Screen name="hepsiburada.com" component={FilterPageHB} options={options.options('HepsiBurada')}/>
      <Stack.Screen name="gittigidiyor.com" component={FilterPageGG} options={options.options("GittiGidiyor")}/>
      <Stack.Screen name="amazon.com" component={FilterPageAMZ} options={options.options('Amazon')}/>
      <Stack.Screen name="Üyelik Paketleri" component={Packages}/>
      <Stack.Screen name="Product Detail" component={ProductDetail} />
      <Stack.Screen name="Product History" component={ProductHistory} />
    </Stack.Navigator>
  );
}

const FavoriteStack = (props) => {
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name="Takip Ettiklerim" component={Favorites}/>
      <Stack.Screen name="Ürün Detayı" component={ProductDetail} />
      <Stack.Screen name="Trendyol" component={SearchTD} />
      <Stack.Screen name="HepsiBurada" component={SearchHB} />
      <Stack.Screen name="N11" component={SearchN11} />
      <Stack.Screen name="GittiGidiyor" component={SearchGG} />
      <Stack.Screen name="Amazon" component={SearchAMZ} />
      <Stack.Screen name="n11.com" component={FilterPageN11} options={options.options('N11')} />
      <Stack.Screen name="trendyol.com" component={FilterPageTD} options={options.options('Trendyol')}/>
      <Stack.Screen name="hepsiburada.com" component={FilterPageHB} options={options.options('HepsiBurada')}/>
      <Stack.Screen name="gittigidiyor.com" component={FilterPageGG} options={options.options("GittiGidiyor")}/>
      <Stack.Screen name="amazon.com" component={FilterPageAMZ} options={options.options('Amazon')}/>
      <Stack.Screen name="Üyelik Paketleri" component={Packages}/>
      <Stack.Screen name="Product Detail" component={ProductDetail} />
      <Stack.Screen name="Product History" component={ProductHistory} />
    </Stack.Navigator>
  );
};

const SettingStack = (props) => {
  return (
    <Stack.Navigator screenOptions={screenOptions} >
      <Stack.Screen name="Ayarlar" component={Settings} options={{headerLeft: null, gestureEnabled: false}}/>
      <Stack.Screen name="Üyelik Durumu" component={Uyelik}/>
      <Stack.Screen name="Üyelik Paketleri" component={Packages}/>
      {/* <Stack.Screen name="emparator.com" component={WebPage}/> */}
      <Stack.Screen name="Trendyol" component={SearchTD} />
      <Stack.Screen name="HepsiBurada" component={SearchHB} />
      <Stack.Screen name="N11" component={SearchN11} />
      <Stack.Screen name="GittiGidiyor" component={SearchGG} />
      <Stack.Screen name="Amazon" component={SearchAMZ} />
      <Stack.Screen name="n11.com" component={FilterPageN11} options={options.options('N11')} />
      <Stack.Screen name="trendyol.com" component={FilterPageTD} options={options.options('Trendyol')}/>
      <Stack.Screen name="hepsiburada.com" component={FilterPageHB} options={options.options('HepsiBurada')}/>
      <Stack.Screen name="gittigidiyor.com" component={FilterPageGG} options={options.options("GittiGidiyor")}/>
      <Stack.Screen name="amazon.com" component={FilterPageAMZ} options={options.options('Amazon')}/>
      <Stack.Screen name="Product Detail" component={ProductDetail} />
      <Stack.Screen name="Product History" component={ProductHistory} />
      <Stack.Screen name="OnBoarding" component={OnBoarding} options={{headerShown: false}}/>
      <Stack.Screen name="Profil" component={KeywordSearch} />
      <Stack.Screen name="Anasayfa" component={Home}/>
      <Stack.Screen name="Takip Ettiklerim" component={Favorites}/>
      <Stack.Screen name="Standart Paket" component={PackageDetailStandart} /> 
      <Stack.Screen name="Full Paket" component={PackageDetailFull} /> 
    </Stack.Navigator>
  );
};
const KeywordStack = (props) => {
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name="Kelime Araştırma" component={KeywordSearch}/>
      <Stack.Screen name="Kelime Araştırma Detay" component={KeywordSearchDetail}/>
      <Stack.Screen name="Trendyol" component={SearchTD} />
      <Stack.Screen name="HepsiBurada" component={SearchHB} />
      <Stack.Screen name="N11" component={SearchN11} />
      <Stack.Screen name="GittiGidiyor" component={SearchGG} />
      <Stack.Screen name="Amazon" component={SearchAMZ} />
      <Stack.Screen name="n11.com" component={FilterPageN11} options={options.options('N11')} />
      <Stack.Screen name="trendyol.com" component={FilterPageTD} options={options.options('Trendyol')}/>
      <Stack.Screen name="hepsiburada.com" component={FilterPageHB} options={options.options('HepsiBurada')}/>
      <Stack.Screen name="gittigidiyor.com" component={FilterPageGG} options={options.options("GittiGidiyor")}/>
      <Stack.Screen name="amazon.com" component={FilterPageAMZ} options={options.options('Amazon')}/>
      <Stack.Screen name="Product Detail" component={ProductDetail} />
      <Stack.Screen name="Product History" component={ProductHistory} />
      <Stack.Screen name="Üyelik Paketleri" component={Packages}/>
    </Stack.Navigator>
  );
};

const App = (props) => {
  // useEffect(() => {
  //   BackHandler.addEventListener('hardwareBackPress', () => true)
  //   return () =>
  //     BackHandler.removeEventListener('hardwareBackPress', () => true)
  // }, [])

  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: colors.primary,
      }}>
      <Tab.Screen
        options={{
          tabBarLabel: 'Anasayfa',
          tabBarIcon: ({color}) => <Icon name="home" color={color} size={22} />,
          tabBarVisible: true

        }}
        name="Home"
        component={HomeStack}
      />
      <Tab.Screen
        options={{
          tabBarLabel: 'Ürün Takibi',
          tabBarIcon: ({color}) => (
            <Icon name="bookmark" color={color} size={22} />
          ),
        }}
        name="Favorites"
        component={FavoriteStack}
      />

      <Tab.Screen
        options={{
          tabBarLabel: '',
          tabBarIcon: ({color}) => (
            <AnimationSearch 
            gg={()=>{props.navigation.navigate("GittiGidiyor")}} 
            td={()=>{props.navigation.navigate("Trendyol")
          
          }} 
            n11={()=>{props.navigation.navigate("N11")}} 
            hb={()=>{props.navigation.navigate("HepsiBurada")}} 
            amz={()=>{props.navigation.navigate("Amazon")}} 
            />
          ),
        }}
        name="Search"
        component={SearchStack}
      />

      <Tab.Screen
        options={{
          tabBarLabel: 'Kelime Arama',
          tabBarIcon: ({color}) => <Icon name="font" color={color} size={22} />,
        }}
        name="KeywordSearch"
        component={KeywordStack}
      />

      <Tab.Screen
        options={{
          tabBarLabel: 'Ayarlar',
          tabBarIcon: ({color}) => <Icon name="cog" color={color} size={22} />,
        }}
        name="Settings"
        component={SettingStack}
      />
    </Tab.Navigator>
  );
};

export default App;
