import React, {useEffect, useState} from  "react";
import { 
    View, 
    Text, 
    Alert, 
    ImageBackground, 
    StyleSheet,
    TouchableOpacity,
    ActivityIndicator,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/FontAwesome5"
import { KeywordCard } from "../components/KeywordCard/index";
import KeywordSearhFilter from "../components/KeywordSearchPage/KeywordSearchFilter";
import Button from '../components/FilterButton/FilterButton';
import { Colors, Fonts, Metrics } from "../Themes";

import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import KeywordCategory from "../components/KeywordSearchPage/KeywordCategory";
import KeywordSearchType from "../components/KeywordSearchPage/KeywordSearchType";
import KeywordOrder from "../components/KeywordSearchPage/KeywordOrder";
import KeywordAmazon from "../components/KeywordSearchPage/KeywordAmazon";


const KeywordSearch = ({navigation}) => {
    let content;
    const [data, setData] = useState([]);
    const [keyword, setKeyword] = useState('')
    const [loading, setLoading] = useState(false);
    const [searchType, setSearchType] = useState('category');
    const [userName, setUserName] = useState('');
    const [userInfo, setUserInfo] = React.useState({UserPackage: {}});
    const [userToken, setUserToken] = useState('');

    const setType = (type) => {
        setSearchType(type)
    }
    function getUserInfo(userName, userToken) {
        axios.post('https://api.emparator.com/Mobile/UserInfos', {
              username: userName,
              token: userToken,
            })
            .then((data) => {
              if(data.data === ""){
                return null
              }else{
                console.log('userInfo', data.data);
                setUserInfo(data.data.data);
              }
            });
      
    }

  
    
    useEffect(() => {
        console.log('çalıştı')
        AsyncStorage.multiGet(['@userName', '@userToken'])
        .then((response) => {
            console.log(response)
            setUserName(response[0][1])
            setUserToken(response[1][1])
            getUserInfo(response[0][1], response[1][1])
        });

    },[])

    if(searchType === 'category'){
        content = (
            <KeywordCategory 
                userInfo={userInfo}
                // setInput={setInput}
                // loading={loading}
                navigation={navigation}
                uName={userName} 
                uToken={userToken}
                // getCategoryKeyword={getCategoryKeyword} 
            />
        )
    }
    else if( searchType === 'order'){
        content = (
            <KeywordOrder
                navigation={navigation}
                userInfo={userInfo}
                uName={userName} 
                uToken={userToken}
            />
        )
    }
    else{
        content = (
           <KeywordAmazon
                userInfo={userInfo}
                navigation={navigation}
                // setInput={setInput}
                // loading={loading}
                // getAmazonKeyword={getAmazonKeyword}
                uName={userName} 
                uToken={userToken}
            />
        )
    }

    return(
        <ImageBackground resizeMode="cover" source={require("../Images/bg20.png")} style={{width: "100%", height: "100%", flex:1}} >
            <ScrollView>
                <KeywordSearchType searchType={searchType} setType={setType} />
                <View>{content}</View>
            {/* <KeywordCategory getCategoryKeyword={getCategoryKeyword} /> */}
            {/* {
                data.length > 0 && 
                <KeywordCard   
                    DetailPageRoute={() => {
                        navigation.navigate('Kelime Araştırma Detay');
                }}/>

            } */}
        </ScrollView>
        </ImageBackground>
    )
}

export { KeywordSearch }

const styles = StyleSheet.create({
    mainContainer :{
        width: Metrics.WIDTH * 0.95,
        marginHorizontal: Metrics.WIDTH * 0.025,
        marginVertical: Metrics.HEIGHT * 0.015,
        backgroundColor: "#fff",
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.36,
        shadowRadius: 6.68,
        elevation: 11,
    },
    container : {
        display: "flex",
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginTop: 5,
        
    },
    checkBox: {
        flexDirection: 'row',
        alignItems: 'center',
       
        paddingVertical: 10,
      },
      catText: {
        fontSize: 14,
        fontFamily: Fonts.type.base,
        marginLeft: 3,
      },
})



// https://emparator.com/Product/KeywordSearch Kelime Araştırma > Kategori Bazlı için api metodu: KeywordSearch(string username, string token, string keyword, int[] selectedMarketplaces)

// https://emparator.com/Product/KeywordSearch2 Kelime Araştırma > Sıralama Bazlı için api metodu: KeywordSearch2(string username, string token, string productUrl)

// https://emparator.com/Product/AmazonKeywords Amazon En Çok Aranan Kelimeler için api metodu: GetAmazonKeywords(string keyword)