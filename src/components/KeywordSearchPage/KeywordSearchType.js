import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, {useState} from 'react'
import { Fonts, Colors } from '../../Themes';


export default function KeywordSearchType(props) {
   
    // const setType = (type) => {
    //     setSearchType(type)
    // }

    return (
        <View
            style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-around',
                backgroundColor: 'white',
                //   borderBottomColor: Colors.primary,
                //   borderBottomWidth: 1,
                //   paddingVertical: 10,
            }}>
            <View
                style={{
                    borderBottomColor: props.searchType === 'category' ? Colors.primary : 'white',
                    borderBottomWidth: 1,
                    height: '100%',
                    paddingVertical: 10,
                }}
            >

                <TouchableOpacity onPress={() => props.setType('category')}>
                    <Text
                        style={{
                            color: props.searchType === 'category' ? Colors.primary : 'black', 
                            fontFamily: Fonts.type.base}}
                    >
                        Kategori Bazlı
                    </Text>
                </TouchableOpacity>
            </View>
            <View
                style={{
                    borderBottomColor: props.searchType === 'order' ? Colors.primary : 'white',
                    borderBottomWidth:props.searchType === 'order' ? 1 : 0,
                    height: '100%',
                    paddingVertical: 10,
                }}
            >

                <TouchableOpacity  onPress={() => props.setType('order')}>
                    <Text
                    style={{
                        color:  props.searchType === 'order' ? Colors.primary : 'black',
                        fontFamily: Fonts.type.base
                        }}
                    >
                        Sıralama Bazlı
                    </Text>
                </TouchableOpacity>
            </View>
            <View
              style={{
                borderBottomColor: props.searchType === 'amazon' ? Colors.primary : 'white',
                borderBottomWidth:props.searchType === 'amazon' ? 1 : 0,
                height: '100%',
                paddingVertical: 10,
            }}
            >

                <TouchableOpacity  onPress={() => props.setType('amazon')}>
                    <Text
                    style={{
                        color:props.searchType === 'amazon' ? Colors.primary : 'black', 
                        fontFamily: Fonts.type.base
                        }}
                    >Amazon Keywords</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    modalContainer: {
        backgroundColor: 'white',
        justifyContent: 'flex-end',
        height: '40%',
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
        marginTop: 5,
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
    modalLine: {
        backgroundColor: 'rgba(0,0,0,0.1)',
        height: 5,
        width: '12%',
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },
});