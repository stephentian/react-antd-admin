// 引入 createStore 保存数据
import { createStore } from 'redux';

// 引入 reducer
import reducer from '../reducer'

export default () => createStore(reducer)
