import React from "react";
import {View, TextInput, Dimensions} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import { Fonts } from "../../Themes";

const maxValues = [
    {
      key: '1',
      input: 'Max. Fiyat',
      name: 'lira-sign',
    },
    {
      key: '2',
      input: 'Max. Satış',
      name: 'tags',
    },
    {
      key: '3',
      input: 'Max. Ciro',
      name: 'wallet',
    },
    {
      key: '4',
      input: 'Max. Yorum ',
      name: 'comment',
    },
    {
      key: '5',
      input: 'Max. Puan',
      name: 'star',
    },
    {
      key: '6',
      input: 'Max. Mğz. Yr.',
      name: 'comments',
    },
    {
      key: '7',
      input: 'Max. Mğz. Puanı',
      name: 'certificate',
    },
  ];

const MaximumValuesGG = () => {
    return(
        <View>
            {
                maxValues.map((res, index) =>{
                    return(
                        <View style={{
                            width: Dimensions.get("window").width * 0.40,
                            height: Dimensions.get("window").height * 0.05 ,
                            borderColor :"#e5e6e7",
                            borderBottomWidth:2,
                            marginVertical: 5,
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
                                    paddingRight:0,
                                    fontFamily: Fonts.type.base
                                }}
                            />
                        </View>
                    )
                })
            }
        </View>
    )
}

export default MaximumValuesGG;