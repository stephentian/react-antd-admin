import React from 'react';
import { Select } from 'antd';

const Option = Select.Option

export default {
  // 获取时间
  formateTime(time) {
    function checkTime(time) {
      return time < 10 ? '0' + time : time
    }
    if (!time) return ''
    let date = new Date(time)
    return `${date.getFullYear()}-${checkTime(date.getMonth() + 1)}-${checkTime(date.getDate())} ${checkTime(date.getHours())}:${checkTime(date.getMinutes())}:${checkTime(date.getSeconds())}`
  },
  // 封装 Option
  getOptionList(data) {
    if (!data) {
      return []
    }
    let options = []
    data.map((item) => {
      return options.push(<Option value={item.id} key={item.id}>{item.name}</Option>)
    })
    return options
  }
}
