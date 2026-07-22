# tobiasknobloch.com

Quelltext meiner persönlichen Website. Zwei Seiten, kein Build-Schritt, kein
Backend — ausgeliefert über GitHub Pages.

**Live:** [tobiasknobloch.com](https://tobiasknobloch.com) · **Nebenan:**
[tobiasknobloch.com/w95](https://tobiasknobloch.com/w95/)

---

## Was hier liegt

| Pfad | Inhalt |
|---|---|
| `index.html` | Die Website. Eine einzige Datei — HTML, CSS und JavaScript inline, Bilder als Data-URI eingebettet. Daher die 135 KB. |
| `w95/` | Ein Nachrichten-Dashboard im Stil von Windows 95. Eigenständige Seite, ebenfalls eine Datei. |
| `w95/assets/fonts/` | W95FA und Fira Code, lokal eingebunden statt von einem Font-Dienst geladen. |
| `CNAME` | Die Domain, an die GitHub Pages ausliefert. |
| `.nojekyll` | Schaltet Jekyll ab. Ohne diese Datei ignoriert Pages Ordner, deren Name mit einem Unterstrich beginnt. |

---

## Warum eine einzige Datei

Die Seite hat keine Abhängigkeiten, kein npm, kein Framework und keinen
Build-Schritt. `index.html` im Browser öffnen genügt — lokal wie im Netz läuft
exakt dieselbe Datei. Das ist keine Sparmaßnahme, sondern der Punkt: Was keinen
Build braucht, kann auch keinen kaputten Build haben, und in fünf Jahren
funktioniert es noch.

Die drei Screenshots der Kartenanwendung stecken als WebP-Data-URI direkt im
HTML. Deshalb ist die Datei größer als üblich und lädt trotzdem in einem
einzigen Request.

---

## Das Dashboard unter /w95/

Ein persönlicher Nachrichten-Aggregator, der aussieht wie Windows 95 —
verschiebbare Fenster, Taskleiste, Startmenü. Dahinter siebzehn RSS-Quellen und
ein Lesemodus, der Artikel aus fremden Seiten herausschält.

Weil eine Seite ohne Backend fremde Inhalte normalerweise nicht laden darf
(CORS), laufen mehrere Proxys parallel als Wettrennen; der erste gültige Treffer
gewinnt. Blockseiten werden erkannt und disqualifiziert, damit sie das Rennen
nicht gewinnen. Scheitern alle, übernimmt ein Reader-Dienst mit echtem Browser.

---

## Änderungen

```bash
# Bearbeiten, committen, pushen — Pages baut automatisch
git add -A && git commit -m "..." && git push
```

Nach etwa einer Minute ist die Änderung live. Es gibt keinen Deploy-Schritt und
keine Pipeline: Was im `main`-Branch liegt, ist die Website.

---

## Technisch

- Statisches Hosting über GitHub Pages, HTTPS per Let's Encrypt
- Domain und DNS bei IONOS, A-Records zeigen auf GitHub Pages
- Keine Analytics, keine Cookies, keine externen Skripte
