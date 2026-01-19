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
  // ID is relative to project root
  const objectId = "content/pages/index.json"

  return (
    <div className="flex flex-col min-h-screen" data-sb-object-id={objectId}>
      <AnnouncementBar />
      <Navbar />
      <Hero
        heading={data.heroHeading}
        subheading={data.heroSubheading}
        primaryCta={data.heroPrimaryCta}
        secondaryCta={data.heroSecondaryCta}
      />
      <LogoMarquee />

      {/* Dynamic Features List */}
      <div data-sb-field-path="features">
        {data.features?.map((feature: any, index: number) => (
          <FeatureSection
            key={index}
            badge={feature.badge}
            title={feature.title}
            description={feature.description}
            imageSide={feature.imageSide}
            buttonText={feature.buttonText}
            data-sb-field-path={`.${index}`}
          // We need to implement a way to map accent colors if dynamic, keeping default for now or adding to model
          // Keeping static colors per existing logic is hard if order changes. 
          // Ideally we add color to the model. For now, let's use a cycling color or default.
          // But wait, the previous code hardcoded colors. Let's just pass the data props for now.
          // We'll add data-sb-object-id to feature section wrapper if possible, but list items are tricky without IDs.
          // Standard way is data-sb-field-path={`features.${index}`} on the component wrapper.
          />
        ))}
      </div>

      {/* If no features in data (fallback to hardcoded for safety? No, removing hardcoded to fully switch) */}

      {/* Keeping TabsSection Separate as it wasn't requested explicitly yet, or we assume it's static structure */}
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
