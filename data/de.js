const deWords = [
  {
    "id": 1,
    "text": "Apfel"
  },
  {
    "id": 2,
    "text": "Banane"
  },
  {
    "id": 3,
    "text": "Katze"
  },
  {
    "id": 4,
    "text": "Hund"
  },
  {
    "id": 5,
    "text": "Sonne"
  },
  {
    "id": 6,
    "text": "Wasser"
  },
  {
    "id": 7,
    "text": "Buch"
  },
  {
    "id": 8,
    "text": "Haus"
  },
  {
    "id": 9,
    "text": "Auto"
  },
  {
    "id": 10,
    "text": "Freund"
  },
  {
    "id": 11,
    "text": "Liebe"
  },
  {
    "id": 12,
    "text": "Glücklich"
  },
  {
    "id": 13,
    "text": "Essen"
  },
  {
    "id": 14,
    "text": "Trinken"
  },
  {
    "id": 15,
    "text": "Schlafen"
  },
  {
    "id": 16,
    "text": "Laufen"
  },
  {
    "id": 17,
    "text": "Musik"
  },
  {
    "id": 18,
    "text": "Computer"
  },
  {
    "id": 19,
    "text": "Stadt"
  },
  {
    "id": 20,
    "text": "Reisen"
  },
  {
    "id": 21,
    "text": "Schule"
  },
  {
    "id": 22,
    "text": "Lehrer"
  },
  {
    "id": 23,
    "text": "Student"
  },
  {
    "id": 24,
    "text": "Familie"
  },
  {
    "id": 25,
    "text": "Mutter"
  },
  {
    "id": 26,
    "text": "Vater"
  },
  {
    "id": 27,
    "text": "Bruder"
  },
  {
    "id": 28,
    "text": "Schwester"
  },
  {
    "id": 29,
    "text": "Tisch"
  },
  {
    "id": 30,
    "text": "Stuhl"
  },
  {
    "id": 31,
    "text": "Tür"
  },
  {
    "id": 32,
    "text": "Fenster"
  },
  {
    "id": 33,
    "text": "Zeit"
  },
  {
    "id": 34,
    "text": "Tag"
  },
  {
    "id": 35,
    "text": "Nacht"
  },
  {
    "id": 36,
    "text": "Morgen"
  },
  {
    "id": 37,
    "text": "Abend"
  },
  {
    "id": 38,
    "text": "Ja"
  },
  {
    "id": 39,
    "text": "Nein"
  },
  {
    "id": 40,
    "text": "Bitte"
  },
  {
    "id": 41,
    "text": "Danke"
  },
  {
    "id": 42,
    "text": "Hallo"
  },
  {
    "id": 43,
    "text": "Auf Wiedersehen"
  },
  {
    "id": 44,
    "text": "Essen"
  },
  {
    "id": 45,
    "text": "Geld"
  },
  {
    "id": 46,
    "text": "Arbeit"
  },
  {
    "id": 47,
    "text": "Spielen"
  },
  {
    "id": 48,
    "text": "Klein"
  },
  {
    "id": 49,
    "text": "Groß"
  },
  {
    "id": 50,
    "text": "Gut"
  },
  {
    "id": 51,
    "text": "Schlecht"
  },
  {
    "id": 52,
    "text": "Neu"
  },
  {
    "id": 53,
    "text": "Alt"
  },
  {
    "id": 54,
    "text": "Heiß"
  },
  {
    "id": 55,
    "text": "Kalt"
  },
  {
    "id": 56,
    "text": "Rot"
  },
  {
    "id": 57,
    "text": "Blau"
  },
  {
    "id": 58,
    "text": "Grün"
  },
  {
    "id": 59,
    "text": "Gelb"
  },
  {
    "id": 60,
    "text": "Schwarz"
  },
  {
    "id": 61,
    "text": "Weiß"
  },
  {
    "id": 62,
    "text": "Eins"
  },
  {
    "id": 63,
    "text": "Zwei"
  },
  {
    "id": 64,
    "text": "Drei"
  },
  {
    "id": 65,
    "text": "Vier"
  },
  {
    "id": 66,
    "text": "Fünf"
  },
  {
    "id": 67,
    "text": "Sechs"
  },
  {
    "id": 68,
    "text": "Sieben"
  },
  {
    "id": 69,
    "text": "Acht"
  },
  {
    "id": 70,
    "text": "Neun"
  },
  {
    "id": 71,
    "text": "Zehn"
  },
  {
    "id": 72,
    "text": "Hundert"
  },
  {
    "id": 73,
    "text": "Tausend"
  },
  {
    "id": 74,
    "text": "Erste(r/s)"
  },
  {
    "id": 75,
    "text": "Zweite(r/s)"
  },
  {
    "id": 76,
    "text": "Dritte(r/s)"
  },
  {
    "id": 77,
    "text": "Gestern"
  },
  {
    "id": 78,
    "text": "Heute"
  },
  {
    "id": 79,
    "text": "Morgen"
  },
  {
    "id": 80,
    "text": "Woche"
  },
  {
    "id": 81,
    "text": "Monat"
  },
  {
    "id": 82,
    "text": "Jahr"
  },
  {
    "id": 83,
    "text": "Januar"
  },
  {
    "id": 84,
    "text": "Februar"
  },
  {
    "id": 85,
    "text": "März"
  },
  {
    "id": 86,
    "text": "April"
  },
  {
    "id": 87,
    "text": "Mai"
  },
  {
    "id": 88,
    "text": "Juni"
  },
  {
    "id": 89,
    "text": "Juli"
  },
  {
    "id": 90,
    "text": "August"
  },
  {
    "id": 91,
    "text": "September"
  },
  {
    "id": 92,
    "text": "Oktober"
  },
  {
    "id": 93,
    "text": "November"
  },
  {
    "id": 94,
    "text": "Dezember"
  },
  {
    "id": 95,
    "text": "Montag"
  },
  {
    "id": 96,
    "text": "Dienstag"
  },
  {
    "id": 97,
    "text": "Mittwoch"
  },
  {
    "id": 98,
    "text": "Donnerstag"
  },
  {
    "id": 99,
    "text": "Freitag"
  },
  {
    "id": 100,
    "text": "Samstag"
  },
  {
    "id": 101,
    "text": "Sonntag"
  },
  {
    "id": 102,
    "text": "Glücklich"
  },
  {
    "id": 103,
    "text": "Traurig"
  },
  {
    "id": 104,
    "text": "Wütend"
  },
  {
    "id": 105,
    "text": "Aufgeregt"
  },
  {
    "id": 106,
    "text": "Müde"
  },
  {
    "id": 107,
    "text": "Hungrig"
  },
  {
    "id": 108,
    "text": "Durstig"
  },
  {
    "id": 109,
    "text": "Krank"
  },
  {
    "id": 110,
    "text": "Arzt"
  },
  {
    "id": 111,
    "text": "Krankenhaus"
  },
  {
    "id": 112,
    "text": "Apotheke"
  },
  {
    "id": 113,
    "text": "Park"
  },
  {
    "id": 114,
    "text": "Museum"
  },
  {
    "id": 115,
    "text": "Bibliothek"
  },
  {
    "id": 116,
    "text": "Restaurant"
  },
  {
    "id": 117,
    "text": "Café"
  },
  {
    "id": 118,
    "text": "Supermarkt"
  },
  {
    "id": 119,
    "text": "Bank"
  },
  {
    "id": 120,
    "text": "Postamt"
  },
  {
    "id": 121,
    "text": "Polizeiwache"
  },
  {
    "id": 122,
    "text": "Feuerwache"
  },
  {
    "id": 123,
    "text": "Flughafen"
  },
  {
    "id": 124,
    "text": "Bahnhof"
  },
  {
    "id": 125,
    "text": "Bushaltestelle"
  },
  {
    "id": 126,
    "text": "Straße"
  },
  {
    "id": 127,
    "text": "Weg"
  },
  {
    "id": 128,
    "text": "Brücke"
  },
  {
    "id": 129,
    "text": "Platz"
  },
  {
    "id": 130,
    "text": "Garten"
  },
  {
    "id": 131,
    "text": "Baum"
  },
  {
    "id": 132,
    "text": "Blume"
  },
  {
    "id": 133,
    "text": "Gras"
  },
  {
    "id": 134,
    "text": "Himmel"
  },
  {
    "id": 135,
    "text": "Wolke"
  },
  {
    "id": 136,
    "text": "Regen"
  },
  {
    "id": 137,
    "text": "Schnee"
  },
  {
    "id": 138,
    "text": "Wind"
  },
  {
    "id": 139,
    "text": "Norden"
  },
  {
    "id": 140,
    "text": "Süden"
  },
  {
    "id": 141,
    "text": "Osten"
  },
  {
    "id": 142,
    "text": "Westen"
  },
  {
    "id": 143,
    "text": "Oben"
  },
  {
    "id": 144,
    "text": "Unten"
  },
  {
    "id": 145,
    "text": "Links"
  },
  {
    "id": 146,
    "text": "Rechts"
  },
  {
    "id": 147,
    "text": "Hier"
  },
  {
    "id": 148,
    "text": "Dort"
  },
  {
    "id": 149,
    "text": "Innen"
  },
  {
    "id": 150,
    "text": "Außen"
  },
  {
    "id": 151,
    "text": "Wissen"
  },
  {
    "id": 152,
    "text": "Wissenschaft"
  },
  {
    "id": 153,
    "text": "Geschichte"
  },
  {
    "id": 154,
    "text": "Kultur"
  },
  {
    "id": 155,
    "text": "Wirtschaft"
  },
  {
    "id": 156,
    "text": "Politik"
  },
  {
    "id": 157,
    "text": "Gesellschaft"
  },
  {
    "id": 158,
    "text": "Umwelt"
  },
  {
    "id": 159,
    "text": "Technologie"
  },
  {
    "id": 160,
    "text": "Kunst"
  },
  {
    "id": 161,
    "text": "Sport"
  },
  {
    "id": 162,
    "text": "Gesundheit"
  },
  {
    "id": 163,
    "text": "Bildung"
  },
  {
    "id": 164,
    "text": "Kommunikation"
  },
  {
    "id": 165,
    "text": "Zukunft"
  },
  {
    "id": 166,
    "text": "Vergangenheit"
  },
  {
    "id": 167,
    "text": "Gegenwart"
  },
  {
    "id": 168,
    "text": "Problem"
  },
  {
    "id": 169,
    "text": "Lösung"
  },
  {
    "id": 170,
    "text": "Gelegenheit"
  },
  {
    "id": 171,
    "text": "Herausforderung"
  },
  {
    "id": 172,
    "text": "Erfolg"
  },
  {
    "id": 173,
    "text": "Misserfolg"
  },
  {
    "id": 174,
    "text": "Entscheidung"
  },
  {
    "id": 175,
    "text": "Meinung"
  },
  {
    "id": 176,
    "text": "Erfahrung"
  },
  {
    "id": 177,
    "text": "Phantasie"
  },
  {
    "id": 178,
    "text": "Kreativität"
  },
  {
    "id": 179,
    "text": "Weisheit"
  },
  {
    "id": 180,
    "text": "Mut"
  },
  {
    "id": 181,
    "text": "Geduld"
  },
  {
    "id": 182,
    "text": "Freiheit"
  },
  {
    "id": 183,
    "text": "Gerechtigkeit"
  },
  {
    "id": 184,
    "text": "Frieden"
  },
  {
    "id": 185,
    "text": "Krieg"
  },
  {
    "id": 186,
    "text": "Wahrheit"
  },
  {
    "id": 187,
    "text": "Lüge"
  },
  {
    "id": 188,
    "text": "Hoffnung"
  },
  {
    "id": 189,
    "text": "Angst"
  },
  {
    "id": 190,
    "text": "Traum"
  },
  {
    "id": 191,
    "text": "Realität"
  },
  {
    "id": 192,
    "text": "Ändern"
  },
  {
    "id": 193,
    "text": "Entwickeln"
  },
  {
    "id": 194,
    "text": "Verbessern"
  },
  {
    "id": 195,
    "text": "Verstehen"
  },
  {
    "id": 196,
    "text": "Erklären"
  },
  {
    "id": 197,
    "text": "Entdecken"
  },
  {
    "id": 198,
    "text": "Erschaffen"
  },
  {
    "id": 199,
    "text": "Analysieren"
  },
  {
    "id": 200,
    "text": "Synthetisieren"
  },
  {
    "id": 201,
    "text": "Démocratie"
  },
  {
    "id": 202,
    "text": "Philosophie"
  },
  {
    "id": 203,
    "text": "Littérature"
  },
  {
    "id": 204,
    "text": "Global"
  },
  {
    "id": 205,
    "text": "Local"
  },
  {
    "id": 206,
    "text": "Individu"
  },
  {
    "id": 207,
    "text": "Communauté"
  },
  {
    "id": 208,
    "text": "Défi"
  },
  {
    "id": 209,
    "text": "Solution"
  },
  {
    "id": 210,
    "text": "Processus"
  },
  {
    "id": 211,
    "text": "Système"
  },
  {
    "id": 212,
    "text": "Structure"
  },
  {
    "id": 213,
    "text": "Fonction"
  },
  {
    "id": 214,
    "text": "Bénéfice"
  },
  {
    "id": 215,
    "text": "Conséquence"
  },
  {
    "id": 216,
    "text": "Responsabilité"
  },
  {
    "id": 217,
    "text": "Opportunité"
  },
  {
    "id": 218,
    "text": "Stratégie"
  },
  {
    "id": 219,
    "text": "Tactique"
  },
  {
    "id": 220,
    "text": "Innovation"
  },
  {
    "id": 201,
    "text": "Demokratie"
  },
  {
    "id": 202,
    "text": "Philosophie"
  },
  {
    "id": 203,
    "text": "Literatur"
  },
  {
    "id": 204,
    "text": "Global"
  },
  {
    "id": 205,
    "text": "Lokal"
  },
  {
    "id": 206,
    "text": "Individuum"
  },
  {
    "id": 207,
    "text": "Gemeinschaft"
  },
  {
    "id": 208,
    "text": "Herausforderung"
  },
  {
    "id": 209,
    "text": "Lösung"
  },
  {
    "id": 210,
    "text": "Prozess"
  },
  {
    "id": 211,
    "text": "System"
  },
  {
    "id": 212,
    "text": "Struktur"
  },
  {
    "id": 213,
    "text": "Funktion"
  },
  {
    "id": 214,
    "text": "Nutzen"
  },
  {
    "id": 215,
    "text": "Konsequenz"
  },
  {
    "id": 216,
    "text": "Verantwortung"
  },
  {
    "id": 217,
    "text": "Möglichkeit"
  },
  {
    "id": 218,
    "text": "Strategie"
  },
  {
    "id": 219,
    "text": "Taktik"
  },
  {
    "id": 220,
    "text": "Innovation"
  },
  {
    "id": 221,
    "text": "Bild"
  },
  {
    "id": 222,
    "text": "Klang"
  },
  {
    "id": 223,
    "text": "Geruch"
  },
  {
    "id": 224,
    "text": "Geschmack"
  },
  {
    "id": 225,
    "text": "Berührung"
  },
  {
    "id": 226,
    "text": "Stimme"
  },
  {
    "id": 227,
    "text": "Stille"
  },
  {
    "id": 228,
    "text": "Lärm"
  },
  {
    "id": 229,
    "text": "Licht"
  },
  {
    "id": 230,
    "text": "Dunkelheit"
  },
  {
    "id": 231,
    "text": "Weich"
  },
  {
    "id": 232,
    "text": "Hart"
  },
  {
    "id": 233,
    "text": "Glatt"
  },
  {
    "id": 234,
    "text": "Rau"
  },
  {
    "id": 235,
    "text": "Süß"
  },
  {
    "id": 236,
    "text": "Sauer"
  },
  {
    "id": 237,
    "text": "Bitter"
  },
  {
    "id": 238,
    "text": "Salzig"
  },
  {
    "id": 239,
    "text": "Scharf"
  },
  {
    "id": 240,
    "text": "Sauber"
  },
  {
    "id": 241,
    "text": "Schmutzig"
  },
  {
    "id": 242,
    "text": "Leer"
  },
  {
    "id": 243,
    "text": "Voll"
  },
  {
    "id": 244,
    "text": "Eng"
  },
  {
    "id": 245,
    "text": "Weit"
  },
  {
    "id": 246,
    "text": "Tief"
  },
  {
    "id": 247,
    "text": "Flach"
  },
  {
    "id": 248,
    "text": "Schnell"
  },
  {
    "id": 249,
    "text": "Langsam"
  },
  {
    "id": 250,
    "text": "Schwierig"
  },
  { "id": 251, "text": "Einfach" },
{ "id": 252, "text": "Möglich" },
{ "id": 253, "text": "Unmöglich" },
{ "id": 254, "text": "Wahr" },
{ "id": 255, "text": "Falsch" },
{ "id": 256, "text": "Real" },
{ "id": 257, "text": "Gefälscht" },
{ "id": 258, "text": "Öffentlich" },
{ "id": 259, "text": "Privat" },
{ "id": 260, "text": "Besonders" },
{ "id": 261, "text": "Allgemein" },
{ "id": 262, "text": "Wichtig" },
{ "id": 263, "text": "Notwendig" },
{ "id": 264, "text": "Nützlich" },
{ "id": 265, "text": "Schädlich" },
{ "id": 266, "text": "Stark" },
{ "id": 267, "text": "Schwach" },
{ "id": 268, "text": "Hoch" },
{ "id": 269, "text": "Niedrig" },
{ "id": 270, "text": "Nah" },
{ "id": 271, "text": "Weit" },
{ "id": 272, "text": "Früh" },
{ "id": 273, "text": "Spät" },
{ "id": 274, "text": "Bereit" },
{ "id": 275, "text": "Beenden" },
{ "id": 276, "text": "Beginnen" },
{ "id": 277, "text": "Fortsetzen" },
{ "id": 278, "text": "Stoppen" },
{ "id": 279, "text": "Zustimmen" },
{ "id": 280, "text": "Ablehnen" },
{ "id": 281, "text": "Projekt" },
{ "id": 282, "text": "Forschung" },
{ "id": 283, "text": "Analyse" },
{ "id": 284, "text": "Synthese" },
{ "id": 285, "text": "Konzept" },
{ "id": 286, "text": "Prinzip" },
{ "id": 287, "text": "Methode" },
{ "id": 288, "text": "Ansatz" },
{ "id": 289, "text": "Strategie" },
{ "id": 290, "text": "Ergebnis" },
{ "id": 291, "text": "Erreichen" },
{ "id": 292, "text": "Bewerten" },
{ "id": 293, "text": "Umsetzen" },
{ "id": 294, "text": "Vorschlagen" },
{ "id": 295, "text": "Lösen" },
{ "id": 296, "text": "Verhandeln" },
{ "id": 297, "text": "Zusammenarbeiten" },
{ "id": 298, "text": "Innovieren" },
{ "id": 299, "text": "Anpassen" },
{ "id": 300, "text": "Integrieren" },
{ "id": 301, "text": "Komplex" },
{ "id": 302, "text": "Einfach" },
{ "id": 303, "text": "Effektiv" },
{ "id": 304, "text": "Effizient" },
{ "id": 305, "text": "Kritisch" },
{ "id": 306, "text": "Kreativ" },
{ "id": 307, "text": "Flexibel" },
{ "id": 308, "text": "Starr" },
{ "id": 309, "text": "Potenziell" },
{ "id": 310, "text": "Tatsächlich" },
{ "id": 311, "text": "Theorie" },
{ "id": 312, "text": "Hypothese" },
{ "id": 313, "text": "Beweis" },
{ "id": 314, "text": "Fazit" },
{ "id": 315, "text": "Argument" },
{ "id": 316, "text": "Perspektive" },
{ "id": 317, "text": "Interpretation" },
{ "id": 318, "text": "Bedeutung" },
{ "id": 319, "text": "Kommunizieren" },
{ "id": 320, "text": "Diskutieren" },
{ "id": 321, "text": "Präsentieren" },
{ "id": 322, "text": "Berichten" },
{ "id": 323, "text": "Zusammenfassen" },
{ "id": 324, "text": "Kritisieren" },
{ "id": 325, "text": "Empfehlen" },
{ "id": 326, "text": "Beraten" },
{ "id": 327, "text": "Unterstützen" },
{ "id": 328, "text": "Widersprechen" },
{ "id": 329, "text": "Bedeutend" },
{ "id": 330, "text": "Geringfügig" },
{ "id": 331, "text": "Groß/Haupt-" },
{ "id": 332, "text": "Genau" },
{ "id": 333, "text": "Ungenau" },
{ "id": 334, "text": "Zuverlässig" },
{ "id": 335, "text": "Unzuverlässig" },
{ "id": 336, "text": "Objektiv" },
{ "id": 337, "text": "Subjektiv" },
{ "id": 338, "text": "Werkzeug" },
{ "id": 339, "text": "Technik" },
{ "id": 340, "text": "Vorgehensweise" },
{ "id": 341, "text": "Kapital" },
{ "id": 342, "text": "Investition" },
{ "id": 343, "text": "Markt" },
{ "id": 344, "text": "Angebot" },
{ "id": 345, "text": "Nachfrage" },
{ "id": 346, "text": "Umsatz" },
{ "id": 347, "text": "Kosten" },
{ "id": 348, "text": "Gewinn" },
{ "id": 349, "text": "Verlust" },
{ "id": 350, "text": "Wirtschaft" },
{ "id": 351, "text": "Politik" },
{ "id": 352, "text": "Regulierung" },
{ "id": 353, "text": "Innovation" },
{ "id": 354, "text": "Entwicklung" },
{ "id": 355, "text": "Nachhaltigkeit" },
{ "id": 356, "text": "Umwelt" },
{ "id": 357, "text": "Ökologie" },
{ "id": 358, "text": "Klima" },
{ "id": 359, "text": "Ressource" },
{ "id": 360, "text": "Energie" },
{ "id": 361, "text": "Technologie" },
{ "id": 362, "text": "Digital" },
{ "id": 363, "text": "Cyber" },
{ "id": 364, "text": "Künstlich" },
{ "id": 365, "text": "Intelligenz" },
{ "id": 366, "text": "Netzwerk" },
{ "id": 367, "text": "Daten" },
{ "id": 368, "text": "Sicherheit" },
{ "id": 369, "text": "Privatsphäre" },
{ "id": 370, "text": "Algorithmus" },
{ "id": 371, "text": "Küche" },
{ "id": 372, "text": "Schlafzimmer" },
{ "id": 373, "text": "Badezimmer" },
{ "id": 374, "text": "Wohnzimmer" },
{ "id": 375, "text": "Garten" },
{ "id": 376, "text": "Möbel" },
{ "id": 377, "text": "Kleidung" },
{ "id": 378, "text": "Schuhe" },
{ "id": 379, "text": "Essen" },
{ "id": 380, "text": "Gemüse" },
{ "id": 381, "text": "Obst" },
{ "id": 382, "text": "Fleisch" },
{ "id": 383, "text": "Brot" },
{ "id": 384, "text": "Reis" },
{ "id": 385, "text": "Nudeln" },
{ "id": 386, "text": "Suppe" },
{ "id": 387, "text": "Salat" },
{ "id": 388, "text": "Frühstück" },
{ "id": 389, "text": "Mittagessen" },
{ "id": 390, "text": "Abendessen" },
{ "id": 391, "text": "Geschäft" },
{ "id": 392, "text": "Kaufen" },
{ "id": 393, "text": "Verkaufen" },
{ "id": 394, "text": "Bezahlen" },
{ "id": 395, "text": "Preis" },
{ "id": 396, "text": "Rabatt" },
{ "id": 397, "text": "Kunde" },
{ "id": 398, "text": "Service" },
{ "id": 399, "text": "Hilfe" },
{ "id": 400, "text": "Problem" },
{ "id": 401, "text": "Freund" },
{ "id": 402, "text": "Familie" },
{ "id": 403, "text": "Nachbar" },
{ "id": 404, "text": "Kollege" },
{ "id": 405, "text": "Lehrer" },
{ "id": 406, "text": "Schüler" },
{ "id": 407, "text": "Arzt" },
{ "id": 408, "text": "Krankenschwester" },
{ "id": 409, "text": "Polizei" },
{ "id": 410, "text": "Feuerwehrmann" },
{ "id": 411, "text": "Bank" },
{ "id": 412, "text": "Post" },
{ "id": 413, "text": "Krankenhaus" },
{ "id": 414, "text": "Schule" },
{ "id": 415, "text": "Bibliothek" },
{ "id": 416, "text": "Park" },
{ "id": 417, "text": "Museum" },
{ "id": 418, "text": "Kino" },
{ "id": 419, "text": "Restaurant" },
{ "id": 420, "text": "Café" },
{ "id": 421, "text": "Auto" },
{ "id": 422, "text": "Bus" },
{ "id": 423, "text": "Zug" },
{ "id": 424, "text": "Flugzeug" },
{ "id": 425, "text": "Fahrrad" },
{ "id": 426, "text": "Gehen" },
{ "id": 427, "text": "Fahren" },
{ "id": 428, "text": "Reisen" },
{ "id": 429, "text": "Feiertag" },
{ "id": 430, "text": "Urlaub" },
{ "id": 431, "text": "Wissen" },
{ "id": 432, "text": "Denken" },
{ "id": 433, "text": "Fühlen" },
{ "id": 434, "text": "Sehen" },
{ "id": 435, "text": "Hören" },
{ "id": 436, "text": "Berühren" },
{ "id": 437, "text": "Schmecken" },
{ "id": 438, "text": "Riechen" },
{ "id": 439, "text": "Sprechen" },
{ "id": 440, "text": "Zuhören" },
{ "id": 441, "text": "Schauen" },
{ "id": 442, "text": "Ansehen" },
{ "id": 443, "text": "Zeigen" },
{ "id": 444, "text": "Verstecken" },
{ "id": 445, "text": "Öffnen" },
{ "id": 446, "text": "Schließen" },
{ "id": 447, "text": "Drücken" },
{ "id": 448, "text": "Ziehen" },
{ "id": 449, "text": "Heben" },
{ "id": 450, "text": "Fallen lassen" },
{ "id": 451, "text": "Warten" },
{ "id": 452, "text": "Eilen" },
{ "id": 453, "text": "Sich erinnern" },
{ "id": 454, "text": "Vergessen" },
{ "id": 455, "text": "Lernen" },
{ "id": 456, "text": "Lehren" },
{ "id": 457, "text": "Studieren" },
{ "id": 458, "text": "Üben" },
{ "id": 459, "text": "Verbessern" },
{ "id": 460, "text": "Verstehen" },
{ "id": 461, "text": "Fragen" },
{ "id": 462, "text": "Antworten" },
{ "id": 463, "text": "Erzählen" },
{ "id": 464, "text": "Erklären" },
{ "id": 465, "text": "Beschreiben" },
{ "id": 466, "text": "Vorschlagen" },
{ "id": 467, "text": "Zustimmen" },
{ "id": 468, "text": "Ablehnen" },
{ "id": 469, "text": "Versprechen" },
{ "id": 470, "text": "Ablehnen" },
{ "id": 471, "text": "Akzeptieren" },
{ "id": 472, "text": "Ablehnen" },
{ "id": 473, "text": "Wählen" },
{ "id": 474, "text": "Entscheiden" },
{ "id": 475, "text": "Lösen" },
{ "id": 476, "text": "Erstellen" },
{ "id": 477, "text": "Zerstören" },
{ "id": 478, "text": "Bauen" },
{ "id": 479, "text": "Brechen" },
{ "id": 480, "text": "Reparieren" },
{ "id": 481, "text": "Geben" },
{ "id": 482, "text": "Empfangen" },
{ "id": 483, "text": "Senden" },
{ "id": 484, "text": "Liefern" },
{ "id": 485, "text": "Zurückgeben" },
{ "id": 486, "text": "Ausleihen" },
{ "id": 487, "text": "Verleihen" },
{ "id": 488, "text": "Gewinnen" },
{ "id": 489, "text": "Verlieren" },
{ "id": 490, "text": "Besiegen" },
{ "id": 491, "text": "Starten" },
{ "id": 492, "text": "Beenden" },
{ "id": 493, "text": "Vorher" },
{ "id": 494, "text": "Nachher" },
{ "id": 495, "text": "Immer" },
{ "id": 496, "text": "Nie" },
{ "id": 497, "text": "Oft" },
{ "id": 498, "text": "Selten" },
{ "id": 499, "text": "Manchmal" },
{ "id": 500, "text": "Normalerweise" }
]
export { deWords };