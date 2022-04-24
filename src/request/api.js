import request from './request'
/*
 export const xxApi = () => request.get('/xx')
 */
//注册
 export const RegisterApi = (params) => request.post('/register',params)
//登录
 export const LoginApi = (params) => request.post('/login',params)
//获取文章列表
 export const ArticleListApi =  (params) => request.get('/article',{params})
// 删除文章
 export const ArticleDelApi = (params) => request.post('/article/remove', params)
