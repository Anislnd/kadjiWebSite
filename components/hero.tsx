import { Button } from "@/components/ui/button"
import { GraduationCap, Award, Users } from "lucide-react"

export function Hero() {
  return (
    <section id="home" className="py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
            Kadji Business Consulting
            <span className="block text-blue-600">Training Academy</span>
          </h1>

          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            A highly qualified vocational training school based in Bab Ezzouar, Algiers. We deliver certified
            professional training in administrative, cybersecurity, and IT fields with custom programs for continuing
            professional education.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              <GraduationCap className="mr-2 h-5 w-5" />
              Explore Programs
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a
                href="https://archive.org/download/kadji-business-academy_202507/kadji-business-academy.apk"
                download
              >
                📥 Download the Kadji Academy App
              </a>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <GraduationCap className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">500+</h3>
              <p className="text-gray-600">Certified Graduates</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">15+</h3>
              <p className="text-gray-600">Training Programs</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">50+</h3>
              <p className="text-gray-600">Expert Trainers</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
