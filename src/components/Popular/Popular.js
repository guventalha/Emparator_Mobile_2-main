import React from "react";
import {View, Text, TouchableOpacity, Flatlist, Animated, Image, Dimensions, StyleSheet} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import {colors} from "../../Themes/Colors"

const width = Dimensions.get("screen").width
const height = Dimensions.get("screen").height

const PopularData = [
    {
      key: '3571572',
      title: 'Sweatshirt',
      description:
        "Mad Girls Antrasit Sweatshirt MG785",
      image: 'https://n11scdn.akamaized.net/a1/450/giyim-ayakkabi/sweatshirt/mad-girls-antrasit-sweatshirt-mg785__1288430441310868.jpg',
      price: "89.90",
      comment: 0,
      star: 0,
    },
    {
      key: '3571747',
      title: 'Kuru Mama',
      description:
        'Kays Dog Kuzu Etli Prinçli Yetişkin Köpek Maması 15KG',
      image: 'https://n11scdn.akamaized.net/a1/450/13/89/48/31/14070245.jpg',
      price: "76.80",
      comment: 353,
      star: 4,
    },
    {
      key: '3571680',
      title: 'Islak Havlu',
      description:
        'Sleepy Sensitive Islak Bebek Havlusu 90 Adet Islak Mendil',
      image: 'https://mcdn01.gittigidiyor.net/59271/tn50/592719603_tn50_0.jpg',
      price: "76.80",
      comment: 11,
      star: 5,
    },
  ];

  const renderData = ({item}) => {
    return(
        <View style={styles.container}>
            <TouchableOpacity style={{flexDirection:"row"}}>
                <View>
                    <Image source={{uri: item.image}} resizeMode="contain" style={{height:130, width:100, margin:5}} />
                    <Text style={styles.price}>{item.price} ₺</Text>
                </View>
                <View style={{flexDirection:"column",margin: 10}}>
                    <View style={{height:100, width:200}}>
                        <Text style={{color: "#888888"}}>{item.title}</Text>
                        <View style={{flexDirection:"row"}}>
                            <Text style={{fontSize:18,color: "#676a6c",flexWrap:"wrap"}}>{item.description}</Text>
                        </View>
                    </View>
                    <View style={styles.commentContainer}>
                        <View style={styles.comment}>
                            <Icon name="comment" size={18} color={"white"} style={{marginHorizontal: 5}} />
                            <Text style={styles.text}>{item.comment}</Text>
                        </View>
                        <View style={styles.star}>
                            <Icon name="star" size={18} color={"white"} />
                            <Text style={styles.text}>{item.star}</Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    )
}

const Indicator = ({scrollX}) => {
    return (
      <View style={{position: 'absolute', bottom: 0, flexDirection: 'row'}}>
        {PopularData.map((__, i) => {
          const inputRange= [(i - 1) * width, i * width, (i+1) * width];
  
          const scale = scrollX.interpolate({
            inputRange,
            outputRange: [0.6, 1, 0.6],
            extrapolate: "clamp"
          });
          const opacity = scrollX.interpolate({
            inputRange,
            outputRange: [0.6, 0.9, 0.6],
            extrapolate: "clamp"
          });
  
          return (
            <Animated.View
              key={`indicator-${i}`}
              style={{
                height: 10,
                width: 10,
                borderRadius: 5,
                backgroundColor: "#179D82",
                opacity,
                margin: 5,
                transform: [
                    {
                       scale
                    }
                ]
              }}
            />
          );
        })}
      </View>
    );
  };


const Popular = (props) => {
    const scrollX = React.useRef(new Animated.Value(0)).current;

    return(
        <View style={{marginHorizontal: width * 0.05, justifyContent:"center", alignItems:"center"}}>
            <Animated.FlatList
            data={PopularData}
            renderItem={renderData}
            horizontal
            keyExtractor={(item) => item.key}
            showsHorizontalScrollIndicator={false}
            // contentContainerStyle={{paddingBottom: 100}}
            pagingEnabled
            onScroll={Animated.event(
            [{nativeEvent: {contentOffset: {x: scrollX}}}],
            {useNativeDriver: false},
            )}
            />
            <Indicator scrollX={scrollX}/>
        </View>
    )
}

export default Popular; 

const styles = StyleSheet.create({
    container:{
        flex:1,
        flexWrap:"wrap",
        width: Dimensions.get("screen").width  * 0.9,
        height: Dimensions.get("screen").height / 5,
        backgroundColor: 'white',
        borderRadius: 5,
        // marginHorizontal: Metrics.WIDTH * 0.1,
        // marginVertical: Metrics.HEIGHT * 0.05,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.36,
        shadowRadius: 6.68,
        elevation: 11,
    },
    commentContainer: {
        borderWidth:1,
        borderColor:"blue",
        flexDirection:"row",
        position:"absolute",
        bottom:0,
    },  
    comment:{
        flexDirection: "row",
        width:80,
        paddingVertical:3,
        alignItems: "center",
        backgroundColor:"#E74C3C",
        textAlign:"center",
        marginRight: 5,
        borderRadius: 5,
    },
    star:{
        flexDirection: "row",
        width:50,
        paddingVertical:3,
        justifyContent:"space-around",
        alignItems: "center",
        backgroundColor:"#9B59B6",
        textAlign:"center",
        borderRadius: 5,
    },
    price: {
        backgroundColor:"#1AB394",
        padding: 5,
        position: "absolute",
        bottom: 8,
        right:0,
        color: "white",
        fontSize:16,
    },
    text:{
        fontSize:16,
        color:"white"
    }
})