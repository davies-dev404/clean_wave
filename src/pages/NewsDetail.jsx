import { useParams, Link } from "react-router-dom";
import { newsItems } from "@/data/newsData";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, User, Tag } from "lucide-react";
import ScrollAnimation from "@/components/ScrollAnimation";
import SEO from '@/components/SEO';

export default function NewsDetail() {
    const { id } = useParams();
    const news = newsItems.find(n => n.id === parseInt(id));

    if (!news) {
        return (
            <div className="min-h-screen pt-24 flex flex-col items-center justify-center text-center px-4">
                <h1 className="text-3xl font-bold mb-4 text-slate-900">Post Not Found</h1>
                <Link to="/">
                    <Button>Back to Home</Button>
                </Link>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-white">
            <SEO 
                title={news.title}
                description={news.excerpt}
            />

            {/* Header Spacer */}
            <div className="h-20" />

            <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <ScrollAnimation animation="fade-up">
                    <Link to="/" className="inline-flex items-center gap-2 text-primary font-semibold mb-8 hover:translate-x-1 transition-transform">
                        <ArrowLeft className="w-4 h-4" /> Back to News
                    </Link>

                    <div className="flex flex-wrap items-center gap-6 text-sm text-slate-500 mb-8">
                        <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4" />
                            {news.date}
                        </div>
                        <div className="flex items-center gap-2">
                            <User className="w-4 h-4" />
                            By CleanWave Team
                        </div>
                        <div className="flex items-center gap-2">
                            <Tag className="w-4 h-4" />
                            Cleaning Tips
                        </div>
                    </div>

                    <h1 className="text-3xl md:text-5xl font-bold text-slate-900 mb-10 leading-tight">
                        {news.title}
                    </h1>

                    <div className="aspect-video w-full rounded-[2rem] overflow-hidden shadow-2xl mb-12">
                        <img 
                            src={news.image} 
                            alt={news.title} 
                            className="w-full h-full object-cover"
                        />
                    </div>

                    <div className="prose prose-lg max-w-none text-slate-600 leading-relaxed space-y-8 text-justify">
                        <p className="text-xl font-medium text-slate-800 italic">
                            {news.excerpt}
                        </p>
                        
                        <p>
                            Maintaining a clean environment is not just about aesthetics; it's about health, productivity, and peace of mind. At CleanWave, we understand that our clients lead busy lives, and finding time for thorough cleaning can be a challenge.
                        </p>

                        <h2 className="text-2xl font-bold text-slate-900 pt-4">Sustainable Cleaning Practices</h2>
                        <p>
                            We prioritize eco-friendly cleaning agents that are effective against grime and bacteria but gentle on your surfaces and safe for your family and pets. Our team is trained in the latest techniques to ensure every corner of your space receives the attention it deserves.
                        </p>

                        <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 my-10">
                            <h3 className="text-xl font-bold text-slate-900 mb-4">Did you know?</h3>
                            <p className="m-0">
                                Studies show that a tidy workspace can increase productivity by up to 20%. A clean home also significantly reduces stress levels and improves sleep quality.
                            </p>
                        </div>

                        <p>
                            Whether you're looking for weekly residential maintenance or a deep cleaning for your corporate office, CleanWave is here to provide high-quality, reliable, and trustworthy service. We don't just clean; we care.
                        </p>
                    </div>

                    {/* Share Section */}
                    <div className="mt-16 pt-10 border-t border-slate-100 text-center">
                        <h4 className="font-bold text-slate-900 mb-6 uppercase tracking-widest text-sm">Ready to experience the Wave?</h4>
                        <Link to="/quote">
                            <Button size="xl" className="rounded-full px-10">Get a Free Quote Now</Button>
                        </Link>
                    </div>
                </ScrollAnimation>
            </article>
        </div>
    );
}
