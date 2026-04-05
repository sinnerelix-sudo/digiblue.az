# MASTER HANDOFF FOR NEXT CODEX

Bu fayl bu repo ucun "single source of truth" sayilir. Basqa chat-de ve ya basqa hesabda acilan Codex bu fayli tam oxumadan ishe baslamasin.

Bu handoffun meqsedi:
- istifadeci ile indiye qeder olan butun konteksti itirmemek
- repo-nun harda qaldigini tam gostermek
- dizayn, animasiya, mobil yigmaqliq ve kod arxitekturasini qorumaq
- gelecek Codex-in hec neyi tesadufen pozmamasini temin etmek

Bu faylda yazilanlar qorunmalidir. Her yeni deyisiklikden sonra bu fayl da mutleq yenilenmelidir.

## 1. Project Identity

Layihe based.az ritminde qurulmus premium marketplace mockup-dir.

Texnologiya secimi qesden sade saxlanilib:
- framework yoxdur
- build sistemi yoxdur
- statik `HTML + CSS + JS modules`
- prioritet: maksimum suret, az donma, rahat mobil hiss, asan davam etdirme

Repo:
- GitHub: `https://github.com/sinnerelix-sudo/digiblue.az`
- Lokal qovluq: `C:\Users\User\Documents\Playground`

Vacib git qeydi:
- lokal branch `master`-dir
- remote branch `main`-dir
- push lazim olanda adeten `git push origin HEAD:main` istifade olunub

Hazirki known git tarixi:
- `2ae8070` - `Create premium marketplace mockup`
- `af991b3` - `Add cart and payment flow pages`
- `e889d0b` - `Tighten mobile layout and fix overflow`
- `726bb66` - `Add Codex handoff prompt`

Vacib:
- `.codex/` qovlugu lokalda var, amma qesden repo-ya daxil edilmeyib
- istifadeci aciq istese, yalniz onda buna toxun

## 2. User Profile And Preferences

Istifadeci Azerbaycan dilinde yazir ve qisa, konkret, praktik netice isteyir.

Istifadeci ucun en vacib prioritetler:
- based.az kimi qurulus
- telefonda yigmaq, sixed, rahat marketplace hissi
- desktop-da da premium ve temiz gorunus
- cox guclu animasiyalar
- buton click hissi yuksek seviyyede olsun
- sayt cox suretli olsun
- donma ve yuklenme hissi olmasin
- mockup real satisa hazir gorunsun

Istifadeci mevcut dizayni beyendi. Ona gore:
- random redesign etmek olmaz
- fontlari deyismek olmaz
- reng sistemini dagitmaq olmaz
- animasiyalari zeyifletmek olmaz
- based.az referensinden uzaqlasmaq olmaz
- "modernlesdirmek" bahanesi ile butun UI-ni yeniden yazmaq olmaz

Istifadeci defelerle bildirib ki:
- bu dizayn ve kodlar qorunsun
- GitHub repo-da qeyd olunsun
- handoff fayli her deyisiklikde yenilensin

## 3. What The User Asked From The Beginning

Bu hissede indiye qeder istifadecinin esas istedikleri ardicil toplanib.

### 3.1 Ilk istek

Istifadeci dedi ki:
- based.az kimi cox sade amma elverisli sayt lazimdir
- animasiya ve buton click hissi "mukemmel" olsun
- saytda hereket cox suretli olsun
- donma, loading hissi olmasin
- telefon ekraninda mobil app kimi hiss olunsun
- desktop-da da cox guzel gorunsun

### 3.2 Sonra gelen aydinlasdirma

Istifadeci ilk premium landing kimi hazirlanan versiyani beyendi, amma dedi ki:
- bunu abstrakt hero kimi saxlama
- real gore bileceyi marketplace mockup olsun
- icinde mehsullar olsun
- based.az-dan ilham almaq olar
- satilan seyler: instagram xidmeti, netflix hesabi, instagram hesabi ve s.
- sayt qurulusu based.az kimi olsun
- rahat, yigmaq, ama cox guzel animasiyali olsun

Istifadeci based.az-dan bir nece mobil ve desktop screenshot gonderdi ve bunlari vizual referens kimi verdi.

### 3.3 GitHub isdeyi

Istifadeci aciq dedi:
- sayt yeni versiyada beyenilib
- "bunu deyismeden github-da yaz qalsin"
- butun deyisiklikler repo tarixcesinde qalsin

### 3.4 New pages isteyi

Sonra istifadeci dedi:
- diger sehifeleri de yarat
- misal ucun sebete elave etme
- sebet
- odenis sehifesi
- ve s.

### 3.5 Telefonla baxis isteyi

Istifadeci dedi:
- localhost-a IP ver
- eyni internetdedirik
- telefonda baxmaq isteyir

### 3.6 Mobil xeta reportu

Sonra istifadeci konkret xetalar dedi:
- Elaqe bolmesinde altda mail adresi ekrandan kenara dasir
- bu ekranin enini boyudur
- canli destek butonu altda kenardadir
- nav bar da kenardadir
- based.az-in telefondaki yigcam qurulusunu esas gotur
- sayt based.az kimi yigmaq ve mukemmel olsun

### 3.7 Handoff isteyi

Istifadeci sonra dedi:
- bir `prompt.md` yaz
- bu repo-nu basqa Codex yeniden yaza bilsin
- harda qaldigini gorsun
- neler edildiyini bilsin
- animasiya, dizayn, font, reng, kod dili qorunsun
- basqa hesabdaki Codex hecneyi deyismesin
- her yenilikde bu `.md` fayli yenilensin

### 3.8 Bu anki son istek

Indi istifadeci dedi:
- handoff daha da guclendirilsin
- basqa chat-e kecilir
- handoffun icine indiye qeder ne istediyi yazilsin
- menim ne etdiyim yazilsin
- gelecek planlarim yazilsin
- hecne itməsin

Bu fayl mehz buna gore tam genislendirildi.

## 4. What Was Built So Far

Bu hissede menim bu thread boyunca etdiyim isler ardicil olaraq yazilir.

### 4.1 Initial premium concept

Ilk olaraq sade, performansli, dependency-siz premium landing/mockup quruldu:
- `index.html`
- `styles.css`
- `script.js`

Esas xususiyyetler:
- guclu animasiya dili
- yumsaq reveal hereketleri
- ripple effect
- magnetic button hissi
- premium qaranliq palitra
- mobil dock/alt nav hissi
- telefon maketi ve hero sahesi

Bu versiya daha "vibe" ve "direction" kimi idi.

### 4.2 Real marketplace mockup conversion

Istifadecinin ikinci isteyine gore sayt abstrakt landing-den cixib daha real marketplace mockup-a cevrildi.

Elave olundu:
- based.az ritminde header
- search sahesi
- kateqoriya zolagi
- kampaniya/banner bloklari
- mehsul grid-i
- secilen mehsul detail sahesi
- review hissesi
- footer
- canli destek bubble
- drawer/menu

Mehsul tipleri kimi mockup daxilinde istifadecinin dediyi istiqamet goturuldu:
- Instagram xidmetleri
- Netflix hesab(lar)i
- Instagram hesab(lar)i
- ChatGPT Plus
- Canva Pro
- YouTube Premium
- Spotify ve s.

### 4.3 GitHub preservation

Istifadecinin "deyismeden github-da yaz" isteyine uygun olaraq:
- fayllar git history-e salindi
- repo-ya push olundu
- local design qorundu

### 4.4 Cart and checkout flow

Sonra tam mini store axini yaradildi:
- [index.html](C:/Users/User/Documents/Playground/index.html)
- [cart.html](C:/Users/User/Documents/Playground/cart.html)
- [payment.html](C:/Users/User/Documents/Playground/payment.html)
- [success.html](C:/Users/User/Documents/Playground/success.html)

JS architecture bolundu:
- [store.js](C:/Users/User/Documents/Playground/store.js)
  - mehsul datasi
  - cart localStorage
  - totals
  - mock order create
  - last order state
- [ui.js](C:/Users/User/Documents/Playground/ui.js)
  - ripple
  - magnetic hover
  - reveal
  - glow tracking
  - drawer state
  - cart counter sync
  - toast

Elave page scriptleri:
- [script.js](C:/Users/User/Documents/Playground/script.js)
- [cart.js](C:/Users/User/Documents/Playground/cart.js)
- [payment.js](C:/Users/User/Documents/Playground/payment.js)
- [success.js](C:/Users/User/Documents/Playground/success.js)

### 4.5 Mobile overflow bug fixes

Istifadecinin report etdiyi mobil xetalara gore fix edildi:
- footer mail linkinin ekrandan dasmasi
- floating canli destek bubble-in viewport-dan cixmasi
- mobile nav-in kenara dasmasi
- mobil spacing-in cox bos qalmasi
- umumilikde based.az tipli yigcam hissin artirilmasi

Edilen konkret vizual duzelisler:
- footer linklerinde `overflow-wrap` ve `word-break`
- mobile nav daha yigmaq
- floating chat daha kompakt
- `topbar` mobilde gizledildi
- mobile padding ve gap-lar sixlasdirildi
- kartlarin olculeri mobilde yigildi

### 4.6 Initial handoff file

Istifadecinin isteyine gore ilk `prompt.md` yaradildi:
- repo status
- dizayn qaydalari
- mobil qaydalar
- arxitektura
- funksionalliq
- change log
- basqa Codex ucun copy-paste prompt

### 4.7 Current stronger handoff

Bu cari update ile `prompt.md` daha da guclendirildi:
- tam tarixce yazildi
- istifadecinin istedikleri tek-tek toplandi
- menim etdiyim isler ardicil qeyd olundu
- commit tarixi elave edildi
- gelecek planlar toplandi
- repo workflow ve qorunmali hisseler daha da deqiqlesdirildi

### 4.8 Support and run history

Bu thread boyunca istifadeciye run ve baxis ucun bu destek de verilib:
- `index.html`-i birbasa acmaq varianti deyilib
- daha duzgun baxis ucun `python -m http.server 4173` deyilib
- user bir merhelede xeta gorduyunu bildirib
- aydinlasdirilib ki bu static saytdir, `npm install` vacib deyil
- lokal server qaldirilib ve HTTP `200` cavabi yoxlanilib
- sehifelerin acildigi ve JS parse olundugu yoxlanilib
- telefondan baxmaq ucun lokal IP de verilib

## 5. Current File Map

Bu hissede repo-daki esas fayllarin rolu yazilir.

- [index.html](C:/Users/User/Documents/Playground/index.html)
  - ana marketplace/home page
  - header, search, category strip, hero/campaign, products, detail, reviews, footer, mobile nav

- [styles.css](C:/Users/User/Documents/Playground/styles.css)
  - butun dizayn sistemi
  - responsive davranis
  - motion/reveal/ripple/glow stilleri
  - mobile compact rules
  - footer overflow fixleri
  - floating chat ve mobile nav sizing

- [script.js](C:/Users/User/Documents/Playground/script.js)
  - ana sehifede product select/detail update
  - option render
  - "indi al" ve "sebete at" hereketleri

- [store.js](C:/Users/User/Documents/Playground/store.js)
  - product catalog source
  - cart localStorage helpers
  - totals hesablamasi
  - order generation
  - last order state

- [ui.js](C:/Users/User/Documents/Playground/ui.js)
  - ripple effect
  - magnetic movement
  - glow tracking
  - reveal observer
  - drawer open/close
  - cart badge/total sync
  - toast stack

- [cart.html](C:/Users/User/Documents/Playground/cart.html)
  - sebetin UI sehifesi

- [cart.js](C:/Users/User/Documents/Playground/cart.js)
  - sebet render
  - say artir/azalt
  - sil
  - clear cart

- [payment.html](C:/Users/User/Documents/Playground/payment.html)
  - checkout/odenis UI

- [payment.js](C:/Users/User/Documents/Playground/payment.js)
  - checkout summary
  - payment method UI
  - order submit

- [success.html](C:/Users/User/Documents/Playground/success.html)
  - ugurlu sifaris sehifesi

- [success.js](C:/Users/User/Documents/Playground/success.js)
  - son order melumatini gostermek

- [prompt.md](C:/Users/User/Documents/Playground/prompt.md)
  - bu handoff fayli
  - her deyisiklikde yenilenmelidir

## 6. Current Functionality

Hazirda mockup-da bunlar isleyir:
- mehsul kart grid-i
- secilen karta gore detail sahesinin yenilenmesi
- option/muddet secimi
- sebete elave etme
- "indi al" axini
- localStorage-da sebetin saxlanmasi
- sebet count ve subtotal sync
- cart page
- miqdar artirma/azaltma
- mehsul silme
- cart temizleme
- payment page
- mock payment method secimi
- order create
- success page
- mobile drawer
- ripple
- magnetic button feel
- glow hover
- reveal animations
- toast
- mobile alt nav

Bu layihe hazirda tam production commerce deyil, premium UI mockup + working client-side flow seviyyesindedir.

## 7. Visual System That Must Be Preserved

Bu hissede dizayn dili konkret yazilir. Gelecek Codex bunlari esla dagitmamalidir.

### 7.1 Fonts

Qorunmali fontlar:
- `Manrope` - esas UI metnleri
- `Sora` - basliqlar, kimlik, guclu vizual vurgu

Font degisikliyi etme.

### 7.2 Colors

Qorunmali reng sistemi:
- near-black fon
- tunde premium panel tonlari
- esas sari accent: `#ffc71d`
- ikinci sari ton: `#ffde67`
- support purple: `#7565ff`
- yasimtil status green: `#46d39c`
- yumsaq muted bej/soft text tonlari

Sari accent bu site-in kimliyidir. Basqa ana rengle evez etme.

### 7.3 Surface language

Qorunmali hiss:
- qaranliq premium panel
- nazik border
- yumsaq shadow
- kontrollu glow
- radius-lar yumsaq ve premium
- butonlar toxunulası gorunmelidir

Glassmorphism ve ya cox aciq fonlu yeni dizayn diline kecme.

### 7.4 Motion language

Qorunmali motion hiss:
- reveal hereketleri
- ripple click
- magnetic hover
- support orb pulse
- yumsaq drift
- hereketler guclu olsun, amma agirma vermesin

Animasiyalari silme ve ya cansiz etme. Istifadeci bunlari xususi olaraq beyənib.

### 7.5 Layout language

Qorunmali kompozisiya:
- sticky header
- axtaris sahesi
- category strip
- campaign/hero
- mehsul kart grid-i
- secilen mehsul detail paneli
- review hissesi
- footer
- floating support
- alt mobile nav

Yeni sehife elave olunarsa, bu eyni sistemin icinde qurulmalidir.

## 8. Mobile Rules That Must Not Break

Bu layihe ucun mobil prioritetdir.

Qaydalar:
- `320px` eninde horizontal overflow olmamalidir
- footer linkleri ekrandan kenara dashmamalidir
- floating chat viewport daxilinde qalmalidir
- mobile nav tam ekrana sigmalidir
- mobile nav label-lari qisa saxlanmalidir
- search, header, kartlar based.az kimi yigcam hiss etmelidir
- spacing desktop-un kicildilmis versiyasi kimi yox, mobil ucun ayrica sixlasdirilmis olmalidir

Based.az referensinden alinmali hiss:
- cox informasiyali ama qarisiq olmayan ekran
- qisa spacing
- rahat axtaris
- ekranda cox bosluq olmadan premium ritm

## 9. Known Reference Material

Istifadeci based.az-a aid bir nece screenshot gonderib. Bunlar bu handoff ucun vacib vizual referensdir:

- `C:\Users\User\Pictures\Yeni qovluq\1000401245.jpg`
- `C:\Users\User\Pictures\Yeni qovluq\1000401246.jpg`
- `C:\Users\User\Pictures\Yeni qovluq\1000401247.jpg`
- `C:\Users\User\Pictures\Yeni qovluq\1000401248.jpg`
- `C:\Users\User\Pictures\Yeni qovluq\1000401249.jpg`

Thread daxilinde daha once hem mobil, hem desktop based.az screenshot-lari de gonderilib.

Bu screenshot-lardan cixan esas netice:
- telefon UI-si yigcamdir
- axtaris ve ust nav qisa ve rahatdir
- mehsul kartlari boyuk amma sixed ritmde duzulub
- alt nav mobilde cox vacibdir
- chat/support elementi vardir
- detail sehifede mehsul secimi, qiymet ve CTA aydindir

## 10. QA And Verification Workflow

Hər yeni deyisiklikden sonra minimum bunlari yoxla:

### 10.1 Local run

Bu repo static-dir. Adeten belə run edilib:

```powershell
python -m http.server 4173
```

Sonra:
- `http://127.0.0.1:4173/index.html`
- `http://127.0.0.1:4173/cart.html`
- `http://127.0.0.1:4173/payment.html`
- `http://127.0.0.1:4173/success.html`

### 10.2 Phone access

Bir merheledə telefon ucun lokal IP verilib:
- `http://192.168.100.8:4173`

Bu IP deyişken ola biler. Gelecek Codex yeni IP-ni dynamic olaraq tapmalidir, bunu hardcoded dogma qebul etməsin.

### 10.3 Functional checks

Minimum yoxla:
- butun HTML sehifeleri acilir
- JS parse olunur
- home page product secimi isleyir
- `Sebete at` isleyir
- `Indi al` payment axinina aparir
- cart total/count duz hesablanir
- payment -> success axini qirilmayib
- mobile nav gorunur
- footer overflow etmir
- floating chat kenara cixmir

## 11. Git And Change Management Rules

Bu repo-da isleyende bu qaydalari pozma:

- istifadeci istemeyince dizayni kaskin deyişme
- istifadeci istemeyince framework elave etme
- tesadufi refactor etme
- basqasinin deyisikliyini geri alma
- `.codex/` qovlugunu ozbascina commit etme
- her menali deyisiklikden sonra `prompt.md` yenile
- mumkundurse git history temiz, konkret ve niyyetli qalsin

Praktik qeyd:
- bu masinda git bəzən `.git/index.lock` permission problemi vere biler
- bele halda shell icin escalation teleb oluna biler

## 12. What Must NOT Be Changed

Bu hisseni qisa yox, sert qayda kimi oxu.

Etme:
- React / Next / Vite elave etme
- Tailwind-e kecirme
- font degisdirme
- sari ana accent-i deyisdirme
- qaranliq premium sistemi pozma
- floating canli destek elementini silme
- mobile nav-i legv etme
- based.az tipli yigcamliyi itirme
- animasiya dilini zeyifletme
- buton click hissini azaltma
- butun CSS-i "temizlemek" adiyla strukturu dagitma
- localStorage sebet axinini qirma

Bu layihe "yeniden dusunulmus design concept" istemir. Bu layihe "mevcut premium mockup-u eyni ruhla genisletmek" ister.

## 13. Suggested Next Steps That Were Already Discussed

Men bu thread boyunca istifadeciye bir nece gelecek addim teklifi vermisdim. Bunlar bu kontekstin bir hissesidir.

### 13.1 First-stage future ideas

Ilk versiyadan sonra teklif edilen istiqametler:
- real brand name ve mehsullara uygunlasdirma
- coxsehifeli tam sayt
- Vercel deploy
- GitHub push
- Figma dizayna cevirme

Qeyd:
- GitHub hissesi edilib
- qalanlari tam edilmeyib

### 13.2 Marketplace-stage future ideas

Real marketplace mockup qurulduqdan sonra teklif edilen istiqametler:
- ayrica mehsul detail sehifesi
- real filter sistemi
- daha cox mehsul karti

### 13.3 Commerce-flow stage ideas

Cart/payment flow-dan sonra teklif edilen istiqametler:
- login/profile sehifesi
- sifaris tarixcesi

### 13.4 Hala meqbul olan gelecek roadmap

Eger istifadeci davam etmek istese, bu ardicilliq uyqun olar:
1. Product detail ucun ayrica sehife
2. Search results / category sehifesi
3. Filter ve sorting
4. Login / account mockup
5. Order history
6. Vercel deploy
7. Figma sync

Amma butun bunlar eyni vizual dilde edilmelidir.

## 14. Current Working Assumptions

Gelecek Codex bunlari default qebul ede biler:
- istifadeci hereketli, premium, tunde UI sevir
- o, based.az mobil ritmini esas benchmark sayir
- sadelik deyende darixdirici sade UI demir
- o, "real gore bileceyi mockup" isteyir
- layiheni framework-siz saxlamaq indiki halda duzgun qerardir
- design consistency burada technical novelty-den daha vacibdir

## 15. Current Change Log

Bu hisseni her menali update-den sonra yenile.

### 2026-04-05

- Initial premium static mockup yaradildi.
- Marketplace qurulusu based.az ritmine yaxinlasdirildi.
- Real mehsul mockup-lari ve detail hissesi elave edildi.
- GitHub repo-ya push edildi.
- Cart, payment, success sehifeleri elave edildi.
- Shared `store.js` ve `ui.js` sistemi quruldu.
- Mobil overflow problemleri duzeldildi.
- Footer mail, floating support ve mobile nav compact edildi.
- Ilk `prompt.md` handoff fayli yaradildi.
- Bu fayl daha da guclendirildi ve tam tarixce, user intent, qurulan seyler ve gelecek planlar daxil edildi.

## 16. Mandatory Update Rule For Future Codex

Eger repo-da her hansisa degisiklik etdinse:
- `prompt.md`-ni de yenile
- `Current Change Log` hissesine yeni qeyd elave et
- vacibdirsə yeni sectionlara da kontekst yaz

Bu qayda istifadecinin birbasa isteyidir. Pozma.

## 17. Copy-Paste Prompt For The Next Codex

Asagidaki metni basqa chat-deki Codex-e birbasa vermek olar:

> Bu repo-da ishe baslamazdan once `C:\Users\User\Documents\Playground\prompt.md` faylini tam oxu ve oradaki butun qaydalara emel et. Bu layihə based.az ritminde, amma daha premium animasiya ve click feedback-e sahib statik `HTML + CSS + JS` marketplace mockup-dir. Istifadeci mevcut dizayni beyənib, ona gore reng sistemini, fontlari (`Manrope`, `Sora`), sari CTA-lari, dark premium panel sistemini, purple support glow-u, ripple/magnetic/reveal animasiyalarini ve mobil yigcamligi qoru. Hech bir random redesign etme, framework elave etme, mobile qurulusu pozma, based.az referensinden uzaqlasma. Repo-da indiye qeder neler istendiyini, neler quruldugunu, commit tarixini, bug fixleri, future roadmap-i ve qorunmali hisseleri `prompt.md` daxilinde goreceksen. Her yeni deyisiklikden sonra `prompt.md`-ni de mutleq yenile. Mevcut sayti basqa sayt kimi deyil, eyni dilde genisleyen premium marketplace kimi davam etdir.

## 18. Final Reminder To The Next Codex

Bu repo-da esasy ugur kriteriyasi budur:
- istifadeci acib baxanda "he, bu ele eyni saytdir, sadece daha tamamlanib" desin

Yox eger:
- "bu niye tamam ferqli olub?"
- "animasiyalar niye zeyifleyib?"
- "mobil niye based.az kimi yigcam deyil?"

kimi reaksiya yaradacaqsa, demeli dogru istiqametde getmirsən.
