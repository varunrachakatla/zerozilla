import * as React from 'react';
import { Text, View, TouchableOpacity, StyleSheet, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Category from '../screens/Category';
import Products from '../screens/Products';
import Search from '../screens/Search';
import Item from '../screens/Item';
import Home from '../screens/Home';

import propTypes from 'prop-types';
import { connect } from 'react-redux';
import { addSearch, addAllproducts, searchProducts } from '../actions/productActions';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}

function ProductScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}


function TabStack() {
  return (
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Profile" component={SettingsScreen} />
        <Tab.Screen name="Cart" component={SettingsScreen} />
        <Tab.Screen name="Categories" component={Category} />
      </Tab.Navigator>
  );
}

function SearchStack() {
  return (
    <Stack.Navigator mode="modal" headerMode="screen">
      <Stack.Screen
        name="Search"
        component={Search}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>    
  );
}


function Screens(props) {
  const [textvalue, setTextValue] = React.useState(props.search);
  return (
  <NavigationContainer>
    <Stack.Navigator mode="modal" headerMode="screen">
      <Stack.Screen
        name="TabStack"
        component={(props.search.length===0)?TabStack:SearchStack}
        options={{
        header: () => (
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                height: 50,
              }}>
                    <TextInput
                      style={styles.input}
                      onChangeText={(value)=> {
                        props.addSearch(value)
                        const array = props.allproducts;
                        //console.log(array)
                        const array_2 = [];
                        console.log(array);
                        for (var i = 0; i < array.length; i++) {
                          const object_2 = array[i];
                          let object = array[i];
                          const check = JSON.stringify(object).toLowerCase().includes(value.toLowerCase());
                          if (check) {
                            array_2.push(object_2);
                          }
                        }
                        //console.log(array_2);
                        props.searchProducts(array_2); 
                      }}
                      value={props.search}
                      placeholder="search products"
                    />
            </View>
          ),
          cardStyle: { backgroundColor: "#F8F9FE" },
          headerTransparent: true,
        }}
      />
      <Stack.Screen
        name="Products"
        component={Products}
        options={{
          cardStyle: { backgroundColor: 'transparent' },
        }}
      />
      <Stack.Screen
        name="Item"
        component={Item}
        options={{
          cardStyle: { backgroundColor: 'transparent' },
        }}
      />
    </Stack.Navigator>
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: '90%'
  },
});

Screens.propTypes={
  allproducts: propTypes.array.isRequired,
  addSearch: propTypes.func.isRequired,
  search: propTypes.string.isRequired,
  addAllproducts: propTypes.func.isRequired,
  searchProducts: propTypes.func.isRequired
}

const mapStateToProps=state=>({
  allproducts: state.product.allproducts,
  search: state.product.search
})

export default connect(mapStateToProps,{ addSearch, addAllproducts, searchProducts })(Screens);