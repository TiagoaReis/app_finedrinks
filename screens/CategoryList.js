/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React, {useEffect} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from 'react-native';
import {icons, COLORS, FONTS, SIZES} from '../constants';
import axios from 'axios';
import API_URL from './../services/api.service';

export default function CategoryList({route, navigation}) {
  useEffect(() => {
    getItemForCategory(category);
  }, []);

  console.log(route.params);
  const category = route.params.drinks.name;

  const [drinks, setDrinks] = React.useState({
    drinks: [],
  });

  const renderCard = ({item}) => {
    return (
      <View style={{paddingTop: 10}}>
        <TouchableOpacity
          style={[
            styles.shadow,
            {
              flexDirection: 'row',
              marginHorizontal: SIZES.padding,
              padding: 5,
              height: 110,
              borderRadius: 20,
              backgroundColor: COLORS.white,
            },
          ]}>
          <View
            style={{
              width: 90,
              paddingLeft: 5,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Image
              source={{uri: `${item.strDrinkThumb}`}}
              resizeMode="contain"
              style={{
                width: '100%',
                height: '100%',
                borderRadius: SIZES.radius * 3,
              }}
            />
          </View>
          <View
            style={{
              flex: 1,
              marginLeft: SIZES.radius,
              justifyContent: 'center',
            }}>
            <Text style={{...FONTS.h2, color: COLORS.primary}}>
              {item.strDrink}
            </Text>
          </View>

          {/* Button details */}
          <View
            style={{
              marginRight: SIZES.radius,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <TouchableOpacity
              style={{
                backgroundColor: COLORS.primary,
                justifyContent: 'center',
                alignItems: 'center',
                height: '70%',
                width: 50,
                borderRadius: 10,
              }}
              onPress={() => navigation.navigate('ItemDetail', {drinks: item})}>
              <Image
                source={icons.chevron}
                resizeMode="contain"
                style={{
                  height: '50%',
                  width: '50%',
                }}
              />
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View>
      <View style={styles.Top}>
        <Text style={{color: COLORS.white, ...FONTS.h3}}>Category list</Text>
        <Text style={{color: COLORS.secondary, ...FONTS.h1}}>{category}</Text>
      </View>

      <FlatList
        data={drinks.drinks}
        keyExtractor={(item) => item.idDrink}
        renderItem={renderCard}
      />
    </View>
  );
  function getItemForCategory(category) {
    axios
      .get(`${API_URL}/filter.php?c=${category}`)
      .then((resposta) => {
        const data = resposta.data;
        setDrinks(data);
      })
      .catch((erro) => {
        console.log(erro);
      });
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  Top: {
    backgroundColor: COLORS.primary,
    borderBottomLeftRadius: SIZES.radius * 1,
    borderBottomRightRadius: SIZES.radius * 1,
    padding: 30,
    height: '15%',
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
