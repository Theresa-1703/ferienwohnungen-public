import { motion } from "framer-motion";
import { useEffect } from "react";

const Impressum = () => {
    useEffect(() => window.scrollTo(0, 0), []);

    return (
        <main className="pt-12 pb-20 bg-secondary min-h-screen">
            <div className="container mx-auto max-w-4xl px-6">
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="bg-card p-8 md:p-16 rounded-lg shadow-sm border border-border">
                    <h1 className="font-display text-4xl mb-8 text-foreground">Impressum</h1>
                    <div className="space-y-8 font-body text-muted-foreground leading-relaxed">
                        <section>
                            <h2 className="text-xl font-semibold">Verantwortlich für den Internetauftritt</h2>
                            <p>
                                {import.meta.env.VITE_CONTACT_NAME}<br />
                                {import.meta.env.VITE_CONTACT_ADDRESS}<br />
                            </p>
                            <p className="mt-2">
                                Email: <a href="mailto:${import.meta.env.VITE_CONTACT_EMAIL}" className="text-primary hover:underline">{import.meta.env.VITE_CONTACT_EMAIL}</a><br />
                                Telefon: {import.meta.env.VITE_CONTACT_PHONE}
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold">Verantwortlich für den Inhalt gemäß § 18 MStV</h2>
                            <p>
                                {import.meta.env.VITE_CONTACT_NAME}<br />
                                {import.meta.env.VITE_CONTACT_ADDRESS}<br />
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold">Streitbeilegung</h2>
                            <p>
                                Die Europäische Kommission stellt eine Plattform für die Online-Streitbeilegung (OS) zur Verfügung:
                                <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline ml-1">
                                    https://ec.europa.eu/consumers/odr
                                </a>.
                            </p>
                            <p className="mt-2">
                                Wir sind nicht bereit oder verpflichtet, an einem Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold">Haftung für Inhalte</h2>
                            <p>
                                Als Dienstanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen.
                            </p>
                            <p className="mt-2">
                                Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold">Haftung für Links</h2>
                            <p>
                                Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold">Urheberrecht</h2>
                            <p>
                                Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
                            </p>
                        </section>

                    </div>
                </motion.div>
            </div>
        </main>
    );
};
export default Impressum;