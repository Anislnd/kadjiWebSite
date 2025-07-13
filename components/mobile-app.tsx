import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Smartphone, GraduationCap, Users, Building2, CheckCircle } from "lucide-react"

export function MobileApp() {
  const userProfiles = [
    {
      icon: GraduationCap,
      title: "Student Profile",
      description: "Complete learning experience for students",
      features: [
        "Browse available training programs",
        "Register online for courses",
        "Follow courses remotely",
        "Automatically receive certificates",
        "Upload CV to attract hiring companies",
      ],
    },
    {
      icon: Users,
      title: "Professor Profile",
      description: "Platform for expert trainers and educators",
      features: [
        "Submit CV for evaluation",
        "Automatic platform access after approval",
        "Provide training courses online",
        "Manage student progress",
        "Access teaching resources",
      ],
    },
    {
      icon: Building2,
      title: "Company Profile",
      description: "Corporate training and recruitment solutions",
      features: [
        "Register employees for training programs",
        "Access graduate directory for recruitment",
        "Track employee progress",
        "Custom training requests",
        "Bulk enrollment capabilities",
      ],
    },
  ]

  return (
    <section id="app" className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center">
              <Smartphone className="h-8 w-8 text-white" />
            </div>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Kadji Academy Mobile App</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Experience seamless learning and training management with our professional mobile application. Available for
            Android with three specialized user profiles.
          </p>

          <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-3" asChild>
            <a
              href="https://archive.org/download/kadji-business-academy/kadji-business-academy.apk"
              download
            >
              📥 Download the Kadji Academy App
            </a>
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {userProfiles.map((profile, index) => (
            <Card key={index} className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardHeader className="text-center pb-4">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <profile.icon className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-xl mb-2">{profile.title}</CardTitle>
                <CardDescription className="text-base">{profile.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {profile.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-sm text-gray-700">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* App Features Highlight */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Why Choose Our Mobile App?</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span>Professional blue & white theme</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span>Three specialized user profiles</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span>Seamless online learning experience</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span>Automatic certificate generation</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span>Direct recruitment opportunities</span>
                </li>
              </ul>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-8 text-white">
                <Smartphone className="h-24 w-24 mx-auto mb-4 opacity-80" />
                <h4 className="text-xl font-bold mb-2">Available Now</h4>
                <p className="mb-4 opacity-90">Download for Android devices</p>
                <Button 
                  variant="secondary" 
                  size="lg" 
                  className="bg-white text-blue-600 hover:bg-gray-100 w-full sm:w-auto text-sm sm:text-base px-4 sm:px-6" 
                  asChild
                >
                  <a
                    href="https://archive.org/download/kadji-business-academy/kadji-business-academy.apk"
                    download
                  >
                    📥 Download the Kadji Academy App
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}