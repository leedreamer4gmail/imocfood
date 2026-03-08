import React, { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Header */}
      <header className="fixed top-0 left-0 right-0 bg-primary text-white z-50 shadow-lg">
        <div className="container flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img 
              src="https://d2xsxph8kpxj0f.cloudfront.net/85413465/Dn3NKGa7uppqoDB4SUPuXq/logo_59d46cac.jpg" 
              alt="IMOC Logo"
              className="h-12 w-12 rounded-full object-cover"
            />
            <div className="hidden sm:block">
              <h1 className="text-lg font-bold">IMOC</h1>
              <p className="text-xs text-secondary">Open-source Community</p>
            </div>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-8">
            <button 
              onClick={() => scrollToSection('story')}
              className="hover:text-secondary transition-colors"
            >
              品牌故事
            </button>
            <button 
              onClick={() => scrollToSection('products')}
              className="hover:text-secondary transition-colors"
            >
              产品
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="hover:text-secondary transition-colors"
            >
              服务
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="hover:text-secondary transition-colors"
            >
              联系
            </button>
          </nav>

          {/* Contact Button */}
          <button 
            onClick={() => scrollToSection('contact')}
            className="hidden md:block btn btn-secondary"
          >
            联系我们
          </button>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-white"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-primary border-t border-secondary">
            <div className="container py-4 flex flex-col gap-4">
              <button 
                onClick={() => scrollToSection('story')}
                className="text-left hover:text-secondary transition-colors"
              >
                品牌故事
              </button>
              <button 
                onClick={() => scrollToSection('products')}
                className="text-left hover:text-secondary transition-colors"
              >
                产品
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="text-left hover:text-secondary transition-colors"
              >
                服务
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-left hover:text-secondary transition-colors"
              >
                联系
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-32 relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage: 'url(https://d2xsxph8kpxj0f.cloudfront.net/85413465/Dn3NKGa7uppqoDB4SUPuXq/左侧墙s_2ae32794.jpg)',
            backgroundPosition: 'center'
          }}
        />
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center animate-slide-up">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-primary">
              国际开源肉制品联盟
            </h1>
            <p className="text-xl md:text-2xl text-secondary font-semibold mb-4">
              International Meat Open-source Community
            </p>
            <div className="section-divider mx-auto mb-8" />
            <p className="text-lg md:text-xl text-dark mb-8 leading-relaxed">
              无添加 · 健康 · 天然 · 创新
            </p>
            <p className="text-base md:text-lg text-dark mb-12 leading-relaxed max-w-2xl mx-auto">
              我们相信，最好的肉制品来自于对品质的执着和对创新的拥抱。IMOC 汇聚全球肉制品生产者，共同推动行业的开源化、透明化和可持续发展。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => scrollToSection('products')}
                className="btn btn-primary"
              >
                探索我们的产品
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="btn btn-outline"
              >
                加入联盟
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Story Section */}
      <section id="story" className="section bg-light">
        <div className="container">
          <h2 className="section-title">我们的故事</h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="animate-slide-in-left">
              <h3 className="text-3xl font-bold mb-6 text-primary">品牌使命</h3>
              <p className="text-lg mb-4 text-dark">
                我们是一个国际化的开源肉制品联盟，致力于推动全球肉制品行业的创新与透明化。我们相信，通过开放合作、技术共享和品质坚守，可以为消费者提供更健康、更安全、更创新的肉制品。
              </p>
              <p className="text-lg text-dark">
                我们的产品不仅是食品，更是对健康生活的承诺。每一件产品都代表着我们对品质的执着和对创新的拥抱。
              </p>
            </div>
            <div className="animate-slide-in-right">
              <img 
                src="https://d2xsxph8kpxj0f.cloudfront.net/85413465/Dn3NKGa7uppqoDB4SUPuXq/宣传1_1c895aa8.jpg"
                alt="Brand Story"
                className="rounded-lg shadow-lg w-full h-auto object-cover"
              />
            </div>
          </div>

          <div className="bg-white rounded-lg p-8 md:p-12 shadow-md mb-16">
            <h3 className="text-3xl font-bold mb-8 text-primary text-center">核心价值</h3>
            <div className="grid md:grid-cols-5 gap-6">
              {[
                { title: '无添加', desc: '拒绝人工添加剂，坚持天然食材' },
                { title: '健康', desc: '营养科学配方，满足现代健康饮食' },
                { title: '天然', desc: '尊重食材本质，保留原汁原味' },
                { title: '创新', desc: '拥抱现代生产理念，不断优化工艺' },
                { title: '开放', desc: '欢迎全球合作，共建生态' }
              ].map((value, idx) => (
                <div key={idx} className="text-center p-4 hover:bg-light rounded-lg transition-colors">
                  <h4 className="text-xl font-bold text-secondary mb-2">{value.title}</h4>
                  <p className="text-sm text-dark">{value.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left order-2 md:order-1">
              <img 
                src="https://d2xsxph8kpxj0f.cloudfront.net/85413465/Dn3NKGa7uppqoDB4SUPuXq/宣传2_c4f7242c.jpg"
                alt="Production Bases"
                className="rounded-lg shadow-lg w-full h-auto object-cover"
              />
            </div>
            <div className="animate-slide-in-right order-1 md:order-2">
              <h3 className="text-3xl font-bold mb-6 text-primary">生产基地</h3>
              <p className="text-lg mb-6 text-dark">
                我们在中国拥有三个现代化生产基地，分别位于广州（总部）、南宁和重庆，采用国际先进的生产工艺和质量管理体系，确保每一件产品都符合最高标准。
              </p>
              <div className="space-y-4">
                {[
                  { city: '广州', role: '总部' },
                  { city: '南宁', role: '生产基地' },
                  { city: '重庆', role: '生产基地' }
                ].map((base, idx) => (
                  <div key={idx} className="flex items-center gap-4">
                    <div className="w-3 h-3 bg-secondary rounded-full" />
                    <span className="text-lg text-dark"><strong>{base.city}</strong> - {base.role}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="section bg-white">
        <div className="container">
          <h2 className="section-title">我们的产品</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: '牛肉干',
                image: 'https://d2xsxph8kpxj0f.cloudfront.net/85413465/Dn3NKGa7uppqoDB4SUPuXq/牛肉干_b2c53b7a.jpg',
                desc: '精选优质牛肉，采用传统工艺与现代技术相结合，每一口都能感受到肉质的鲜嫩和天然的香味。',
                features: ['优质牛肉精选', '传统+现代工艺', '无添加防腐剂', '高蛋白、低脂肪']
              },
              {
                name: '猪肉干',
                image: 'https://d2xsxph8kpxj0f.cloudfront.net/85413465/Dn3NKGa7uppqoDB4SUPuXq/猪肉干_2c50d54a.jpg',
                desc: '选用新鲜猪肉，经过精心腌制和烘烤，呈现出独特的焦香和鲜嫩口感。天然调味，不含人工香料。',
                features: ['新鲜猪肉精选', '精心腌制烘烤', '天然调味', '全家皆宜']
              },
              {
                name: '鸡肉干',
                image: 'https://d2xsxph8kpxj0f.cloudfront.net/85413465/Dn3NKGa7uppqoDB4SUPuXq/鸡肉干_3d206ea4.jpg',
                desc: '采用优质鸡肉，低脂肪高蛋白，经过精细加工，口感嫩滑，营养丰富。是健康饮食的理想选择。',
                features: ['优质鸡肉精选', '低脂肪高蛋白', '营养丰富', '运动补给首选']
              }
            ].map((product, idx) => (
              <div key={idx} className="card card-hover group">
                <div className="overflow-hidden rounded-lg mb-6 h-64">
                  <img 
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-primary">{product.name}</h3>
                <p className="text-dark mb-6">{product.desc}</p>
                <div className="space-y-2">
                  {product.features.map((feature, fidx) => (
                    <div key={fidx} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-secondary rounded-full" />
                      <span className="text-sm text-dark">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="section bg-light">
        <div className="container">
          <h2 className="section-title">我们的服务</h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            {[
              {
                title: '零售服务',
                desc: '我们通过多渠道零售模式，让消费者轻松获得高品质肉制品。无论是线上电商还是线下实体店，我们都致力于提供最便捷的购物体验和最优质的产品。',
                features: ['线上电商渠道', '线下实体合作', '品质保证', '便捷配送'],
                icon: '🛒'
              },
              {
                title: 'OEM 加工服务',
                desc: '我们为全球合作伙伴提供专业的 OEM 加工服务。无论是定制配方、小批量生产还是大规模代工，我们都能根据客户需求提供完整的解决方案。',
                features: ['定制配方开发', '灵活生产规模', '国际质量标准', '专业技术支持'],
                icon: '🏭'
              }
            ].map((service, idx) => (
              <div key={idx} className="bg-white rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow">
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold mb-4 text-primary">{service.title}</h3>
                <p className="text-dark mb-6">{service.desc}</p>
                <div className="space-y-3">
                  {service.features.map((feature, fidx) => (
                    <div key={fidx} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-secondary rounded-full" />
                      <span className="text-dark">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="section bg-primary text-white">
        <div className="container text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">加入 IMOC 联盟</h2>
          <div className="section-divider bg-secondary mx-auto mb-8" />
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto leading-relaxed">
            我们热烈欢迎全球肉制品生产者、经销商和合作伙伴加入 IMOC 联盟。无论你是初创企业还是行业领导者，我们都为你提供开放的平台、专业的支持和无限的合作机会。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => scrollToSection('contact')}
              className="btn bg-secondary text-primary hover:bg-opacity-90"
            >
              联系我们
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="btn border-2 border-white text-white hover:bg-white hover:text-primary"
            >
              了解更多
            </button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section bg-white">
        <div className="container">
          <h2 className="section-title">联系我们</h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-primary">联系方式</h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">总部地址</p>
                    <p className="text-lg text-dark font-semibold">广州</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">生产基地</p>
                    <p className="text-lg text-dark font-semibold">南宁、重庆</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">邮箱</p>
                    <p className="text-lg text-dark font-semibold">contact@imocfood.com</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">微信</p>
                    <p className="text-lg text-dark font-semibold">IMOC_Official</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4 text-primary">为什么选择我们</h3>
                <ul className="space-y-3">
                  {[
                    '开放的合作生态',
                    '专业的技术支持',
                    '全球的市场机会',
                    '年轻化的团队',
                    '创新的生产理念'
                  ].map((reason, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-dark">
                      <div className="w-2 h-2 bg-secondary rounded-full" />
                      {reason}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="bg-light rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-6 text-primary">发送消息</h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-dark mb-2">姓名</label>
                  <input 
                    type="text"
                    className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
                    placeholder="请输入你的姓名"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-dark mb-2">邮箱</label>
                  <input 
                    type="email"
                    className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
                    placeholder="请输入你的邮箱"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-dark mb-2">公司</label>
                  <input 
                    type="text"
                    className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
                    placeholder="请输入你的公司名称"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-dark mb-2">消息</label>
                  <textarea 
                    rows={4}
                    className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
                    placeholder="请输入你的消息"
                  />
                </div>
                <button type="submit" className="w-full btn btn-primary">
                  发送消息
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-white py-12">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-bold mb-4">关于 IMOC</h4>
              <p className="text-sm text-gray-300">国际开源肉制品联盟，致力于推动全球肉制品行业的创新与透明化。</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">快速链接</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#story" className="hover:text-secondary transition-colors">品牌故事</a></li>
                <li><a href="#products" className="hover:text-secondary transition-colors">产品</a></li>
                <li><a href="#services" className="hover:text-secondary transition-colors">服务</a></li>
                <li><a href="#contact" className="hover:text-secondary transition-colors">联系</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">产品</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#products" className="hover:text-secondary transition-colors">牛肉干</a></li>
                <li><a href="#products" className="hover:text-secondary transition-colors">猪肉干</a></li>
                <li><a href="#products" className="hover:text-secondary transition-colors">鸡肉干</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">联系方式</h4>
              <ul className="space-y-2 text-sm">
                <li>📧 contact@imocfood.com</li>
                <li>📍 广州（总部）</li>
                <li>🌐 www.imocfood.com</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-8 text-center text-sm text-gray-300">
            <p>&copy; 2026 IMOC - International Meat Open-source Community. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
