/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React, {useEffect} from 'react';
import {View, Image, TouchableOpacity, FlatList} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {getScrollCardMini} from '../../store/modules/scrollCardMini/actions';

import {COLORS, SIZES} from '../../constants';
function ScrollCardMini({navigation}) {
  useEffect(() => {
    getItems();
  }, []);

  const dispatch = useDispatch();
  const drinks = useSelector((state) => state.scrollCardMini.drinks);

  const renderCard = ({item}) => (
    <TouchableOpacity
      // eslint-disable-next-line react-native/no-inline-styles
      style={{
        marginLeft: 20,
        backgroundColor: COLORS.white,
        padding: 0.5,
        borderRadius: SIZES.radius * 1,
        height: '100%',
      }}
      onPress={() => navigation.navigate('ItemDetail', {drinks: item})}>
      <View style={{width: SIZES.width / 4.2}}>
        <Image
          source={{uri: `${item.strDrinkThumb}`}}
          resizeMode="cover"
          style={{
            width: '90%',
            height: '58%',
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
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={{marginTop: 10}}>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={drinks.drinks}
        renderItem={renderCard}
        keyExtractor={(item) => `${item.idDrink}`}
      />
    </View>
  );

  function getItems() {
    dispatch(getScrollCardMini());
  }
}

export default ScrollCardMini;
