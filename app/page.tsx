import { BreakingTicker } from "@/components/header/BreakingTicker";
import { Header } from "@/components/header/Header";
import { HeroSection } from "@/components/hero/HeroSection";
import { LatestNews } from "@/components/news/LatestNews";
import { NewsletterSection } from "@/components/newsletter/NewsletterSection";
import { EditorialSection } from "@/components/editorials/EditorialSection";
import { VideoFeature } from "@/components/video/VideoFeature";
import { Footer } from "@/components/footer/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <BreakingTicker />

      <main>
        <div className="container">
          <HeroSection />
          <LatestNews />
          <NewsletterSection />
          <EditorialSection />
          <VideoFeature />
        </div>
      </main>

      <Footer />
    </>
  );
}
