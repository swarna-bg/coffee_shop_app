import {StyleSheet, Text, View,ScrollView,TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {useStore} from '../store/store';
import {COLORS, FONTSIZE, SPACING} from '../theme/theme';
import HeaderBar from '../components/headerBar';
import CustomIcon from '../components/customIcons';

const getCategoryNameFromData = (data: any) => {
  let temp: any = {};

  for (let i = 0; i < data.length; i++) {
    if (temp[data[i].name] == undefined) {
      temp[data[i].name] = 1;
    } else {
      temp[data[i].name]++;
    }
  }
  let categories = Object.keys(temp);
  categories.unshift('All');
  return categories;
};

const getCoffeeList = (category: string, data: any) => {
  if (category == 'All') {
    return data;
  } else {
    let coffeeList = data.filter((item: any) => item.name === category);
    return coffeeList;
  }
};

const HomeScreen = () => {
  const coffeeList = useStore((state: any) => state.CoffeeList);
  const beanList = useStore((state: any) => state.BeanList);
  const [categories, setCategories] = useState(
    getCategoryNameFromData(coffeeList),
  );
  const [searchText, setSearchText] = useState('');
  const [categoryIndex, setCategoryIndex] = useState({
    index: 0,
    category: categories[0],
  });
  const [sortedData, setSortedData] = useState(
    getCoffeeList(categoryIndex.category, coffeeList),
  );

  return (
    <View style={styles.mainContainer}>
     <ScrollView>
      {/*app header*/ }
      <HeaderBar  />

      <Text style={styles.headerText}>Find the best{'\n'}coffee for you</Text>
      {/*search input*/}
      <View>
        <TouchableOpacity>
          <CustomIcon  name='search' size={FONTSIZE.size_18} color={searchText.length>0?COLORS.primaryOrangeHex:COLORS.primaryLightGreyHex} />
        </TouchableOpacity>
      </View>
     </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: COLORS.primaryBlackHex,
  },
  headerText:{
    fontSize:FONTSIZE.size_28,
    color:COLORS.primaryWhiteHex,
    paddingLeft:SPACING.space_30
  }
});
export default HomeScreen;
