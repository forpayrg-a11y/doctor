"use client";

import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const types = [
  {
    title: "FUE (Follicular Unit Extraction)",
    desc: "A minimally invasive technique where individual grafts are extracted one by one, leaving no linear scar and offering a natural result."
  },
  {
    title: "DHI (Direct Hair Implantation)",
    desc: "Uses a special implanter pen to directly insert hair follicles into the scalp without channel creation — ideal for dense placement."
  },
  {
    title: "Sapphire FUE",
    desc: "A FUE variation using sapphire blades for sharper incisions, faster healing, and more precise graft placement."
  },
  {
    title: "FUT (Strip Method)",
    desc: "A traditional method where a strip of scalp is removed from the donor area — allows high graft count but may leave a linear scar."
  }
];

export default function TypesOfHairTransplant() {
  return (
    <section className="container mx-auto py-12 px-4">
      <h2 className="text-3xl font-bold text-center mb-8">
        Types of Hair Transplant Techniques
      </h2>

      <div className="grid md:grid-cols-2 gap-6">
        {types.map((item, i) => (
          <Card key={i} className="hover:shadow-md transition duration-200">
            <CardHeader>
              <CardTitle className="text-lg">{item.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}