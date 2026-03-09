import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const factoryImageUrl = 'https://d2xsxph8kpxj0f.cloudfront.net/85413465/Dn3NKGa7uppqoDB4SUPuXq/quanjing_3134d9a0.jpg';

const OEM = () => {
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
            ? '牛肉干 OEM 代工指南：为什么品质是 IMOC 的唯一信仰？'
            : 'Beef Jerky OEM Manufacturing: Why Quality is IMOC\'s Only Belief'}
        </h1>
        <p
          itemProp="description"
          style={{ fontSize: '18px', color: '#555', lineHeight: '1.8', maxWidth: '800px' }}
        >
          {zh
            ? '在肉类加工行业，低价往往意味着对原料的妥协。但在 IMOC（国际开源肉制品联盟），我们坚信：失去品质支撑的低价，是品牌最大的负资产。如果您正在寻找一家不仅仅是"代工厂"，而是能为您的品牌提供"质量护城河"的合作伙伴，以下是 IMOC 的底层逻辑。'
            : 'In the meat processing industry, low prices often mean compromising on raw materials. At IMOC (International Meat Open-Source Community), we firmly believe that low prices without quality support are the biggest liability for any brand. If you are looking for a partner who provides not just manufacturing, but a "quality moat" for your brand, here is IMOC\'s core philosophy.'}
        </p>
      </header>

      {/* Factory photo */}
      <figure style={{ margin: '0 0 56px 0' }}>
        <img
          src={factoryImageUrl}
          alt={zh ? 'IMOC 重庆梁平预制菜产业园生产基地全景' : 'IMOC Production Base - Chongqing Liangping Prepared Food Industrial Park'}
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

      {/* Section 1: Raw materials */}
      <section style={{ marginBottom: '48px' }}>
        <h2 style={{ fontSize: '22px', fontWeight: '700', color: '#222', marginBottom: '20px', borderLeft: '4px solid #a72027', paddingLeft: '16px' }}>
          {zh ? '一、原料：拒绝以次充好，只用看得见的真牛肉' : '1. Raw Materials: No Substitution, Only Real Beef You Can See'}
        </h2>
        <p style={{ fontSize: '16px', color: '#444', lineHeight: '1.9', marginBottom: '16px' }}>
          {zh
            ? '市场上的低价牛肉干往往采用碎肉拼接、鸭肉混充或过量添加大豆蛋白。IMOC 的选择标准极其苛刻：'
            : 'Low-priced beef jerky on the market often uses reconstituted scraps, duck meat substitutes, or excessive soy protein. IMOC\'s selection standards are extremely strict:'}
        </p>
        <ul style={{ paddingLeft: '24px', fontSize: '16px', color: '#444', lineHeight: '2' }}>
          <li>
            <strong>{zh ? '严选谷饲和牛/优质黄牛：' : 'Premium Grain-Fed Wagyu/Yellow Cattle: '}</strong>
            {zh
              ? '我们的核心产品（如和牛脆片）选用优质澳洲谷饲和牛。'
              : 'Our core products (such as Wagyu Crispy Slices) use premium Australian grain-fed Wagyu beef.'}
          </li>
          <li>
            <strong>{zh ? '拒绝拼接与混充：' : 'No Reconstitution or Substitution: '}</strong>
            {zh
              ? '我们承诺每一片肉都源自原切整块，绝不使用冷冻边角料或非牛源肉类以次充好。'
              : 'We guarantee every slice comes from whole cuts — no frozen scraps or non-beef substitutes.'}
          </li>
          <li>
            <strong>{zh ? '放弃价格竞争，选择质量竞争：' : 'Quality Over Price: '}</strong>
            {zh
              ? '我们宁愿在初次报价时失去价格优势，也要确保您的品牌不会因为抽检不合格或消费者差评而面临崩盘风险。'
              : 'We would rather lose on price in the first quote than risk your brand\'s collapse from failed inspections or negative reviews.'}
          </li>
        </ul>
      </section>

      {/* Section 2: Process */}
      <section style={{ marginBottom: '48px' }}>
        <h2 style={{ fontSize: '22px', fontWeight: '700', color: '#222', marginBottom: '20px', borderLeft: '4px solid #a72027', paddingLeft: '16px' }}>
          {zh ? '二、流程：规范、透明、可控的生产体系' : '2. Process: Standardized, Transparent, and Controllable Production'}
        </h2>
        <p style={{ fontSize: '16px', color: '#444', lineHeight: '1.9', marginBottom: '16px' }}>
          {zh
            ? '代工最怕的是"看不见的黑盒"。IMOC 依托于开源社区的透明精神，建立了行业领先的管理流程：'
            : 'The biggest fear in OEM manufacturing is the "invisible black box." IMOC, guided by the open-source community\'s spirit of transparency, has established industry-leading management processes:'}
        </p>
        <ul style={{ paddingLeft: '24px', fontSize: '16px', color: '#444', lineHeight: '2' }}>
          <li>
            <strong>{zh ? '标准化车间：' : 'Standardized Facilities: '}</strong>
            {zh
              ? '在广州、南宁、重庆三地设有专业生产基地。'
              : 'Professional production bases in Guangzhou, Nanning, and Chongqing.'}
          </li>
          <li>
            <strong>{zh ? '全链路透明化：' : 'Full-Chain Transparency: '}</strong>
            {zh
              ? '通过我们自主开发的溯源逻辑，实现了从原料入库到成品出厂的每一道工序皆可实时追溯。'
              : 'Our proprietary traceability system enables real-time tracking of every step from raw material intake to finished product shipment.'}
          </li>
          <li>
            <strong>{zh ? 'AI 智能监控：' : 'AI-Assisted Monitoring: '}</strong>
            {zh
              ? '引入 AI 智能代理监控生产日志，确保每一批次的口感、干燥度、微生物指标均在设定范围之内。'
              : 'AI-powered monitoring of production logs ensures every batch meets target standards for taste, moisture, and microbial indicators.'}
          </li>
        </ul>
      </section>

      {/* Section 3: Services */}
      <section style={{ marginBottom: '48px' }}>
        <h2 style={{ fontSize: '22px', fontWeight: '700', color: '#222', marginBottom: '20px', borderLeft: '4px solid #a72027', paddingLeft: '16px' }}>
          {zh ? '三、服务：从研发到出口的一站式定制' : '3. Services: One-Stop Customization from R&D to Export'}
        </h2>
        <p style={{ fontSize: '16px', color: '#444', lineHeight: '1.9', marginBottom: '16px' }}>
          {zh
            ? '我们不仅提供加工服务，更提供行业标准化的解决方案：'
            : 'We provide not just manufacturing, but industry-standard solutions:'}
        </p>
        <ul style={{ paddingLeft: '24px', fontSize: '16px', color: '#444', lineHeight: '2' }}>
          <li>
            <strong>{zh ? 'OEM/ODM 定制：' : 'OEM/ODM Customization: '}</strong>
            {zh
              ? '根据客户口味需求研发独特配方，如我们主打的薄片牛肉干与 1mm 极致脆度的和牛脆片。'
              : 'Custom recipe development based on client preferences, including our signature thin-sliced jerky and 1mm ultra-crispy Wagyu slices.'}
          </li>
          <li>
            <strong>{zh ? '国际化视野：' : 'International Expertise: '}</strong>
            {zh
              ? '作为国际开源肉制品联盟，我们熟悉全球肉类贸易合规要求，支持外贸出口及一件代发业务。'
              : 'As an international community, we are familiar with global meat trade compliance requirements and support export and dropshipping operations.'}
          </li>
          <li>
            <strong>{zh ? '小李的牛肉干品牌授权：' : '"Xiao Li\'s Beef Jerky" Brand Authorization: '}</strong>
            {zh
              ? '针对优质合作伙伴，提供品牌授权支持，共享社区品牌溢价。'
              : 'For quality partners, we offer brand authorization support to share in the community brand premium.'}
          </li>
        </ul>
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
          {zh ? '寻找志同道合的长期主义者' : 'Looking for Like-Minded Long-Term Partners'}
        </h2>
        <p style={{ fontSize: '16px', color: '#555', lineHeight: '1.8', marginBottom: '28px', maxWidth: '600px', margin: '0 auto 28px' }}>
          {zh
            ? 'IMOC 不追求规模的最大化，而追求信任的最深化。如果您也认同"品质才是核心竞争力"，欢迎来到我们的基地实地考察。'
            : 'IMOC does not pursue maximum scale, but maximum trust. If you also believe that "quality is the core competitiveness," you are welcome to visit our production bases in person.'}
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
              transition: 'background-color 0.2s',
            }}
          >
            {zh ? '发送合作邮件' : 'Send Cooperation Email'}
          </a>
          <div style={{ fontSize: '14px', color: '#666', alignSelf: 'center' }}>
            {zh ? '联系人：李梦（创始人）/ 潘海露（销售）' : 'Contact: Li Meng (Founder) / Pan Hailu (Sales)'}
          </div>
        </div>
      </section>
    </article>
  );
};

export default OEM;
