import Image from "next/image";
import styles from "./page.module.css";

const services = [
  "无人机巡检",
  "农业植保",
  "航测建模",
] as const;

const advantages = [
  {
    title: "作业更灵活",
    description: "适用于农田、园区、工地、电站等多种低空作业场景。",
  },
  {
    title: "交付更直观",
    description: "可根据项目需要补充图像、视频、报告或模型成果。",
  },
  {
    title: "后续可继续扩展",
    description: "当前先做介绍页，后续可以继续增加案例、表单和详细页面。",
  },
] as const;

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <section className={styles.hero}>
          <div className={styles.logoCard}>
            <Image
              src="/wuolongfeifu-logo.jpg"
              alt="沃垄飞服 logo"
              width={260}
              height={278}
              priority
              className={styles.logo}
            />
          </div>

          <div className={styles.content}>
            <span className={styles.eyebrow}>无人机服务公司介绍页</span>
            <h1>沃垄飞服</h1>
            <p className={styles.lead}>
              沃垄飞服专注于无人机服务应用，当前网站先展示公司基础介绍，方便后续继续补充真实案例、作业素材、资质信息和联系方式。
            </p>

            <div className={styles.tags}>
              {services.map((service) => (
                <span key={service} className={styles.tag}>
                  {service}
                </span>
              ))}
            </div>

            <div className={styles.actions}>
              <a href="#about" className={styles.primaryButton}>
                了解公司
              </a>
              <a href="#contact" className={styles.secondaryButton}>
                联系方式
              </a>
            </div>
          </div>
        </section>

        <section className={styles.section} id="about">
          <h2>公司简介</h2>
          <p>
            这里作为官网首版介绍页，适合先放公司定位、主营方向和服务范围。后续你可以把这段替换成真实介绍，比如飞手团队、设备能力、服务地区、典型项目和资质说明。
          </p>
        </section>

        <section className={styles.section}>
          <h2>服务概览</h2>
          <div className={styles.grid}>
            {advantages.map((item) => (
              <article key={item.title} className={styles.card}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.contact} id="contact">
          <h2>联系方式</h2>
          <p>电话、微信、邮箱和办公地址可以在这里替换成真实信息。</p>
          <div className={styles.contactBox}>
            <span>联系电话：待补充</span>
            <span>企业微信：待补充</span>
            <span>联系邮箱：待补充</span>
          </div>
        </section>
      </main>
    </div>
  );
}
