import React, { createContext, useContext, useState } from 'react';

type Language = 'zh' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations: Record<Language, Record<string, string>> = {
  zh: {
    // Navigation
    'nav.home': '主页',
    'nav.products': '我们的产品',
    'nav.services': '提供服务',
    'nav.oem': 'OEM代工',
    'nav.dropshipping': '一件代发',
    'nav.contact': '联系我们',
    'nav.news': '最新动态',

    // Home
    'home.title': 'IMOC：international meat open-source community 国际开源肉制品联盟',
    'home.description': '是一家致力于推动全球肉制品产业创新与透明化的食品公司。我们拥有年轻、充满活力的团队，坚持真材实料的承诺，为消费者提供无添加、健康、天然的肉制品。',
    'home.description2': '我们的产品涵盖牛肉、猪肉、鸡肉等多个品类，总部位于广州，在广州、南宁、重庆三地拥有现代化生产基地。我们崇尚创新，接受现代生产理念，既提供OEM代工服务，也欢迎电商和实体渠道的合作伙伴加入我们的联盟。',
    'home.description3': '无论您是电商平台、实体店铺还是OEM合作伙伴，我们都期待与您携手共创美好未来。我们强调个性化定制，拥有自有电商渠道，为每一位合作伙伴提供专业的支持与服务。',
    'home.description4': '欢迎加入 IMOC 联盟，一起为全球消费者带来更好的肉制品体验。',

    // Products
    'products.title': '我们的产品',
    'products.buy': '直接购买我们的产品',
    'products.taobao': '访问淘宝店铺',
    'products.bull': '荃然牛负责管理',
    'products.pig': '社恐猪负责管理',
    'products.chicken': '呆滞鸡负责管理',
    'products.squid': '好嗨鱿负责管理',

    // Bull products
    'products.bull_1': '牛肉干',
    'products.bull_2': '牛腱子',
    'products.bull_3': '牛罐头',
    'products.bull_4': '牛孖筋',
    'products.bull_5': '牛肉酱',
    'products.bull_6': '兼管羊肉',

    // Pig products
    'products.pig_1': '猪肉干',
    'products.pig_2': '猪罐头',
    'products.pig_3': '绵绵肉',
    'products.pig_4': '猪谈肉',
    'products.pig_5': '糯糯肉粽',

    // Chicken products
    'products.chicken_1': '无抗土鸡腿',
    'products.chicken_2': '农家土鸡腿',
    'products.chicken_3': '朴实鸡腿',
    'products.chicken_4': '鸡肉罐头',
    'products.chicken_5': '鸡肉干',
    'products.chicken_6': '鸡肉丸',

    // Squid products
    'products.squid_1': '烤鱿鱼干',
    'products.squid_2': '烤虾干',
    'products.squid_3': '烤鱼干',

    // Services
    'services.title': '提供服务',
    'services.service1': '产品代工（OEM）',
    'services.service1_desc': '提供定制化OEM生产服务，满足您的个性化需求',
    'services.service2': '品牌合作',
    'services.service2_desc': '战略品牌合作与合作机会',
    'services.service3': '电商渠道支持',
    'services.service3_desc': '完整的电商渠道支持与物流解决方案',
    'services.service4': '质量保证',
    'services.service4_desc': '全面的质量保证与认证体系',
    'services.service5': '物流配送',
    'services.service5_desc': '可靠的物流与配送网络',
    'services.contact': '联系方式',

    // Contact
    'contact.title': '联系我们',
    'contact.email': 'email：',
    'contact.wechat': '微信二维码',
    'contact.address': '地址',
    'contact.guangzhou': '广州',
    'contact.guangzhou_addr': '广东省广州市荔湾区逢西大街4号',
    'contact.nanning': '南宁',
    'contact.nanning_addr': '广西省南宁市兴宁区金桥农批市场加工1号楼2楼',
    'contact.chongqing': '重庆',
    'contact.chongqing_addr': '重庆市梁平区预制菜产业园区4号楼4楼',

    // FAQ
    'faq.title': '常见问题',
    'faq.q1': 'IMOC是什么？',
    'faq.a1': 'IMOC（International Meat Open-Source Community，国际开源肉制品联盟）是一家专注于高品质肉制品的食品公司。我们以开源理念推动供应链透明化，核心产品包括薄片牛肉干、和牛脆片、谷饲牛肉干，总部位于广州，在南宁、重庆设有现代化生产基地。',
    'faq.q2': '如何进行OEM代工合作？',
    'faq.a2': 'IMOC提供全流程OEM代工服务，包括配方研发、包装定制、质量认证和物流支持。欢迎发邮件至 leedreamer4@gmail.com 或通过联系我们页面与我们取得联系，我们会安排专人对接。',
    'faq.q3': '支持一件代发吗？',
    'faq.a3': '支持。IMOC为电商卖家提供一件代发服务，单件起发，产品质量稳定，物流配送可靠。适合淘宝、拼多多、抖音等各大电商平台的卖家。',
    'faq.q4': '产品在哪里生产？质量如何保证？',
    'faq.a4': 'IMOC在广州（广东）、南宁（广西）、重庆三地设有现代化生产基地，全部符合国家食品安全标准。我们坚持无添加、真材实料的承诺，采用谷饲和牛等优质原料。',

    // News
    'news.title': '最新动态',
    'news.news1_title': '新品上市',
    'news.news1_desc': '我们推出了全新的产品线，采用最先进的生产工艺和最优质的原材料。',
    'news.news2_title': '合作伙伴',
    'news.news2_desc': '与多家知名电商平台建立了合作关系，为消费者提供便捷的购物体验。',
    'news.news3_title': '质量认证',
    'news.news3_desc': '获得了国际质量认证，确保产品的安全性和可靠性。',
  },
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.products': 'Our Products',
    'nav.services': 'Services',
    'nav.oem': 'OEM',
    'nav.dropshipping': 'Dropshipping',
    'nav.contact': 'Contact Us',
    'nav.news': 'News',

    // Home
    'home.title': 'IMOC: International Meat Open-Source Community',
    'home.description': 'We are a food company dedicated to promoting innovation and transparency in the global meat processing industry. Our young and vibrant team is committed to providing consumers with additive-free, healthy, and natural meat products.',
    'home.description2': 'Our products cover multiple categories including beef, pork, and chicken. Headquartered in Guangzhou, we have modern production bases in Guangzhou, Nanning, and Chongqing. We embrace innovation, accept modern production concepts, and provide OEM manufacturing services while welcoming e-commerce and retail partners to join our alliance.',
    'home.description3': 'Whether you are an e-commerce platform, retail store, or OEM partner, we look forward to working with you to create a better future. We emphasize customization and have our own e-commerce channels to provide professional support and services to all partners.',
    'home.description4': 'Welcome to join the IMOC alliance and bring better meat products to global consumers.',

    // Products
    'products.title': 'Our Products',
    'products.buy': 'Buy Our Products Directly',
    'products.taobao': 'Visit Our Taobao Store',
    'products.bull': 'Managed by Bull',
    'products.pig': 'Managed by Pig',
    'products.chicken': 'Managed by Chicken',
    'products.squid': 'Managed by Squid',

    // Bull products
    'products.bull_1': 'Beef Jerky',
    'products.bull_2': 'Beef Tendon',
    'products.bull_3': 'Beef Canned',
    'products.bull_4': 'Beef Tendon Strips',
    'products.bull_5': 'Beef Sauce',
    'products.bull_6': 'Lamb Meat',

    // Pig products
    'products.pig_1': 'Pork Jerky',
    'products.pig_2': 'Pork Canned',
    'products.pig_3': 'Tender Pork',
    'products.pig_4': 'Pork Strips',
    'products.pig_5': 'Sticky Rice Pork',

    // Chicken products
    'products.chicken_1': 'Free-Range Chicken Leg',
    'products.chicken_2': 'Farm Chicken Leg',
    'products.chicken_3': 'Simple Chicken Leg',
    'products.chicken_4': 'Chicken Canned',
    'products.chicken_5': 'Chicken Jerky',
    'products.chicken_6': 'Chicken Meatball',

    // Squid products
    'products.squid_1': 'Grilled Squid Jerky',
    'products.squid_2': 'Grilled Shrimp Jerky',
    'products.squid_3': 'Grilled Fish Jerky',

    // Services
    'services.title': 'Services',
    'services.service1': 'Product OEM Manufacturing',
    'services.service1_desc': 'OEM manufacturing services with customization support',
    'services.service2': 'Brand Cooperation',
    'services.service2_desc': 'Strategic brand partnerships and collaboration opportunities',
    'services.service3': 'E-commerce Channel Support',
    'services.service3_desc': 'Complete e-commerce channel support and logistics',
    'services.service4': 'Quality Assurance',
    'services.service4_desc': 'Comprehensive quality assurance and certification',
    'services.service5': 'Logistics & Distribution',
    'services.service5_desc': 'Reliable logistics and distribution network',
    'services.contact': 'Contact Information',

    // Contact
    'contact.title': 'Contact Us',
    'contact.email': 'Email:',
    'contact.wechat': 'WeChat QR Code',
    'contact.address': 'Address',
    'contact.guangzhou': 'Guangzhou',
    'contact.guangzhou_addr': '4 Fengxi Street, Liwan District, Guangzhou, Guangdong Province',
    'contact.nanning': 'Nanning',
    'contact.nanning_addr': '2nd Floor, Building 1, Jinqiao Agricultural Wholesale Market, Xingning District, Nanning, Guangxi Province',
    'contact.chongqing': 'Chongqing',
    'contact.chongqing_addr': '4th Floor, Building 4, Prepared Vegetable Industrial Park, Liangping District, Chongqing',

    // FAQ
    'faq.title': 'FAQ',
    'faq.q1': 'What is IMOC?',
    'faq.a1': 'IMOC (International Meat Open-Source Community) is a food company dedicated to premium meat products. We promote supply chain transparency through open-source principles. Core products include thin-sliced beef jerky, Wagyu crispy slices, and grain-fed beef jerky. Headquartered in Guangzhou, with production bases in Nanning and Chongqing.',
    'faq.q2': 'How to start OEM manufacturing cooperation?',
    'faq.a2': 'IMOC provides full-service OEM manufacturing including recipe development, custom packaging, quality certification, and logistics support. Email us at leedreamer4@gmail.com or use our Contact page to get in touch, and we will arrange a dedicated contact person.',
    'faq.q3': 'Does IMOC support dropshipping?',
    'faq.a3': 'Yes. IMOC provides single-unit dropshipping services for e-commerce sellers with consistent product quality and reliable logistics. Suitable for sellers on Taobao, Pinduoduo, Douyin, and other major platforms.',
    'faq.q4': 'Where are products made? How is quality guaranteed?',
    'faq.a4': 'IMOC operates modern production facilities in Guangzhou (Guangdong), Nanning (Guangxi), and Chongqing, all meeting national food safety standards. We are committed to no artificial additives and use quality ingredients including grain-fed and Wagyu beef.',

    // News
    'news.title': 'News',
    'news.news1_title': 'New Product Launch',
    'news.news1_desc': 'We have launched a new product line using the most advanced production technology and highest quality raw materials.',
    'news.news2_title': 'Strategic Partnerships',
    'news.news2_desc': 'We have established partnerships with multiple renowned e-commerce platforms to provide convenient shopping experiences for consumers.',
    'news.news3_title': 'Quality Certification',
    'news.news3_desc': 'We have obtained international quality certifications to ensure product safety and reliability.',
  },
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem('language') as Language | null;
    return saved || 'zh';
  });

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[Language]] || key;
  };

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('language', lang);
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
};
