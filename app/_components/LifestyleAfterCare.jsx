"use client";

import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Sun, Droplet, Bed, Heart } from "lucide-react";

const tips = [
  {
    title: "Protect from Sun",
    desc: "Avoid direct sun exposure on your scalp for a few weeks to prevent damage to new grafts.",
    icon: Sun,
  },
  {
    title: "Keep Scalp Clean",
    desc: "Gently wash your hair as instructed by your surgeon to avoid infections and promote healing.",
    icon: Droplet,
  },
  {
    title: "Proper Rest",
    desc: "Get enough sleep and avoid strenuous activity for the first week to allow optimal healing.",
    icon: Bed,
  },
  {
    title: "Healthy Diet & Care",
    desc: "Maintain a balanced diet, stay hydrated, and follow all post-op instructions for long-lasting results.",
    icon: Heart,
  },
];

export default function LifestyleAfterCare() {
  return (
    <section className="container mx-auto py-12 px-4">
      <h2 className="text-3xl font-bold text-center mb-8">
        Lifestyle & Aftercare Tips
      </h2>

      <div className="grid md:grid-cols-2 gap-6">
        {tips.map((tip, i) => {
          const Icon = tip.icon;
          return (
            <Card key={i} className="hover:shadow-md transition duration-200">
              <CardHeader className="flex items-center gap-4">
                <div className="p-2 rounded-full bg-slate-100">
                  <Icon className="w-6 h-6" />
                </div>
                <CardTitle>{tip.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{tip.desc}</p>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </section>
  );
}