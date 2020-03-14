# Coral Care

## 简介

该项目是为大鹏潜爱珊瑚保护组织提供数据管理，基于sparrow平台支持用户管理活动数据、珊瑚档案数据和珊瑚图片数据。 项目的首页在另一个项目，https://github.com/NTBrave/coralHome。

## 组件、框架、库
 - [element ui](https://element.eleme.cn/#/zh-CN/component/installation)和[ant-design-vue](https://vue.ant.design/docs/vue/introduce-cn/)用于前端样式
 - [vue cli3](https://cli.vuejs.org/zh/) 用于新建项目
 - [vue router](https://router.vuejs.org/zh/installation.html) 用于页面跳转。
 - [vuex](https://vuex.vuejs.org/)  用于数据存储。
 - echar 用于系统图表。

##  运行步骤

1、打包到本地，指定目录下cmd,命令“git clone https://github.com/NTBrave/CoralCare.git” 。

2、用编译器打开文件，推荐vs code, 终端处用命令“npm install”, 安装依赖。

3、运行项目：“npm run serve” ; 打包文件：“npm run build”。

## 代码结构

![http://cdn.cdlshow.xyz/%E7%BB%93%E6%9E%84.png](http://cdn.cdlshow.xyz/结构.png)

## 流程

![http://cdn.cdlshow.xyz/%E6%B5%81%E7%A8%8B%E5%9B%BE_1.png](http://cdn.cdlshow.xyz/流程图_1.png)

![http://cdn.cdlshow.xyz/%E6%B5%81%E7%A8%8B%E5%9B%BE_2.png](http://cdn.cdlshow.xyz/流程图_2.png)



![http://cdn.cdlshow.xyz/%E6%B5%81%E7%A8%8B%E5%9B%BE_3.png](http://cdn.cdlshow.xyz/流程图_3.png)

## 前端文件打包 并部署服务器

 1. 运行npm run build, 生成的文件在dist文件夹中。

 2. 打开类似WinSCP的软件，登陆连接到服务器。

 3. 将dist里面的文件拖到27服务器的/home/coralCare/manage下，

    首页打包的文件放在/home/coralCare/coral（不同服务器，位置不一样）。

 4. 如有必要修改服务器的前端文件位置，请修改/etc/nginx下的nginx.conf，里面的location 再重启nginx, 

    nginx -s reload。
```json
 server {
       ......      
    
       location /coral/ {
          root   /home/coralCare/;
           index index.html;
       }
       location /manage/ {
           alias  /home/coralCare/manage/;
       index index.html;
       }
    
    }
```

   



