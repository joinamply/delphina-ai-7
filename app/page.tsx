import { AnnouncementBar } from "@/components/home/announcement-bar"
import { Navbar } from "@/components/home/navbar"
import { Hero } from "@/components/home/hero"
import { LogoMarquee } from "@/components/home/logo-marquee"
import { FeatureSection } from "@/components/home/feature-section"
import { TabsSection } from "@/components/home/tabs-section"
import { StatsSection } from "@/components/home/stats-section"
import { Testimonials } from "@/components/home/testimonials"
import { CTA } from "@/components/home/cta"
import { Footer } from "@/components/home/footer"
import fs from "fs/promises"
import path from "path"

async function getData() {
  const filePath = path.join(process.cwd(), "content/pages/index.json")
  try {
    const fileContent = await fs.readFile(filePath, "utf8")
    return JSON.parse(fileContent)
  } catch (error) {
    console.error("Error reading content file:", error)
    return {}
  }
}

export default async function Home() {
  const data = await getData()
  return (
    <div className="flex flex-col min-h-screen">
      <AnnouncementBar />
      <Navbar />
      <Hero heading={data.title} />
      <LogoMarquee />

      {/* Feature 1: Prototype */}
      <FeatureSection
        badge="Prototype"
        title="Prototype new ideas in minutes"
        description="Don't waste time on infrastructure. Spin up a new model environment with one click and start experimenting immediately."
        accentColor="bg-[#D956A8]"
      />

      {/* Feature 2: Collaborate */}
      <FeatureSection
        badge="Collaborate"
        title="Make smart models together"
        description="Real-time collaboration for data science teams. Share notebooks, version control datasets, and track experiments."
        imageSide="left"
        accentColor="bg-[#6EE7B7]"
        className="bg-[#FFFDF7]"
      />

      {/* Feature 3: Deploy */}
      <FeatureSection
        badge="Deploy"
        title="Push models to production"
        description="Automated CI/CD pipelines for your ML models. Deploy to Kubernetes with a single git push."
        accentColor="bg-[#C4B5FD]"
      />

      {/* Feature 4: Deploy instant */}
      <FeatureSection
        badge="Instant"
        title="Deploy instantly"
        description="No more waiting for DevOps. Delphina handles the scaling and monitoring for you."
        imageSide="left"
        accentColor="bg-[#FDA4AF]"
      />

      <TabsSection />

      <StatsSection />

      {/* Feature 5: Security (Extra feature from list) */}
      <FeatureSection
        badge="Security"
        title="Beyond firewall"
        description="Enterprise grade security with VPC peering, SSO, and RBAC. Your data never leaves your environment."
        imageSide="left"
        accentColor="bg-[#1E1035]"
      />

      <div className="py-12 bg-muted/20">
        <LogoMarquee /> {/* Reusing logo marquee for 'Logos section' */}
      </div>

      {/* Recent Blog Posts (Placeholder for now as no blog component yet) */}
      <FeatureSection
        badge="Blog"
        title="Explore our latest insights"
        description="Read about the latest trends in Generative AI and Data Science from our engineering team."
        buttonText="Read the blog"
        accentColor="bg-[#F5D0FE]"
      />

      <Testimonials />

      <CTA />

      <Footer />
    </div>
  )
}
