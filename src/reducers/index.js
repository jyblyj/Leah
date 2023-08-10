import { combineReducers } from 'redux'
import home from 'pages/index/reducer';
import order from 'pages/orderList/reducer';
import product from 'pages/saleProduct/reducer'


export default combineReducers({
  home,
  order,
  product
})
