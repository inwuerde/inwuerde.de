import { useEffect } from 'react';
import { Link } from 'react-router';
import { ArrowLeft, Mail, MapPin, AtSign } from 'lucide-react';
import { Header } from '@/sections/Header';
import { Footer } from '@/sections/Footer';
import { CONTACT } from '@/data/content';

function LegalShell({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <main className="mx-auto max-w-3xl px-4 pb-24 pt-32 sm:px-6 sm:pt-36">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm font-semibold text-brand-600 transition-colors hover:text-brand-700"
        >
          <ArrowLeft className="h-4 w-4" />
          Zurück zur Startseite
        </Link>
        <h1 className="mt-6 font-display text-3xl font-extrabold tracking-tight text-warm-950 sm:text-4xl">
          {title}
        </h1>
        <div className="mt-8 space-y-6 text-[15px] leading-relaxed text-warm-700">
          {children}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export function Impressum() {
  return (
    <LegalShell title="Impressum">
      <section className="rounded-3xl border border-warm-200 bg-white p-7 sm:p-8">
        <h2 className="font-display text-xl font-bold text-warm-950">Kontakt</h2>
        <div className="mt-5 space-y-4">
          <p className="flex items-start gap-3">
            <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-brand-600" />
            <span>
              <strong className="font-semibold text-warm-900">{CONTACT.name}</strong>
              <br />
              {CONTACT.role}
              <br />
              {CONTACT.org}
              <br />
              {CONTACT.street}
              <br />
              {CONTACT.city}
            </span>
          </p>
          <p className="flex items-center gap-3">
            <Mail className="h-5 w-5 shrink-0 text-brand-600" />
            <a
              href={`mailto:${CONTACT.email}`}
              className="font-medium text-brand-600 underline decoration-brand-200 decoration-2 underline-offset-4 hover:text-brand-700"
            >
              {CONTACT.email}
            </a>
          </p>
          <p className="flex items-center gap-3">
            <AtSign className="h-5 w-5 shrink-0 text-brand-600" />
            <span>
              Mastodon: <em>{CONTACT.mastodon}</em>
            </span>
          </p>
        </div>
      </section>
    </LegalShell>
  );
}

export function Datenschutz() {
  return (
    <LegalShell title="Datenschutz">
      <section className="rounded-3xl border border-warm-200 bg-white p-7 sm:p-8">
        <h2 className="font-display text-xl font-bold text-warm-950">
          Datenverarbeitung zur Übermittlung der Onlineinhalte
        </h2>
        <p className="mt-4">
          Zum Zweck der Übermittlung der von Ihnen aufgerufenen Webseite
          www.inwuerde.de werden von Ihrem Browser typischerweise unter anderem
          folgende Informationen (im Rahmen von sogenannten HTTP-Requests)
          übersandt:
        </p>
        <ul className="mt-4 list-disc space-y-2 pl-6">
          <li>
            Ihre IP-Adresse, eine Ziffernfolge, die Ihren derzeitigen
            Computeranschluss im Internet identifiziert.
          </li>
          <li>
            Die von Ihnen aufgerufene URL (die Webseite und ggf. weitere
            Parameter),
          </li>
          <li>
            Informationen zu dem von Ihnen verwendeten Browser und Betriebssystem,
            wie deren Name und Version
          </li>
          <li>
            sowie – unter Umständen – die Seite, von der aus Sie zu uns gelangt
            sind (Referrer-Information).
          </li>
          <li>Der Zeitpunkt der Anfrage.</li>
        </ul>
        <p>
                    <strong>Google Analytics</strong>
Diese Website nutzt den Dienst „Google Analytics“, welcher von der Google Inc. (1600 Amphitheatre Parkway Mountain View, CA 94043, USA) angeboten wird, zur Analyse der Websitebenutzung durch Nutzer. Der Dienst verwendet „Cookies“ – Textdateien, welche auf Ihrem Endgerät gespeichert werden. Die durch die Cookies gesammelten Informationen werden im Regelfall an einen Google-Server in den USA gesandt und dort gespeichert.
Auf dieser Website greift die IP-Anonymisierung. Die IP-Adresse der Nutzer wird innerhalb der Mitgliedsstaaten der EU und des Europäischen Wirtschaftsraum gekürzt. Durch diese Kürzung entfällt der Personenbezug Ihrer IP-Adresse. Im Rahmen der Vereinbarung zur Auftragsdatenvereinbarung, welche die Websitebetreiber mit der Google Inc. geschlossen haben, erstellt diese mithilfe der gesammelten Informationen eine Auswertung der Websitenutzung und der Websiteaktivität und erbringt mit der Internetnutzung verbundene Dienstleistungen.
Sie haben die Möglichkeit, die Speicherung des Cookies auf Ihrem Gerät zu verhindern, indem Sie in Ihrem Browser entsprechende Einstellungen vornehmen. Es ist nicht gewährleistet, dass Sie auf alle Funktionen dieser Website ohne Einschränkungen zugreifen können, wenn Ihr Browser keine Cookies zulässt.
Weiterhin können Sie durch ein Browser-Plugin verhindern, dass die durch Cookies gesammelten Informationen (inklusive Ihrer IP-Adresse) an die Google Inc. gesendet und von der Google Inc. genutzt werden. 
          Folgender Link führt Sie zu dem entsprechenden Plugin: <a href="https://tools.google.com/dlpage/gaoptout?hl=de">tools.google.com gaoptout</a>
        </p>
        <p className="mt-6 text-sm text-warm-500">
          Der Text ist von Jan Schallaböck und lizenziert unter Creative Commons
          Attribution 4.0 International License.
        </p>
      </section>
    </LegalShell>
  );
}
