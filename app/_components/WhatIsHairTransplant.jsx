"use client"
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, Camera, Calendar, Airplane, Scissors, Heart, PlaneTakeoff } from "lucide-react";
import { motion } from "framer-motion";
import WhatsAppDialog from "./WhatsAppDialogComponent";
import Link from "next/link";
const steps = [
  {
    id: 1,
    title: "Send us your photos",
    short: "Start your hair transplant journey by showing us current pictures of your hair to get a free personalized online consultation plan from Dr. Serkan Aygin.",
    icon: Camera,
  },
  {
    id: 2,
    title: "Planning your operation",
    short: "Dr. Serkan Aygin will customise your plan. After analyzing your hair, he decides the number of grafts, the technique to use. You will also get the hair transplant cost.",
    icon: Scissors,
  },
  {
    id: 3,
    title: "Flight, transfer and hotel",
    short: "After you book your flight, we will take care of your hotel and VIP transportations from-to airport, hotel, clinic.",
    icon: PlaneTakeoff,
  },
  {
    id: 4,
    title: "Hair transplant day",
    short: "We will guide you through all steps of your hair transplant day. Your operation will be performed under local anesthesia and you won’t need to spend the night in the hospital.",
    icon: Check,
  },
  {
    id: 5,
    title: "Postop Care & Hair Wash",
    short: "A wound-dressing is applied and post-op hair wash are carried out gently. To speed up the healing and growth process, PRP, Mesotheapy or Low Level Laser Therapy can be applied.",
    icon: Heart,
  },
  {
    id: 6,
    title: "Follow-up from home",
    short: "Dr. Serkan Aygin’s Clinic offers post-operative care to patients, ensuring continuous support and lasting results via our consultants even after their return home.",
    icon: Calendar,
  },
];

export default function HairTransplantComponent() {
  return (
    <section className="container mx-auto px-4 py-12">
      {/* Article Section */}
      <div className="max-w-3xl mx-auto prose prose-slate mb-12">
        <h2 className="text-2xl font-semibold">What is Hair Transplantation?</h2>
        <p>
          Hair transplantation is a surgical procedure that moves hair follicles from a part of the body
          (usually the back or sides of the scalp) to balding or thinning areas. The goal is to restore a
          natural hairline and increase hair density in areas affected by genetic hair loss, trauma, or
          medical conditions.
        </p>
        <p>
          Modern transplant methods—such as Follicular Unit Extraction (FUE) and Follicular Unit
          Transplantation (FUT)—focus on transplanting individual follicular units to create a natural
          appearance. These techniques minimize scarring and downtime while maximizing graft survival.
        </p>
        <p>
          Candidates undergo a careful assessment to determine donor hair availability, scalp laxity, and the
          most appropriate technique. A personalized plan considers the patient’s age, hair characteristics,
          and desired outcome to ensure realistic expectations.
        </p>
        <p>
          The procedure is typically performed under local anesthesia. Patients can usually return home the
          same day, and many will see initial healing within days and continued hair growth across several
          months. Supportive treatments—like PRP or low-level laser therapy—may be recommended to
          accelerate recovery and improve results.
          Today, hair transplantation offers a reliable solution for those seeking long-term improvements in
          hair density and appearance. With experienced surgeons and thoughtful planning, patients can
          achieve natural-looking, lasting results.
        </p>
      </div>

      {/* Journey Header */}
      <div className="text-center mb-8">
        <h3 className="text-3xl font-bold">Your Hair Transplant Journey in Turkey</h3>
        <p className="text-slate-600 mt-2">From Consultation to Aftercare: A Step-by-Step Guide</p>
      </div>

      {/* Steps Grid */}
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {steps.map((step) => {
          const Icon = step.icon;
          return (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: step.id * 0.05 }}
            >
              <Card className="hover:shadow-lg transition-shadow duration-200">
                <CardHeader className="flex items-start gap-4">
                  <div style={{flexShrink:0}}>
                    <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center">
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>
                  <div>
                    <div className="text-xs uppercase text-slate-500 font-medium">STEP {step.id}</div>
                    <CardTitle className="text-base mt-1">{step.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-600">{step.short}</p>
                  <div className="mt-4 flex items-center justify-between">
                    <Button variant="ghost" size="sm">Learn more</Button>
                    <span className="text-xs text-slate-400">{step.id}</span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </div>

      {/* CTA */}
      <div className="mt-10 text-center">
        <Link href="/getaqueque">
          <Button size="lg">Get Your Free Consultation</Button>
        </Link>
      </div>
      <WhatsAppDialog />
    </section>
  );  
}