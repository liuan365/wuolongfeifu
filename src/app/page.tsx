import styles from "./page.module.css";

const services = [
  {
    index: "01",
    title: "电力与能源巡检",
    description:
      "面向输电线路、光伏电站、风电设备等场景，适合后续补充红外检测、缺陷识别和月度报告样例。",
    points: ["线路巡检占位", "热成像数据位", "缺陷报告下载位"],
  },
  {
    index: "02",
    title: "农业植保作业",
    description:
      "用于展示统防统治、变量喷洒和农田巡查能力，后续可以加入飞手资质、作业面积和效果对比素材。",
    points: ["作业流程位", "亩均效率位", "作业前后对比位"],
  },
  {
    index: "03",
    title: "测绘建模与数字孪生",
    description:
      "适合园区、矿山、工地等项目展示，可继续接入倾斜摄影成果图、正射影像和三维建模案例。",
    points: ["正射成果位", "三维模型位", "项目交付清单位"],
  },
  {
    index: "04",
    title: "应急响应与活动保障",
    description:
      "用于城市巡查、大型活动、应急搜救等即时任务说明，可扩展直播图传、夜航和联动机制介绍。",
    points: ["应急预案位", "图传链路位", "现场保障案例位"],
  },
] as const;

const advantages = [
  {
    title: "品牌与资质可快速替换",
    description:
      "首页已预留公司介绍、资质证书、团队能力等位置，后续直接替换真实信息即可。",
  },
  {
    title: "服务模块结构已搭好",
    description:
      "低空巡检、植保、测绘、应急四类模块已经拆分完成，后续可按业务继续增减。",
  },
  {
    title: "案例叙事更适合成交",
    description:
      "页面把“行业场景 - 作业流程 - 数据交付 - 联系入口”串成了一条线，方便你后续补充项目案例。",
  },
  {
    title: "后续可扩展表单与 CMS",
    description:
      "目前是纯前端模板，后续如果要接表单、后台内容管理或多语言，也可以继续往上加。",
  },
] as const;

const process = [
  {
    step: "01",
    title: "需求沟通",
    description:
      "确认行业场景、作业范围、时效要求与交付格式，适合后续补充客户咨询流程。",
  },
  {
    step: "02",
    title: "航线规划",
    description:
      "根据空域、设备和现场条件制定执行方案，后续可加入 SOP、风险控制和飞行审批说明。",
  },
  {
    step: "03",
    title: "现场执行",
    description:
      "飞手团队完成作业与数据采集，这里可补充设备照片、作业视频和团队协作画面。",
  },
  {
    step: "04",
    title: "成果交付",
    description:
      "输出报告、图像、模型或巡检结论，后续可接入下载入口、案例详情或客户评价。",
  },
] as const;

const scenarios = [
  {
    name: "工业园区",
    summary: "园区巡检、安防联动、夜间巡查、设备状态监测。",
  },
  {
    name: "新能源电站",
    summary: "光伏热斑排查、风机巡检、定期复核和运维支持。",
  },
  {
    name: "农业基地",
    summary: "植保喷洒、长势巡查、病虫害监测和地块建档。",
  },
  {
    name: "市政与应急",
    summary: "道路巡查、水域搜索、应急勘察和大型活动保障。",
  },
] as const;

const metrics = [
  { value: "24h", label: "咨询响应模板" },
  { value: "4", label: "核心服务模块" },
  { value: "3", label: "案例与资质预留区" },
] as const;

const templateBlocks = [
  {
    title: "企业素材区",
    description: "后续可替换为公司宣传片、飞行实拍、团队照片或航拍画面。",
  },
  {
    title: "客户案例区",
    description: "适合追加真实客户名称、项目成果、作业前后对比和客户评价。",
  },
  {
    title: "转化入口区",
    description: "可接电话、微信、表单或企业微信，形成真正可用的获客落点。",
  },
] as const;

export default function Home() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <a className={styles.brand} href="#top">
          <span className={styles.brandMark}>WL</span>
          <span>
            <strong>沃垄飞服</strong>
            <small>Drone Service Template</small>
          </span>
        </a>
        <nav className={styles.nav}>
          <a href="#services">服务模块</a>
          <a href="#process">作业流程</a>
          <a href="#scenarios">行业场景</a>
          <a href="#contact">联系入口</a>
        </nav>
      </header>

      <main className={styles.main} id="top">
        <section className={styles.hero}>
          <div className={styles.heroCopy}>
            <span className={styles.eyebrow}>无人机服务公司官网模板</span>
            <h1>让低空作业、巡检与测绘服务被客户一眼看懂</h1>
            <p className={styles.heroText}>
              这是沃垄飞服官网的首版模板框架，已经预留品牌介绍、服务模块、作业流程、行业场景、案例扩展位和联系转化入口。后续只需要替换图片、视频、资质和真实项目内容，就可以继续完善上线。
            </p>

            <div className={styles.actions}>
              <a className={styles.primaryButton} href="#services">
                查看服务模块
              </a>
              <a className={styles.secondaryButton} href="#contact">
                预留联系入口
              </a>
            </div>

            <div className={styles.stats}>
              {metrics.map((item) => (
                <article className={styles.statCard} key={item.label}>
                  <strong>{item.value}</strong>
                  <span>{item.label}</span>
                </article>
              ))}
            </div>
          </div>

          <aside className={styles.heroPanel}>
            <div className={styles.panel}>
              <div className={styles.panelHeader}>
                <span>任务看板</span>
                <div className={styles.signal}>
                  <i />
                  <i />
                  <i className={styles.signalActive} />
                </div>
              </div>

              <div className={styles.panelFeature}>
                <p>当前建议主推</p>
                <h2>工业巡检 + 测绘建模</h2>
                <span>适合先补充实拍图、飞行资质和数据交付成果</span>
              </div>

              <div className={styles.panelGrid}>
                <article>
                  <strong>低空巡检</strong>
                  <span>输电通道 / 光伏 / 园区</span>
                </article>
                <article>
                  <strong>农业植保</strong>
                  <span>统防统治 / 长势巡查</span>
                </article>
                <article>
                  <strong>应急保障</strong>
                  <span>图传支持 / 夜间响应</span>
                </article>
                <article>
                  <strong>三维建模</strong>
                  <span>正射成果 / 数字孪生</span>
                </article>
              </div>

              <div className={styles.panelFooter}>
                <div>
                  <span>素材建议</span>
                  <strong>实拍视频、资质证书、案例成果图</strong>
                </div>
                <div>
                  <span>下一步</span>
                  <strong>补企业信息与联系方式</strong>
                </div>
              </div>
            </div>
          </aside>
        </section>

        <section className={styles.section} id="services">
          <div className={styles.sectionHead}>
            <span className={styles.sectionEyebrow}>服务模块</span>
            <h2>先把主营业务排清楚，后续补案例时就不会乱</h2>
            <p>
              这里先用四个高频模块搭网站结构，之后你可以按真实业务增减模块，替换成自己的作业范围、设备型号和交付能力。
            </p>
          </div>

          <div className={styles.servicesGrid}>
            {services.map((service) => (
              <article className={styles.serviceCard} key={service.title}>
                <span className={styles.cardIndex}>{service.index}</span>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <ul className={styles.pillList}>
                  {service.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className={`${styles.section} ${styles.sectionAlt}`}>
          <div className={styles.sectionHead}>
            <span className={styles.sectionEyebrow}>模板优势</span>
            <h2>这版框架更适合你后续持续加内容，而不是一次性展示页</h2>
          </div>

          <div className={styles.advantageGrid}>
            {advantages.map((item) => (
              <article className={styles.advantageCard} key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.section} id="process">
          <div className={styles.sectionHead}>
            <span className={styles.sectionEyebrow}>作业流程</span>
            <h2>把服务流程公开出来，客户更容易建立信任</h2>
          </div>

          <div className={styles.processGrid}>
            {process.map((item) => (
              <article className={styles.processCard} key={item.step}>
                <span>{item.step}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className={`${styles.section} ${styles.sectionSplit}`} id="scenarios">
          <div className={styles.sectionHead}>
            <span className={styles.sectionEyebrow}>行业场景</span>
            <h2>网站可以先围绕行业场景讲故事，再填真实项目</h2>
            <p>
              这一部分已经适合承接未来的案例内容。你后续可以把每张卡片扩展成详情页，补客户背景、痛点、执行方案和交付成果。
            </p>
          </div>

          <div className={styles.scenarioGrid}>
            {scenarios.map((scenario) => (
              <article className={styles.scenarioCard} key={scenario.name}>
                <h3>{scenario.name}</h3>
                <p>{scenario.summary}</p>
              </article>
            ))}
          </div>
        </section>

        <section className={`${styles.section} ${styles.sectionAlt}`}>
          <div className={styles.sectionHead}>
            <span className={styles.sectionEyebrow}>后续补充建议</span>
            <h2>如果要继续完善，建议优先补这三类内容</h2>
          </div>

          <div className={styles.templateGrid}>
            {templateBlocks.map((block) => (
              <article className={styles.templateCard} key={block.title}>
                <h3>{block.title}</h3>
                <p>{block.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.contactSection} id="contact">
          <div className={styles.contactIntro}>
            <span className={styles.sectionEyebrow}>联系入口</span>
            <h2>这里已经预留了转化位置，后续替换成真实联系方式即可</h2>
            <p>
              当前先作为模板占位。你后续可以接入手机号码、企业微信、在线表单、地图位置，或者增加一个“获取方案”按钮。
            </p>
          </div>

          <div className={styles.contactCard}>
            <div>
              <span>联系电话</span>
              <strong>待补充</strong>
            </div>
            <div>
              <span>企业微信</span>
              <strong>待补充</strong>
            </div>
            <div>
              <span>联系邮箱</span>
              <strong>待补充</strong>
            </div>
            <div>
              <span>服务范围</span>
              <strong>全国项目可协调</strong>
            </div>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <p>沃垄飞服模板站点已完成首版结构，后续可继续补充图片、案例、资质与表单功能。</p>
        <span>Next.js + App Router + Vercel 友好部署</span>
      </footer>
    </div>
  );
}
