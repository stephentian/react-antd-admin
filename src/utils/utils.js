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
  // 分页
  pagination(data, callback) {
    let page = {
      onChange: (current) => {
        callback(current)
      },
      current: data.page,
      pageSize: data.page_size,
      total: data.total,
      showTotal: () => {
        return `共${data.total}条`
      },
      showQuikJumper: true
    }
    return page
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
  },
  // ETabel 行点击通用函数
  updateSelectedItem(selectedRowKeys, selectedRows, selectedIds) {
    if (selectedIds) {
      this.setState({
        selectedRowKeys,
        selectedIds: selectedIds,
        selectedItem: selectedRows
      })
    } else {
      this.setState({
        selectedRowKeys,
        selectedItem: selectedRows
      })
    }
  }
}
