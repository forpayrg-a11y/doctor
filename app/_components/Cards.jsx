import { 
  Microscope, 
  Users, 
  ShieldCheck, 
  Award, 
  Phone, 
  Languages 
} from 'lucide-react'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

function FeaturesGrid() {
  // Update the features array:
  const features = [
    {
      title: "99% Permanence Rate with UNIQUE FUE®",
      description: "Advanced hair transplant techniques performed by expert surgeons in state-of-the-art facilities.",
      icon: <Microscope className="w-8 h-8 text-blue-600" />
    },
    {
      title: "Expert Team",
      description: "A highly skilled medical team ensures a safe and successful procedure.",
      icon: <Users className="w-8 h-8 text-blue-600" />
    },
    {
      title: "Approved by the Turkish Ministry of Health",
      description: "Our clinic is certified by the Ministry of Health, ensuring the highest hygiene and safety standards.",
      icon: <ShieldCheck className="w-8 h-8 text-blue-600" />
    },
    {
      title: "Certified by the Turkish Ministry of Tourism & Culture",
      description: "Dedicated patient coordinators and professional translators support you every step of the way.",
      icon: <Award className="w-8 h-8 text-blue-600" />
    },
    {
      title: "24/7 Support Line After Hair Transplantation",
      description: "Minimal downtime with our advanced techniques and comprehensive aftercare services.",
      icon: <Phone className="w-8 h-8 text-blue-600" />
    },
    {
      title: "Multilingual Support",
      description: "Our translation team ensures a seamless experience in your preferred language.",
      icon: <Languages className="w-8 h-8 text-blue-600" />
    }
  ]

  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Why Choose Our?
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Experience world-class hair restoration with our comprehensive services and expert care
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <Card key={index} className="border border-gray-200 hover:shadow-lg transition-shadow duration-300">
            <CardHeader className="pb-4">
              <div className="mb-2">{feature.icon}</div>
              <CardTitle className="text-xl font-semibold text-gray-900">
                {feature.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-gray-600 text-base">
                {feature.description}
              </CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

export default FeaturesGrid