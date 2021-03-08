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
  SafeAreaView,
} from 'react-native';
import {icons, COLORS, FONTS, SIZES} from '../constants';
import axios from 'axios';
import API_URL from './../services/api.service';

export default function itemDetails({route, navigation}) {
  useEffect(() => {
    getItemDetails(category);
  }, []);
  const category = route.params.drinks.idDrink;
  const [drinks, setDrinks] = React.useState({
    drinks: [],
  });
  const renderCard = ({item}) => {
    return (
      <SafeAreaView style={{marginBottom: 50}}>
        <TouchableOpacity
          // eslint-disable-next-line react-native/no-inline-styles
          style={{
            borderRadius: SIZES.radius * 1,
            height: '80%',
            margin: 10,
          }}>
          <View style={{width: '100%', height: 400}}>
            <Image
              source={{uri: `${item.strDrinkThumb}`}}
              resizeMode="cover"
              style={{
                width: '100%',
                height: '100%',
                borderRadius: SIZES.radius * 1,
                backgroundColor: COLORS.Outher,
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
              }}>
              <View>
                <Text style={{...FONTS.h2, color: COLORS.white}}>
                  {item.strDrink}
                </Text>
                <Text style={{...FONTS.h4, color: COLORS.white}}>
                  Category {item.strCategory}
                </Text>
              </View>
            </View>
          </View>
          <View>
            <Text style={{...FONTS.h2, color: COLORS.secondary, marginTop: 10}}>
              Ingredients
            </Text>
            <Text style={{...FONTS.h4, color: COLORS.white}}>
              {item.strIngredient1} {item.strIngredient2} {item.strIngredient3}
              {item.strIngredient4} {item.strIngredient5} {item.strIngredient6}
              {item.strIngredient7} {item.strIngredient8} {item.strIngredient9}
              {item.strIngredient10} {item.strIngredient11}
              {item.strIngredient12} {item.strIngredient13}
              {item.strIngredient14} {item.strIngredient15}
            </Text>
            <View>
              <Text
                style={{...FONTS.h2, color: COLORS.secondary, marginTop: 10}}>
                Instructions
              </Text>
              <Text style={{...FONTS.h4, color: COLORS.white}}>
                {item.strInstructions} {item.strInstructionsDE}
                {item.strInstructionsIT}
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      </SafeAreaView>
    );
  };

  return (
    <View style={styles.container}>
      {/* <View style={styles.Top}>
        <Text style={{color: COLORS.primary, ...FONTS.h1}}>Ingredient</Text>
      </View> */}

      <FlatList
        data={drinks.drinks}
        keyExtractor={(item) => item.idDrink}
        renderItem={renderCard}
      />
    </View>
  );
  function getItemDetails(category) {
    console.log('get detales');
    console.log(category);
    axios
      .get(`${API_URL}/lookup.php?i=${category}`)
      .then((resposta) => {
        const data = resposta.data;
        console.log('detales');
        console.log(data);
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
    backgroundColor: COLORS.primary,
    padding: 10,
  },
  Top: {
    padding: 10,
    height: '6%',
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
