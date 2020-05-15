//封装axios
import axios from 'axios';
axios.defaults.baseURL = "http://localhost:80";
axios.interceptors.request.use((config)=>{
  console.log(config);
  config.headers.Authorization = window.sessionStorage.getItem("token")
  return config
});
export default function ajax (url, data = {}, method = "GET") {
  return new Promise((res, rej) =>{
    let promise = "";
    if (method === "GET"){
      promise = axios.get(url, {
        params: data
      })
    }

    if(method === "POST"){
      promise = axios.post(url, data, {headers: { 'Content-Type': 'application/x-www-form-urlencoded' }})
    }

    promise.then(
      response=>{
        res(response)
      }
    ).catch(err =>{
      rej(err)
    })
  })
}
