import Image from 'next/image';
import React from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

function BeforeAfter() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <CardHeader className="text-center pb-8">
        <CardTitle className="text-3xl font-bold text-gray-900">
          Before & After Results
        </CardTitle>
      </CardHeader>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card className="overflow-hidden border border-gray-200">
          <div className="aspect-video relative">
            <Image
              src="/BeforeAfter1.jpeg"
              alt="Before hair transplant"
              fill
              className="object-cover"
            />
          </div>
          <CardContent className="p-6 text-center">
            <CardDescription className="text-gray-700">
              FUE Hair Transplant • 12 Months Result
            </CardDescription>
          </CardContent>
        </Card>

        <Card className="overflow-hidden border border-gray-200">
          <div className="aspect-video relative">
            <Image
              src="/BeforeAfter2.jpeg"
              alt="After hair transplant"
              fill
              className="object-cover"
            />
          </div>
          <CardContent className="p-6 text-center">
            <CardDescription className="text-gray-700">
              DHI Technique • 8 Months Progress
            </CardDescription>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

export default BeforeAfter