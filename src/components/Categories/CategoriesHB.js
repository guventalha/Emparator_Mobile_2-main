import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import { CheckBox } from 'react-native-elements';
import { TouchableOpacity } from 'react-native-gesture-handler';
const DATA = [
  {
    id: 1,
    name: "Anne & Bebek",
    checked : false
  },
  {
    id: 2,
    name: "Bilet,Tatil & Eğlence",
    checked : false
  },
  {
    id: 3,
    name: "Elektronik",
    checked : false
  },
  {
    id: 4,
    name: "Ev & Yaşam ",
    checked : false
  },
  {
    id: 5,
    name: "Giyim & Ayakkabı",
    checked : false
  },
  {
    id: 6,
    name: "Kitap,Müzik,Film,Oyun",
    checked : false
  },
  {
    id: 7,
    name: "Kozmetik & Kişisel Bakım",
    checked : false
  },
  {
    id: 8,
    name: "Mğcevher & Saat",
    checked : false
  },
  {
    id: 9,
    name: "Otomotiv & Motosiklet",
    checked : false
  },
  {
    id: 10,
    name: "Spor & Outdoor",
    checked : false
  },
]

const CategoriesHB = () => {
const [toggleAnne, setToggleAnne] = useState(false);
const [toggleBilet, setToggleBilet] = useState(false);
const [toggleElektronik, setToggleElektronik] = useState(false);
const [toggleEv, setToggleEv] = useState(false);
const [toggleGiyim, setToggleGiyim] = useState(false);
const [toggleKitap, setToggleKitap] = useState(false);
const [toggleKozmetik, setToggleKozmetik] = useState(false);
const [toggleMucevher, setToggleMucevher] = useState(false);
const [toggleOto, setToggleOto] = useState(false);
const [toggleSpor, setToggleSpor] = useState(false);

return (
  <View>
      <CheckBox
        title="Anne & Bebek"
        checked={toggleAnne}
        onPress={() => setToggleAnne(!toggleAnne)}
        style={{width: Dimensions.get("screen").width * 0.45}}
      />
      <CheckBox
        title="Bilet, Tatil & Eğlence"
        checked={toggleBilet}
        onPress={() => setToggleBilet(!toggleBilet)}
      />
      <CheckBox
        title="Elektronik"
        checked={toggleElektronik}
        onPress={() => setToggleElektronik(!toggleElektronik)}
      />
      <CheckBox
        title="Ev & Yaşam"
        checked={toggleEv}
        onPress={() => setToggleEv(!toggleEv)}
      />
      <CheckBox
        title="Giyim & Ayakkabı"
        checked={toggleGiyim}
        onPress={() => setToggleGiyim(!toggleGiyim)}
      />
      <CheckBox
        title="Kitap,Müzik,Film,Oyun"
        checked={toggleKitap}
        onPress={() => setToggleKitap(!toggleKitap)}
      />
      <CheckBox
        title="Kozmetik & Kişisel Bakım"
        checked={toggleKozmetik}
        onPress={() => setToggleKozmetik(!toggleKozmetik)}
        style={{width: Dimensions.get("screen").width * 0.45}}
      />
      <CheckBox
        title="Mücevher & Saat"
        checked={toggleMucevher}
        onPress={() => setToggleMucevher(!toggleMucevher)}
      />
      <CheckBox
        title="Otomotiv & Motosiklet"
        checked={toggleOto}
        onPress={() => setToggleOto(!toggleOto)}
      />
      <CheckBox
        title="Spor & Outdoor"
        checked={toggleSpor}
        onPress={() => setToggleSpor(!toggleSpor)}
      />
  </View>
)
}


export default CategoriesHB;

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



