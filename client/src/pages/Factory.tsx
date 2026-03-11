import { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const FACTORY_IMAGE = 'https://d2xsxph8kpxj0f.cloudfront.net/85413465/Dn3NKGa7uppqoDB4SUPuXq/quanjing_3134d9a0.jpg';

const CERTS = [
  {
    nameCn: 'FSSC22000 食品安全体系认证',
    nameEn: 'FSSC22000 Food Safety System Certification',
    imgCn: 'https://d2xsxph8kpxj0f.cloudfront.net/85413465/Dn3NKGa7uppqoDB4SUPuXq/cert_fssc22000_cn_99c8bf9a.jpg',
    imgEn: 'https://d2xsxph8kpxj0f.cloudfront.net/85413465/Dn3NKGa7uppqoDB4SUPuXq/cert_fssc22000_en_2f5e5d03.jpg',
    certNo: 'CQC25FS0951R0M/5000',
    validCn: '有效期至 2028年8月20日',
    validEn: 'Valid until August 20, 2028',
    sigCn: '意义：FSSC22000是全球食品行业最高级别的食品安全管理体系认证，由国际食品安全认证基金会（FSSC）颁发，获得全球食品安全倡议（GFSI）认可。持有该证书意味着企业的食品安全管理体系符合ISO22000:2018及FSSC22000附加要求，能够系统性地识别和控制食品安全风险，是进入国际市场、大型零售商和出口的重要资质凭证。',
    sigEn: "Significance: FSSC22000 is the highest-level food safety management system certification in the global food industry, issued by the Foundation for Food Safety Certification (FSSC) and recognized by the Global Food Safety Initiative (GFSI). Holding this certificate means the company's food safety management system complies with ISO22000:2018 and FSSC22000 additional requirements, enabling systematic identification and control of food safety risks. It is a key credential for entering international markets, major retailers, and export channels.",
  },
  {
    nameCn: 'HACCP 危害分析与关键控制点认证',
    nameEn: 'HACCP Hazard Analysis and Critical Control Point Certification',
    imgCn: 'https://d2xsxph8kpxj0f.cloudfront.net/85413465/Dn3NKGa7uppqoDB4SUPuXq/cert_haccp_cn_7060c1eb.jpg',
    imgEn: 'https://d2xsxph8kpxj0f.cloudfront.net/85413465/Dn3NKGa7uppqoDB4SUPuXq/cert_haccp_en_58393893.jpg',
    certNo: '001HACCP2500771',
    validCn: '有效期至 2028年9月1日',
    validEn: 'Valid until September 1, 2028',
    sigCn: '意义：HACCP（危害分析与关键控制点）是国际公认的食品安全预防性管理体系，通过系统分析生产全流程中的生物、化学、物理危害，在关键控制点实施精准管控，从源头预防食品安全问题。该认证是国际食品贸易的基础门槛，也是国内外大型超市、连锁餐饮和出口业务的必备资质，证明企业具备科学规范的食品安全风险管控能力。',
    sigEn: "Significance: HACCP (Hazard Analysis and Critical Control Points) is an internationally recognized preventive food safety management system. It systematically analyzes biological, chemical, and physical hazards throughout the entire production process and implements precise control at critical control points to prevent food safety issues at the source. This certification is a fundamental requirement for international food trade and a mandatory qualification for large domestic and international supermarkets, chain restaurants, and export business, demonstrating the company's scientific and standardized food safety risk management capabilities.",
  },
];

export default function Factory() {
  const { language } = useLanguage();
  const isCn = language === 'zh';
  const [lightboxImg, setLightboxImg] = useState<string | null>(null);

  return (
    <div style={{ backgroundColor: '#ffffff', paddingBottom: '60px' }}>

      {/* Lightbox overlay */}
      {lightboxImg && (
        <div
          onClick={() => setLightboxImg(null)}
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(0,0,0,0.75)',
            zIndex: 9999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'zoom-out',
          }}
        >
          <img
            src={lightboxImg}
            alt="Certificate"
            style={{
              maxWidth: '90vw',
              maxHeight: '90vh',
              objectFit: 'contain',
              borderRadius: '8px',
              boxShadow: '0 8px 40px rgba(0,0,0,0.5)',
              pointerEvents: 'none',
            }}
          />
          <div style={{
            position: 'absolute',
            top: '20px',
            right: '28px',
            color: '#fff',
            fontSize: '32px',
            fontWeight: '300',
            lineHeight: 1,
            cursor: 'pointer',
            userSelect: 'none',
          }}>×</div>
        </div>
      )}

      {/* Factory Aerial Photo */}
      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '24px 24px 0 24px' }}>
        <img
          src={FACTORY_IMAGE}
          alt={isCn ? '重庆快煮食品工厂全景' : 'Quick Cook Factory Aerial View'}
          style={{ width: '100%', height: 'auto', display: 'block', borderRadius: '6px' }}
        />
      </div>

      {/* Company Info Block */}
      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '36px 24px 0 24px' }}>
        <h1 style={{ fontSize: '22px', fontWeight: '700', color: '#a72027', marginBottom: '16px', letterSpacing: '1px' }}>
          {isCn ? '工厂资质 · Factory Qualifications' : 'Factory Qualifications · 工厂资质'}
        </h1>

        {/* Company Info Table */}
        <div style={{
          background: '#fafafa',
          border: '1px solid #e8e0df',
          borderRadius: '8px',
          padding: '20px 24px',
          marginBottom: '32px',
          fontSize: '14px',
          lineHeight: '1.9',
          color: '#333',
        }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <tbody>
              <tr>
                <td style={{ fontWeight: '600', color: '#a72027', paddingRight: '16px', whiteSpace: 'nowrap', verticalAlign: 'top', paddingBottom: '8px' }}>
                  {isCn ? '主要生产基地' : 'Main Production Base'}
                </td>
                <td style={{ paddingBottom: '8px' }}>
                  {isCn ? '重庆快煮食品有限公司' : 'Quick Cook Foodstuff (CQ) Co., Ltd.'}
                </td>
              </tr>
              <tr>
                <td style={{ fontWeight: '600', color: '#a72027', paddingRight: '16px', whiteSpace: 'nowrap', verticalAlign: 'top', paddingBottom: '8px' }}>
                  {isCn ? '生产许可证' : 'Production License'}
                </td>
                <td style={{ paddingBottom: '8px' }}>SC10450015550244</td>
              </tr>
              <tr>
                <td style={{ fontWeight: '600', color: '#a72027', paddingRight: '16px', whiteSpace: 'nowrap', verticalAlign: 'top', paddingBottom: '8px' }}>
                  {isCn ? '生产地址' : 'Address'}
                </td>
                <td style={{ paddingBottom: '8px' }}>
                  {isCn
                    ? '重庆市梁平区双桂街道梁平高新区预制菜产业园4号楼第4层'
                    : '4F, No.4, RTC Food Industrial Parks, High-Tech Zones, Shuanggui Street, Liangping District, Chongqing City, P.R.China'}
                </td>
              </tr>
              <tr>
                <td style={{ fontWeight: '600', color: '#a72027', paddingRight: '16px', whiteSpace: 'nowrap', verticalAlign: 'top', paddingBottom: '8px' }}>
                  {isCn ? '硬件设施' : 'Facilities'}
                </td>
                <td style={{ paddingBottom: '8px' }}>
                  {isCn
                    ? '占地6000平方米，员工100人，50吨级冷库5个，现代化流程设计，可完成大规模快速生产'
                    : '6,000 sqm floor area, 100 employees, 5 cold storage units (50-ton capacity each), modern production process design for large-scale rapid production'}
                </td>
              </tr>
              <tr>
                <td style={{ fontWeight: '600', color: '#a72027', paddingRight: '16px', whiteSpace: 'nowrap', verticalAlign: 'top' }}>
                  {isCn ? '认证资质' : 'Certifications'}
                </td>
                <td>FSSC22000 &nbsp;|&nbsp; HACCP</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Certifications Section */}
        <h2 style={{ fontSize: '18px', fontWeight: '700', color: '#333', marginBottom: '20px', borderLeft: '4px solid #a72027', paddingLeft: '12px' }}>
          {isCn ? '认证证书' : 'Certificates'}
        </h2>

        {CERTS.map((cert, idx) => (
          <div key={idx} style={{
            border: '1px solid #e8e0df',
            borderRadius: '8px',
            marginBottom: '24px',
            overflow: 'hidden',
          }}>
            {/* Cert Header */}
            <div style={{
              backgroundColor: '#a72027',
              color: '#fff',
              padding: '12px 20px',
              fontWeight: '600',
              fontSize: '15px',
            }}>
              {isCn ? cert.nameCn : cert.nameEn}
            </div>

            {/* Cert Body */}
            <div style={{ padding: '20px', display: 'flex', gap: '20px', flexWrap: 'wrap' as const, alignItems: 'flex-start' }}>
              {/* Two certificate images side by side */}
              <div style={{ display: 'flex', gap: '12px', flexShrink: 0 }}>
                {[
                  { src: cert.imgCn, label: '中文版' },
                  { src: cert.imgEn, label: 'English' },
                ].map(({ src, label }) => (
                  <div key={label} style={{ textAlign: 'center' as const }}>
                    <div
                      style={{ position: 'relative', display: 'inline-block', cursor: 'zoom-in' }}
                      onMouseEnter={(e) => {
                        const preview = e.currentTarget.querySelector('.cert-preview') as HTMLElement;
                        if (preview) preview.style.opacity = '1';
                      }}
                      onMouseLeave={(e) => {
                        const preview = e.currentTarget.querySelector('.cert-preview') as HTMLElement;
                        if (preview) preview.style.opacity = '0';
                      }}
                      onClick={() => setLightboxImg(src)}
                    >
                      <img
                        src={src}
                        alt={label}
                        style={{ width: '140px', height: '198px', objectFit: 'cover', border: '1px solid #ddd', borderRadius: '4px', display: 'block' }}
                      />
                      {/* Hover overlay hint */}
                      <div
                        className="cert-preview"
                        style={{
                          position: 'absolute',
                          inset: 0,
                          backgroundColor: 'rgba(0,0,0,0.35)',
                          borderRadius: '4px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          opacity: 0,
                          transition: 'opacity 0.2s',
                          pointerEvents: 'none',
                        }}
                      >
                        <span style={{ color: '#fff', fontSize: '13px', fontWeight: '500' }}>
                          {isCn ? '点击查看大图' : 'Click to enlarge'}
                        </span>
                      </div>
                    </div>
                    <div style={{ fontSize: '11px', color: '#888', marginTop: '4px' }}>{label}</div>
                  </div>
                ))}
              </div>

              {/* Cert Details */}
              <div style={{ flex: 1, minWidth: '200px', fontSize: '13px', color: '#444', lineHeight: '1.8' }}>
                <div style={{ marginBottom: '6px' }}>
                  <span style={{ fontWeight: '600', color: '#a72027' }}>{isCn ? '证书编号：' : 'Certificate No.: '}</span>
                  {cert.certNo}
                </div>
                <div style={{ marginBottom: '12px' }}>
                  <span style={{ fontWeight: '600', color: '#a72027' }}>{isCn ? '有效期：' : 'Validity: '}</span>
                  {isCn ? cert.validCn : cert.validEn}
                </div>
                <div style={{
                  backgroundColor: '#f9f5f5',
                  border: '1px solid #f0e8e8',
                  borderRadius: '6px',
                  padding: '12px',
                  fontSize: '13px',
                  lineHeight: '1.7',
                  color: '#555',
                }}>
                  {isCn ? cert.sigCn : cert.sigEn}
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Bottom note */}
        <div style={{
          textAlign: 'center' as const,
          fontSize: '13px',
          color: '#888',
          marginTop: '8px',
          padding: '16px',
          borderTop: '1px solid #eee',
        }}>
          {isCn
            ? '鼠标悬停或点击证书图片可查看大图 · 如需核实证书真实性，请访问中国质量认证中心官网 www.cqc.com.cn'
            : 'Hover or click certificate images to enlarge · To verify authenticity, visit China Quality Certification Centre at www.cqc.com.cn'}
        </div>
      </div>
    </div>
  );
}
