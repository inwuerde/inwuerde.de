# TODO

## 4. Landingpages fehlen

Aktuell versucht die Startseite alles gleichzeitig zu erklären.

Ich würde eigene Seiten erstellen.

## Recovery

URL

```text
/recovery
```

mit ca. 2000 Wörtern.

---

## Selbststigmatisierung

```text
/selbststigmatisierung
```

---

## Offenlegung

```text
/offenlegung
```

---

## Recovery Seminar

```text
/recovery-seminar
```

---

## Empowerment

```text
/empowerment
```

---

## Peer Support

```text
/peer-support
```

---

Jede dieser Seiten kann bei Google separat ranken.

---

# 5. Blog

Hier steckt riesiges Potenzial.

Zum Beispiel:

* Was bedeutet Recovery?
* Was ist Selbststigmatisierung?
* Warum Offenlegung so schwer fällt
* Recovery ist nicht Heilung
* Hoffnung als therapeutischer Faktor
* Patrick Corrigan und Honest Open Proud
* Warum Peer Support wirkt
* Wie Angehörige Recovery unterstützen können
* Recovery in der Gemeindepsychiatrie
* Die Geschichte der Recovery-Bewegung

---

# 6. FAQ

Google liebt FAQ.

Zum Beispiel:

> Was bedeutet Recovery?

---

> Was ist Selbststigmatisierung?

---

> Wer kann am Seminar teilnehmen?

---

> Wird das Seminar online angeboten?

---

> Ist das Seminar wissenschaftlich untersucht?

---

> Wer hat das Seminar entwickelt?

---

# 7. Structured Data

Momentan dürfte praktisch kein JSON-LD vorhanden sein.

Ich würde ergänzen:

* Organization
* Person
* Course
* Event
* FAQ
* Article
* Breadcrumb

Das verbessert die Darstellung in den Suchergebnissen.

---

# 8. E-E-A-T

Hier seid ihr bereits sehr stark.

Thomas Richter bringt eine seltene Kombination mit:

* Diplom-Psychologe
* eigene Recovery-Erfahrung
* wissenschaftlicher Hintergrund
* Zusammenarbeit mit der Universität Ulm
* praktische Seminarerfahrung
* Engagement im Betroffenenbeirat des Zentralinstituts für Seelische Gesundheit. ([inwuerde.de][1])

Diese Expertise sollte auf der Startseite noch sichtbarer werden – nicht nur im Bereich „Über mich“.

---

# 9. Seminarseite optimieren

Die Seite enthält viele Informationen, aber sie wirkt eher wie ein Archiv.

Ich würde stattdessen einen klaren Aufbau wählen:

1. Für wen?
2. Welches Problem löst das Seminar?
3. Was ist Recovery?
4. Was lernst du?
5. Wissenschaftliche Grundlage
6. Seminarablauf
7. Termine
8. Erfahrungen ehemaliger Teilnehmender
9. Anmeldung

---

# 10. Interne Verlinkung

Die Website enthält bereits viele hochwertige Inhalte, beispielsweise:

* Bad Herrenalber Modell ([inwuerde.de][2])
* Therapeutic Lifestyle Changes ([inwuerde.de][1])
* KrisenErfahreneProfis ([inwuerde.de][3])

Diese Themen sollten viel stärker miteinander verknüpft werden. Jeder Artikel sollte auf 3–5 thematisch passende Seiten verweisen.

---

# 12. Conversion

Aktuell fehlt ein klarer Handlungsaufruf.

Ich würde auf jeder Seite einen gut sichtbaren CTA platzieren:

> **Kostenlos auf die Interessentenliste setzen lassen**

oder

> **Zum nächsten Recovery-Seminar anmelden**

---

# Das größte Potenzial: Die Website als Wissensplattform

Euer Thema ist fachlich sehr hochwertig und gleichzeitig online noch wenig besetzt. Wenn ihr konsequent hochwertige Inhalte veröffentlicht, könnt ihr euch langfristig als zentrale deutschsprachige Anlaufstelle für Recovery etablieren.

Ein möglicher Content-Hub könnte diese Bereiche bündeln:

* Recovery
* Selbststigmatisierung
* Offenlegung
* Empowerment
* Peer Support
* Genesungsbegleitung
* Gemeindepsychiatrie
* Therapeutic Lifestyle Changes
* Bad Herrenalber Modell
* Krisenerfahrene Profis

Diese Themen greifen bereits vorhandene Inhalte auf und machen die Seite sowohl für Suchmaschinen als auch für Besucher deutlich leichter verständlich. Gleichzeitig würdet ihr euch auf Suchbegriffe konzentrieren, bei denen fachliche Qualität und Erfahrung besonders wichtig sind – und genau dort hat das Projekt aus meiner Sicht seine größte Stärke.

[1]: https://inwuerde.de/?utm_source=chatgpt.com "In Würde zu sich stehen"
[2]: https://inwuerde.de/posts/bhm-teil-1/?utm_source=chatgpt.com "Mein persönlicher Genesungsweg und das Bad Herrenalber Modell (Teil 1)"
[3]: https://inwuerde.de/kep/?utm_source=chatgpt.com "KrisenErfahreneProfis"

# Schritt 6: Schema.org json-LD

So sieht der vollständige Block für die Startseite aus:

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://inwuerde.de/#website",
      "url": "https://inwuerde.de/",
      "name": "In Würde",
      "description": "Seminare zu Recovery, Selbstermächtigung und selbstbestimmtem Umgang mit psychischen Erkrankungen.",
      "inLanguage": "de-DE",
      "publisher": {
        "@id": "https://inwuerde.de/#organization"
      }
    },
    {
      "@type": "Organization",
      "@id": "https://inwuerde.de/#organization",
      "name": "In Würde",
      "url": "https://inwuerde.de/",
      "description": "In Würde bietet Seminare zu Recovery, Selbstermächtigung, Selbststigmatisierung und Offenlegungsentscheidungen bei psychischen Erkrankungen an."
    },
    {
      "@type": "WebPage",
      "@id": "https://inwuerde.de/#webpage",
      "url": "https://inwuerde.de/",
      "name": "In Würde – Recovery-Seminar zur Selbstermächtigung",
      "description": "Das Seminar In Würde zu sich stehen unterstützt Menschen mit psychischen Erkrankungen dabei, selbstbestimmt über den Umgang mit ihrer Diagnose zu entscheiden und ihren Recovery-Prozess zu stärken.",
      "isPartOf": {
        "@id": "https://inwuerde.de/#website"
      },
      "about": {
        "@id": "https://inwuerde.de/#course"
      },
      "inLanguage": "de-DE"
    },
    {
      "@type": "Course",
      "@id": "https://inwuerde.de/#course",
      "url": "https://inwuerde.de/",
      "name": "In Würde zu sich stehen",
      "alternateName": "Recovery-Seminar zur Selbstermächtigung",
      "description": "Ein vierwöchiges Online-Seminar für Menschen mit psychischen Erkrankungen. Die Teilnehmenden setzen sich mit ihrer Identität, Selbststigmatisierung und selbstbestimmten Offenlegungsentscheidungen auseinander und entwickeln ihre persönliche Recovery-Geschichte.",
      "provider": {
        "@id": "https://inwuerde.de/#organization"
      },
      "educationalLevel": "Ohne Vorkenntnisse",
      "inLanguage": "de-DE",
      "timeRequired": "P4W",
      "audience": {
        "@type": "Audience",
        "audienceType": "Menschen mit psychischen Erkrankungen"
      },
      "teaches": [
        "Selbstbestimmter Umgang mit der eigenen Diagnose",
        "Abwägen von Vor- und Nachteilen einer Offenlegung",
        "Umgang mit Selbststigmatisierung",
        "Auswahl geeigneter Vertrauenspersonen",
        "Entwicklung einer persönlichen Recovery-Geschichte",
        "Stärkung von Selbstermächtigung und Selbstbestimmung"
      ]
    }
  ]
}
</script>
```

Diesen vollständigen Block setzt du in `app/index.html` direkt vor:

```html
</head>
```

---

# Schritt 7: Noch keine Termine eintragen

Solange auf der Startseite kein konkreter Termin mit Datum, Uhrzeit und Anmeldemöglichkeit angeboten wird, würde ich **noch keinen `CourseInstance`- oder `Event`-Block** eintragen.

Für einen konkreten Seminartermin wäre später beispielsweise dieser Aufbau möglich:

```json
"hasCourseInstance": {
  "@type": "CourseInstance",
  "name": "In Würde zu sich stehen – Online-Seminar September 2026",
  "courseMode": "online",
  "startDate": "2026-09-07T18:00:00+02:00",
  "endDate": "2026-09-28T20:00:00+02:00",
  "location": {
    "@type": "VirtualLocation",
    "url": "https://inwuerde.de/anmeldung/"
  }
}
```

`CourseInstance` ist für eine konkrete Durchführung eines Kurses vorgesehen. Die Eigenschaft `instructor` gehört beispielsweise zu dieser konkreten Durchführung und nicht zum allgemeinen `Course`. ([Schema.org][6])

Eintragen solltest du das erst, wenn diese Angaben auch sichtbar auf der Website stehen.

---

# Schritt 11: In der Google Search Console prüfen

Nach dem Deployment:

1. Öffne die Google Search Console.
2. Wähle die Property `inwuerde.de`.
3. Öffne **URL-Prüfung**.
4. Gib ein:

```text
https://inwuerde.de/
```

5. Klicke auf **Live-URL testen**.
6. Prüfe, ob Google die Seite abrufen kann.
7. Klicke anschließend auf **Indexierung beantragen**.

Google empfiehlt, nach dem Einbau strukturierter Daten einige Seiten zu veröffentlichen, sie mit der URL-Prüfung zu kontrollieren und anschließend erneut crawlen zu lassen. Die Seite darf dabei nicht durch `robots.txt`, `noindex` oder eine Zugangsbeschränkung blockiert sein. ([Google for Developers][8])

## Drei wichtige Regeln

**Nur Sichtbares auszeichnen:** Alles, was im JSON-LD steht, sollte auch für Besucher auf der Seite erkennbar sein. Keine erfundenen Auszeichnungen, Bewertungen, Teilnehmerzahlen oder wissenschaftlichen Aussagen.

**Keine Therapie behaupten:** Das Angebot sollte als Seminar zu Recovery und Selbstermächtigung beschrieben werden, nicht als medizinische Behandlung oder als Heilversprechen.

**Termine aktuell halten:** Vergangene Termine dürfen nicht dauerhaft als bevorstehende Veranstaltung ausgezeichnet bleiben. Sonst erzählt der Code Google Märchen – und Google mag Märchen nur bei Grimms, nicht im Markup.

[1]: https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data?utm_source=chatgpt.com "Introduction to structured data markup in Google Search"
[2]: https://github.com/inwuerde/inwuerde.de "GitHub - inwuerde/inwuerde.de · GitHub"
[3]: https://schema.org/Organization?utm_source=chatgpt.com "Organization - Schema.org Type"
[4]: https://schema.org/Course?utm_source=chatgpt.com "Course - Schema.org Type"
[5]: https://schema.org/educationalLevel?utm_source=chatgpt.com "educationalLevel - Schema.org Property"
[6]: https://schema.org/CourseInstance?utm_source=chatgpt.com "CourseInstance - Schema.org Type"
[7]: https://developers.google.com/search/docs/appearance/structured-data/search-gallery?utm_source=chatgpt.com "Structured Data Markup that Google Search Supports"
[8]: https://developers.google.com/search/docs/appearance/structured-data/merchant-listing?utm_source=chatgpt.com "How To Add Merchant Listing Structured Data"

## add Course in November für Dezember:

"hasCourseInstance": {
  "@type": "CourseInstance",
  "name": "In Würde zu sich stehen – Online-Seminar Dezember 2026",
  "courseMode": "online",
  "startDate": "2026-12-07T14:00:00+02:00",
  "endDate": "2027-01-06T16:00:00+02:00",
  "location": {
    "@type": "VirtualLocation",
    "url": "https://inwuerde.de/dezember26/"
  }
}
