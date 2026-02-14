import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertBookingSchema } from "@shared/schema";
import { useCreateBooking } from "@/hooks/use-bookings";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Loader2, Calculator } from "lucide-react";
import { servicesData } from "@/data/servicesData";

export default function GetQuote() {
    const { mutate, isPending } = useCreateBooking(); // Reusing the same hook/schema for now
    const form = useForm({
        resolver: zodResolver(insertBookingSchema),
        defaultValues: {
            fullName: "",
            phoneNumber: "",
            location: "",
            serviceType: "",
            sizeOrWeight: "",
            instructions: "",
        },
    });

    const onSubmit = (data) => {
        mutate(data, {
            onSuccess: () => {
                form.reset();
            }
        });
    };

    return (
        <div className="pt-24 pb-20 min-h-screen bg-slate-50">
            <div className="max-w-3xl mx-auto container-padding">
                <div className="bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden">
                    <div className="bg-primary p-8 text-white text-center">
                        <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-4">
                            <Calculator className="w-8 h-8 text-white" />
                        </div>
                        <h1 className="text-3xl font-bold font-display mb-2">Get a Free Quote</h1>
                        <p className="text-blue-100">Tell us what you need, and we'll send you a customized estimate instantly.</p>
                    </div>
                  
                    <div className="p-8 md:p-12">
                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <FormField control={form.control} name="fullName" render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Full Name</FormLabel>
                                            <FormControl>
                                                <Input placeholder="John Doe" className="rounded-xl h-12" {...field}/>
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}/>

                                    <FormField control={form.control} name="phoneNumber" render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Phone Number</FormLabel>
                                            <FormControl>
                                                <Input placeholder="0712 345 678" className="rounded-xl h-12" {...field}/>
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}/>
                                </div>

                                <div className="grid md:grid-cols-2 gap-6">
                                    <FormField control={form.control} name="location" render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Location</FormLabel>
                                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                <FormControl>
                                                    <SelectTrigger className="rounded-xl h-12">
                                                        <SelectValue placeholder="Select your area"/>
                                                    </SelectTrigger>
                                                </FormControl>
                                                <SelectContent>
                                                    <SelectItem value="Nairobi">Nairobi</SelectItem>
                                                    <SelectItem value="Mombasa">Mombasa</SelectItem>
                                                    <SelectItem value="Kisumu">Kisumu</SelectItem>
                                                    <SelectItem value="Eldoret">Eldoret</SelectItem>
                                                    <SelectItem value="Nakuru">Nakuru</SelectItem>
                                                </SelectContent>
                                            </Select>
                                            <FormMessage />
                                        </FormItem>
                                    )}/>

                                    <FormField control={form.control} name="serviceType" render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Service Required</FormLabel>
                                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                <FormControl>
                                                    <SelectTrigger className="rounded-xl h-12">
                                                        <SelectValue placeholder="Choose a service"/>
                                                    </SelectTrigger>
                                                </FormControl>
                                                <SelectContent>
                                                    {servicesData.map((s) => (
                                                        <SelectItem key={s.slug} value={s.title}>{s.title}</SelectItem>
                                                    ))}
                                                    <SelectItem value="Other">Other / Custom</SelectItem>
                                                </SelectContent>
                                            </Select>
                                            <FormMessage />
                                        </FormItem>
                                    )}/>
                                </div>

                                <FormField control={form.control} name="sizeOrWeight" render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Estimated Size / Frequency (Optional)</FormLabel>
                                        <FormControl>
                                            <Input placeholder="e.g. 3 Bedroom House, Weekly, or 10kg Laundry" className="rounded-xl h-12" {...field} value={field.value || ""}/>
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}/>

                                <FormField control={form.control} name="instructions" render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Additional Details</FormLabel>
                                        <FormControl>
                                            <Textarea placeholder="Describe any specific requirements, preferred dates, or questions..." className="rounded-xl min-h-[100px]" {...field} value={field.value || ""}/>
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}/>

                                <Button type="submit" size="lg" className="w-full h-14 text-lg rounded-xl shadow-lg shadow-primary/25 mt-4" disabled={isPending}>
                                    {isPending ? (
                                        <>
                                            <Loader2 className="mr-2 h-5 w-5 animate-spin"/>
                                            Processing...
                                        </>
                                    ) : (
                                        "Request Quote"
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
