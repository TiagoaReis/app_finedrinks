/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import {COLORS, FONTS, SIZES} from '../../constants';
import ScrollCard from '../components/ScrollCard';

import {useDispatch, useSelector} from 'react-redux';
import {getScrollCard} from '../../store/modules/scrollCard/actions';

function renderTitle({title, navigation, productList}) {
  useEffect(() => {
    getItem();
  }, []);

  const dispatch = useDispatch();
  const Alcoholic = useSelector((state) => state.scrollCard.drinks);

  function getItem() {
    dispatch(getScrollCard());
  }

  return (
    <View
      style={{
        backgroundColor: COLORS.primary,
        borderBottomLeftRadius: SIZES.radius * 2,
        borderBottomRightRadius: SIZES.radius * 2,
        padding: 10,
        height: '50%',
      }}>
      <Text style={{color: COLORS.white, ...FONTS.h3}}>Collections</Text>
      <Text style={{color: COLORS.secondary, ...FONTS.h1}}>Fine drinks</Text>
      <View style={{flex: 1}}>
        <ScrollCard navigation={navigation} productList={Alcoholic} />
      </View>
    </View>
  );
}

export default renderTitle;
