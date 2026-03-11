import { motion } from "framer-motion";
import { useEffect } from "react";

const AGB = () => {
    useEffect(() => window.scrollTo(0, 0), []);

    return (
        <main className="pt-12 pb-20 bg-secondary min-h-screen">
            <div className="container mx-auto max-w-4xl px-6">
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="bg-card p-8 md:p-16 rounded-lg shadow-sm border border-border">
                    <h1 className="font-display text-4xl mb-8 text-foreground">AGB</h1>
                    <div className="space-y-6 font-body text-muted-foreground leading-relaxed">

                    </div>
                </motion.div>
            </div>
        </main>
    );
};
export default AGB;