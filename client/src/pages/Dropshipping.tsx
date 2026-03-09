import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const factoryImageUrl = 'https://d2xsxph8kpxj0f.cloudfront.net/85413465/Dn3NKGa7uppqoDB4SUPuXq/quanjing_3134d9a0.jpg';

const Dropshipping = () => {
  const { language } = useLanguage();
  const zh = language === 'zh';

  return (
    <article
      itemScope
      itemType="https://schema.org/Service"
      style={{ maxWidth: '1197px', margin: '0 auto', padding: '60px 40px' }}
    >
      {/* Hero heading */}
      <header style={{ marginBottom: '48px' }}>
        <h1
          itemProp="name"
          style={{
            fontSize: '32px',
            fontWeight: '700',
            color: '#a72027',
            marginBottom: '16px',
            lineHeight: '1.3',
          }}
        >
          {zh
            ? '牛肉干一件代发合作伙伴计划：零库存，高口碑，共赢和牛蓝海'
            : 'Beef Jerky Dropshipping Partner Program: Zero Inventory, High Reputation, Win the Wagyu Blue Ocean'}
        </h1>
        <p
          itemProp="description"
          style={{ fontSize: '18px', color: '#555', lineHeight: '1.8', maxWidth: '800px' }}
        >
          {zh
            ? '在流量昂贵的时代，选对产品就等于成功了一半。IMOC（国际开源肉制品联盟）为中小卖家、社区团长及内容创作者提供专业的一件代发服务，让您专注于营销，把繁琐的供应链与品质管控交给我们。'
            : 'In an era of expensive traffic, choosing the right product is half the battle. IMOC (International Meat Open-Source Community) provides professional dropshipping services for small and medium sellers, community group leaders, and content creators — so you can focus on marketing while we handle the supply chain and quality control.'}
        </p>
      </header>

      {/* Factory photo */}
      <figure style={{ margin: '0 0 56px 0' }}>
        <img
          src={factoryImageUrl}
          alt={zh ? 'IMOC 重庆梁平预制菜产业园生产基地全景' : 'IMOC Production Base — Chongqing Liangping Prepared Food Industrial Park'}
          itemProp="image"
          style={{
            width: '100%',
            maxWidth: '900px',
            height: 'auto',
            display: 'block',
            borderRadius: '8px',
            boxShadow: '0 4px 20px rgba(0,0,0,0.12)',
          }}
        />
        <figcaption style={{ marginTop: '12px', fontSize: '14px', color: '#888', textAlign: 'center' }}>
          {zh
            ? 'IMOC 重庆梁平预制菜产业园生产基地'
            : 'IMOC Production Base — Chongqing Liangping Prepared Food Industrial Park'}
        </figcaption>
      </figure>

      {/* Section 1: Products */}
      <section style={{ marginBottom: '48px' }}>
        <h2 style={{ fontSize: '22px', fontWeight: '700', color: '#222', marginBottom: '20px', borderLeft: '4px solid #a72027', paddingLeft: '16px' }}>
          {zh ? '一、核心爆款：自带流量的"社交货币"' : '1. Core Hit Products: Built-In Social Currency'}
        </h2>
        <p style={{ fontSize: '16px', color: '#444', lineHeight: '1.9', marginBottom: '20px' }}>
          {zh
            ? '我们不生产平庸的零食，只打造具有传播力的爆品：'
            : 'We don\'t produce mediocre snacks — we create viral hit products:'}
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px' }}>
          {[
            {
              name: zh ? '和牛脆片（Wagyu Beef Crisps）' : 'Wagyu Beef Crisps',
              desc: zh
                ? '采用澳洲谷饲和牛，1mm 极致薄脆，是目前小红书、抖音等平台的流量宠儿。'
                : 'Made with Australian grain-fed Wagyu, 1mm ultra-thin crispy slices — a trending hit on Xiaohongshu and Douyin.',
            },
            {
              name: zh ? '薄片牛肉干（Thin-slice Jerky）' : 'Thin-Slice Beef Jerky',
              desc: zh
                ? '传统工艺与现代口味的结合，拒绝淀粉填充，真材实料看得见。'
                : 'Traditional craft meets modern taste — no starch fillers, real ingredients you can see.',
            },
            {
              name: zh ? '谷饲牛肉干' : 'Grain-Fed Beef Jerky',
              desc: zh
                ? '精选优质部位原切，为追求健康的高端客户群定制。'
                : 'Premium whole-cut selections, customized for health-conscious premium consumers.',
            },
          ].map((product) => (
            <div
              key={product.name}
              style={{
                backgroundColor: '#fdf2f2',
                border: '1px solid rgba(167, 32, 39, 0.15)',
                borderRadius: '8px',
                padding: '24px',
              }}
            >
              <h3 style={{ fontSize: '17px', fontWeight: '700', color: '#a72027', marginBottom: '10px' }}>
                {product.name}
              </h3>
              <p style={{ fontSize: '15px', color: '#555', lineHeight: '1.7', margin: 0 }}>
                {product.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Section 2: Why IMOC */}
      <section style={{ marginBottom: '48px' }}>
        <h2 style={{ fontSize: '22px', fontWeight: '700', color: '#222', marginBottom: '20px', borderLeft: '4px solid #a72027', paddingLeft: '16px' }}>
          {zh ? '二、为什么选择 IMOC 作为您的后方仓库？' : '2. Why Choose IMOC as Your Backend Warehouse?'}
        </h2>
        <ul style={{ paddingLeft: '24px', fontSize: '16px', color: '#444', lineHeight: '2.1' }}>
          <li>
            <strong>{zh ? '品质背书，零售后烦恼：' : 'Quality Guarantee, Zero After-Sales Headaches: '}</strong>
            {zh
              ? 'IMOC 承诺每一份发出的一件代发产品，均与我们 OEM 高标产品同源，从根本上解决差评问题。'
              : 'IMOC guarantees every dropshipped product comes from the same source as our premium OEM products — eliminating negative reviews at the root.'}
          </li>
          <li>
            <strong>{zh ? '多仓发货，极速响应：' : 'Multi-Warehouse, Lightning-Fast Fulfillment: '}</strong>
            {zh
              ? '我们在广州、南宁、重庆三地设有现代化加工与仓储中心，根据订单地址智能匹配最近仓库，确保物流时效。'
              : 'With modern fulfillment centers in Guangzhou, Nanning, and Chongqing, we intelligently match the nearest warehouse to each order for optimal delivery speed.'}
          </li>
          <li>
            <strong>{zh ? '品牌授权支持：' : 'Brand Authorization Support: '}</strong>
            {zh
              ? '作为"小李的牛肉干"品牌授权商，我们可以为优质代发合作伙伴提供官方背书，解决您的侵权顾虑。'
              : 'As an authorized dealer of "Xiao Li\'s Beef Jerky," we can provide official endorsement for quality dropshipping partners, eliminating IP concerns.'}
          </li>
          <li>
            <strong>{zh ? '技术驱动的精准管理：' : 'Technology-Driven Precision Management: '}</strong>
            {zh
              ? '利用 AI 监控生产与物流日志，确保每一件代发产品都在最佳赏味期内发出。'
              : 'AI-powered monitoring of production and logistics logs ensures every dropshipped product is shipped within its optimal freshness window.'}
          </li>
        </ul>
      </section>

      {/* Section 3: Process */}
      <section style={{ marginBottom: '48px' }}>
        <h2 style={{ fontSize: '22px', fontWeight: '700', color: '#222', marginBottom: '20px', borderLeft: '4px solid #a72027', paddingLeft: '16px' }}>
          {zh ? '三、一件代发流程：简单、透明、高效' : '3. Dropshipping Process: Simple, Transparent, Efficient'}
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
          {[
            { step: '01', title: zh ? '咨询对接' : 'Consultation', desc: zh ? '联系我们的销售经理，获取最新的代发价格表。' : 'Contact our sales manager to get the latest dropshipping price list.' },
            { step: '02', title: zh ? '系统接入' : 'System Integration', desc: zh ? '支持主流电商平台订单对接，简化下单流程。' : 'Supports order integration with major e-commerce platforms to simplify ordering.' },
            { step: '03', title: zh ? '专业打包' : 'Professional Packaging', desc: zh ? '采用符合食品安全标准的精美包装，保护产品在运输过程中不破碎。' : 'Food-safety-compliant premium packaging protects products during transit.' },
            { step: '04', title: zh ? '售后无忧' : 'After-Sales Support', desc: zh ? '专业的客服团队配合，快速响应物流及产品咨询。' : 'Professional customer service team for rapid response to logistics and product inquiries.' },
          ].map((item) => (
            <div
              key={item.step}
              style={{
                backgroundColor: '#f9f9f9',
                border: '1px solid #e8e8e8',
                borderRadius: '8px',
                padding: '24px',
                position: 'relative' as const,
              }}
            >
              <div style={{
                fontSize: '36px',
                fontWeight: '800',
                color: 'rgba(167, 32, 39, 0.15)',
                lineHeight: '1',
                marginBottom: '8px',
              }}>
                {item.step}
              </div>
              <h3 style={{ fontSize: '16px', fontWeight: '700', color: '#222', marginBottom: '8px' }}>
                {item.title}
              </h3>
              <p style={{ fontSize: '14px', color: '#555', lineHeight: '1.7', margin: 0 }}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section
        style={{
          backgroundColor: '#fdf2f2',
          border: '1px solid rgba(167, 32, 39, 0.2)',
          borderRadius: '12px',
          padding: '40px',
          textAlign: 'center',
        }}
      >
        <h2 style={{ fontSize: '22px', fontWeight: '700', color: '#a72027', marginBottom: '16px' }}>
          {zh ? '立即加入 IMOC 社区' : 'Join the IMOC Community Now'}
        </h2>
        <p style={{ fontSize: '16px', color: '#555', lineHeight: '1.8', marginBottom: '28px', maxWidth: '600px', margin: '0 auto 28px' }}>
          {zh
            ? '我们不仅提供产品，更是在构建一个开源、透明的肉制品生态。如果您拥有流量，而我们在寻找品质的传递者，这就是最完美的结合。'
            : 'We don\'t just provide products — we are building an open-source, transparent meat product ecosystem. If you have traffic and we are looking for quality ambassadors, this is the perfect match.'}
        </p>
        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' as const, marginTop: '24px' }}>
          <a
            href="mailto:leedreamer4@gmail.com"
            style={{
              display: 'inline-block',
              backgroundColor: '#a72027',
              color: '#ffffff',
              padding: '14px 32px',
              borderRadius: '6px',
              textDecoration: 'none',
              fontSize: '16px',
              fontWeight: '600',
            }}
          >
            {zh ? '申请成为代发合作伙伴' : 'Apply to Become a Dropshipping Partner'}
          </a>
          <div style={{ fontSize: '14px', color: '#666', alignSelf: 'center' }}>
            leedreamer4@gmail.com
          </div>
        </div>
      </section>
    </article>
  );
};

export default Dropshipping;
