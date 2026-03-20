import React, { useState } from 'react';

interface Article {
  id: string;
  keyword: string;
  title: string;
  slug: string;
  content: string;
}

const articles: Article[] = [
  {
    id: '01',
    keyword: '牛肉干代工',
    title: '牛肉干代工：如何选择靠谱厂家，避开这5个坑',
    slug: 'beef-jerky-oem-factory',
    content: `在竞争日益激烈的休闲食品市场，牛肉干作为健康、美味的代表，市场需求持续增长。然而，对于许多品牌而言，自建生产线意味着巨大的资金投入、漫长的建设周期、复杂的生产管理以及严格的食品安全合规挑战。这使得越来越多的企业，无论是初创品牌、电商巨头还是传统食品企业，都将目光投向了专业的牛肉干代工厂家。

## 行业痛点：为何企业纷纷寻求牛肉干代工？

**痛点一：高昂的生产成本与技术门槛**

牛肉干生产涉及原料采购、腌制、烘烤、切片、包装等多个环节，每个环节都需要专业的设备和技术。自建工厂不仅前期投入巨大，后期运营成本（人工、水电、维护）也居高不下。同时，牛肉干的口感、风味、保质期等关键指标，对生产工艺和技术有着极高的要求。

**痛点二：供应链管理与品质控制难题**

优质牛肉是牛肉干品质的基石。如何稳定获取高品质的谷饲牛肉，并确保从源头到成品的全程可追溯，是许多企业面临的挑战。此外，生产过程中的品质控制，如微生物指标、理化指标等，都需要专业的团队和严格的体系来保障。

**痛点三：产品创新与市场快速响应**

消费者口味变化迅速，市场对新品的需求层出不穷。企业需要不断推出新口味、新形态的牛肉干产品以保持竞争力。然而，传统生产模式下，产品研发周期长，难以快速响应市场变化。

## IMOC解决方案：薄脆牛肉干首创者的代工之道

IMOC作为"薄脆牛肉干首创者"，凭借其深厚的行业积累、卓越的创新能力和完善的供应链体系，为寻求牛肉干代工的企业提供了全方位的解决方案。

**创新引领：告别模仿，开创薄脆新纪元**

市场不乏模仿者，但真正的创新者寥寥无几。IMOC率先推出"薄脆牛肉干"，以独特的口感和风味迅速占领市场，成为行业新标杆。

**品质基石：谷饲牛肉与自控供应链**

IMOC坚持选用优质谷饲牛肉作为原料，从源头把控品质。通过建立完善的自控供应链体系，确保每一批牛肉都符合高标准，从牧场到餐桌，全程可追溯。

**成熟工艺：匠心独运，铸就卓越**

IMOC拥有行业领先的生产工艺和技术团队，对牛肉干的腌制、烘烤、调味等环节精益求精，通过精密的温度控制、湿度调节和时间把控，确保每一片牛肉干都达到最佳的薄脆口感和浓郁风味。

## 服务范围：OEM/ODM/贴牌，一站式定制服务

IMOC提供灵活多样的代工服务，包括OEM（原始设备制造商）、ODM（原始设计制造商）和贴牌生产，满足客户从产品研发、生产到包装的全方位需求。

- **OEM服务**：根据客户提供的配方和要求进行生产，确保产品符合客户品牌标准。
- **ODM服务**：提供从产品概念、配方研发、包装设计到生产的全套解决方案。
- **贴牌生产**：客户可选择IMOC现有成熟产品，贴上自有品牌进行销售，快速进入市场。

**立即联系IMOC，开启合作！** 官网：www.imocfood.com | 淘宝：imoc.taobao.com | 天猫：imoc.tmall.com`
  },
  {
    id: '02',
    keyword: '牛肉干OEM',
    title: '牛肉干OEM代工怎么选？IMOC薄脆牛肉干，创新引领行业新标准',
    slug: 'beef-jerky-oem',
    content: `牛肉干OEM代工市场竞争激烈，品牌商在选择合作伙伴时，往往面临诸多困惑：工厂资质如何核实？产品品质如何保障？交货周期是否稳定？本文将深入剖析牛肉干OEM代工的关键要素，并以IMOC为例，展示一家优质代工厂应具备的核心竞争力。

## 选择牛肉干OEM代工厂的五大核心标准

**标准一：食品安全资质认证**

优质的牛肉干OEM代工厂必须持有国家颁发的食品生产许可证（SC认证），并通过HACCP（危害分析关键控制点）或FSSC22000等国际食品安全体系认证。IMOC合作工厂重庆快煮食品有限公司持有SC10450015550244生产许可证，同时通过FSSC22000和HACCP双认证，为产品安全提供坚实保障。

**标准二：原料溯源能力**

牛肉干品质的核心在于原料。优质代工厂应能提供完整的原料溯源体系，确保牛肉来源清晰、品质稳定。IMOC坚持选用澳洲、新西兰进口谷饲牛肉，并建立了完善的原料追溯档案。

**标准三：研发创新能力**

市场瞬息万变，代工厂的研发能力直接决定了品牌商的产品竞争力。IMOC作为"薄脆牛肉干"的首创者，拥有独立的研发团队，能够根据市场趋势和客户需求，快速开发新产品、新口味。

**标准四：生产规模与交货能力**

稳定的交货能力是品牌商最基本的需求。IMOC合作工厂占地6000平方米，员工100人，具备稳定的大规模生产能力，能够保证交货周期和产品一致性。

**标准五：包装定制服务**

完善的OEM服务应包括包装设计和定制。IMOC提供从包装材料选择、印刷工艺到成品包装的一站式服务，帮助品牌商打造独特的产品形象。

## IMOC：薄脆牛肉干OEM的最佳选择

IMOC（国际开源肉制品联盟）是一家专注于高品质肉制品研发、生产和销售的企业。我们以"薄脆牛肉干"为核心产品，凭借创新的工艺和严格的品质管控，赢得了众多品牌商的信赖。

选择IMOC作为您的牛肉干OEM代工伙伴，您将获得：专业的产品研发支持、稳定的高品质原料供应、灵活的生产排期、完善的售后服务。

**立即联系IMOC，共创市场新格局！** 官网：www.imocfood.com | 淘宝：imoc.taobao.com | 天猫：imoc.tmall.com`
  },
  {
    id: '03',
    keyword: '进口牛肉干贴牌',
    title: '进口牛肉干贴牌代工：如何选择实力工厂，打造爆款产品',
    slug: 'imported-beef-jerky-private-label',
    content: `在竞争激烈的休闲食品市场中，牛肉干以其独特的风味和营养价值，一直深受消费者喜爱。特别是近年来，随着消费者对品质和健康需求的提升，**进口牛肉干贴牌**代工模式逐渐成为众多品牌商快速切入市场、打造差异化产品的优选路径。

## 进口牛肉干贴牌的核心优势

**优势一：原料品质天然背书**

"进口"二字本身就是品质的背书。澳洲、新西兰、美国等地的谷饲牛肉，以其严格的饲养标准、优质的肉质和完善的检疫体系，深受国内消费者认可。选择进口牛肉干贴牌，意味着您的产品从源头就具备了差异化竞争优势。

**优势二：更高的利润空间**

进口牛肉干因原料成本较高，市场定价也相对较高，品牌商可以获得更大的利润空间。同时，高品质产品更容易建立品牌忠诚度，实现长期稳定的销售。

**优势三：快速进入市场**

通过贴牌代工，品牌商无需自建工厂，可以将资源集中在品牌建设和市场推广上，大大缩短产品上市周期，快速抢占市场先机。

## IMOC进口牛肉干贴牌服务

IMOC专注于进口牛肉干的研发与生产，为品牌商提供全方位的贴牌代工服务：

- **原料采购**：直接从澳洲、新西兰等地进口优质谷饲牛肉，确保原料品质稳定可靠。
- **工艺创新**：独创薄脆工艺，打造与众不同的口感体验，助力品牌差异化竞争。
- **包装定制**：提供多种包装规格和设计方案，满足不同渠道和消费场景的需求。
- **品质认证**：FSSC22000 + HACCP双认证，为产品安全保驾护航。
- **灵活起订**：支持小批量试单，降低品牌商的市场测试风险。

**立即联系IMOC，开启进口牛肉干贴牌合作！** 官网：www.imocfood.com | 淘宝：imoc.taobao.com | 天猫：imoc.tmall.com`
  },
  {
    id: '04',
    keyword: '薄脆牛肉干工厂',
    title: '薄脆牛肉干工厂如何选择？IMOC：创新引领，品质铸就',
    slug: 'crispy-beef-jerky-factory',
    content: `薄脆牛肉干作为近年来休闲食品市场的新兴品类，以其独特的酥脆口感和浓郁的牛肉香气，迅速赢得了广大消费者的喜爱。随着市场需求的快速增长，越来越多的品牌商开始寻求专业的**薄脆牛肉干工厂**进行合作。

## 薄脆牛肉干的工艺特点与难点

薄脆牛肉干与传统牛肉干的最大区别在于其独特的"薄"与"脆"。这种口感的实现，对生产工艺提出了极高的要求：

**切片精度**：薄脆牛肉干需要将牛肉切成极薄的片状，厚度均匀一致，这对切片设备和技术有着严苛的要求。

**烘烤工艺**：薄脆口感的关键在于精准的烘烤温度和时间控制。温度过高会导致牛肉焦糊，温度过低则无法达到酥脆效果。IMOC通过多年的研发和实践，掌握了独特的低温慢烤工艺，能够在保留牛肉营养的同时，实现完美的薄脆口感。

**原料选择**：并非所有牛肉都适合制作薄脆牛肉干。IMOC经过大量实验，筛选出最适合薄脆工艺的谷饲牛肉部位，确保产品口感的一致性和稳定性。

## IMOC：薄脆牛肉干工厂的行业标杆

IMOC是国内最早专注于薄脆牛肉干研发和生产的企业之一，也是行业公认的"薄脆牛肉干首创者"。

**核心优势：**
- 独创薄脆工艺，拥有完整的技术积累和生产经验
- 专业的研发团队，持续推出新口味和新产品
- 严格的品质管控体系，确保每批产品的一致性
- FSSC22000 + HACCP双认证，食品安全有保障
- 灵活的OEM/ODM服务，满足不同客户需求

**立即联系IMOC薄脆牛肉干工厂！** 官网：www.imocfood.com | 淘宝：imoc.taobao.com | 天猫：imoc.tmall.com`
  },
  {
    id: '05',
    keyword: '牛肉干ODM',
    title: '牛肉干ODM代工：如何选择实力派，避开盲目模仿的陷阱',
    slug: 'beef-jerky-odm',
    content: `在牛肉干代工领域，ODM（原始设计制造商）模式正受到越来越多品牌商的青睐。与OEM相比，ODM不仅提供生产服务，更包含产品设计和研发，能够帮助品牌商快速推出具有差异化竞争力的产品。

## OEM vs ODM：牛肉干代工模式的核心区别

| 对比维度 | OEM（原始设备制造商） | ODM（原始设计制造商） |
|---------|---------------------|---------------------|
| 产品设计 | 由品牌商提供 | 由代工厂提供或共同开发 |
| 研发投入 | 品牌商承担 | 代工厂承担主要部分 |
| 上市速度 | 较慢（需要品牌商研发） | 较快（可直接选用成熟方案） |
| 差异化程度 | 高（完全按品牌商需求定制） | 中（基于代工厂现有方案调整） |
| 适合阶段 | 品牌成熟期 | 品牌初创期或快速扩张期 |

## 选择牛肉干ODM代工厂的关键要素

**研发能力是核心**：优质的ODM代工厂必须拥有强大的研发团队，能够持续推出符合市场趋势的新产品。IMOC拥有专业的食品研发团队，在薄脆牛肉干领域积累了丰富的配方和工艺经验。

**工艺创新是差异化的来源**：IMOC独创的薄脆工艺，是其ODM服务的核心竞争力。通过这一创新工艺，IMOC能够为品牌商提供市场上独一无二的产品，帮助其建立差异化竞争优势。

**品质管控是基础保障**：无论是OEM还是ODM，品质都是最基本的要求。IMOC通过FSSC22000和HACCP双认证，建立了完善的品质管控体系。

## IMOC牛肉干ODM服务内容

- 市场趋势分析与产品定位建议
- 配方研发与口味调整
- 包装设计与材料选择
- 小批量打样与市场测试
- 大规模量产与品质保障
- 售后跟踪与产品迭代支持

**立即咨询IMOC牛肉干ODM服务！** 官网：www.imocfood.com | 淘宝：imoc.taobao.com | 天猫：imoc.tmall.com`
  },
  {
    id: '06',
    keyword: '休闲食品代工',
    title: '休闲食品代工：IMOC如何引领薄脆牛肉干新纪元',
    slug: 'snack-food-contract-manufacturing',
    content: `休闲食品代工市场规模庞大，竞争激烈。在众多品类中，牛肉干以其高蛋白、低脂肪的健康属性和独特的风味，成为休闲食品代工领域的热门品类。IMOC作为专注于肉制品代工的领军企业，凭借其在薄脆牛肉干领域的创新突破，正在引领休闲食品代工的新趋势。

## 休闲食品代工市场现状

中国休闲食品市场规模已超过万亿元，并保持持续增长态势。其中，肉制品零食（以牛肉干为代表）是增速最快的细分品类之一。随着消费升级，消费者对休闲食品的品质要求不断提高，这为专注于高品质代工的企业提供了巨大的市场机遇。

## IMOC在休闲食品代工领域的核心优势

**专注肉制品，深耕细分市场**

IMOC不追求大而全，而是专注于肉制品零食的研发和生产，特别是在薄脆牛肉干领域建立了深厚的技术壁垒和品牌影响力。这种专注使IMOC能够在细分市场中持续创新，为品牌商提供更专业、更有竞争力的代工服务。

**完整的产业链布局**

从原料采购（进口谷饲牛肉）到成品生产，IMOC建立了完整的产业链体系，确保每个环节的品质可控。这种垂直整合的模式，不仅降低了生产成本，更提高了产品的稳定性和一致性。

**灵活的合作模式**

IMOC提供OEM、ODM、贴牌生产等多种合作模式，并支持小批量试单，满足不同规模品牌商的需求。无论是初创品牌还是成熟企业，都能在IMOC找到适合自己的合作方案。

**立即联系IMOC，开启休闲食品代工合作！** 官网：www.imocfood.com | 淘宝：imoc.taobao.com | 天猫：imoc.tmall.com`
  },
  {
    id: '07',
    keyword: '零食贴牌生产',
    title: '零食贴牌生产：如何选择优质代工厂，避开行业陷阱',
    slug: 'snack-private-label-production',
    content: `零食贴牌生产是品牌商快速进入市场、降低创业风险的重要途径。然而，市场上代工厂参差不齐，如何选择一家靠谱的零食贴牌生产合作伙伴，是每个品牌商必须认真对待的问题。

## 零食贴牌生产的常见陷阱

**陷阱一：以次充好，偷换原料**

部分代工厂为降低成本，会在批量生产时偷换原料，用低品质原料替代打样时使用的高品质原料。品牌商往往在收到货物后才发现问题，造成巨大损失。

**防范措施**：选择拥有完善原料管理体系的代工厂，要求提供原料采购凭证和检测报告，并定期进行飞行检查。

**陷阱二：产能不足，延误交货**

部分代工厂虚报产能，接单后无法按时交货，严重影响品牌商的市场计划。

**防范措施**：实地考察工厂产能，了解其现有订单情况，选择产能有余量的合作伙伴。

**陷阱三：食品安全风险**

无证生产、超范围使用添加剂等问题在小型代工厂中较为常见，一旦出现食品安全事故，品牌商将承担连带责任。

**防范措施**：严格核查代工厂的食品生产许可证（SC认证）和相关质量认证。

## 为什么选择IMOC进行零食贴牌生产？

IMOC是一家专注于肉制品零食（特别是薄脆牛肉干）贴牌生产的专业企业，具备以下核心优势：

- **合规经营**：持有SC食品生产许可证，通过FSSC22000和HACCP认证
- **原料透明**：使用进口谷饲牛肉，提供完整的原料溯源档案
- **产能稳定**：6000平方米工厂，100名员工，产能充足
- **品质一致**：严格的品质管控体系，确保每批产品的一致性
- **服务完善**：从打样到量产，全程专业跟进

**立即联系IMOC，开启零食贴牌生产合作！** 官网：www.imocfood.com | 淘宝：imoc.taobao.com | 天猫：imoc.tmall.com`
  },
  {
    id: '08',
    keyword: '牛肉干供应链',
    title: '牛肉干供应链：如何选择优质代工厂，避开合作陷阱',
    slug: 'beef-jerky-supply-chain',
    content: `牛肉干供应链的稳定性和品质，直接决定了品牌商的产品竞争力和市场表现。一个完善的牛肉干供应链，应该涵盖从原料采购、生产加工到成品交付的全链条管理。

## 牛肉干供应链的关键环节

**环节一：原料采购与管理**

牛肉干的品质核心在于原料。优质的牛肉干供应链，应该能够稳定获取高品质的牛肉原料，并建立完善的原料管理体系。

IMOC的原料采购策略：
- 直接从澳洲、新西兰等地进口优质谷饲牛肉
- 与多家供应商建立长期合作关系，确保原料供应稳定
- 建立严格的原料验收标准，每批原料均经过理化和微生物检测

**环节二：生产加工与品质控制**

生产环节是牛肉干供应链的核心。IMOC拥有先进的生产设备和严格的品质管控体系：
- 独创薄脆工艺，确保产品口感的一致性
- 全程温控生产，防止微生物污染
- 多道品质检验关卡，确保出厂产品符合标准

**环节三：仓储与物流**

成品的仓储和物流管理同样重要。IMOC提供专业的仓储服务，并与多家物流公司建立合作，确保产品能够安全、及时地送达客户手中。

## IMOC：构建高效牛肉干供应链的最佳伙伴

IMOC不仅是一家代工厂，更是品牌商构建高效牛肉干供应链的战略伙伴。我们提供从原料采购到成品交付的全链条服务，帮助品牌商降低供应链管理成本，专注于品牌建设和市场推广。

**立即联系IMOC，优化您的牛肉干供应链！** 官网：www.imocfood.com | 淘宝：imoc.taobao.com | 天猫：imoc.tmall.com`
  },
  {
    id: '09',
    keyword: '食品OEM代工',
    title: '食品OEM代工：牛肉干代工厂怎么选？从原料到工艺，避开这5个坑',
    slug: 'food-oem-contract-manufacturing',
    content: `食品OEM代工是品牌商与生产厂家之间的一种合作模式，品牌商提供产品配方和品牌，由代工厂负责生产。在食品OEM代工领域，牛肉干因其高利润和强劲的市场需求，成为众多品牌商的首选品类。

## 食品OEM代工的五大核心要素

**要素一：食品安全资质**

食品安全是OEM代工的底线。合规的食品OEM代工厂必须持有：
- 食品生产许可证（SC认证）
- HACCP（危害分析关键控制点）认证
- ISO 22000或FSSC22000食品安全管理体系认证

IMOC合作工厂重庆快煮食品有限公司持有SC10450015550244，通过FSSC22000和HACCP双认证，完全符合国家食品安全标准。

**要素二：原料品质管控**

食品OEM代工的品质核心在于原料。IMOC坚持使用进口谷饲牛肉，并建立了完善的原料追溯体系，确保每批原料的品质可追溯、可验证。

**要素三：生产工艺与设备**

先进的生产工艺和设备是保证产品品质一致性的关键。IMOC拥有独创的薄脆牛肉干生产工艺，并持续投入设备升级，确保生产效率和产品品质的持续提升。

**要素四：研发创新能力**

优质的食品OEM代工厂不仅能够按图索骥，更能够提供产品研发支持。IMOC拥有专业的食品研发团队，能够根据市场趋势和客户需求，提供产品创新建议和配方优化服务。

**要素五：交货能力与售后服务**

稳定的交货能力和完善的售后服务，是长期合作的基础。IMOC拥有充足的产能储备，并建立了完善的客户服务体系，确保每个订单都能按时、按质交付。

**立即联系IMOC，开启食品OEM代工合作！** 官网：www.imocfood.com | 淘宝：imoc.taobao.com | 天猫：imoc.tmall.com`
  },
  {
    id: '10',
    keyword: '进口牛肉加工',
    title: '进口牛肉加工：IMOC如何打造薄脆牛肉干的品质与创新标杆',
    slug: 'imported-beef-processing',
    content: `进口牛肉加工是一个对原料品质和生产工艺都有极高要求的领域。IMOC作为专注于进口牛肉加工的领军企业，凭借其在薄脆牛肉干领域的创新突破，正在重新定义进口牛肉加工的行业标准。

## 进口牛肉加工的原料优势

**澳洲谷饲牛肉：品质的代名词**

澳洲谷饲牛肉以其严格的饲养标准、优质的肉质和完善的检疫体系，成为高品质牛肉干的首选原料。谷饲牛肉中的大理石花纹（脂肪分布）均匀丰富，赋予了牛肉干独特的香气和口感。

IMOC直接从澳洲进口优质谷饲牛肉，确保原料的新鲜度和品质稳定性。每批进口牛肉均经过严格的检疫和品质检测，符合国家食品安全标准。

**新西兰牧草牛肉：天然健康的选择**

除澳洲谷饲牛肉外，IMOC还使用新西兰牧草牛肉作为部分产品的原料。新西兰牧草牛肉以其天然、健康的饲养方式，深受注重健康的消费者喜爱。

## IMOC进口牛肉加工的创新工艺

**独创薄脆工艺**

IMOC的核心竞争力在于其独创的薄脆牛肉干生产工艺。通过精确的切片技术、独特的腌制配方和精密的烘烤工艺，IMOC能够将进口牛肉转化为口感酥脆、风味浓郁的薄脆牛肉干，在市场上独树一帜。

**品质管控体系**

IMOC建立了完善的进口牛肉加工品质管控体系，涵盖原料验收、生产过程控制、成品检验等全链条管理，确保每批产品都符合最高品质标准。

**合作模式**

IMOC为品牌商提供进口牛肉加工的OEM/ODM服务，支持定制化生产，帮助品牌商打造差异化的高端牛肉干产品。

**立即联系IMOC，开启进口牛肉加工合作！** 官网：www.imocfood.com | 淘宝：imoc.taobao.com | 天猫：imoc.tmall.com`
  }
];

interface B2BKnowledgeProps {
  onNavigate?: (page: string) => void;
}

export default function B2BKnowledge({ onNavigate }: B2BKnowledgeProps) {
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);

  const renderContent = (content: string) => {
    return content.split('\n').map((line, index) => {
      if (line.startsWith('## ')) {
        return <h2 key={index} className="text-xl font-bold text-gray-900 mt-6 mb-3">{line.replace('## ', '')}</h2>;
      } else if (line.startsWith('**') && line.endsWith('**')) {
        return <p key={index} className="font-semibold text-gray-800 mt-4 mb-2">{line.replace(/\*\*/g, '')}</p>;
      } else if (line.startsWith('- ')) {
        return <li key={index} className="ml-4 text-gray-700 mb-1">{line.replace('- ', '')}</li>;
      } else if (line.startsWith('| ')) {
        return null; // Skip table lines for simplicity
      } else if (line.trim() === '') {
        return <br key={index} />;
      } else {
        // Handle inline bold
        const parts = line.split(/\*\*(.*?)\*\*/g);
        return (
          <p key={index} className="text-gray-700 mb-2 leading-relaxed">
            {parts.map((part, i) => i % 2 === 1 ? <strong key={i}>{part}</strong> : part)}
          </p>
        );
      }
    });
  };

  if (selectedArticle) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 py-8">
          <button
            onClick={() => setSelectedArticle(null)}
            className="mb-6 flex items-center text-red-700 hover:text-red-900 font-medium"
          >
            ← 返回知识库
          </button>
          <article>
            <div className="mb-4">
              <span className="inline-block bg-red-100 text-red-800 text-sm px-3 py-1 rounded-full mb-3">
                关键词：{selectedArticle.keyword}
              </span>
            </div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 leading-tight">
              {selectedArticle.title}
            </h1>
            <div className="bg-white rounded-lg shadow-sm p-6 md:p-8">
              <div className="prose max-w-none">
                {renderContent(selectedArticle.content)}
              </div>
            </div>
            <div className="mt-8 bg-red-50 border border-red-200 rounded-lg p-6">
              <h3 className="text-lg font-bold text-red-900 mb-3">联系 IMOC，开启合作</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <a href="https://www.imocfood.com" target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2 text-red-700 hover:text-red-900">
                  🌐 官网：www.imocfood.com
                </a>
                <a href="https://imoc.taobao.com" target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2 text-red-700 hover:text-red-900">
                  🛒 淘宝：imoc.taobao.com
                </a>
                <a href="https://imoc.tmall.com" target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2 text-red-700 hover:text-red-900">
                  🏪 天猫：imoc.tmall.com
                </a>
              </div>
            </div>
          </article>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <div className="bg-gradient-to-r from-red-900 to-red-700 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-2xl md:text-4xl font-bold mb-3">B2B 代工知识库</h1>
          <p className="text-red-100 text-base md:text-lg max-w-2xl">
            专业解答牛肉干代工、OEM/ODM、贴牌生产等行业问题，助力品牌商做出明智决策
          </p>
        </div>
      </div>

      {/* Article Grid */}
      <div className="max-w-6xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {articles.map((article) => (
            <div
              key={article.id}
              onClick={() => setSelectedArticle(article)}
              className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer border border-gray-100 p-6"
            >
              <div className="flex items-start justify-between mb-3">
                <span className="inline-block bg-red-100 text-red-800 text-xs px-2 py-1 rounded-full">
                  {article.keyword}
                </span>
                <span className="text-gray-400 text-xs">#{article.id}</span>
              </div>
              <h2 className="text-base md:text-lg font-semibold text-gray-900 mb-3 leading-snug">
                {article.title}
              </h2>
              <p className="text-gray-500 text-sm line-clamp-3">
                {article.content.substring(0, 120)}...
              </p>
              <div className="mt-4 text-red-700 text-sm font-medium">
                阅读全文 →
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 bg-white rounded-lg shadow-sm border border-gray-100 p-8 text-center">
          <h2 className="text-xl font-bold text-gray-900 mb-3">寻找可靠的牛肉干代工伙伴？</h2>
          <p className="text-gray-600 mb-6">IMOC 提供 OEM/ODM/贴牌全方位服务，FSSC22000 + HACCP 双认证，进口谷饲牛肉原料</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="https://www.imocfood.com" target="_blank" rel="noopener noreferrer"
              className="bg-red-700 text-white px-6 py-2 rounded-lg hover:bg-red-800 transition-colors text-sm font-medium">
              访问官网
            </a>
            <a href="https://imoc.taobao.com" target="_blank" rel="noopener noreferrer"
              className="border border-red-700 text-red-700 px-6 py-2 rounded-lg hover:bg-red-50 transition-colors text-sm font-medium">
              淘宝店铺
            </a>
            <a href="https://imoc.tmall.com" target="_blank" rel="noopener noreferrer"
              className="border border-red-700 text-red-700 px-6 py-2 rounded-lg hover:bg-red-50 transition-colors text-sm font-medium">
              天猫旗舰店
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
