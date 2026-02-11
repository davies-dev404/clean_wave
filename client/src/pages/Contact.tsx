import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertContactSchema, type InsertContact } from "@shared/schema";
import { useContactInquiry } from "@/hooks/use-bookings";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Loader2 } from "lucide-react";

export default function Contact() {
  const { mutate, isPending } = useContactInquiry();
  
  const form = useForm<InsertContact>({
    resolver: zodResolver(insertContactSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = (data: InsertContact) => {
    mutate(data, {
      onSuccess: () => form.reset()
    });
  };

  return (
    <div className="pt-24 pb-20 min-h-screen bg-slate-50">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="grid lg:grid-cols-2 gap-12">
          
          {/* Contact Info */}
          <div>
            <h1 className="text-4xl font-bold font-display mb-6">Get in Touch</h1>
            <p className="text-lg text-slate-600 mb-12">
              Have questions about our services or need a custom corporate quote? 
              Reach out to us and we'll respond within 24 hours.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-primary shrink-0">
                  <Phone />
                </div>
                <div>
                  <h3 className="font-bold text-lg">Call Us</h3>
                  <p className="text-slate-600">+254 700 000 000</p>
                  <p className="text-slate-600">+254 722 000 000</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-primary shrink-0">
                  <Mail />
                </div>
                <div>
                  <h3 className="font-bold text-lg">Email Us</h3>
                  <p className="text-slate-600">hello@cleanwave.co.ke</p>
                  <p className="text-slate-600">support@cleanwave.co.ke</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-primary shrink-0">
                  <MapPin />
                </div>
                <div>
                  <h3 className="font-bold text-lg">Visit Us</h3>
                  <p className="text-slate-600">Westlands Commercial Center</p>
                  <p className="text-slate-600">Nairobi, Kenya</p>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="mt-12 w-full h-64 bg-slate-200 rounded-2xl overflow-hidden relative">
              <div className="absolute inset-0 flex items-center justify-center text-slate-400 font-bold bg-slate-200">
                Map Integration Placeholder
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-slate-100">
            <h2 className="text-2xl font-bold mb-6">Send a Message</h2>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Full Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Your Name" className="rounded-xl h-12" {...field} />
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
                      <FormLabel>Email Address</FormLabel>
                      <FormControl>
                        <Input placeholder="you@example.com" className="rounded-xl h-12" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="How can we help you?" 
                          className="rounded-xl min-h-[150px]" 
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full h-14 rounded-xl text-lg"
                  disabled={isPending}
                >
                   {isPending ? (
                    <>
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    "Send Message"
                  )}
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}
