---
date: 2019-03-08
category:
  - Vue
  - Web
tag:
  - Vue
  - Vue Router
layout: ArticleLayout
containerClass: article-container
---

# vue 未登录跳转登录页面及登录完成后回跳那么点事

先说说需求，大概就是跳转到 A 页面，A 页面由于需要登陆后才能看，所以得跳转到登陆页面，登陆完成后在跳回来继续操作。 常见场景：用户输入某地址进入个人用户中心，自动跳到了登陆页面，登陆后又自动跳会个人中心了。 开始码代码，逐步完成该需求。

<!-- more -->

## 路由 index.js

必不可少得路由相关配置，先列出大概代码

```javascript
import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

const router = new Router({
  routes: [
    {
      //首页
      path: '/',
      name: 'Home',
      component: () => import('@/views/home/home')
    },
    {
      //用户中心
      path: '/user',
      name: 'User',
      component: () => import('@/views/user/user'),
      meta: {
        login: true //配置login字段，true表示该页面需要登陆
      }
    },
    {
      //登陆
      path: '/login',
      name: 'Login',
      component: () => import('@/views/login/login')
    }
  ]
})

//全局路由导航钩子
router.beforeEach((to, from, next) => {
  next()
})

export default router
```

三个页面：首页 Home、用户中心 User、登陆页 Login，其中`component`使用了懒加载技术，可以减少打包后的体积，  
用户中心`meta`配置了`login: true`，需要在`全局路由导航钩子`里面做些判断，  
接下来在`全局路由导航钩子`里面做些处理，增加相关判断。

```javascript
//全局路由导航钩子
router.beforeEach((to, from, next) => {
  //此处获取登陆的用户信息，可以按照自己的方法获取，此处暂时用localStorage里面获取
  const userInfo = localStorage.userInfo
  //判断是否存在用户信息、或者该页面是否需要登陆
  if (userInfo || !to.meta.login) {
    //如果能获取到用户信息，说明用户已经登陆了，或者该页面不需要登陆也能进入就直接放行进入该页面
    next()
  } else {
    //否则的跳转到登陆页面，并且带上当前页面的地址，用于登陆后重新跳回来
    next({
      name: 'Login',
      query: {
        redirect: to.fullPath //当前页面的地址
      }
    })
  }
})
```

## Login 页面相关处理

```javascript
methods: {
  //登陆的方法
  toLogin() {
    //你的一些其他校验及其他操作，如校验用户名密码是否为空

    //请求登陆接口
    axios.post('/api/login', {
      userName: 'xxx',
      password: 'xxx'
    })
      .then(res => {
        //登陆成功相关操作

        //获取回跳的redirect地址
        const redirect = this.$route.query.redirect
        if (redirect) {
          //如果redirect存在说明当前用户是进入某页面后未登陆自动跳转到登陆页面来的，所以登陆完成后得再次回跳到该地址
          this.$router.push(redirect)
        } else {
          //否则跳转到默认的页面，首页或者其他页面
          this.$router.push('/')
        }
      })
      .catch(err => {
        console.log('登陆失败，请重试！')
      })
  }
}
```

## 整体流程

用户进入用户用中心 User 页面，`全局路由导航钩子`检测到该页面需要登陆，且当前未登陆，跳转到登陆页面，  
带上当前页面的地址作为参数`redirect`，登陆页面完成登陆后获取到存在`redirect`， 跳转`redirect`地址即用户中心 User 页面。
