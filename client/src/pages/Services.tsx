import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const marketingQrUrl = 'https://d2xsxph8kpxj0f.cloudfront.net/85413465/Dn3NKGa7uppqoDB4SUPuXq/市场部微信_f2920d6e.jpg';

const Services = () => {
  const { language, t } = useLanguage();
  const zh = language === 'zh';
  const [activeService, setActiveService] = useState<number | null>(null);

  const services = [
    {
      id: 1,
      title: zh ? '大宗订货' : 'Bulk Orders',
      shortDesc: zh
        ? '订购我们的标准化产品，满足超市、社区的市场需求'
        : 'Order our standardized products to meet the market demands of supermarkets and communities',
      detail: zh
        ? '我们提供完整的标准化产品目录，涵盖牛肉干、和牛脆片、猪肉干、鸡肉制品等多个品类。无论是超市采购、社区团购还是批发商，我们均可提供稳定的货源、统一的品质标准和灵活的起订量。欢迎联系我们的销售团队获取最新报价单和产品目录。'
        : 'We offer a complete catalog of standardized products including beef jerky, Wagyu crispy slices, pork jerky, and chicken products. Whether for supermarket procurement, community group buying, or wholesale, we provide stable supply, consistent quality standards, and flexible minimum order quantities. Contact our sales team for the latest price list and product catalog.',
    },
    {
      id: 2,
      title: zh ? '来料加工' : 'Toll Processing',
      shortDesc: zh
        ? '如果您有好的原料，可以用您的原料加上我们的技术为您定制产品'
        : 'If you have quality raw materials, we can use your ingredients combined with our technology to create customized products',
      detail: zh
        ? '如果您已经拥有优质的原料资源（如特定产地的牛肉、特种畜禽等），IMOC 可以为您提供来料加工服务。我们的专业技术团队将结合您的原料特性，为您量身定制加工工艺，确保最终产品的口感与品质达到最优。广州、南宁、重庆三地均可接受来料加工业务，欢迎洽谈。'
        : 'If you already have quality raw material resources (such as beef from specific origins, specialty livestock, etc.), IMOC can provide toll processing services. Our professional technical team will tailor the processing method to your raw material characteristics, ensuring the final product achieves optimal taste and quality. All three facilities in Guangzhou, Nanning, and Chongqing accept toll processing orders.',
    },
    {
      id: 3,
      title: zh ? 'OEM 贴牌' : 'OEM Branding',
      shortDesc: zh
        ? '把我们现有的产品换成用您的品牌和包装'
        : 'Replace our existing products with your brand and packaging',
      detail: zh
        ? 'IMOC 提供完整的 OEM 贴牌服务。您可以选择我们现有的任何产品（和牛脆片、薄片牛肉干、谷饲牛肉干等），替换为您自己的品牌标识和包装设计，产品品质与我们自有品牌完全相同。我们支持小批量起订，提供包装设计指导，并可协助完成食品安全认证和条形码申请等手续。'
        : 'IMOC provides complete OEM branding services. You can select any of our existing products (Wagyu crispy slices, thin-sliced beef jerky, grain-fed beef jerky, etc.) and replace them with your own brand identity and packaging design — the product quality is identical to our own brand. We support small minimum orders, provide packaging design guidance, and can assist with food safety certifications and barcode registration.',
    },
    {
      id: 4,
      title: zh ? '一件代发' : 'Dropshipping',
      shortDesc: zh
        ? '您把订单发给我们，由我们直接发到客户手里，省心省力，您什么都不用操心了'
        : 'Send us the order and we ship directly to your customer — hassle-free, you don\'t need to worry about anything',
      detail: zh
        ? 'IMOC 为电商卖家提供一件代发服务，单件起发。您只需在淘宝、拼多多、抖音等平台接单，将订单信息发送给我们，我们负责拣货、打包、发货，直接送达您的客户。我们在广州、南宁、重庆三地设有仓储中心，智能匹配最近仓库发货，确保物流时效。产品品质与零售端完全一致，从根本上解决差评问题。'
        : 'IMOC provides single-unit dropshipping services for e-commerce sellers. Simply accept orders on Taobao, Pinduoduo, Douyin, or other platforms, send us the order details, and we handle picking, packing, and shipping directly to your customers. With fulfillment centers in Guangzhou, Nanning, and Chongqing, we intelligently match the nearest warehouse for optimal delivery speed. Product quality is identical to retail — eliminating negative reviews at the root.',
    },
    {
      id: 5,
      title: zh ? '平台佣金' : 'Platform Commission',
      shortDesc: zh
        ? '您是网红，直接连接我们的店铺设置佣金，连接单都不用您操心'
        : 'If you are an influencer, directly link to our store with a commission setup — you don\'t even need to handle orders',
      detail: zh
        ? '如果您是内容创作者、网红或拥有私域流量，IMOC 提供平台佣金合作模式。您只需将我们的淘宝/抖音店铺链接分享给您的粉丝，每笔成交订单您将获得约定比例的佣金。订单处理、发货、售后全部由 IMOC 负责，您完全不需要操心任何供应链事务，专注于内容创作即可。欢迎联系我们的市场部洽谈佣金比例。'
        : 'If you are a content creator, influencer, or have a private traffic community, IMOC offers a platform commission cooperation model. Simply share our Taobao/Douyin store links with your followers, and you will receive an agreed commission percentage for every completed order. Order processing, shipping, and after-sales are all handled by IMOC — you don\'t need to worry about any supply chain matters, just focus on content creation. Contact our marketing department to discuss commission rates.',
    },
  ];

  return (
    <div style={{ backgroundColor: '#ffffff', padding: '60px 20px' }}>
      <style>{`
        .services-grid {
          display: grid;
          grid-template-columns: 2fr 1px 1fr;
          gap: 40px;
          align-items: flex-start;
        }
        .services-divider {
          background-color: #a72027;
          height: 100%;
          min-height: 500px;
        }
        .services-contact-title {
          white-space: nowrap;
        }
        .service-item {
          cursor: pointer;
          transition: background-color 0.2s ease;
          border-radius: 6px;
          padding: 16px 12px;
          margin: 0 -12px;
        }
        .service-item:hover {
          background-color: rgba(167, 32, 39, 0.04);
        }
        .service-item.active {
          background-color: rgba(167, 32, 39, 0.08);
        }
        .detail-panel {
          animation: fadeIn 0.25s ease;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(6px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @media (max-width: 768px) {
          .services-grid {
            grid-template-columns: 1fr !important;
            gap: 20px !important;
          }
          .services-divider {
            height: 2px !important;
            min-height: unset !important;
            width: 100% !important;
          }
          .services-right-col {
            width: 100% !important;
          }
        }
      `}</style>

      <div style={{ maxWidth: '1197px', margin: '0 auto' }}>
        <div className="services-grid">
          {/* Left Column - Services List */}
          <div>
            <h2
              style={{
                fontSize: '24px',
                fontWeight: '600',
                color: '#333333',
                margin: '0 0 32px 0',
              }}
            >
              {t('services.title')}
            </h2>

            <div style={{ fontSize: '14px' }}>
              {services.map((service, index) => (
                <div
                  key={service.id}
                  className={`service-item${activeService === service.id ? ' active' : ''}`}
                  onClick={() => setActiveService(activeService === service.id ? null : service.id)}
                  style={{
                    marginBottom: '4px',
                    paddingBottom: '16px',
                    borderBottom: index < services.length - 1 ? '1px solid #e0e0e0' : 'none',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                    <div
                      style={{
                        width: '32px',
                        height: '32px',
                        backgroundColor: activeService === service.id ? '#a72027' : '#a72027',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#ffffff',
                        fontSize: '14px',
                        fontWeight: '600',
                        flexShrink: 0,
                        transition: 'transform 0.2s',
                        transform: activeService === service.id ? 'scale(1.1)' : 'scale(1)',
                      }}
                    >
                      {index + 1}
                    </div>
                    <div style={{ flex: 1 }}>
                      <h4 style={{
                        color: activeService === service.id ? '#a72027' : '#333333',
                        fontSize: '15px',
                        fontWeight: '600',
                        margin: '0 0 6px 0',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                      }}>
                        {service.title}
                        <span style={{
                          fontSize: '11px',
                          color: '#a72027',
                          opacity: activeService === service.id ? 0 : 0.6,
                          transition: 'opacity 0.2s',
                        }}>
                          {zh ? '点击查看详情 ›' : 'Click for details ›'}
                        </span>
                      </h4>
                      <p style={{ color: '#666666', fontSize: '13px', margin: '0', lineHeight: '1.6' }}>
                        {service.shortDesc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Red Divider Line */}
          <div className="services-divider" />

          {/* Right Column - Detail Panel or Contact */}
          <div
            className="services-right-col"
            style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start' }}
          >
            {activeService !== null ? (
              /* Service Detail Panel */
              <div className="detail-panel" style={{ width: '100%' }}>
                {(() => {
                  const svc = services.find(s => s.id === activeService);
                  if (!svc) return null;
                  return (
                    <>
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
                        <h3 style={{
                          color: '#a72027',
                          fontSize: '18px',
                          fontWeight: '700',
                          margin: 0,
                        }}>
                          {svc.title}
                        </h3>
                        <button
                          onClick={() => setActiveService(null)}
                          style={{
                            background: 'none',
                            border: 'none',
                            cursor: 'pointer',
                            fontSize: '20px',
                            color: '#999',
                            lineHeight: 1,
                            padding: '4px 8px',
                          }}
                          aria-label="Close"
                        >
                          ×
                        </button>
                      </div>
                      <p style={{
                        fontSize: '14px',
                        color: '#444',
                        lineHeight: '1.9',
                        margin: '0 0 28px 0',
                      }}>
                        {svc.detail}
                      </p>
                      <div style={{
                        backgroundColor: '#fdf2f2',
                        border: '1px solid rgba(167,32,39,0.15)',
                        borderRadius: '8px',
                        padding: '16px',
                        textAlign: 'center',
                      }}>
                        <p style={{ fontSize: '13px', color: '#a72027', fontWeight: '600', margin: '0 0 8px 0' }}>
                          {zh ? '联系我们洽谈合作' : 'Contact us to discuss cooperation'}
                        </p>
                        <a
                          href="mailto:leedreamer4@gmail.com"
                          style={{ fontSize: '13px', color: '#555', textDecoration: 'none' }}
                        >
                          leedreamer4@gmail.com
                        </a>
                      </div>
                    </>
                  );
                })()}
              </div>
            ) : (
              /* Default: Contact Information */
              <>
                <h3
                  className="services-contact-title"
                  style={{
                    color: '#a72027',
                    fontSize: '18px',
                    fontWeight: '600',
                    margin: '0 0 30px 0',
                    textAlign: 'center',
                  }}
                >
                  {t('services.contact')}
                </h3>
                <div style={{ textAlign: 'center', width: '100%' }}>
                  <img
                    src={marketingQrUrl}
                    alt="Marketing Department WeChat"
                    style={{ maxWidth: '100%', height: 'auto', borderRadius: '8px' }}
                  />
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
