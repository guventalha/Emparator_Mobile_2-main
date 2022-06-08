import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import { CheckBox } from 'react-native-elements';
import { TouchableOpacity } from 'react-native-gesture-handler';
const DATA = [
  {
    id: 1,
    name: "Aksesuar",
    checked : false
  },
  {
    id: 2,
    name: "Anne & Bebek & Çocuk",
    checked : false
  },
  {
    id: 3,
    name: "Ayakkabı",
    checked : false
  },
  {
    id: 4,
    name: "Elektronik ",
    checked : false
  },
  {
    id: 5,
    name: "Ev & Mobilya",
    checked : false
  },
  {
    id: 6,
    name: "Giyim",
    checked : false
  },
  {
    id: 7,
    name: "Kozmetik & Kişisel Bakım",
    checked : false
  },
  {
    id: 8,
    name: "Spor & Outdoor",
    checked : false
  },
  {
    id: 9,
    name: "Süpermarket",
    checked : false
  },
  {
    id: 10,
    name: "Yaşam",
    checked : false
  },
]

const CategoriesTD = () => {
const [toggleAksesuar, setToggleAksesuar] = useState(false);
const [toggleAnne, setToggleAnne] = useState(false);
const [toggleElektronik, setToggleElektronik] = useState(false);
const [toggleAyakkabı, setToggleAyakkabı] = useState(false);
const [toggleEv, setToggleEv] = useState(false);
const [toggleGiyim, setToggleGiyim] = useState(false);
const [toggleKozmetik, setToggleKozmetik] = useState(false);
const [toggleMarket, setToggleMarket] = useState(false);
const [toggleYasam, setToggleYasam] = useState(false);
const [toggleSpor, setToggleSpor] = useState(false);

return (
  <View>
      <CheckBox
        title="Aksesuar"
        checked={toggleAksesuar}
        onPress={() => setToggleAksesuar(!toggleAksesuar)}
        style={{width: Dimensions.get("screen").width * 0.45}}
      />
      <CheckBox
        title="Anne & Bebek & Çocuk"
        checked={toggleAnne}
        onPress={() => setToggleAnne(!toggleAnne)}
      />
      <CheckBox
        title="Ayakkabı"
        checked={toggleAyakkabı}
        onPress={() => setToggleAyakkabı(!toggleAyakkabı)}
      />
      <CheckBox
        title="Elektronik"
        checked={toggleElektronik}
        onPress={() => setToggleElektronik(!toggleElektronik)}
      />
      <CheckBox
        title="Ev & Mobilya"
        checked={toggleEv}
        onPress={() => setToggleEv(!toggleEv)}
      />
      <CheckBox
        title="Giyim"
        checked={toggleGiyim}
        onPress={() => setToggleGiyim(!toggleGiyim)}
      />
      <CheckBox
        title="Kozmetik & Kişisel Bakım"
        checked={toggleKozmetik}
        onPress={() => setToggleKozmetik(!toggleKozmetik)}
        style={{width: Dimensions.get("screen").width * 0.45}}
      />
        <CheckBox
        title="Spor & Outdoor"
        checked={toggleSpor}
        onPress={() => setToggleSpor(!toggleSpor)}
      />
      <CheckBox
        title="Süpermarket"
        checked={toggleMarket}
        onPress={() => setToggleMarket(!toggleMarket)}
      />
      <CheckBox
        title="Yaşam"
        checked={toggleYasam}
        onPress={() => setToggleYasam(!toggleYasam)}
      />

  </View>
)
}


export default CategoriesTD;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    flexWrap: 'wrap',
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});


// const [ category, setCategory ] = useState(DATA)

// useEffect(() => {
  
// },[category])

// function onChecked(id){
//   const data = DATA
//   const index = data.findIndex(x => x.id === id)
//   console.log("index",index)
//   data[index].checked = !data[index].checked
//   setCategory(data)
// }


// return(
//   <View>
//     {
//       category.map((item, key) => {
//         return(
//           <TouchableOpacity
//           key={key}
//           onPress={() => onChecked(item.id)}
//           >
//             <CheckBox
//             value={item.checked}
//             onValueChange={() => setCategory(item.id)}

//             />
//           </TouchableOpacity>
//         )
//       })
//     }
//   </View>
// )
// }



