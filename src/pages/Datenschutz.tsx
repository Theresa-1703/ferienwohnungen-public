import { motion } from "framer-motion";
import { useEffect } from "react";

const Datenschutz = () => {
    useEffect(() => window.scrollTo(0, 0), []);

    return (
        <main className="pt-12 pb-20 bg-secondary min-h-screen">
            <div className="container mx-auto max-w-4xl px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-card p-8 md:p-16 rounded-lg shadow-sm border border-border"
                >
                    <h1 className="font-display text-4xl mb-12 text-black">Datenschutz</h1>

                    <div className="space-y-12 font-body text-muted-foreground leading-relaxed">

                        {/* 1. Datenschutz auf einen Blick */}
                        <section className="space-y-8">
                            <h2 className="text-2xl font-semibold text-black mb-6">1. Datenschutz auf einen Blick</h2>

                            <div className="space-y-4">
                                <h3 className="text-lg font-bold text-black">Allgemeine Informationen</h3>
                                <p>Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie unsere Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können. Ausführliche Informationen zum Thema Datenschutz finden Sie in unserer Datenschutzerklärung, die Sie unterhalb dieses Textes finden.</p>
                            </div>

                            <div className="space-y-6">
                                <h3 className="text-lg font-bold text-black">Datenerfassung auf unserer Website</h3>

                                <div className="space-y-4">
                                    <p><strong>Wer ist für die Datenerfassung auf dieser Website verantwortlich?</strong><br />
                                        Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Seine Kontaktdaten finden Sie im Impressum dieser Website.</p>

                                    <p><strong>Wie sammeln wir Ihre Daten?</strong><br />
                                        Zum einen werden Ihre Daten erhoben, indem Sie uns diese zur Verfügung stellen. Das können z.B. Daten sein, die Sie in ein Kontaktformular eingeben.</p>

                                    <p>Andere Daten werden automatisch von unseren IT-Systemen erfasst, wenn Sie die Website besuchen. Dabei handelt es sich hauptsächlich um technische Daten (z. B. Internet-Browser, Betriebssystem oder Uhrzeit des Seitenaufrufs). Diese Daten werden automatisch erfasst, sobald Sie unsere Website betreten.</p>

                                    <p><strong>Wozu verwenden wir Ihre Daten?</strong><br />
                                        Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten. Andere Daten können verwendet werden, um Ihr Nutzerverhalten zu analysieren.</p>

                                    <p><strong>Welche Rechte haben Sie in Bezug auf Ihre Daten?</strong><br />
                                        Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung, Sperrung oder Löschung dieser Daten zu verlangen. Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können Sie sich jederzeit unter der im Impressum angegebenen Adresse an uns wenden. Darüber hinaus haben Sie das Recht, eine Beschwerde bei der zuständigen Aufsichtsbehörde einzureichen.</p>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <h3 className="text-lg font-bold text-black">Analysetools und Tools von Drittanbietern</h3>
                                <p>Beim Besuch unserer Website kann Ihr Surfverhalten statistisch ausgewertet werden. Dies geschieht vor allem mit Cookies und mit sogenannten Analyseprogrammen. Die Auswertung Ihres Surfverhaltens erfolgt in der Regel anonym; das Surfverhalten kann nicht auf Sie zurückgeführt werden. Sie können dieser Auswertung widersprechen oder sie verhindern, indem Sie bestimmte Tools nicht nutzen. Detaillierte Informationen hierzu finden Sie in der folgenden Datenschutzerklärung.</p>
                                <p>Sie können dieser Analyse widersprechen. Wir werden Sie in dieser Datenschutzerklärung über die Widerspruchsmöglichkeiten informieren.</p>
                            </div>
                        </section>

                        <hr className="border-border" />

                        {/* 2. Allgemeine Hinweise und Pflichtangaben */}
                        <section className="space-y-8">
                            <h2 className="text-2xl font-semibold text-black mb-6">2. Allgemeine Hinweise und Pflichtangaben</h2>

                            <div className="space-y-4">
                                <h3 className="text-lg font-bold text-black">Datenschutz</h3>
                                <p>Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.</p>
                                <p>Wenn Sie diese Website nutzen, werden verschiedene personenbezogene Daten erhoben. Personenbezogene Daten sind Daten, mit denen Sie persönlich identifiziert werden können. In dieser Datenschutzerklärung wird erläutert, welche Daten wir sammeln und wofür wir sie verwenden. Sie erklärt auch, wie und zu welchem Zweck dies geschieht.</p>
                                <p>Wir weisen darauf hin, dass die Datenübertragung im Internet (z.B. bei der Kommunikation per E-Mail) Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht möglich.</p>
                            </div>

                            <div className="space-y-4">
                                <h3 className="text-lg font-bold text-black">Hinweis auf die verantwortliche Partei</h3>
                                <p className="text-black">
                                    {import.meta.env.VITE_CONTACT_NAME}<br />
                                    {import.meta.env.VITE_CONTACT_ADDRESS}<br />
                                </p>
                                <p className="text-sm">Der Verantwortliche ist die natürliche oder juristische Person, die allein oder gemeinsam mit anderen über die Zwecke und Mittel der Verarbeitung personenbezogenen Daten (z. B. Namen, E-Mail-Adressen oder Ähnliches) entscheidet.</p>
                            </div>

                            <div className="space-y-4">
                                <h3 className="text-lg font-bold text-black">Widerruf der Einwilligung in die Datenverarbeitung</h3>
                                <p>Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen Zustimmung möglich. Eine bereits erteilte Einwilligung können Sie jederzeit widerrufen. Hierfür genügt eine formlose Mitteilung per E-Mail an uns. Die Rechtmäßigkeit der bis zum Widerruf erfolgten Datenverarbeitung bleibt vom Widerruf unberührt.</p>
                            </div>

                            <div className="space-y-4">
                                <h3 className="text-lg font-bold text-black">Recht auf Beschwerde bei der zuständigen Aufsichtsbehörde</h3>
                                <p>Im Falle datenschutzrechtlicher Verstöße steht dem Betroffenen ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu. Die zuständige Aufsichtsbehörde in datenschutzrechtlichen Fragen ist der Landesdatenschutzbeauftragte des Bundeslandes, in dem unser Unternehmen seinen Sitz hat. Eine Liste der Datenschutzbeauftragten und deren Kontaktdaten finden Sie unter dem folgenden Link: <a href="https://www.bfdi.bund.de/DE/Infothek/Anschriften_Links/anschriften_links-node.html" target="_blank" rel="noopener noreferrer" className="text-primary break-all hover:underline">https://www.bfdi.bund.de/...</a></p>
                            </div>

                            <div className="space-y-4">
                                <h3 className="text-lg font-bold text-black">Recht auf Datenübertragbarkeit</h3>
                                <p>Sie haben das Recht, Daten, die wir aufgrund Ihrer Einwilligung oder in Erfüllung eines Vertrages automatisiert verarbeiten, an Sie oder an einen Dritten in einem gängigen, maschinenlesbaren Format aushändigen zu lassen. Wenn Sie die direkte Übermittlung der Daten an einen anderen Verantwortlichen verlangen, erfolgt dies nur, soweit es technisch machbar ist.</p>
                            </div>

                            <div className="space-y-4">
                                <h3 className="text-lg font-bold text-black">SSL- oder TLS-Verschlüsselung</h3>
                                <p>Aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte, wie z.B. Bestellungen oder Anfragen, die Sie an uns als Seitenbetreiber senden, verwendet diese Seite eine SSL- oder TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von „http://“ auf „https://“ wechselt und an dem Schloss-Symbol in Ihrer Browserzeile. Wenn die SSL- oder TLS-Verschlüsselung aktiviert ist, können die Daten, die Sie an uns übermitteln, nicht von Dritten gelesen werden.</p>
                            </div>

                            <div className="space-y-4">
                                <h3 className="text-lg font-bold text-black">Information, Sperrung, Löschung</h3>
                                <p>Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit das Recht auf unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck der Datenverarbeitung sowie ggf. ein Recht auf Berichtigung, Sperrung oder Löschung dieser Daten. Hierzu sowie zu weiteren Fragen zum Thema personenbezogene Daten können Sie sich jederzeit unter der im Impressum angegebenen Adresse an uns wenden.</p>
                            </div>

                            <div className="space-y-4">
                                <h3 className="text-lg font-bold text-black">Einspruch gegen Werbe-E-Mails</h3>
                                <p>Der Nutzung von im Rahmen der Impressumspflicht veröffentlichten Kontaktdaten zur Übersendung von nicht ausdrücklich angeforderter Werbung und Informationsmaterialien wird hiermit widersprochen. Die Betreiber der Seiten behalten sich ausdrücklich rechtliche Schritte im Falle der unverlangten Zusendung von Werbeinformationen, etwa durch Spam-Mails, vor.</p>
                            </div>
                        </section>

                        <hr className="border-border" />

                        {/* 3. Datenerhebung auf unserer Website */}
                        <section className="space-y-8">
                            <h2 className="text-2xl font-semibold text-black mb-6">3. Datenerhebung auf unserer Website</h2>

                            <div className="space-y-4">
                                <h3 className="text-lg font-bold text-black">Cookies</h3>
                                <p>Einige der Internetseiten verwenden so genannte Cookies. Cookies richten auf Ihrem Rechner keinen Schaden an und enthalten keine Viren. Cookies dienen dazu, unser Angebot nutzerfreundlicher, effektiver und sicherer zu machen. Cookies sind kleine Textdateien, die auf Ihrem Rechner abgelegt werden und die Ihr Browser speichert.</p>
                                <p>Die meisten der von uns verwendeten Cookies sind so genannte „Session-Cookies“. Sie werden nach Ende Ihres Besuchs automatisch gelöscht. Andere Cookies bleiben auf Ihrem Endgerät gespeichert, bis Sie diese löschen. Diese Cookies ermöglichen es uns, Ihren Browser bei Ihrem nächsten Besuch wiederzuerkennen.</p>
                                <p>Sie können Ihren Browser so einstellen, dass Sie über das Setzen von Cookies informiert werden und Cookies nur im Einzelfall erlauben, die Annahme von Cookies für bestimmte Fälle oder generell ausschließen sowie das automatische Löschen der Cookies beim Schließen des Browser aktivieren. Bei der Deaktivierung von Cookies kann die Funktionalität dieser Website eingeschränkt sein.</p>
                                <p>Cookies, die zur Durchführung des elektronischen Kommunikationsvorgangs oder zur Bereitstellung bestimmter, von Ihnen angeforderter Funktionen (z.B. Warenkorbfunktion) erforderlich sind, werden auf Grundlage des Art. 6 (1) lit. f DSGVO. Der Websitebetreiber hat ein berechtigtes Interesse an der Speicherung von Cookies zur technisch fehlerfreien und optimierten Bereitstellung seiner Dienste. Soweit andere Cookies (z.B. Cookies zur Analyse Ihres Surfverhaltens) gespeichert werden, werden diese in dieser Datenschutzerklärung gesondert behandelt.</p>
                            </div>

                            <div className="space-y-4">
                                <h3 className="text-lg font-bold text-black">Server-Protokolldateien</h3>
                                <p>Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten Server Log Files, die Ihr Browser automatisch an uns übermittelt. Dies sind: Browsertyp und Browserversion, verwendetes Betriebssystem, Referrer-URL, Hostname des zugreifenden Computers, Uhrzeit der Serveranfrage, IP-Adresse. Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen.</p>
                                <p>Die Grundlage für die Datenverarbeitung ist Art. 6 Abs. 1 lit. b DSGVO, der die Verarbeitung von Daten zur Erfüllung eines Vertrags oder vorvertraglicher Maßnahmen erlaubt.</p>
                            </div>

                            <div className="space-y-4">
                                <h3 className="text-lg font-bold text-black">Kontakt-Formular</h3>
                                <p>Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.</p>
                                <p>Die Verarbeitung der in das Kontaktformular eingegebenen Daten erfolgt daher ausschließlich auf Grundlage Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO). Diese Einwilligung können Sie jederzeit widerrufen. Hierfür genügt eine formlose Mitteilung per E-Mail an uns. Die Rechtmäßigkeit der bis zum Widerruf erfolgten Datenverarbeitungsvorgänge bleibt vom Widerruf unberührt.</p>
                                <p>Die von Ihnen im Kontaktformular eingegebenen Daten verbleiben bei uns, bis Sie uns zur Löschung auffordern, Ihre Einwilligung zur Speicherung widerrufen oder der Zweck für die Datenspeicherung entfällt (z.B. nach abgeschlossener Bearbeitung Ihrer Anfrage). Zwingende gesetzliche Bestimmungen – insbesondere Aufbewahrungsfristen – bleiben hiervon unberührt.</p>
                            </div>
                        </section>

                        <hr className="border-border" />

                        {/* 4. Analysetools und Werbung */}
                        <section className="space-y-6">
                            <h2 className="text-2xl font-semibold text-black mb-6">4. Analysetools und Werbung</h2>
                            <p>Diese Website benutzt Webanalysedienste und verwendet so genannte „Cookies“. Das sind Textdateien, die auf Ihrem Computer gespeichert werden und die eine Analyse der Benutzung der Website durch Sie ermöglichen. Zu diesem Zweck werden die durch den Cookie erzeugten Informationen über die Benutzung dieser Website auf unserem Server gespeichert. Die IP-Adresse wird vor der Speicherung anonymisiert.</p>
                            <p>Cookies verbleiben auf Ihrem Endgerät, bis Sie sie löschen.</p>
                            <p>Die Speicherung von Cookies erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Der Websitebetreiber hat ein berechtigtes Interesse an der anonymisierten Analyse des Nutzerverhaltens, um sowohl sein Webangebot als auch seine Werbung zu optimieren.</p>
                            <p>Die von dem Cookie erzeugten Informationen über die Nutzung dieser Website werden nicht an Dritte weitergegeben. Sie können die Installation der Cookies durch eine entsprechende Einstellung Ihrer Browser Software verhindern; wir weisen Sie jedoch darauf hin, dass Sie in diesem Fall gegebenenfalls nicht sämtliche Funktionen dieser Website voll umfänglich nutzen können.</p>
                        </section>

                    </div>
                </motion.div>
            </div>
        </main>
    );
};

export default Datenschutz;