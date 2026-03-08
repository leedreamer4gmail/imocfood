/**
 * IMOC Food - Home Page
 * 
 * Design Philosophy: 现代专业 + 自然温暖
 * - 深绿色主色 (#1B5E3F) 代表自然、健康、可持续
 * - 温暖米色 (#F5E6D3) 代表食品的自然属性
 * - 金色强调 (#D4A574) 代表品质、信任
 * - 大量白空间和有机曲线分隔
 * - Playfair Display 用于标题（优雅高端）
 * - Inter 用于正文（清晰国际化）
 */

import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Leaf } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-border z-50">
        <div className="container flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <Leaf className="w-6 h-6 text-primary" />
            <span className="text-xl font-bold text-primary" style={{ fontFamily: "Playfair Display, serif" }}>
              IMOC
            </span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#about" className="text-foreground hover:text-primary transition-colors">
              关于我们
            </a>
            <a href="#products" className="text-foreground hover:text-primary transition-colors">
              产品
            </a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors">
              联系方式
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-b from-secondary/20 to-transparent">
        <div className="container max-w-4xl mx-auto text-center">
          <h1 
            className="text-5xl md:text-6xl font-bold text-primary mb-6 leading-tight"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            International Meat Open Resource Community
          </h1>
          <p className="text-xl text-foreground/80 mb-8 leading-relaxed">
            致力于推动全球肉类产业的开放、透明和可持续发展。
            我们连接生产者、消费者和创新者，共同打造更美好的未来。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              了解更多
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-primary text-primary hover:bg-primary/10"
            >
              联系我们
            </Button>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-20" />

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="container max-w-4xl mx-auto">
          <h2 
            className="text-4xl font-bold text-primary mb-8 text-center"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            关于 IMOC
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-4">
              <p className="text-lg text-foreground/80 leading-relaxed">
                IMOC（国际肉类开放资源社区）是一个致力于推动全球肉类产业透明化、可持续化的国际平台。
              </p>
              <p className="text-lg text-foreground/80 leading-relaxed">
                我们相信通过开放的资源共享、知识交流和最佳实践推广，能够帮助全球肉类产业实现更高的标准和更好的未来。
              </p>
              <p className="text-lg text-foreground/80 leading-relaxed">
                从生产到消费，我们连接每一个环节，确保透明、诚实和可持续的发展。
              </p>
            </div>
            <div className="bg-card rounded-lg p-8 border border-border">
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Leaf className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">可持续发展</h3>
                    <p className="text-foreground/70 text-sm">推动环保和可持续的肉类生产方式</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Leaf className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">透明协作</h3>
                    <p className="text-foreground/70 text-sm">建立开放的知识共享平台</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Leaf className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">全球连接</h3>
                    <p className="text-foreground/70 text-sm">连接全球生产者、消费者和创新者</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="h-1 bg-gradient-to-r from-transparent via-accent to-transparent opacity-20" />

      {/* Products Section */}
      <section id="products" className="py-20 px-4 bg-secondary/10">
        <div className="container max-w-5xl mx-auto">
          <h2 
            className="text-4xl font-bold text-primary mb-12 text-center"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            我们的产品与服务
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Product Card 1 */}
            <div className="bg-white rounded-lg border border-border overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-40 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                <Leaf className="w-16 h-16 text-primary opacity-50" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-primary mb-3" style={{ fontFamily: "Playfair Display, serif" }}>
                  知识平台
                </h3>
                <p className="text-foreground/70 mb-4">
                  汇集全球肉类产业的最佳实践、研究报告和行业标准
                </p>
                <Button variant="ghost" className="text-primary hover:bg-primary/10">
                  了解更多 →
                </Button>
              </div>
            </div>

            {/* Product Card 2 */}
            <div className="bg-white rounded-lg border border-border overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-40 bg-gradient-to-br from-accent/20 to-primary/20 flex items-center justify-center">
                <Leaf className="w-16 h-16 text-accent opacity-50" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-primary mb-3" style={{ fontFamily: "Playfair Display, serif" }}>
                  社区网络
                </h3>
                <p className="text-foreground/70 mb-4">
                  连接全球生产者、消费者和专业人士的开放社区
                </p>
                <Button variant="ghost" className="text-primary hover:bg-primary/10">
                  了解更多 →
                </Button>
              </div>
            </div>

            {/* Product Card 3 */}
            <div className="bg-white rounded-lg border border-border overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-40 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                <Leaf className="w-16 h-16 text-primary opacity-50" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-primary mb-3" style={{ fontFamily: "Playfair Display, serif" }}>
                  认证体系
                </h3>
                <p className="text-foreground/70 mb-4">
                  建立透明、可信的可持续发展认证标准
                </p>
                <Button variant="ghost" className="text-primary hover:bg-primary/10">
                  了解更多 →
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-20" />

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="container max-w-3xl mx-auto">
          <h2 
            className="text-4xl font-bold text-primary mb-12 text-center"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            联系我们
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">邮箱</h3>
              <p className="text-foreground/70">
                <a href="mailto:info@imocfood.com" className="hover:text-primary transition-colors">
                  info@imocfood.com
                </a>
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                <Phone className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">电话</h3>
              <p className="text-foreground/70">
                <a href="tel:+1234567890" className="hover:text-primary transition-colors">
                  +1 (234) 567-890
                </a>
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">地址</h3>
              <p className="text-foreground/70">
                全球总部<br />
                待定
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-card rounded-lg p-8 border border-border text-center">
            <h3 className="text-2xl font-bold text-primary mb-4" style={{ fontFamily: "Playfair Display, serif" }}>
              加入我们的社区
            </h3>
            <p className="text-foreground/80 mb-6">
              成为全球肉类产业可持续发展的一部分
            </p>
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
              立即加入
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground/5 border-t border-border py-8 px-4">
        <div className="container max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <Leaf className="w-5 h-5 text-primary" />
              <span className="font-semibold text-primary" style={{ fontFamily: "Playfair Display, serif" }}>
                IMOC Food
              </span>
            </div>
            <p className="text-foreground/60 text-sm">
              © 2026 International Meat Open Resource Community. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
