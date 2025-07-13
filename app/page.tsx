import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { MobileApp } from "@/components/mobile-app"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      <div className="relative z-10">
        <Header />
        <Hero />
        <Services />
        <MobileApp />
        <Contact />
        <Footer />
      </div>
    </main>
  )
}
