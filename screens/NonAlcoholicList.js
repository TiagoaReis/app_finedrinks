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
import {COLORS, FONTS, SIZES} from '../constants';
import {useDispatch, useSelector} from 'react-redux';
import {getNonAlcoholicList} from '../store/modules/nonAlcoholic/actions';
export default function NonAlcoholicList({route, navigation}) {
  useEffect(() => {
    getNonAlcoholic();
  }, []);
  const dispatch = useDispatch();
  const drinks = useSelector((state) => state.nonAlcoholic.drinks);

  function getNonAlcoholic() {
    dispatch(getNonAlcoholicList());
  }

  const renderCard = ({item}) => {
    return (
      <View style={{paddingTop: 50}}>
        <TouchableOpacity
          // eslint-disable-next-line react-native/no-inline-styles
          style={{
            marginLeft: 10,
            backgroundColor: COLORS.white,
            padding: 1.5,
            borderRadius: SIZES.radius * 1,
            height: '80%',
          }}
          onPress={() => navigation.navigate('ItemDetail', {drinks: item})}>
          <View style={{width: SIZES.width / 1.5}}>
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
              }}>
              <Text style={{...FONTS.h2, color: COLORS.white}}>
                {item.strDrink}
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View>
      <View style={styles.Top}>
        <Text style={{color: COLORS.white, ...FONTS.h2}}>Fine drinks </Text>
        <Text style={{color: COLORS.secondary, ...FONTS.h1}}>NonAlcoholic</Text>
        <Text style={{color: COLORS.white, ...FONTS.h2}}>list</Text>
      </View>

      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={drinks.drinks}
        keyExtractor={(item) => item.idDrink}
        renderItem={renderCard}
      />
    </View>
  );
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
    padding: 35,
    height: '25%',
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
