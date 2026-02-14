import { useMutation } from "@tanstack/react-query";
import { api } from "@shared/routes"; // Verify @shared/routes exports these
import { useToast } from "@/hooks/use-toast";
// Since we only have POST /api/bookings defined in the prompt's manifest,
// we'll focus on the creation hook.
export function useCreateBooking() {
    const { toast } = useToast();
    return useMutation({
        mutationFn: async (data) => {
            const res = await fetch(api.bookings.create.path, {
                method: api.bookings.create.method,
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });
            if (!res.ok) {
                const error = await res.json();
                throw new Error(error.message || "Failed to create booking");
            }
            return res.json();
        },
        onSuccess: () => {
            toast({
                title: "Booking Received!",
                description: "We'll be in touch shortly to confirm your slot.",
                variant: "default",
                className: "bg-green-600 text-white border-none"
            });
        },
        onError: (error) => {
            toast({
                title: "Booking Failed",
                description: error.message,
                variant: "destructive",
            });
        },
    });
}
export function useContactInquiry() {
    const { toast } = useToast();
    return useMutation({
        mutationFn: async (data) => {
            const res = await fetch(api.contact.create.path, {
                method: api.contact.create.method,
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });
            if (!res.ok) {
                const error = await res.json();
                throw new Error(error.message || "Failed to send message");
            }
            return res.json();
        },
        onSuccess: () => {
            toast({
                title: "Message Sent!",
                description: "Thank you for contacting CleanWave. We'll reply soon.",
                className: "bg-blue-600 text-white border-none"
            });
        },
        onError: (error) => {
            toast({
                title: "Error",
                description: error.message,
                variant: "destructive",
            });
        },
    });
}
