/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import {COLORS, FONTS, SIZES} from '../../constants';
import ScrollCard from '../components/ScrollCard';
import axios from 'axios';
import API_URL from './../../services/api.service';

function renderTitle({title, navigation, productList}) {
  useEffect(() => {
    getAlcoholic();
  }, []);

  //const API_URL = config.API_URL;
  const [Alcoholic, setAlcoholic] = useState({
    drinks: [],
  });
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
  function getAlcoholic() {
    axios
      .get(`${API_URL}/filter.php?a=Alcoholic`)
      .then((resposta) => {
        const data = resposta.data;
        setAlcoholic(data);
      })
      .catch((erro) => {
        console.log(erro);
      });
  }
}

export default renderTitle;
