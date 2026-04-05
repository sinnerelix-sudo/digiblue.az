# PROMPT MIRROR FOR CODEX

Bu fayl backup mirror handoff sayilir.

Primary autoload source artiq:
- [AGENTS.md](C:/Users/User/Documents/Playground/AGENTS.md)

Qayda:
- her yeni task ucun evvelce `AGENTS.md` oxu
- sonra ehtiyac varsa bu fayla bax
- eger `AGENTS.md` ve `prompt.md` arasinda ferq varsa `AGENTS.md` esas gotur
- her menali deyisiklikden sonra evvelce `AGENTS.md`-ni yenile, sonra bu fayli onunla sync et

## Core Project Summary

Layihe based.az ritminde qurulmus premium marketplace mockup-dir.

Texnologiya:
- framework yoxdur
- build sistemi yoxdur
- statik `HTML + CSS + JS modules`

Repo:
- GitHub: `https://github.com/sinnerelix-sudo/digiblue.az`
- Lokal qovluq: `C:\Users\User\Documents\Playground`

Primary files:
- [AGENTS.md](C:/Users/User/Documents/Playground/AGENTS.md)
- [index.html](C:/Users/User/Documents/Playground/index.html)
- [styles.css](C:/Users/User/Documents/Playground/styles.css)
- [script.js](C:/Users/User/Documents/Playground/script.js)
- [store.js](C:/Users/User/Documents/Playground/store.js)
- [ui.js](C:/Users/User/Documents/Playground/ui.js)
- [cart.html](C:/Users/User/Documents/Playground/cart.html)
- [cart.js](C:/Users/User/Documents/Playground/cart.js)
- [payment.html](C:/Users/User/Documents/Playground/payment.html)
- [payment.js](C:/Users/User/Documents/Playground/payment.js)
- [success.html](C:/Users/User/Documents/Playground/success.html)
- [success.js](C:/Users/User/Documents/Playground/success.js)

## Non-Negotiable Rules

Qorunmalidir:
- based.az tipli yigcam mobil ritm
- `Manrope` ve `Sora` fontlari
- dark premium panel sistemi
- sari CTA sistemi
- purple support glow
- ripple, magnetic, reveal, glow hissi
- mobilde overflow olmamasi

Edilmemelidir:
- random redesign
- framework elavesi
- Tailwind-e kecid
- ana reng sisteminin dagidilmasi
- animasiyalari zeyifletmek
- mobile nav-i silmek

## Continuity Rule

Istifadeci xususi olaraq deyib:
- bu thread-den davam edilir
- `Context automatically compacted` olanda detail itmemelidir
- her taskdan once handoff oxunmalidir
- her menali isden sonra handoff fayllari yenilenmelidir

Bu repo ucun praktik qayda:
1. Evvelce [AGENTS.md](C:/Users/User/Documents/Playground/AGENTS.md)-ni oxu.
2. Sonra ishi gor.
3. Sonra [AGENTS.md](C:/Users/User/Documents/Playground/AGENTS.md)-de execution note ve ya change qeyd et.
4. Sonra [prompt.md](C:/Users/User/Documents/Playground/prompt.md)-ni sync et.

## Current Direction

Hazirki mockup-da bunlar var:
- home marketplace page
- mehsul kartlari
- secilen mehsul detail paneli
- cart flow
- payment flow
- success page
- drawer
- floating support
- mobile nav

Gelecek islerde eyni dizayn dili daxilinde ola biler:
- ayrica product detail page
- search results
- category page
- filter ve sorting
- login ve account mockup
- order history
- Vercel deploy
- Figma sync

## Sync Note

Bu fayl [AGENTS.md](C:/Users/User/Documents/Playground/AGENTS.md)-in mirror nusesidir.

Latest sync context:
- `prompt.md`-deki handoff melumatlari `AGENTS.md`-e dasinib.
- `AGENTS.md` primary autoload fayl kimi qebul olunub.
- Bu fayl backup pointer ve mirror statusuna kecirilib.
- `npm run dev` yoxlanildi.
- Birbasa `npm` PowerShell execution policy sebebile islemədi.
- `npm.cmd run dev` ile tekrar yoxlananda `package.json` olmadigi ucun `ENOENT` qaytardi.
- Netice: repo statikdir, bu qovluqda `npm run dev` axini yoxdur.
- Telefon baxisi ucun lokal server qaldirildi.
- Aktiv lokal IPv4 `192.168.100.8` olaraq gorundu.
- `py -m http.server 4173 --bind 0.0.0.0` ile server qaldirildi.
- `127.0.0.1:4173/index.html` ve `192.168.100.8:4173/index.html` her ikisi `200` qaytardi.
- Home page daha funksional hala getirildi.
- `index.html`, `styles.css` ve `script.js` yenilendi.
- Live search, real filterler, sort select, netice sayi, bos netice state-i ve son baxilanlar hissesi elave edildi.
- Mobil rahatliq ucun detail action hissesi daha rahat sticky hala getirildi.
- `index.html`, `cart.html`, `payment.html`, `success.html` yeniden `200` ile yoxlanildi.
- `script.js` sintaksisi local olaraq temiz kecdi.
