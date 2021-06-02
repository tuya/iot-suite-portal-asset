<center><p align="center"><img src="./tuya_logo.png" width="28%" height="28%" /></p></center>

Tuya Iot Suite Portal -- 资产管理子应用
===

[English](README.md) | [中文版](README_zh.md)

本应用为 Tuya Iot Suite 开发套件的 Web 管理控制台子应用
负责资产相关管理

[主应用请访问这里](https://github.com/tuya/iot-suite-portal)

## 目录结构

源码位置
```
iot-suite-portal-asset
└── src
```

> 入口文件为src/index.tsx

完整目录结构
```
iot-suite-portal-asset
├── README.md
├── package.json
├── public
│   ├── favicon.ico
│   ├── index.html
│   └── robots.txt
├── src
│   ├── App.css
│   ├── App.tsx
│   ├── components
│   │   ├── BAssetCascader
│   │   │   └── index.tsx
│   │   ├── BModalForm
│   │   │   └── index.tsx
│   │   ├── YAddAssetModal
│   │   │   └── index.tsx
│   │   ├── YAssetCascader
│   │   │   └── index.tsx
│   │   ├── YAssetSearch
│   │   │   ├── index.less
│   │   │   └── index.tsx
│   │   ├── YDelAssetModal
│   │   │   ├── index.less
│   │   │   └── index.tsx
│   │   ├── YEditAssetModal
│   │   │   └── index.tsx
│   │   └── index.tsx
│   ├── global.d.ts
│   ├── hooks
│   │   └── index.ts
│   ├── index.css
│   ├── index.tsx
│   ├── init.ts
│   ├── lang
│   │   ├── en.ts
│   │   ├── index.ts
│   │   └── zh.ts
│   ├── pages
│   │   ├── index.less
│   │   └── index.tsx
│   ├── public-path.js
│   ├── react-app-env.d.ts
│   ├── reportWebVitals.ts
│   └── setupProxy.ts
├── tsconfig.extend.json
├── tsconfig.json
├── typings.d.ts
└── yarn.lock
```

## 依赖情况

项目采用微前端架构，微前端框架采用[qiankun](https://qiankun.umijs.org/)
此项目为子应用，[主应用请访问这里](https://github.com/tuya/iot-suite-portal)

构建配置使用[CRACO](https://github.com/gsoft-inc/craco)
相关自定义配置
```
iot-suite-portal-asset
└── .cracorc.js
```

## 部署说明
[主应用请访问这里](https://github.com/tuya/iot-suite-portal)
微前端架构可以独立部署基座应用和子应用，目前默认情况下使用单域名+多目录结构区分应用
![network](./frontend-network.jpg)


## 调试说明

本地调试，启动命令，默认端口号为7001，默认调试地址 http://localhost:7001/
```
npm run start
```
