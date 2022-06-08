import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import moment from 'moment';
import styles from './style';


export default function KeywordCardOrder({ data, id }) {
    const [chosen, setChosen] = useState(false);

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => setChosen(!chosen)} style={styles.open} >
                <View style={styles.catContainer}>
                    <View style={styles.title}>
                        {
                                data.ContainerTypeId === 2 ? 
                                <Text style={styles.kwText}>Kelime</Text>:
                                <Text style={styles.catText} >Category</Text>
                        }
                     
                        <Text style={styles.keyword} >{data.Keyword}</Text>
                    </View>
                    <Icon name="chevron-down" />
                </View>
            </TouchableOpacity>
            {
                chosen &&
                <View style={styles.innerContainer}>
                    <View style={styles.innerTitle}>
                        <Text>Genel Sıralama</Text>
                        <Text>Bulunduğu Sayfa</Text>
                        <Text>Tarih</Text>
                    </View>
                    <View style={styles.borderHorizontal} />
                    {
                        data.Details.map((itm, idx) => {
                            const dateMiliSecond = itm.LogDate.slice(6, -2)
                            console.log(typeof dateMiliSecond)
                            const date = new Date(Number(dateMiliSecond))
                            console.log(date.toString())
                            return(
                            <View style={styles.innerTitle}>
                                <Text>{itm.SequenceNumber}</Text>
                                <Text>{itm.PageNumber}</Text>
                                <Text>{'aaa'}</Text>
                         
                            </View>

                            )
                        })
                    }
                </View>

            }
        </View>

    )
}