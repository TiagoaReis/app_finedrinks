/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
} from 'react-native';
import {COLORS, FONTS, SIZES} from '../../constants';

export default function ScrollMenu({
  tabList,
  selectedTab,
  navigation,
  onPress,
}) {
  const categoriesList = tabList.map((item, i) => {
    return {
      id: `'cat_${i + 1}'`,
      name: item.strCategory,
    };
  });

  const renderItem = ({item}) => (
    <TouchableOpacity
      style={{marginHorizontal: SIZES.padding}}
      onPress={(e) => navigation.navigate('CategoryList', {drinks: item})}>
      <Text style={{color: COLORS.primary, ...FONTS.body2}}>{item.name}</Text>

      {selectedTab.id == item.id && (
        <View style={{alignItems: 'center', marginTop: SIZES.base}}>
          <View
            style={{
              width: 10,
              height: 10,
              borderRadius: 5,
              backgroundColor: COLORS.primary,
            }}
          />
        </View>
      )}
    </TouchableOpacity>
  );

  return (
    <SafeAreaView>
      <View style={{marginTop: 10}}>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={categoriesList}
          renderItem={renderItem}
          key={`cat_${categoriesList.id}`}
        />
      </View>
    </SafeAreaView>
  );
}
