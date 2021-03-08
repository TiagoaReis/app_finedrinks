/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, Image, TouchableOpacity, FlatList} from 'react-native';
import {COLORS, FONTS, SIZES} from '../../constants';
export default function ScrollCardCategory({navigation, drinks}) {
  console.log('card-2');
  console.log(drinks);

  const renderCard = ({item}) => (
    <TouchableOpacity
      // eslint-disable-next-line react-native/no-inline-styles
      style={{
        marginLeft: SIZES.padding,
        backgroundColor: COLORS.white,
        padding: 5,
        borderRadius: SIZES.radius * 2,
        height: '100%',
      }}
      //onPress={() => navigation.navigate('ItemDetail', {itemInfo: item})}
    >
      <View style={{width: SIZES.width / 2.9}}>
        {/* <Image
          source={item.image}
          resizeMode="cover"
          style={{
            width: '100%',
            height: '100%',
            borderRadius: SIZES.radius * 2,
            backgroundColor: COLORS.other,
          }}
        /> */}

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
            paddingVertical: 10,
            paddingHorizontal: 15,
            borderBottomRightRadius: SIZES.radius * 1,
            borderTopRightRadius: SIZES.radius * 1,
            backgroundColor: COLORS.white,
          }}>
          <Text style={{...FONTS.h3}}>{item.strDrink}tes</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={{marginTop: SIZES.padding}}>
      <Text style={{...FONTS.h2}}>Teste</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={drinks}
        renderItem={renderCard}
        //renderItem={({item}) => <Text>{drinks.drinks[0].strDrink}</Text>}
        //keyExtractor={(item) => item.idDrink}
        keyExtractor={`cat_${drinks.drinks[0].idDrink}`}
      />
      {/* <Text>Teste</Text> */}
      {/* <div>
        <ul>
          {drinks.drinks.map(function (item, i) {
            console.log('test');
            <li>{drinks.drinks[0].strDrink}</li>;
          })}
        </ul>
      </div> */}
      {/* <View>
      {drinks.map((customer) => {
        return (
            <View key= {customer.idDrink}><Text style={{...FONTS.h2}}>{drinks.drinks[0].strDrink}</Text><View/>
        )
      )}</View>
       */}
      <Text style={{...FONTS.h2}}>{drinks.drinks[0].strDrink}</Text>
    </View>
  );
}
