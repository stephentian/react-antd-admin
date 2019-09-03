/**
* author: stephentian
* email: stephentian@foxmail.com
* day: 2019-9-3
**/

// action: 用户事件操作

export const type = {
  SWITCH_MENU: 'SWITCH_MENU'
}

export function switchMenu(menuName) {
  return {
    type: type.SWITCH_MENU,
    menuName
  }
}
