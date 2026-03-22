# 沃垄飞服官网模板

这是一个基于 `Next.js` 搭建的无人机服务公司官网模板，当前已经完成首版首页框架，适合后续继续补充企业介绍、作业案例、资质证书、联系方式和表单能力。

## 当前已完成的模块

- 首页 Hero 品牌展示区
- 无人机服务模块展示
- 模板优势说明区
- 作业流程展示区
- 行业场景展示区
- 联系方式占位区

## 本地启动

```bash
npm run dev
```

启动后访问 [http://localhost:3000](http://localhost:3000)。

## 生产构建

```bash
npm run build
npm run start
```

## 懒猫微服 LPK 打包

项目已经补齐懒猫微服所需的打包文件：

- `build.sh`
- `lzc-build.yml`
- `lzc-manifest.yml`
- `lzc-icon.png`

本地生成 `lpk` 安装包的命令：

```bash
sh build.sh
npx @lazycatcloud/lzc-cli project build -o wuolongfeifu.lpk
```

## 主要文件说明

- `src/app/page.tsx`
  首页内容结构与模块数据，后续补文案时优先改这里。
- `src/app/page.module.css`
  首页视觉样式、响应式布局、按钮和卡片设计。
- `src/app/layout.tsx`
  站点标题、描述、字体设置和基础元信息。
- `src/app/globals.css`
  全局颜色变量、页面背景和基础排版。

## 建议下一步补充内容

- 公司真实简介与主营业务说明
- 作业实拍图片或宣传视频
- 客户案例、交付成果与评价
- 联系电话、企业微信、邮箱
- 落地页表单或咨询入口

## 手动部署到 Vercel

1. 把当前代码推送到 GitHub 仓库。
2. 登录 [Vercel](https://vercel.com/) 并导入该 GitHub 仓库。
3. Vercel 会自动识别为 `Next.js` 项目。
4. 默认构建命令使用 `npm run build` 即可。
5. 部署完成后，后续只要推送新代码就能重新发布。

## 技术栈

- Next.js 16
- React 19
- TypeScript
- CSS Modules
