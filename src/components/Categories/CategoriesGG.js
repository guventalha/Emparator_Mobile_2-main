import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import { CheckBox } from 'react-native-elements';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Fonts } from '../../Themes';
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

const CategoriesGG = () => {
const [toggleBebek, setToggleBebek] = useState(false);
const [toggleHobi, setToggleHobi] = useState(false);
const [toggleElektronik, setToggleElektronik] = useState(false);
const [toggleEv, setToggleEv] = useState(false);
const [toggleModa, setToggleModa] = useState(false);
const [toggleKozmetik, setToggleKozmetik] = useState(false);
const [toggleSuper, setToggleSuper] = useState(false);
const [toggleOto, setToggleOto] = useState(false);
const [toggleSpor, setToggleSpor] = useState(false);

return (
  <View>
      <CheckBox
        title="Bebek & Anne"
        checked={toggleBebek}
        onPress={() => setToggleBebek(!toggleBebek)}
        fontFamily={Fonts.type.base}
      />
            <CheckBox
        title="Elektronik"
        checked={toggleElektronik}
        onPress={() => setToggleElektronik(!toggleElektronik)}
      />
      <CheckBox
        title="Ev, Bahçe ve Ofis"
        checked={toggleEv}
        onPress={() => setToggleEv(!toggleEv)}
      />

      <CheckBox
        title="Hobi, Eğlence ve Sanat"
        checked={toggleHobi}
        onPress={() => setToggleHobi(!toggleHobi)}
      />
        <CheckBox
        title="Kozmetik & Kişisel Bakım"
        checked={toggleKozmetik}
        onPress={() => setToggleKozmetik(!toggleKozmetik)}
      />
      <CheckBox
        title="Moda"
        checked={toggleModa}
        onPress={() => setToggleModa(!toggleModa)}
      />
      <CheckBox
        title="Otomobil, Motosiklet ve Aksesuar"
        checked={toggleOto}
        onPress={() => setToggleOto(!toggleOto)}
      />
            <CheckBox
        title="Spor & Outdoor"
        checked={toggleSpor}
        onPress={() => setToggleSpor(!toggleSpor)}
      />

      <CheckBox
        title="Süpermarket"
        checked={toggleSuper}
        onPress={() => setToggleSuper(!toggleSuper)}
      />

  </View>
)
}


export default CategoriesGG;

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



