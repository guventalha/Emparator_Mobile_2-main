import React, {Component} from 'react';
import {View, Text, Platform, Image} from 'react-native';
import {LineChart} from 'react-native-chart-kit';
import {Metrics, Colors} from '../../Themes';

import styles from './styles';
export default class Chart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ProductSell: [],
      ProductPrice: [],
      ProductRevenue:[]
    };
  }
  getHistoryData = () => {
    let PrDate = [];
    let PrPrice = [];
    this.props.history.map((x) => {
      PrDate.push(x.CreateDate);
      PrPrice.push(Math.round(Number(x.Price)));
    });
    PrDate2=[]
 for(i=0;i<PrDate.length;i++){
    if(i==0||i==(PrDate.length-1)){
      
        PrDate2.push(PrDate[i]+"            ")
      
    }else{
      PrDate2.push(".")
    }
 }
    this.setState({ProductPrice: PrPrice, ProductDate: PrDate2.reverse()});
  };
  componentDidMount() {
    this.getHistoryData();
  }
  render() {
    return (
      <View>
        {this.state.ProductPrice.length>1 && (
          <View style={styles.container}>
            <View style={styles.title}>
              {/* <Image resizeMode={"cover"} source={this.props.image} style={{width:30, height:30}}/> */}
              <Text onPress={() => this.props.onClick()} style={styles.text}>{this.props.title} </Text>
            </View>
            <LineChart
              data={{
                labels: this.state.ProductDate,
                datasets: [
                  {
                    data: this.state.ProductPrice,
                  },
                ],
              }}
              width={Metrics.WIDTH * 0.9}
              withVerticalLines={false}
              height={Metrics.HEIGHT * (Platform.OS === 'ios' ? 0.3 : 0.4)}
              chartConfig={{
                propsForBackgroundLines: {
                  strokeDasharray: "",
                  strokeWidth:"0.3" ,
                
             },
            
                decimalPlaces: 0,
                backgroundColor: '#fff',
                backgroundGradientFrom: '#ffffff',
                backgroundGradientTo: '#ffffff',
                color: (opacity = 1) => `#1ab394`,
                labelColor: (opacity = 1) => `black`,
                propsForDots: {
                  r: "0",
                  strokeWidth: "2",
                  stroke: "#ffa726"
                }
              }}
              // style={{padding: 8}}
            />
          </View>
        )}
    
      </View>
    );
  }
}
