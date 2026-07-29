import { useEffect } from "react";
import "vanilla-cookieconsent/dist/cookieconsent.css";
import * as CookieConsent from "vanilla-cookieconsent";

export default function CookieConsentBanner() {
  useEffect(() => {
    CookieConsent.run({
      guiOptions: {
        consentModal: {
          layout: "box",
          position: "bottom right",
        },
        preferencesModal: {
          layout: "box",
        },
      },

      categories: {
        necessary: {
          enabled: true,
          readOnly: true,
        },
        analytics: {},
      },

      language: {
        default: "de",
        translations: {
          de: {
            consentModal: {
              title: "🍪 Cookies auf inwuerde.de",
              description:
                "Wir verwenden technisch notwendige Cookies. Analyse-Cookies werden nur mit Ihrer Zustimmung aktiviert.",
              acceptAllBtn: "Alle akzeptieren",
              acceptNecessaryBtn: "Nur notwendige",
              showPreferencesBtn: "Einstellungen",
            },

            preferencesModal: {
              title: "Cookie-Einstellungen",
              acceptAllBtn: "Alle akzeptieren",
              acceptNecessaryBtn: "Nur notwendige",
              savePreferencesBtn: "Auswahl speichern",

              sections: [
                {
                  title: "Notwendige Cookies",
                  description:
                    "Diese Cookies sind für den Betrieb der Website erforderlich.",
                  linkedCategory: "necessary",
                },
                {
                  title: "Analyse",
                  description:
                    "Hilft uns, die Website zu verbessern.",
                  linkedCategory: "analytics",
                },
                {
                  title: "Datenschutz",
                  description:
                    'Weitere Informationen finden Sie in unserer <a href="/datenschutz">Datenschutzerklärung</a>.',
                },
              ],
            },
          },
        },
      },

      onConsent: ({ cookie }) => {
        if (cookie.categories.includes("analytics")) {

          const script = document.createElement("script");
          script.src = "https://www.googletagmanager.com/gtag/js?id=G-XR6J4J6ZRF";
          script.async = true;
          document.head.appendChild(script);

          script.onload = () => {
            window.dataLayer = window.dataLayer || [];

            window.gtag = function (...args: unknown[]) {
              window.dataLayer.push(args);
            };


            window.gtag(
              "js",
              new Date()
            );

            window.gtag(
              "config",
              "G-XR6J4J6ZRF"
            );
          };
        }      
      },

      onChange: ({ cookie }) => {
        if (cookie.categories.includes("analytics")) {
          console.log("Analytics aktiviert");
        }
      },
    });
  }, []);

  return null;
}