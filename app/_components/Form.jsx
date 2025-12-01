"use client"

import { useForm } from "react-hook-form"
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"

export default function HairTransplantForm() {

  const form = useForm()

  const onSubmit = (data) => {
    console.log("HAIR TRANSPLANT FORM SUBMITTED ->", data)
  }

  return (
    <Form {...form}>
      <form 
        onSubmit={form.handleSubmit(onSubmit)} 
        className="space-y-6 p-6 border rounded-xl shadow-sm max-w-lg mx-auto"
      >
        <h2 className="text-xl font-bold text-center">Hair Transplant Patient Form</h2>
        <p className="text-muted-foreground text-center mb-4">
          Fill out the form to request a consultation.
        </p>

        <FormField
          control={form.control}
          name="fullName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Full Name</FormLabel>
              <FormControl>
                <Input placeholder="John Doe" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="age"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Age</FormLabel>
              <FormControl>
                <Input type="number" placeholder="35" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="phone"
          rules={{ required: true }}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Phone Number</FormLabel>
              <FormControl>
                <Input type="tel" placeholder="+1 555 123 4567" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input type="email" placeholder="you@example.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        
        <FormField
          control={form.control}
          name="hairLossType"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Type of Hair Loss</FormLabel>
              <FormControl>
                <Select onValueChange={field.onChange}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select hair loss type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="male-pattern">Male Pattern Baldness</SelectItem>
                    <SelectItem value="female-pattern">Female Pattern Hair Loss</SelectItem>
                    <SelectItem value="alopecia">Alopecia Areata</SelectItem>
                    <SelectItem value="traction">Traction Alopecia</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </FormControl>
              <FormDescription>Helps determine suitable treatment.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Preferred Procedure */}
        <FormField
          control={form.control}
          name="procedure"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Preferred Procedure</FormLabel>
              <FormControl>
                <Select onValueChange={field.onChange}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a procedure" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="FUE">FUE (Follicular Unit Extraction)</SelectItem>
                    <SelectItem value="FUT">FUT (Strip Method)</SelectItem>
                    <SelectItem value="PRP">PRP Treatment</SelectItem>
                    <SelectItem value="beard">Beard / Eyebrow Implant</SelectItem>
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="medical"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Medical History / Medication</FormLabel>
              <FormControl>
                <Textarea placeholder="List medical conditions or medication..." {...field} />
              </FormControl>
              <FormDescription>Important for safety and suitability.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" className="w-full text-lg">Submit Request</Button>
      </form>
    </Form>
  )
}