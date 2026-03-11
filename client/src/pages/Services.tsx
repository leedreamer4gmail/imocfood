import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const marketingQrUrl = 'https://d2xsxph8kpxj0f.cloudfront.net/85413465/Dn3NKGa7uppqoDB4SUPuXq/市场部微信_f2920d6e.jpg';
const factoryImageUrl = 'https://d2xsxph8kpxj0f.cloudfront.net/85413465/Dn3NKGa7uppqoDB4SUPuXq/quanjing_3134d9a0.jpg';

interface ServiceDetail {
  id: number;
  title_zh: string;
  title_en: string;
  short_zh: string;
  short_en: string;
  content: (zh: boolean) => React.ReactNode;
}

const Services = () => {
  const { language, t } = useLanguage();
  const zh = language === 'zh';
  const [activeService, setActiveService] = useState<number | null>(null);

  const Section = ({ title }: { title: string }) => (
    <h3 style={{
      fontSize: '16px', fontWeight: '700', color: '#222',
      margin: '24px 0 12px 0',
      borderLeft: '3px solid #a72027', paddingLeft: '10px',
    }}>{title}</h3>
  );

  const Para = ({ children }: { children: React.ReactNode }) => (
    <p style={{ fontSize: '14px', color: '#444', lineHeight: '1.85', margin: '0 0 12px 0' }}>{children}</p>
  );

  const Ul = ({ items }: { items: { bold: string; text: string }[] }) => (
    <ul style={{ paddingLeft: '0', margin: '0 0 12px 0', listStyle: 'none' }}>
      {items.map((item, i) => (
        <li key={i} style={{ fontSize: '14px', color: '#444', lineHeight: '1.85', marginBottom: '6px', paddingLeft: '12px', borderLeft: '2px solid rgba(167,32,39,0.3)' }}>
          <strong style={{ color: '#333' }}>{item.bold}</strong>{item.text}
        </li>
      ))}
    </ul>
  );

  const FactoryImg = () => (
    <figure style={{ margin: '16px 0 20px 0' }}>
      <img
        src={factoryImageUrl}
        alt={zh ? 'IMOC 重庆梁平预制菜产业园生产基地' : 'IMOC Production Base — Chongqing'}
        style={{ width: '100%', height: 'auto', borderRadius: '6px', boxShadow: '0 2px 12px rgba(0,0,0,0.1)' }}
      />
      <figcaption style={{ fontSize: '12px', color: '#999', textAlign: 'center', marginTop: '6px' }}>
        {zh ? 'IMOC 重庆梁平预制菜产业园生产基地' : 'IMOC Production Base — Chongqing Liangping'}
      </figcaption>
    </figure>
  );

  const ContactCta = ({ label }: { label: string }) => (
    <div style={{
      backgroundColor: '#fdf2f2', border: '1px solid rgba(167,32,39,0.15)',
      borderRadius: '8px', padding: '14px 16px', marginTop: '20px', textAlign: 'center',
    }}>
      <p style={{ fontSize: '13px', color: '#a72027', fontWeight: '600', margin: '0 0 6px 0' }}>{label}</p>
      <a href="mailto:leedreamer4@gmail.com" style={{ fontSize: '13px', color: '#555', textDecoration: 'none' }}>
        leedreamer4@gmail.com
      </a>
    </div>
  );

  const services: ServiceDetail[] = [
    {
      id: 1,
      title_zh: '大宗订货',
      title_en: 'Bulk Orders',
      short_zh: '订购我们的标准化产品，满足超市、社区的市场需求',
      short_en: 'Order our standardized products for supermarkets and community markets',
      content: (zh) => (
        <>
          <Para>
            {zh
              ? 'IMOC 提供完整的标准化产品目录，涵盖牛肉干、和牛脆片、猪肉干、鸡肉制品等多个品类。无论是超市采购、社区团购还是批发商，我们均可提供稳定的货源与统一的品质标准。'
              : 'IMOC offers a complete standardized product catalog covering beef jerky, Wagyu crispy slices, pork jerky, and chicken products. Whether for supermarket procurement, community group buying, or wholesale, we provide stable supply with consistent quality standards.'}
          </Para>
          <FactoryImg />
          <Section title={zh ? '适合人群' : 'Who It\'s For'} />
          <Ul items={zh ? [
            { bold: '超市/便利店：', text: '稳定供货，统一条码，支持陈列方案' },
            { bold: '社区团购：', text: '灵活起订量，支持冷链或常温配送' },
            { bold: '批发商：', text: '量大从优，可签年度框架协议' },
          ] : [
            { bold: 'Supermarkets/Convenience Stores: ', text: 'Stable supply, unified barcodes, display support' },
            { bold: 'Community Group Buying: ', text: 'Flexible MOQ, cold chain or ambient delivery' },
            { bold: 'Wholesalers: ', text: 'Volume discounts, annual framework agreements available' },
          ]} />
          <ContactCta label={zh ? '联系销售获取报价单' : 'Contact sales for a price list'} />
        </>
      ),
    },
    {
      id: 2,
      title_zh: '来料加工',
      title_en: 'Toll Processing',
      short_zh: '如果您有好的原料，可以用您的原料加上我们的技术为您定制产品',
      short_en: 'Bring your quality raw materials — we add our technology to create your custom product',
      content: (zh) => (
        <>
          <Para>
            {zh
              ? '如果您已经拥有优质的原料资源（如特定产地的牛肉、特种畜禽等），IMOC 可以为您提供来料加工服务。我们的专业技术团队将结合您的原料特性，量身定制加工工艺，确保最终产品口感与品质达到最优。'
              : 'If you already have quality raw material resources (such as beef from specific origins, specialty livestock, etc.), IMOC can provide toll processing services. Our technical team will tailor the processing method to your raw material characteristics, ensuring optimal taste and quality.'}
          </Para>
          <FactoryImg />
          <Section title={zh ? '服务流程' : 'Service Process'} />
          <Ul items={zh ? [
            { bold: '原料评估：', text: '我们对您的原料进行免费品质评估，确认可加工性' },
            { bold: '工艺定制：', text: '根据原料特性制定专属加工方案（腌制/烘干/调味等）' },
            { bold: '小批试产：', text: '先小批量试产，确认口感后再正式量产' },
            { bold: '成品交付：', text: '成品按您指定的包装规格交付，可贴您的品牌标签' },
          ] : [
            { bold: 'Material Assessment: ', text: 'Free quality evaluation of your raw materials to confirm processability' },
            { bold: 'Custom Process: ', text: 'Tailored processing plan based on material characteristics (marinating/drying/seasoning)' },
            { bold: 'Trial Production: ', text: 'Small-batch trial run first, then scale up after taste confirmation' },
            { bold: 'Delivery: ', text: 'Finished products delivered in your specified packaging with your brand labels' },
          ]} />
          <ContactCta label={zh ? '联系我们洽谈来料加工' : 'Contact us to discuss toll processing'} />
        </>
      ),
    },
    {
      id: 3,
      title_zh: 'OEM 贴牌',
      title_en: 'OEM Branding',
      short_zh: '把我们现有的产品换成用您的品牌和包装',
      short_en: 'Replace our existing products with your brand and packaging',
      content: (zh) => (
        <>
          <Para>
            {zh
              ? '在肉类加工行业，低价往往意味着对原料的妥协。IMOC 坚信：失去品质支撑的低价，是品牌最大的负资产。我们提供完整的 OEM 贴牌服务，让您的品牌拥有真正的品质护城河。'
              : 'In the meat processing industry, low prices often mean compromising on raw materials. IMOC firmly believes that low prices without quality support are the biggest liability for any brand. We provide complete OEM branding services to give your brand a genuine quality moat.'}
          </Para>
          <FactoryImg />
          <Section title={zh ? '工厂资质' : 'Factory Credentials'} />
          <Ul items={zh ? [
            { bold: '食品生产许可证：', text: 'SC10450015550244' },
            { bold: '质量认证：', text: 'FSSC22000 食品安全体系认证 + HACCP 危害分析关键控制点认证' },
            { bold: '核心产品：', text: '牛肉薄脆片（明星单品，年产量约2亿片）' },
            { bold: '品类首创：', text: '薄脆牛肉干品类发明者（2019年），薄脆工艺最成熟' },
            { bold: '原料优势：', text: '创始人为进口牛肉贸易商，直接对接澳大利亚、新西兰牧场，原料采购成本优势显著' },
            { bold: '生产基地：', text: '重庆梁平预制菜产业园 + 广州荔湾 + 南宁金桥，总产能超20000平方米' },
          ] : [
            { bold: 'Food Production License: ', text: 'SC10450015550244' },
            { bold: 'Certifications: ', text: 'FSSC22000 Food Safety System Certification + HACCP Hazard Analysis Critical Control Point Certification' },
            { bold: 'Core Product: ', text: 'Thin Crispy Beef Jerky (flagship item, annual output ~200 million pieces)' },
            { bold: 'Category Pioneer: ', text: 'Inventor of thin crispy beef jerky category (2019), most mature production technology' },
            { bold: 'Raw Material Advantage: ', text: 'Founder is an imported beef trader with direct partnerships with Australian and New Zealand ranches' },
            { bold: 'Production Bases: ', text: 'Chongqing Liangping Pre-made Food Industrial Park + Guangzhou Liwan + Nanning Jinqiao, total capacity 20,000+ sqm' },
          ]} />
          <Section title={zh ? '原料承诺' : 'Raw Material Commitment'} />
          <Ul items={zh ? [
            { bold: '严选谷饲和牛/优质黄牛：', text: '核心产品选用优质澳洲谷饲和牛' },
            { bold: '拒绝拼接与混充：', text: '每一片肉都源自原切整块，绝不使用边角料' },
            { bold: '质量竞争优先：', text: '宁愿失去价格优势，也确保您的品牌不因差评崩盘' },
          ] : [
            { bold: 'Premium Grain-Fed Wagyu: ', text: 'Core products use quality Australian grain-fed Wagyu beef' },
            { bold: 'No Reconstitution: ', text: 'Every slice from whole cuts — no frozen scraps or substitutes' },
            { bold: 'Quality Over Price: ', text: 'We\'d rather lose on price than risk your brand\'s reputation' },
          ]} />
          <Section title={zh ? '服务内容' : 'What\'s Included'} />
          <Ul items={zh ? [
            { bold: 'OEM/ODM 定制：', text: '根据客户口味需求研发独特配方' },
            { bold: '包装定制：', text: '支持您的品牌标识、包装设计全套定制' },
            { bold: '国际出口：', text: '熟悉全球肉类贸易合规要求，支持外贸出口' },
          ] : [
            { bold: 'OEM/ODM Customization: ', text: 'Custom recipe development based on your taste preferences' },
            { bold: 'Packaging Design: ', text: 'Full customization of your brand identity and packaging' },
            { bold: 'International Export: ', text: 'Familiar with global meat trade compliance, supports export' },
          ]} />
          <ContactCta label={zh ? '联系我们获取OEM报价' : 'Contact us for OEM pricing'} />
        </>
      ),
    },
    {
      id: 4,
      title_zh: '一件代发',
      title_en: 'Dropshipping',
      short_zh: '您把订单发给我们，由我们直接发到客户手里，省心省力',
      short_en: 'Send us the order and we ship directly to your customer — completely hassle-free',
      content: (zh) => (
        <>
          <Para>
            {zh
              ? '在流量昂贵的时代，选对产品就等于成功了一半。IMOC 为中小卖家、社区团长及内容创作者提供专业的一件代发服务，让您专注于营销，把繁琐的供应链与品质管控交给我们。'
              : 'In an era of expensive traffic, choosing the right product is half the battle. IMOC provides professional dropshipping services for small sellers, community leaders, and content creators — so you focus on marketing while we handle the supply chain.'}
          </Para>
          <FactoryImg />
          <Section title={zh ? '核心爆款产品' : 'Core Hit Products'} />
          <Ul items={zh ? [
            { bold: '和牛脆片：', text: '澳洲谷饲和牛，1mm 极致薄脆，小红书/抖音流量宠儿' },
            { bold: '薄片牛肉干：', text: '传统工艺，拒绝淀粉填充，真材实料看得见' },
            { bold: '谷饲牛肉干：', text: '精选优质部位原切，高端健康客群首选' },
          ] : [
            { bold: 'Wagyu Beef Crisps: ', text: 'Australian grain-fed Wagyu, 1mm ultra-thin — trending on Xiaohongshu & Douyin' },
            { bold: 'Thin-Slice Beef Jerky: ', text: 'Traditional craft, no starch fillers, real ingredients you can see' },
            { bold: 'Grain-Fed Beef Jerky: ', text: 'Premium whole-cut selections for health-conscious premium consumers' },
          ]} />
          <Section title={zh ? '为什么选择 IMOC？' : 'Why Choose IMOC?'} />
          <Ul items={zh ? [
            { bold: '品质同源：', text: '代发产品与 OEM 高标产品同源，从根本上解决差评' },
            { bold: '三地发货：', text: '广州、南宁、重庆智能匹配最近仓库，极速响应' },
            { bold: '品牌授权：', text: '可为优质合作伙伴提供"小李的牛肉干"官方背书' },
          ] : [
            { bold: 'Same Quality Source: ', text: 'Dropshipped products from the same source as OEM products — no bad reviews' },
            { bold: '3 Warehouses: ', text: 'Guangzhou, Nanning, Chongqing — smart matching for fastest delivery' },
            { bold: 'Brand Authorization: ', text: 'Official "Xiao Li\'s Beef Jerky" endorsement for quality partners' },
          ]} />
          <ContactCta label={zh ? '申请成为代发合作伙伴' : 'Apply to become a dropshipping partner'} />
        </>
      ),
    },
    {
      id: 5,
      title_zh: '平台佣金',
      title_en: 'Platform Commission',
      short_zh: '您是网红，直接连接我们的店铺设置佣金，连接单都不用您操心',
      short_en: 'If you\'re an influencer, link to our store with a commission — orders are all handled by us',
      content: (zh) => (
        <>
          <Para>
            {zh
              ? '如果您是内容创作者、网红或拥有私域流量，IMOC 提供平台佣金合作模式。您只需将我们的店铺链接分享给粉丝，每笔成交订单您将获得约定比例的佣金，订单处理、发货、售后全部由 IMOC 负责。'
              : 'If you are a content creator, influencer, or have a private traffic community, IMOC offers a platform commission model. Simply share our store links with your followers, earn an agreed commission on every completed order — all order processing, shipping, and after-sales handled by IMOC.'}
          </Para>
          <Section title={zh ? '合作模式' : 'Cooperation Model'} />
          <Ul items={zh ? [
            { bold: '淘宝/抖音联盟：', text: '通过官方联盟平台设置佣金链接，合规透明' },
            { bold: '私域合作：', text: '微信群/小红书/视频号等私域渠道，灵活结算' },
            { bold: '品牌大使：', text: '长期合作可升级为品牌大使，享受更高佣金比例' },
          ] : [
            { bold: 'Taobao/Douyin Alliance: ', text: 'Set up commission links via official alliance platforms — compliant and transparent' },
            { bold: 'Private Traffic: ', text: 'WeChat groups, Xiaohongshu, video channels — flexible settlement' },
            { bold: 'Brand Ambassador: ', text: 'Long-term partners can upgrade to brand ambassador with higher commission rates' },
          ]} />
          <Section title={zh ? '您需要做什么？' : 'What Do You Need to Do?'} />
          <Para>
            {zh
              ? '您只需要：① 有粉丝/流量 ② 分享我们的产品链接 ③ 等待佣金到账。其余一切——备货、打包、发货、退换货——全部由 IMOC 处理，您完全不需要操心任何供应链事务。'
              : 'You only need to: ① Have followers/traffic ② Share our product links ③ Wait for commissions. Everything else — stocking, packing, shipping, returns — is handled by IMOC. You don\'t need to worry about any supply chain matters.'}
          </Para>
          <ContactCta label={zh ? '联系市场部洽谈佣金比例' : 'Contact marketing to discuss commission rates'} />
        </>
      ),
    },
  ];

  return (
    <div style={{ backgroundColor: '#ffffff', padding: '60px 20px' }}>
      <style>{`
        .services-grid {
          display: grid;
          grid-template-columns: 5fr 1px 6fr;
          gap: 0 40px;
          align-items: flex-start;
        }
        .services-divider {
          background-color: #a72027;
          align-self: stretch;
          min-height: 600px;
        }
        .services-contact-title { white-space: nowrap; }
        .service-item {
          cursor: pointer;
          border-radius: 6px;
          padding: 14px 12px;
          margin: 0 -12px;
          transition: background-color 0.18s ease;
          border-bottom: 1px solid #e8e8e8;
        }
        .service-item:last-child { border-bottom: none; }
        .service-item:hover { background-color: rgba(167, 32, 39, 0.05); }
        .service-item.active { background-color: rgba(167, 32, 39, 0.09); }
        .service-item .service-badge {
          width: 28px; height: 28px;
          background-color: #a72027;
          border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          color: #fff; font-size: 13px; font-weight: 700;
          flex-shrink: 0;
          transition: transform 0.18s;
        }
        .service-item.active .service-badge { transform: scale(1.15); }
        .service-item .service-title {
          font-size: 15px; font-weight: 600; color: #333; margin: 0 0 4px 0;
          transition: color 0.18s;
        }
        .service-item.active .service-title { color: #a72027; }
        .service-item .service-hint {
          font-size: 11px; color: rgba(167,32,39,0.55);
          transition: opacity 0.18s;
        }
        .service-item.active .service-hint { opacity: 0; }
        .detail-panel {
          animation: panelIn 0.22s ease;
          overflow-y: auto;
          max-height: 75vh;
          padding-right: 4px;
        }
        .detail-panel::-webkit-scrollbar { width: 4px; }
        .detail-panel::-webkit-scrollbar-track { background: transparent; }
        .detail-panel::-webkit-scrollbar-thumb { background: rgba(167,32,39,0.3); border-radius: 2px; }
        @keyframes panelIn {
          from { opacity: 0; transform: translateX(8px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @media (max-width: 768px) {
          .services-grid {
            grid-template-columns: 1fr !important;
            gap: 20px 0 !important;
          }
          .services-divider {
            height: 2px !important;
            min-height: unset !important;
            width: 100% !important;
            align-self: auto !important;
          }
          .detail-panel { max-height: none !important; }
        }
      `}</style>

      <div style={{ maxWidth: '1197px', margin: '0 auto' }}>
        <div className="services-grid">
          {/* Left Column - Services List */}
          <div>
            <h2 style={{ fontSize: '24px', fontWeight: '600', color: '#333', margin: '0 0 28px 0' }}>
              {t('services.title')}
            </h2>

            <div>
              {services.map((service) => (
                <div
                  key={service.id}
                  className={`service-item${activeService === service.id ? ' active' : ''}`}
                  onClick={() => setActiveService(activeService === service.id ? null : service.id)}
                >
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                    <div className="service-badge">{service.id}</div>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px', flexWrap: 'wrap' as const }}>
                        <h4 className="service-title">
                          {zh ? service.title_zh : service.title_en}
                        </h4>
                        <span className="service-hint">
                          {zh ? '点击查看详情 ›' : 'Click for details ›'}
                        </span>
                      </div>
                      <p style={{ color: '#777', fontSize: '13px', margin: 0, lineHeight: '1.5' }}>
                        {zh ? service.short_zh : service.short_en}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Red Divider */}
          <div className="services-divider" />

          {/* Right Column */}
          <div style={{ paddingTop: '4px' }}>
            {activeService !== null ? (
              <div className="detail-panel">
                {/* Panel header */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
                  <h3 style={{ color: '#a72027', fontSize: '20px', fontWeight: '700', margin: 0 }}>
                    {zh
                      ? services.find(s => s.id === activeService)?.title_zh
                      : services.find(s => s.id === activeService)?.title_en}
                  </h3>
                  <button
                    onClick={() => setActiveService(null)}
                    style={{
                      background: 'none', border: 'none', cursor: 'pointer',
                      fontSize: '22px', color: '#bbb', lineHeight: 1, padding: '2px 6px',
                      borderRadius: '4px', transition: 'color 0.15s',
                    }}
                    onMouseEnter={e => (e.currentTarget.style.color = '#a72027')}
                    onMouseLeave={e => (e.currentTarget.style.color = '#bbb')}
                    aria-label="Close"
                  >
                    ×
                  </button>
                </div>
                {/* Full content */}
                {services.find(s => s.id === activeService)?.content(zh)}
              </div>
            ) : (
              /* Default: Contact */
              <>
                <h3 className="services-contact-title" style={{
                  color: '#a72027', fontSize: '18px', fontWeight: '600',
                  margin: '0 0 24px 0', textAlign: 'center',
                }}>
                  {t('services.contact')}
                </h3>
                <div style={{ textAlign: 'center', width: '100%' }}>
                  <img
                    src={marketingQrUrl}
                    alt="Marketing Department WeChat"
                    style={{ maxWidth: '100%', height: 'auto', borderRadius: '8px' }}
                  />
                </div>
                <p style={{ textAlign: 'center', fontSize: '13px', color: '#999', marginTop: '16px' }}>
                  {zh ? '← 点击左侧服务项目查看详情' : '← Click a service on the left for details'}
                </p>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
