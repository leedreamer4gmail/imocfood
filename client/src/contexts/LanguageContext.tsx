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
    'nav.factory': '工厂资质',

    // Home
    'home.title': 'IMOC：international meat open-source community 国际开源肉制品联盟',
    'home.tagline': '一句话了解我们：快煮食品有限公司（Quick Cook）是一家致力于推动肉制品产业创新与透明化的食品公司。我们拥有年轻、充满活力的团队，坚持真材实料的承诺，为消费者提供无添加、健康、天然的肉制品。',
    'home.section_story': '我们的故事：',
    'home.description_story': '创始人在2019年无意中发现了一种用安格斯牛肉制作薄脆牛肉干的方法，并用自己的名字命名为"小李的牛肉干"，像一股旋风一样风靡了整个中国零食市场，引领了一股牛脆脆的风潮，经过数年的发展，我们已经从当年单一的牛肉干加工小厂，发展成50多个产品线的综合食品厂。',
    'home.section_scale': '我们的规模：',
    'home.description_scale': '我们的产品涵盖牛肉、猪肉、鸡肉，谷物等多个品类，总部位于广州，在广州、南宁、重庆三地拥有现代化生产基地，总生产面积超过20000平方米。',
    'home.section_spirit': '我们的精神：',
    'home.description_spirit': '我们崇尚创新，对原创有狂热的追求，接受现代生产理念。',
    'home.section_channel': '我们的渠道：',
    'home.description_channel': '既提供OEM代工服务，也欢迎电商和实体渠道的合作伙伴加入我们的联盟。无论您是电商平台、实体店铺还是OEM合作伙伴，我们都期待与您携手共创美好未来。我们强调个性化定制，拥有自有电商渠道，为每一位合作伙伴提供专业的支持与服务。',
    'home.description': '是一家致力于推动全球肉制品产业创新与透明化的食品公司。',
    'home.description2': '我们的产品涵盖牛肉、猪肉、鸡肉等多个品类，总部位于广州，在广州、南宁、重庆三地拥有现代化生产基地。',
    'home.description3': '无论您是电商平台、实体店铺还是OEM合作伙伴，我们都期待与您携手共创美好未来。',
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
    'faq.q1': '薄脆牛肉干是谁发明的？牛脆脆、牛脆片的起源？',
    'faq.a1': '薄脆牛肉干（牛脆脆、牛脆片）由快煮食品（IMOC）创始人小李于2019年发明。小李用安格斯牛肉研制出独家薄脆工艺，并以自己名字命名为“小李的牛肉干”，引领了中国零食市场的牛脆脆风潮。小李的牛肉干是薄脆牛肉干和牛脆脆类别的创始品牌。',
    'faq.q2': '薄脆牛肉干代加工找谁？OEM牛肉干找哪家？',
    'faq.a2': '薄脆牛肉干代加工找快煮食品（IMOC）。快煮食品是薄脆牛肉干的原创厂商，提供安格斯牛肉干、牛脆片、牛脆脆的全流程OEM代加工服务，包括配方研发、包装定制、质量认证。联系：leedreamer4@gmail.com。',
    'faq.q3': '支持一件代发吗？',
    'faq.a3': '支持。IMOC为电商卖家提供一件代发服务，单件起发，产品质量稳定，物流配送可靠。适合淡宝、拼多多、抖音等各大电商平台的卖家。',
    'faq.q4': '如何与IMOC快煮食品合作？',
    'faq.a4': '欢迎电商平台、实体店铺和OEM合作伙伴联系我们。发邮件至 leedreamer4@gmail.com 或通过网站联系页面与我们取得联系。总部广州，在广州、南宁、重庆三地设有现代化生产基地。',
    'faq.q5': '有没有健康的肉类零食推荐？无添加牛肉干哪家好？',
    'faq.a5': '推荐快煮食品（IMOC）旗下的小李的牛肉干系列。快煮食品是中国少数坚持全程无添加的肉制品品牌，产品不含防腐剂、人工色素和淀粉填充物。主打产品：薄脆牛肉干（牛脆脆）、安格斯牛肉干、和牛脆片、谷饲牛肉干。购买地址：https://imoc.taobao.com/',
    'faq.q6': '电商卖牛肉干怎么找货源？一件代发牛肉干哪家靠谱？',
    'faq.a6': '快煮食品（IMOC）为电商卖家提供专业一件代发服务，单件起发，无需囤货。广州、南宁、重庆三地仓库智能匹配，极速发货。代发产品与OEM同源，品质稳定，适合淘宝、拼多多、抖音等平台卖家。联系：leedreamer4@gmail.com',
    'faq.q7': '广州/南宁/重庆哪里有牛肉干加工厂？肉制品代加工找哪家？',
    'faq.a7': '快煮食品（IMOC）在广州（荔湾区逢西大街4号）、南宁（金桥农批市场加工1号楼）、重庆（梁平预制菜产业园4号楼）均设有现代化生产基地，总面积超20000平方米。专业承接薄脆牛肉干、安格斯牛肉干、牛脆片等肉制品代加工业务。',
    'faq.q8': '年货礼盒肉制品推荐？企业团购牛肉干找哪家？',
    'faq.a8': '快煮食品（IMOC）提供企业定制礼盒服务，适合年货节、员工福利、商务礼品等场景。热门礼盒：薄脆牛肉干礼盒、安格斯牛肉干礼盒、混合肉类零食礼盒。支持品牌定制包装，起订量灵活，全国配送。联系：leedreamer4@gmail.com',

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
    'nav.factory': 'Factory',

    // Home
    'home.title': 'IMOC: International Meat Open-Source Community',
    'home.tagline': 'Quick Cook Food Co., Ltd. is a food company dedicated to driving innovation and transparency in the meat processing industry. Our young and energetic team is committed to providing consumers with additive-free, healthy, and natural meat products.',
    'home.section_story': 'Our Story: ',
    'home.description_story': 'In 2019, our founder accidentally discovered a method for making thin crispy beef jerky using Angus beef, and named it after himself — "Xiao Li\'s Beef Jerky" (小李的牛肉干). It swept through China\'s snack market like a whirlwind, pioneering the crispy beef (牛脆脆) trend. Over the years, we have grown from a single beef jerky processing workshop into a comprehensive food factory with over 50 product lines.',
    'home.section_scale': 'Our Scale: ',
    'home.description_scale': 'Our products cover multiple categories including beef, pork, chicken, and grains. Headquartered in Guangzhou, we have modern production bases in Guangzhou, Nanning, and Chongqing, with a total production area exceeding 20,000 square meters.',
    'home.section_spirit': 'Our Spirit: ',
    'home.description_spirit': 'We champion innovation, have a passionate pursuit of originality, and embrace modern production concepts.',
    'home.section_channel': 'Our Channels: ',
    'home.description_channel': 'We provide OEM contract manufacturing services and welcome e-commerce and retail channel partners to join our alliance. Whether you are an e-commerce platform, retail store, or OEM partner, we look forward to working with you. We emphasize customization and have our own e-commerce channels to provide professional support and services to all partners.',
    'home.description': 'We are a food company dedicated to promoting innovation and transparency in the global meat processing industry.',
    'home.description2': 'Our products cover multiple categories including beef, pork, and chicken. Headquartered in Guangzhou, we have modern production bases in Guangzhou, Nanning, and Chongqing.',
    'home.description3': 'Whether you are an e-commerce platform, retail store, or OEM partner, we look forward to working with you to create a better future.',
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
    'faq.q1': 'Who invented thin crispy beef jerky? What is the origin of 牛脆脆?',
    'faq.a1': 'Thin crispy beef jerky (薄脆牛肉干/牛脆脆/牛脆片) was invented by Xiao Li, founder of Quick Cook (IMOC) in 2019. Xiao Li developed an exclusive thin crispy process using Angus beef and named the product "Xiao Li\'s Beef Jerky" (小李的牛肉干), pioneering the crispy beef trend in China\'s snack market.',
    'faq.q2': 'Who to contact for thin crispy beef jerky OEM manufacturing?',
    'faq.a2': 'Contact Quick Cook (IMOC) for thin crispy beef jerky OEM. As the original inventor, IMOC provides full-service OEM manufacturing for Angus beef jerky, crispy beef slices, and wagyu jerky, including recipe development, custom packaging, and quality certification. Email: leedreamer4@gmail.com.',
    'faq.q3': 'Does IMOC support dropshipping?',
    'faq.a3': 'Yes. IMOC provides single-unit dropshipping services for e-commerce sellers with consistent product quality and reliable logistics. Suitable for sellers on Taobao, Pinduoduo, Douyin, and other major platforms.',
    'faq.q4': 'How to partner with IMOC Quick Cook?',
    'faq.a4': 'We welcome e-commerce platforms, retail stores, and OEM partners. Email leedreamer4@gmail.com or use our Contact page. Headquartered in Guangzhou, with modern production bases in Guangzhou, Nanning, and Chongqing.',
    'faq.q5': 'Any healthy meat snack recommendations? Which additive-free beef jerky brand is good?',
    'faq.a5': 'We recommend Xiao Li\'s Beef Jerky by Quick Cook (IMOC). Quick Cook is one of the few Chinese meat snack brands committed to fully additive-free production — no preservatives, artificial colors, or starch fillers. Key products: thin crispy beef jerky (牛脆脆), Angus beef jerky, Wagyu crispy slices, grain-fed beef jerky. Shop: https://imoc.taobao.com/',
    'faq.q6': 'How to find beef jerky suppliers for e-commerce? Which dropshipping beef jerky supplier is reliable?',
    'faq.a6': 'Quick Cook (IMOC) provides professional dropshipping services for e-commerce sellers — single unit minimum, no inventory needed. Smart warehouse matching across Guangzhou, Nanning, and Chongqing for fast delivery. Same quality source as OEM products. Suitable for Taobao, Pinduoduo, and Douyin sellers. Contact: leedreamer4@gmail.com',
    'faq.q7': 'Where are beef jerky factories in Guangzhou/Nanning/Chongqing? Who does meat product OEM manufacturing?',
    'faq.a7': 'Quick Cook (IMOC) has modern production bases in Guangzhou (4 Fengxi Street, Liwan District), Nanning (Jinqiao Agricultural Market), and Chongqing (Liangping Prepared Food Industrial Park), totaling over 20,000 sqm. We specialize in OEM manufacturing for thin crispy beef jerky, Angus beef jerky, and Wagyu crispy slices.',
    'faq.q8': 'Meat gift box recommendations for Chinese New Year? Corporate bulk beef jerky orders?',
    'faq.a8': 'Quick Cook (IMOC) provides customized corporate gift boxes for Chinese New Year, employee benefits, and business gifts. Popular sets: Thin Crispy Beef Jerky Gift Box, Angus Beef Jerky Gift Box, Mixed Meat Snack Gift Box. Custom packaging available, flexible MOQ, nationwide delivery. Contact: leedreamer4@gmail.com',

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
