import { ADD_CATEGORY, ADD_PRODUCTS, ADD_ITEM, ADD_ALLPRODUCTS, ADD_SEARCH, SEARCH_PRODUCTS } from './types';

export const addCategory = data => dispatch => {
	dispatch({
		type: ADD_CATEGORY,
		payload: data
	})
}

export const addProducts = data => dispatch => {
	dispatch({
		type: ADD_PRODUCTS,
		payload: data
	})
}

export const addItem = data => dispatch => {
	dispatch({
		type: ADD_ITEM,
		payload: data
	})
}

export const addAllproducts = data => dispatch => {
	dispatch({
		type: ADD_ALLPRODUCTS,
		payload: data
	})
}

export const addSearch = data => dispatch => {
	dispatch({
		type: ADD_SEARCH,
		payload: data
	})
}

export const searchProducts = data => dispatch => {
	dispatch({
		type: SEARCH_PRODUCTS,
		payload: data
	})
}
