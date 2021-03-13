import React from 'react';
import {connect, useDispatch, useSelector} from 'react-redux';
import {bindActionCreators} from 'redux';
import {loadItem}  from '../../store/modules/random/actions';
import {icons, COLORS, FONTS, SIZES} from '../../constants';
import {StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';

function renderSpecialCard({ }) {

  const dispatch = useDispatch()
  const drinksRandom = useSelector(state => state.random.drinks)
  const name = drinksRandom.drinks.map((names) => names.strDrink);
  const image = drinksRandom.drinks.map((image) => image.strDrinkThumb);
  const category = drinksRandom.drinks.map((category) => category.strCategory);

function handleloadItem(){
  dispatch(loadItem())
}

  return (
    <View>
      <View
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
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Image
            source={{uri: `${image}`}}
            resizeMode="contain"
            style={{
              width: '90%',
              height: '90%',
              borderRadius: SIZES.radius * 3,
            }}
          />
        </View>
        <View
          style={{flex: 1, marginLeft: SIZES.radius, justifyContent: 'center'}}>
          <Text style={{...FONTS.h2, color: COLORS.primary}}>{name}</Text>
          <Text style={{...FONTS.body3}}>{category}</Text>
        </View>

        <View
          style={{
            marginRight: SIZES.radius,
            alignItems: 'center',
            justifyContent: 'center',
          }}
        />
        {/* Button */}
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
            onPress={(e) => handleloadItem()}>
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
      </View>
    </View>
  );
}
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

export default renderSpecialCard;