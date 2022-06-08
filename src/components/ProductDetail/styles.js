import { Platform, StyleSheet } from "react-native";
import { Metrics, Fonts, Colors } from "../../Themes";

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
  },

  HeaderBg: {
    backgroundColor: "#f05522",
    ...Platform.select({
      android: {
        height: Metrics.HEIGHT * 0.13,
      },
    }),
  },

  leftheader: {
    flex: 1,
  },

  body: {
    flex: 3,
  },

  right: {
    flex: 1,
  },

  headertitle: {
    textAlign: "center",
    justifyContent: "center",
    alignSelf: "center",
    color: "#ffffff",
    fontWeight: "normal",
    ...Platform.select({
      ios: {
        fontSize: Fonts.moderateScale(14),
      },
      android: {
        fontSize: Fonts.moderateScale(16),
      },
    }),
    //fontFamily: Fonts.type.sfuiDisplaySemibold,
  },

  MainListBg: {
    backgroundColor: "#f5f5f5",
    flex: 1,
  },

  mainRenderView: {
    margin: Metrics.HEIGHT * 0.02,
    marginBottom: Metrics.HEIGHT * 0.01,
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
    flex:1
  },

  FoodImg: {
    ...Platform.select({
      ios: {
        width: Metrics.WIDTH * 0.2,
        height: Metrics.HEIGHT * 0.1,
      },
      android: {
        width: Metrics.WIDTH * 0.23,
        height: Metrics.HEIGHT * 0.13,
      },
    }),
    borderRadius: 8,
    margin: Metrics.HEIGHT * 0.02,
  },

  FoodName: {
    color: "#262628",
  //  fontFamily: Fonts.type.sfuiDisplaySemibold,
    ...Platform.select({
      ios: {
        fontSize: Fonts.moderateScale(12),
        width: Metrics.WIDTH * 0.7,
      },
      android: {
        fontSize: Fonts.moderateScale(13),
        width: Metrics.WIDTH * 0.7,
      },
    }),
    marginTop: Metrics.HEIGHT * 0.02,
    fontFamily: Fonts.type.base,
    width: "80%"
  },

  FoodAdd: {
    color: "#c2c4ca",
  //  fontFamily: Fonts.type.sfuiDisplayRegular,
    fontSize: Fonts.moderateScale(11),
  },

  ratingStar: {
    height: Metrics.HEIGHT * 0.02,
    width: Metrics.HEIGHT * 0.025,
    // marginLeft: Metrics.HEIGHT * 0.01,
    marginVertical: 10
  },
  ratingStarComment: {
    height: Metrics.HEIGHT * 0.015,
    width: Metrics.HEIGHT * 0.015,
    marginLeft: Metrics.HEIGHT * 0.01,
   alignItems:"center"
  },

  reviewText: {
    color: "#d4d6da",
   // fontFamily: Fonts.type.sfuiDisplayRegular,
    fontSize: Fonts.moderateScale(14),
    marginLeft: Metrics.HEIGHT * 0.01,
  },

  borderHorizontal: {
    backgroundColor: "#ebeced",
    width: Metrics.WIDTH,
    height: 1,
  },

  DateTimeMainView: {
    flexDirection: "row",
    marginTop: Metrics.HEIGHT * 0.02,
    marginLeft: Metrics.HEIGHT * 0.02,
    marginBottom: Metrics.HEIGHT * 0.02,
  },

  DateTimeText: {
    color: "#262628",
    //fontFamily: Fonts.type.sfuiDisplayRegular,
    fontSize: Fonts.moderateScale(14),
    alignSelf: "center",
    marginLeft: Metrics.HEIGHT * 0.01,
  },

  MoneyText: {
    color: Colors.primary,
    fontFamily: Fonts.type.base,
    fontSize: Fonts.moderateScale(18),
    alignSelf: "center",
  },
  logo: {
    width:30,
    height:30, 
    position:"absolute", 
    left:10,
    top: 10,
    // backgroundColor: "white",
    // borderRadius:20
  },
  progressBarContainer: {
    backgroundColor: 'white',
    flexDirection: 'row',
    marginHorizontal: 15,
    marginVertical: 10,
    padding: 10,
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
  average:{
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    borderRightColor: 'rgb(128,128,128)',
    borderRightWidth: 1,
    flexDirection: "row"
  },
  averageText: {
    fontFamily: Fonts.type.base,
    fontSize: 32
  },  
  estimatedValue: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  saleText:{
    flexDirection:"row",
    alignItems: "center",
    // justifyContent: "space-around",
    paddingVertical: 3,
    paddingHorizontal: 10,
    backgroundColor: "#c22f1f",
    borderRadius:15
  },
  estimatedValueText: {
    fontFamily: Fonts.type.base,
  },
  otheText:{
    fontWeight: 'bold', 
    textAlign: 'center',
    fontFamily: Fonts.type.base
  },
  chartContainer:{
    backgroundColor: "#fff",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 8,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
        width: 0,
        height: 2,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,
    elevation: 11,
  },
  chartText:{
    fontFamily: Fonts.type.base,
    fontSize: 12
  },
  follow: {
    flexDirection: "row", 
    alignItems: "center", 
    backgroundColor: "#F7A54B", 
    padding:3,
    borderRadius: 5
    
  },
  followText:{
    color: "#fff",
    fontFamily: Fonts.type.base,
    marginRight:3,
    fontSize:14
  }
})

export default styles;
