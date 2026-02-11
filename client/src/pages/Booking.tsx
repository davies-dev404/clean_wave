import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertBookingSchema, type InsertBooking } from "@shared/schema";
import { useCreateBooking } from "@/hooks/use-bookings";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { format } from "date-fns";
import { CalendarIcon, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Booking() {
  const { mutate, isPending } = useCreateBooking();

  const form = useForm<InsertBooking>({
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

  const onSubmit = (data: InsertBooking) => {
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
            <h1 className="text-3xl font-bold font-display mb-2">Book Your Service</h1>
            <p className="text-blue-100">Fill out the form below and we'll confirm your slot instantly.</p>
          </div>
          
          <div className="p-8 md:p-12">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                
                <div className="grid md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="fullName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name</FormLabel>
                        <FormControl>
                          <Input placeholder="John Doe" className="rounded-xl h-12" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="phoneNumber"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone Number</FormLabel>
                        <FormControl>
                          <Input placeholder="0712 345 678" className="rounded-xl h-12" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="location"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Location</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="rounded-xl h-12">
                              <SelectValue placeholder="Select your city" />
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
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="serviceType"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Service Type</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="rounded-xl h-12">
                              <SelectValue placeholder="What do you need?" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="Residential Cleaning">Residential Cleaning</SelectItem>
                            <SelectItem value="Office Cleaning">Office Cleaning</SelectItem>
                            <SelectItem value="Laundry Wash & Fold">Laundry Wash & Fold</SelectItem>
                            <SelectItem value="Deep Cleaning">Deep Cleaning</SelectItem>
                            <SelectItem value="Move In/Out">Move In/Out Cleaning</SelectItem>
                            <SelectItem value="Carpet/Upholstery">Carpet or Upholstery</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                   <FormField
                    control={form.control}
                    name="date"
                    render={({ field }) => (
                      <FormItem className="flex flex-col">
                        <FormLabel className="mb-2">Preferred Date</FormLabel>
                        <Popover>
                          <PopoverTrigger asChild>
                            <FormControl>
                              <Button
                                variant={"outline"}
                                className={cn(
                                  "h-12 w-full pl-3 text-left font-normal rounded-xl",
                                  !field.value && "text-muted-foreground"
                                )}
                              >
                                {field.value ? (
                                  format(field.value, "PPP")
                                ) : (
                                  <span>Pick a date</span>
                                )}
                                <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                              </Button>
                            </FormControl>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0" align="start">
                            <Calendar
                              mode="single"
                              selected={field.value}
                              onSelect={field.onChange}
                              disabled={(date) =>
                                date < new Date()
                              }
                              initialFocus
                            />
                          </PopoverContent>
                        </Popover>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="sizeOrWeight"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Size / Weight (Optional)</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="e.g. 2 Bedroom or 5kg laundry" 
                            className="rounded-xl h-12" 
                            {...field}
                            value={field.value || ""} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="instructions"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Special Instructions (Optional)</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Gate code, specific stains to watch out for, etc." 
                          className="rounded-xl min-h-[100px]" 
                          {...field}
                          value={field.value || ""} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full h-14 text-lg rounded-xl shadow-lg shadow-primary/25 mt-4"
                  disabled={isPending}
                >
                  {isPending ? (
                    <>
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    "Confirm Booking"
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
