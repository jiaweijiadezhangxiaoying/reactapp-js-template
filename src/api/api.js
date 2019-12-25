import axios from "axios";
import config from "../config/config";
import { message } from 'antd';

let http = axios.create({
  baseURL: config.apiConfig.host,
  timeout: 50000,
  headers: { 'Content-Type': 'text/plain' }
});

// 添加请求拦截器
http.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});

// 添加响应拦截器
http.interceptors.response.use(function (response) {
  // console.log("response20", response)
  if (response.status === 200) {
    let data = response.data;
    if (data.code === 200) {
      return data;
    } else {
      message.error(data.message);
      return data;
    }
  } else {
  }
}, function (error) {
  // 对响应错误做点什么
  return Promise.reject(error);
});

export default http;