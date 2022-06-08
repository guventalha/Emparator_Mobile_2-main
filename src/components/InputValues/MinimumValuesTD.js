import React from "react";
import {View, TextInput, Dimensions } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5"
import { Fonts } from "../../Themes";

const minValues = [
    {
      key: '1',
      input: 'Min. Fiyat',
      name: 'lira-sign',
    },
    {
      key: '2',
      input: 'Min. Satış',
      name: 'tags',
    },
    {
      key: '3',
      input: 'Min. Ciro',
      name: 'wallet',
    },
    {
      key: '4',
      input: 'Min. Yorum ',
      name: 'comment',
    },
    {
      key: '5',
      input: 'Min. Puan',
      name: 'star',
    },
    {
      key: '6',
      input: 'Min. Fav.',
      name: 'heart',
    },
    {
      key: '7',
      input: 'Min. Mğz. Sayısı',
      name: 'list',
    },
  ];

const MinimumValuesTD = () => {
    return(
        <View>
            {
                minValues.map((res) =>{
                    return(
                        <View style={{
                            width: Dimensions.get("window").width * 0.40,
                            height: Dimensions.get("window").height * 0.05 ,
                            borderColor :"#e5e6e7",
                            borderBottomWidth:2,
                            marginVertical: 5,
                            marginHorizontal:1,
                            flexDirection:"row",
                            alignItems:"center",
                        }} >
                            <Icon 
                            name={res.name} 
                            size={16} 
                            color={"#9D9D9D"}
                            style={{
                                marginHorizontal:5
                            }}
                            />
                            <TextInput
                                key={res.key}
                                placeholder={res.input}
                                placeholderTextColor="#9D9D9D"
                                style={{
                                    fontSize:14,
                                    paddingVertical:0,
                                    paddingRight:5,
                                    fontFamily: Fonts.type.base
                                }}
                                onChangeText
                            />
                        </View>
                    )
                })
            }
        </View>
    )
}

export default MinimumValuesTD;

