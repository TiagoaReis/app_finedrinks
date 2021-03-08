/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, Image, TouchableOpacity, FlatList} from 'react-native';

import {COLORS, FONTS, SIZES} from '../../constants';
export default function ScrollCard({navigation, productList}) {
  const renderCard = ({item}) => (
    <TouchableOpacity
      // eslint-disable-next-line react-native/no-inline-styles
      style={{
        marginLeft: 10,
        backgroundColor: COLORS.white,
        padding: 1.5,
        borderRadius: SIZES.radius * 1,
        height: '95%',
      }}
      onPress={() => navigation.navigate('ItemDetail', {drinks: item})}>
      <View style={{width: SIZES.width / 2.9}}>
        <Image
          source={{uri: `${item.strDrinkThumb}`}}
          resizeMode="cover"
          style={{
            width: '100%',
            height: '100%',
            borderRadius: SIZES.radius * 1,
            backgroundColor: COLORS.other,
          }}
        />

        <View
          style={{
            position: 'absolute',
            top: 15,
            left: '10%',
            right: '10%',
          }}
        />

        <View
          style={{
            position: 'absolute',
            bottom: 10,
            paddingVertical: 5,
            paddingHorizontal: 15,
            borderBottomRightRadius: SIZES.radius * 0.5,
            borderTopRightRadius: SIZES.radius * 0.5,
            //backgroundColor: COLORS.white,
          }}>
          <Text style={{...FONTS.h3, color: COLORS.white}}>
            {item.strDrink}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={{marginTop: SIZES.padding}}>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={productList.drinks}
        renderItem={renderCard}
        keyExtractor={(item) => `${item.idDrink}`}
      />
    </View>
  );
}
