import { ADD_CATEGORY, ADD_PRODUCTS, ADD_ITEM, ADD_ALLPRODUCTS, ADD_SEARCH, SEARCH_PRODUCTS } from '../actions/types.js';

import update from 'immutability-helper';

const initiaState={
	category: [],
	products: [],
	item: {},
	allproducts: [],
	search: '',
	searchproducts: []
}

export default function(state=initiaState,action){
	switch(action.type){
		case ADD_CATEGORY : 
			return update(state,{
				category:{ $set: action.payload },
			});
		case ADD_PRODUCTS : 
			return update(state,{
				products:{ $set: action.payload },
			});
		case ADD_ITEM : 
			return update(state,{
				item: { $set: action.payload },
			});
		case ADD_ALLPRODUCTS : 
			return update(state,{
				allproducts:{ $set: action.payload },
			});
		case ADD_SEARCH : 
			return update(state,{
				search:{ $set: action.payload },
			});
		case SEARCH_PRODUCTS : 
			return update(state,{
				searchproducts:{ $set: action.payload },
			});
		default : 
			return state;
	}
}