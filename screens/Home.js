/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import RenderSpecialCard from './components/SpecialRandom';
import RenderTitle from './components/renderTitle';
import ScrollMenu from './components/ScrollMenu';
import ScrollCardMini from './components/ScrollCardMini';
//import {connect} from 'react-redux';
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';

import {images, icons, COLORS, FONTS, SIZES} from '../constants';

import API_URL from './../services/api.service';

const Home = ({navigation}) => {
  useEffect(() => {
    ramdonItem();
    getCategories();
  }, []);

  const [categories, setCategories] = useState([
    {
      strCategory: 'drinks',
    },
  ]);
  const [selectedCategory, setSelectedCategory] = useState([]);
  const [tabList, setTabList] = useState([]);

  const [selectedTab, setSelectedTab] = React.useState({
    id: 0,
    name: 'Drinks',
    title: 'drinks',
    productList: [
      {
        productId: 1,
        productName: 'drinks',
        price: 10.0,
        image: images.drink02,
      },
    ],
  });

  function ramdonItem() {
    axios
      .get(`${API_URL}/random.php`)
      .then((resposta) => {
        const data = resposta.data;
        setEspecial(data.drinks[0]);
      })
      .catch((erro) => {
        console.log(erro);
      });
  }

  function getCategories() {
    axios
      .get(`${API_URL}/list.php?c=list`)
      .then((resposta) => {
        const data = resposta.data.drinks;
        setCategories(data);
      })
      .catch((erro) => {
        console.log(erro);
      });
  }

  return (
    <SafeAreaView style={styles.container}>
      <RenderTitle title={categories} navigation={navigation} />
      <ScrollMenu
        tabList={categories}
        selectedTab={selectedTab}
        navigation={navigation}
      />
      {/* Footer - Special Card */}
      <View style={{height: '19%', justifyContent: 'flex-end'}}>
        <RenderSpecialCard navigation={navigation} />
      </View>

      {/* Button details */}
      <View
        style={{
          marginRight: SIZES.radius,
          alignItems: 'center',
          justifyContent: 'center',
          paddingTop: 10,
        }}>
        <TouchableOpacity
          style={{
            backgroundColor: COLORS.primary,
            justifyContent: 'center',
            alignItems: 'center',
            height: '70%',
            width: '90%',
            height: 50,
            borderRadius: 10,
          }}
          onPress={(e) => navigation.navigate('NonAlcoholicList')}>
          <Text style={{color: COLORS.white, ...FONTS.h1}}>Non Alcoholic</Text>
        </TouchableOpacity>
      </View>
      <View>
        <ScrollCardMini navigation={navigation} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 9,
  },
});

export default Home;
