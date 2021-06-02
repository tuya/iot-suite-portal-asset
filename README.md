<center><p align="center"><img src="./tuya_logo.png" width="28%" height="28%" /></p></center>

Tuya IoT Suite Portal, Sub-application for Asset Management
===

[English](README.md) | [中文版](README_zh.md)

This topic describes the sub-application of the web management console of the Tuya IoT Suite.
You can use the sub-application to manage assets.

[Click here](https://github.com/tuya/iot-suite-portal) to view the primary application.

## Directory structure

Source code location
```
iot-suite-portal-asset
└── src
```

> The entry file is `src/index.tsx`.

Application directory structure
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

## Dependency

The project adopts the [qiankun](https://qiankun.umijs.org/) micro front-end architecture.
This project is a sub-application. [Click here](https://github.com/tuya/iot-suite-portal) to view the primary application.

[CRACO](https://github.com/gsoft-inc/craco) is used to build custom configurations.
```
iot-suite-portal-asset
└── .cracorc.js
```

## Deployment

[Click here](https://github.com/tuya/iot-suite-portal) to view the primary application.
On the micro front-end architecture, you can independently deploy primary applications and sub-applications. Currently, a single domain name and multiple directory structures are used to distinguish applications by default.

![network](./frontend-network.jpg)


## Debugging

Run the following command to prform local debugging. The default port number is 7001, and the default debugging address is http://localhost:7001/.

```
npm run start
```
