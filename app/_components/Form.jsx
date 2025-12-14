"use client"

import { useState } from "react"
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
  // 1. Form
  const form = useForm({
    defaultValues: {
      fullName: "",
      age: "",
      phone: "",
      email: "",
      hairLossType: "",
      procedure: "",
      medical: "",
      frontPhotoUrl: "",
      leftPhotoUrl: "",
      rightPhotoUrl: "",
    },
  })

  // State'lerdeki "as string | null" gibi TypeScript ifadeleri kaldırıldı
  const [previews, setPreviews] = useState({
    front: null,
    left: null,
    right: null,
  })

  const [uploadingStatus, setUploadingStatus] = useState({
    front: false,
    left: false,
    right: false,
  })

  // Fonksiyon parametrelerindeki tip tanımları (event: React...) kaldırıldı
  async function handleFileUpload(event, side) {
    const file = event.target.files?.[0];
    if (!file) return;

    // A) Lokal önizleme
    const localUrl = URL.createObjectURL(file);
    setPreviews(prev => ({ ...prev, [side]: localUrl }));

    // Yükleniyor...
    setUploadingStatus(prev => ({ ...prev, [side]: true }));
    const currentName = form.getValues("fullName");
    const userName = currentName ? currentName : "isimsiz-misafir";
    try {
      // B) Backend'den Signed URL al
      const res = await fetch("/api/upload", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(
          { fileName: file.name, 
            fileType: file.type,
            userName:userName }),
      });

      if (!res.ok) throw new Error("Upload URL alınamadı");
      
      const { url } = await res.json();

      // C) Dosyayı Google'a yükle
      const uploadRes = await fetch(url, {
        method: "PUT",
        headers: { "Content-Type": file.type },
        body: file,
      });

      if (uploadRes.ok) {
        // D) URL'i temizle ve forma kaydet
        const publicUrl = url.split('?')[0];
        
        if (side === "front") form.setValue("frontPhotoUrl", publicUrl);
        if (side === "left") form.setValue("leftPhotoUrl", publicUrl);
        if (side === "right") form.setValue("rightPhotoUrl", publicUrl);
        
        console.log(`${side} fotoğrafı yüklendi:`, publicUrl);
      } else {
        console.error("Google'a yükleme başarısız oldu.");
        alert("Resim yüklenemedi.");
      }

    } catch (err) {
      console.error("Upload error", err);
      alert("Bir hata oluştu.");
    } finally {
      setUploadingStatus(prev => ({ ...prev, [side]: false }));
    }
  }

  const onSubmit = async (data) => {
    console.log("Sunucuya gidecek veri:", data);

    try {
      const response = await fetch("/api/submit-form", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        alert("Başvurunuz başarıyla alındı!");
        form.reset();
        setPreviews({ front: null, left: null, right: null });
      } else {
        alert("Form gönderilemedi.");
      }
    } catch (error) {
      console.error("Submit error:", error);
    }
  }

  return (
    <Form {...form}>
      <form 
        onSubmit={form.handleSubmit(onSubmit)} 
        className="space-y-6 p-6 border rounded-xl shadow-sm max-w-lg mx-auto bg-white"
      >
        <h2 className="text-xl font-bold text-center">Hair Transplant Patient Form</h2>
        <p className="text-muted-foreground text-center mb-4">
          Fill out the form to request a consultation.
        </p>

        <FormField control={form.control} name="fullName" render={({ field }) => (
          <FormItem>
            <FormLabel>Full Name</FormLabel>
            <FormControl><Input placeholder="John Doe" {...field} /></FormControl>
            <FormMessage />
          </FormItem>
        )} />

        <FormField control={form.control} name="age" render={({ field }) => (
          <FormItem>
            <FormLabel>Age</FormLabel>
            <FormControl><Input type="number" placeholder="35" {...field} /></FormControl>
            <FormMessage />
          </FormItem>
        )} />

        <FormField control={form.control} name="phone" rules={{ required: true }} render={({ field }) => (
          <FormItem>
            <FormLabel>Phone Number</FormLabel>
            <FormControl><Input type="tel" placeholder="+1 555 123 4567" {...field} /></FormControl>
            <FormMessage />
          </FormItem>
        )} />

        <FormField control={form.control} name="email" rules={{ required: true }} render={({ field }) => (
          <FormItem>
            <FormLabel>Email</FormLabel>
            <FormControl><Input type="email" placeholder="you@example.com" {...field} /></FormControl>
            <FormMessage />
          </FormItem>
        )} />

        <FormField control={form.control} name="hairLossType" render={({ field }) => (
          <FormItem>
            <FormLabel>Type of Hair Loss</FormLabel>
            <FormControl>
              <Select onValueChange={field.onChange}>
                <SelectTrigger><SelectValue placeholder="Select hair loss type" /></SelectTrigger>
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
        )} />

        <FormField control={form.control} name="procedure" render={({ field }) => (
          <FormItem>
            <FormLabel>Preferred Procedure</FormLabel>
            <FormControl>
              <Select onValueChange={field.onChange}>
                <SelectTrigger><SelectValue placeholder="Select a procedure" /></SelectTrigger>
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
        )} />

        {/* --- RESİM YÜKLEME ALANI --- */}
        <div className="space-y-4 border-t pt-4 mt-4">
          <h3 className="font-semibold text-lg">Upload Hair Photos</h3>

          {/* Front Photo */}
          <div className="border p-4 rounded-lg bg-gray-50">
            <label className="text-sm font-medium block mb-2">
              Front Hair Photo 
              {uploadingStatus.front && <span className="text-blue-500 ml-2 text-xs">(Yükleniyor...)</span>}
            </label>
            <Input 
              type="file" 
              accept="image/*" 
              disabled={uploadingStatus.front}
              onChange={(e) => handleFileUpload(e, "front")} 
            />
            {previews.front && (
              <img src={previews.front} alt="Front Preview" className="mt-2 rounded-md border w-full h-48 object-cover" />
            )}
            <input type="hidden" {...form.register("frontPhotoUrl")} />
          </div>

          {/* Left Photo */}
          <div className="border p-4 rounded-lg bg-gray-50">
            <label className="text-sm font-medium block mb-2">
              Left Side Hair Photo
              {uploadingStatus.left && <span className="text-blue-500 ml-2 text-xs">(Yükleniyor...)</span>}
            </label>
            <Input 
              type="file" 
              accept="image/*" 
              disabled={uploadingStatus.left}
              onChange={(e) => handleFileUpload(e, "left")} 
            />
            {previews.left && (
              <img src={previews.left} alt="Left Preview" className="mt-2 rounded-md border w-full h-48 object-cover" />
            )}
            <input type="hidden" {...form.register("leftPhotoUrl")} />
          </div>

          {/* Right Photo */}
          <div className="border p-4 rounded-lg bg-gray-50">
            <label className="text-sm font-medium block mb-2">
              Right Side Hair Photo
              {uploadingStatus.right && <span className="text-blue-500 ml-2 text-xs">(Yükleniyor...)</span>}
            </label>
            <Input 
              type="file" 
              accept="image/*" 
              disabled={uploadingStatus.right}
              onChange={(e) => handleFileUpload(e, "right")} 
            />
            {previews.right && (
              <img src={previews.right} alt="Right Preview" className="mt-2 rounded-md border w-full h-48 object-cover" />
            )}
            <input type="hidden" {...form.register("rightPhotoUrl")} />
          </div>
        </div>
        
        <FormField control={form.control} name="medical" render={({ field }) => (
          <FormItem>
            <FormLabel>Medical History / Medication</FormLabel>
            <FormControl><Textarea placeholder="List medical conditions or medication..." {...field} /></FormControl>
            <FormDescription>Important for safety and suitability.</FormDescription>
            <FormMessage />
          </FormItem>
        )} />

        <Button 
          type="submit" 
          className="w-full bg-green-600 hover:bg-green-700 text-white"
          disabled={uploadingStatus.front || uploadingStatus.left || uploadingStatus.right}
        >
          {uploadingStatus.front || uploadingStatus.left || uploadingStatus.right ? 'Uploading Photos...' : 'Submit Request'}
        </Button>
      </form>
    </Form>
  )
}