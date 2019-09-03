/**
* author: stephentian
* email: stephentian@foxmail.com
* day: 2019-9-3
**/

// reducer: 数据处理

import { type } from '../action';

const iniState = {
  menuName: '首页'
}

const changeData = (state = iniState, action) => {
  switch (action.type) {
    case type.SWITCH_MENU:
      return {
        ...state,
        menuName: action.menuName
      }
    default:
      return {
        ...state
      }
  }
}

export default changeData
