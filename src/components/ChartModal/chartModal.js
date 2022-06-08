import React, {Component} from 'react';
import {View, Text, Platform} from 'react-native';
import {LineChart} from 'react-native-chart-kit';
import {Metrics, Colors} from '../../Themes';

import styles from './styles';
export default class ChartModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ProductDate: [],
      ProductValue: [],
    };
  }
  getHistoryData = () => {
    let PrDate = [];
    let PrValue = [];
    this.props.history.map((x) => {
      PrDate.push(x.CreateDate);

      if (this.props.title == 'Yorum Geçmişi') {
        PrValue.push(Math.round(x.CommentCount));
        console.log(Math.round(x.CommentCount));
      } else if (this.props.title == 'Satış Geçmişi') {
        PrValue.push(Math.round(Number(x.EstimatedSale)));
      } else if (this.props.title == 'Stok Geçmişi') {
        PrValue.push(Math.round(Number(x.StockCount)));
      } else {
        PrValue.push(Math.round(Number(x.Price)));
      }
    });
    PrDate2 = [];
    for (i = 0; i < PrDate.length; i++) {
      if (i == 0 || i == PrDate.length - 1) {
        if (i == PrDate.length - 1) {
          PrDate2.push(PrDate[i] + '                        ');
        } else {
          PrDate2.push(PrDate[i]);
        }
      } else {
        PrDate2.push('.');
      }
    }
    this.setState({ProductValue: PrValue, ProductDate: PrDate2});
  };
  
  componentDidMount() {
    this.getHistoryData();
  }
  render() {
    return (
      <View>
        {this.state.ProductDate.length > 1 && (
          <View style={styles.container}>
            <View style={styles.title}>
              <Text>{this.props.title} </Text>
            </View>
            <View style={{paddingRight: 150}}>
            <LineChart
                data={{
                  labels: this.state.ProductDate,
                  datasets: [
                    {
                      data: this.state.ProductValue,
                    },
                  ],
                }}
                width={Metrics.WIDTH * 0.8}
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
              />
            </View>
          </View>
        )}
      </View>
    );
  }
}
