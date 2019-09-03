import axios from 'axios'
import JsonP from 'jsonp'
import { Modal } from 'antd';
import Utils from '../utils/utils';

export default class Axios {
  // _this: this, 
  // url: 接口的 url,
  // params 需要传递到接口的数据
  // isMock 是否为 Mock 数据
  static requestList(_this, url, params, isMock) {
    var data = {
      parama: params,
      isMock
    }
    // 调用 ajax 拦截公共机制
    this.ajax({
      url,
      data
    }).then((res) => {
      if (res && res.data) {
        // console.log(res)
        let list = res.data.map((item, index) => {
          item.key = index
          return item
        })
        _this.setState({
          list,
          pagination: Utils.pagination(res, (current) => {
            _this.params.page = current
            _this.requestList()
          })
        });
      }
    })
  }
  // 封装 jsonp
  static jsonp(options) {
    return new Promise((resolve, reject) => {
      JsonP(options.url, {
        param: 'callback'
      }, function (err, res) {
        if (res.status === 'success') {
          resolve(res)
        } else {
          reject(res.message)
        }
      })
    })
  }
  // 封装 axios
  static ajax(options) {
    let loading;
    if (options.data && options.data.isShowLoading !== false) {
      loading = document.getElementById('ajaxLoading')
      loading.style.display = 'block'
    }
    let baseApi = ''
    if (options.isMock) {
      baseApi = 'https://www.easy-mock.com/mock/5d118c4ae918ab0e9f559a0b/api'
    } else {
      // 真实的 api
      baseApi = 'https://www.easy-mock.com/mock/5d118c4ae918ab0e9f559a0b/api'
    }
    return new Promise((resolve, reject) => {
      axios({
        url: options.url,
        method: 'get',
        baseURL: baseApi,
        timeout: 5000,
        params: (options.data && options.data.params) || ''
      }).then((response) => {
        if (options.data && options.data.isShowLoading !== false) {
          loading = document.getElementById('ajaxLoading');
          loading.style.display = 'none';
        }
        if (response.status === 200) {
          let res = response.data
          if (res.code === 0) {
            resolve(res)
          } else {
            Modal.info({
              title: '提示',
              content: res.msg
            })
          }
        } else {
          reject(response.data)
        }
      }).catch(() => {
        loading = document.getElementById('ajaxLoading');
        loading.style.display = 'none';
      })
    })
  }
}
