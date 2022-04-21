import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Alert,
  ScrollView,
  FlatList,
  Button
} from 'react-native';

import propTypes from 'prop-types';
import { connect } from 'react-redux';
import { addCategory } from '../actions/productActions';

class Category extends Component {

  constructor(props) {
    super(props);
    this.state = {
      loading: false
    };
  }

  componentDidMount() {
    this.setState({loading: true})
    fetch('https://fakestoreapi.com/products/categories').then(res=>res.json()).then(json=>{
      const new_data = [];
      for (var i = 0; i < json.length; i++) {
        new_data.push({id: i+1, title: json[i], image:"https://via.placeholder.com/400x200/FFB6C1/000000"});
      }
      this.props.addCategory(new_data);
      this.setState({loading: false})
    }).catch(error=>{
      console.log(error.message);
    })      
  }


  render() {
    return (
      <View style={styles.container}>
        <FlatList style={styles.list}
          data={this.props.category}
          keyExtractor= {(item) => {
            return item.id;
          }}
          ItemSeparatorComponent={() => {
            return (
              <View style={styles.separator}/>
            )
          }}
          renderItem={(post) => {
            const item = post.item;
            return (
              <TouchableOpacity onPress={()=>{ this.props.navigation.navigate('Products', { categoryId: item.title})}}>
                <View style={styles.card}>

                  <Image style={styles.cardImage} source={{uri:item.image}}/>
                  <View style={styles.cardContent}>
                    <View>
                      <Text style={styles.title}>{item.title}</Text>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
            )
          }}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
  },
  list: {
    backgroundColor:"#E6E6E6",
  },
  separator: {
    marginTop: 1,
  },
  /******** card **************/
  card:{
    margin: 0,
    borderRadius: 2,
    borderWidth: 1,
    borderColor: "#DCDCDC",
    backgroundColor: "#DCDCDC",
  },
  cardHeader: {
    paddingVertical: 17,
    paddingHorizontal: 16,
    borderTopLeftRadius: 1,
    borderTopRightRadius: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cardContent: {
    paddingVertical: 12.5,
    paddingHorizontal: 16,
    //overlay efect
    flex: 1,
    height: 200,
    width: null,
    position: 'absolute',
    zIndex: 100,
    left: 0,
    right: 0,
    backgroundColor: 'transparent'
  },
  cardFooter:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 15,
    paddingBottom: 0,
    paddingVertical: 7.5,
    paddingHorizontal: 0
  },
  cardImage:{
    flex: 1,
    height: 150,
    width: null,
  },
  /******** card components **************/
  title:{
    fontSize:22,
    color: "#ffffff",
    marginTop: 10,
    fontWeight:'bold'
  },
  time:{
    fontSize:13,
    color: "#ffffff",
    marginTop: 5
  },
  icon: {
    width:25,
    height:25,
  },
  /******** social bar ******************/
  socialBarContainer: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flexDirection: 'row',
    flex: 1
  },
  socialBarSection: {
    justifyContent: 'flex-start',
    flexDirection: 'row',
    flex: 1,
  },
  socialBarlabel: {
    marginLeft: 8,
    alignSelf: 'flex-start',
    justifyContent: 'center',
    color: "#ffffff",
  },
  socialBarButton:{
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  }
});  



Category.propTypes = {
  category: propTypes.array.isRequired,
  addCategory : propTypes.func.isRequired
}

const mapStateToProps=state=>({
  category: state.product.category
})

export default connect(mapStateToProps, { addCategory })(Category);