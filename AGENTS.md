# MASTER AUTOLOAD HANDOFF FOR CODEX

Bu fayl bu repo ucun primary autoload handoff sayilir. Codex her yeni tapshiriqda ilk olaraq bu fayla baxmalidir.

Qayda:
- eger `AGENTS.md` ve `prompt.md` arasinda ferq varsa, autoload source kimi `AGENTS.md` esas gotur
- sonra iki fayli sync et
- her menali deyisiklikden sonra hem `AGENTS.md`, hem de `prompt.md` yenilenmelidir

Bu faylin meqsedi:
- context compacted olanda detail itmesin
- repo-nun harda qaldigi hər dəfə aydin olsun
- dizayn, animasiya, mobil yigmaqliq ve kod arxitekturasi qorunsun
- gelecek Codex hec neyi tesadufen pozmasin

## 1. Project Identity

Layihe based.az ritminde qurulmus premium marketplace mockup-dir.

Texnologiya secimi qesden sade saxlanilib:
- framework yoxdur
- build sistemi yoxdur
- statik `HTML + CSS + JS modules`
- prioritet: maksimum suret, az donma, rahat mobil hiss, asan davam etdirmek

Repo:
- GitHub: `https://github.com/sinnerelix-sudo/digiblue.az`
- Lokal qovluq: `C:\Users\User\Documents\Playground`

Git qeydi:
- lokal branch `master`-dir
- remote branch `main`-dir
- push lazim olanda adeten `git push origin HEAD:main` istifade olunub

Known git tarixi:
- `2ae8070` - `Create premium marketplace mockup`
- `af991b3` - `Add cart and payment flow pages`
- `e889d0b` - `Tighten mobile layout and fix overflow`
- `726bb66` - `Add Codex handoff prompt`
- `675e0d9` - `Strengthen Codex handoff context`
- `7f254c4` - `Add thread continuity rule to handoff`

Vacib:
- `.codex/` qovlugu lokalda var, amma qesden repo-ya daxil edilmeyib
- istifadeci aciq istese, yalniz onda buna toxun

## 2. User Profile And Preferences

Istifadeci Azerbaycan dilinde yazir ve qisa, konkret, praktik netice isteyir.

Istifadeci ucun en vacib prioritetler:
- based.az kimi qurulus
- telefonda yigmaq, six, rahat marketplace hissi
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
- modernlesdirmek bahanesi ile butun UI-ni yeniden yazmaq olmaz

Istifadeci defelerle bildirib ki:
- bu dizayn ve kodlar qorunsun
- GitHub repo-da qeyd olunsun
- handoff fayli her deyisiklikde yenilensin

## 3. What The User Asked From The Beginning

### 3.1 Ilk istek

Istifadeci dedi ki:
- based.az kimi cox sade amma elverisli sayt lazimdir
- animasiya ve buton click hissi mukemmel olsun
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
- rahat, yigmaq, amma cox guzel animasiyali olsun

Istifadeci based.az-dan bir nece mobil ve desktop screenshot gonderdi ve bunlari vizual referens kimi verdi.

### 3.3 GitHub isteyi

Istifadeci aciq dedi:
- sayt yeni versiyada beyenilib
- bunu deyismeden github-da yaz qalsin
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
- elaqe bolmesinde altda mail adresi ekrandan kenara dasir
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

### 3.8 Stronger handoff isteyi

Istifadeci daha sonra dedi:
- handoff daha da guclendirilsin
- basqa chat-e kecid oluna biler
- handoffun icine indiye qeder ne istediyi yazilsin
- menim ne etdiyim yazilsin
- gelecek planlarim yazilsin
- hec ne itmesin

### 3.9 Current thread continuity isteyi

Indi istifadeci dedi:
- bu chat deyisdirilmeyecek, eyni thread-den davam olunacaq
- context automatically compacted olanda detail itmemelidir
- her komanda qabaqcadan handoff faylina baxilsin
- her emrin icrasindan sonra handoff faylina qeyd yazilsin

### 3.10 AGENTS migration isteyi

Istifadeci dedi:
- `prompt.md`-deki melumatlar `agents.md`-e dasinsin
- sebeb: Codex `prompt.md`-ni her defe avtomatik oxumur
- `agents.md` autoload source kimi istifade olunsun

## 4. What Was Built So Far

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
- mobil dock ve alt nav hissi
- telefon maketi ve hero sahesi

### 4.2 Real marketplace mockup conversion

Sonra sayt abstrakt landing-den cixib daha real marketplace mockup-a cevrildi.

Elave olundu:
- based.az ritminde header
- search sahesi
- kateqoriya zolagi
- kampaniya banner bloklari
- mehsul grid-i
- secilen mehsul detail sahesi
- review hissesi
- footer
- canli destek bubble
- drawer menu

Mockup daxilinde istifadecinin istediyi istiqamet goturuldu:
- Instagram xidmetleri
- Netflix hesab(lar)i
- Instagram hesab(lar)i
- ChatGPT Plus
- Canva Pro
- YouTube Premium
- Spotify ve s.

### 4.3 GitHub preservation

Istifadecinin bunu deyismeden github-da yaz isteyine uygun olaraq:
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
- based.az tipli yigcam hissin artirilmasi

Edilen konkret vizual duzelisler:
- footer linklerinde `overflow-wrap` ve `word-break`
- mobile nav daha yigmaq edildi
- floating chat daha kompakt edildi
- `topbar` mobilde gizledildi
- mobile padding ve gap-lar sixlasdirildi
- kartlarin olculeri mobilde yigildi

### 4.6 Handoff and continuity work

Edildi:
- ilk `prompt.md` yaradildi
- sonra o daha da guclendirildi
- thread continuity qaydasi elave olundu
- indi ise eyni melumat `AGENTS.md`-e dasinib ki autoload olunsun

## 5. Current File Map

- [index.html](C:/Users/User/Documents/Playground/index.html)
  - ana marketplace home page
  - header, search, category strip, hero, products, detail, reviews, footer, mobile nav

- [styles.css](C:/Users/User/Documents/Playground/styles.css)
  - butun dizayn sistemi
  - responsive davranis
  - motion, reveal, ripple, glow stilleri
  - mobile compact rules
  - footer overflow fixleri
  - floating chat ve mobile nav sizing

- [script.js](C:/Users/User/Documents/Playground/script.js)
  - ana sehifede product select ve detail update
  - option render
  - indi al ve sebete at hereketleri

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
  - drawer open close
  - cart badge total sync
  - toast stack

- [cart.html](C:/Users/User/Documents/Playground/cart.html)
  - sebetin UI sehifesi

- [cart.js](C:/Users/User/Documents/Playground/cart.js)
  - sebet render
  - say artir azalt
  - sil
  - clear cart

- [payment.html](C:/Users/User/Documents/Playground/payment.html)
  - checkout ve odenis UI

- [payment.js](C:/Users/User/Documents/Playground/payment.js)
  - checkout summary
  - payment method UI
  - order submit

- [success.html](C:/Users/User/Documents/Playground/success.html)
  - ugurlu sifaris sehifesi

- [success.js](C:/Users/User/Documents/Playground/success.js)
  - son order melumatini gostermek

- [prompt.md](C:/Users/User/Documents/Playground/prompt.md)
  - backup handoff ve manual continuity fayli

- [AGENTS.md](C:/Users/User/Documents/Playground/AGENTS.md)
  - primary autoload handoff
  - bundan sonra her task ucun ilk baxilacaq fayl

## 6. Current Functionality

Hazirda mockup-da bunlar isleyir:
- mehsul kart grid-i
- secilen karta gore detail sahesinin yenilenmesi
- option ve muddet secimi
- sebete elave etme
- indi al axini
- localStorage-da sebetin saxlanmasi
- sebet count ve subtotal sync
- cart page
- miqdar artirma ve azaltma
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

Bu layihe hazirda tam production commerce deyil, premium UI mockup plus working client-side flow seviyyesindedir.

## 7. Visual System That Must Be Preserved

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
- status green: `#46d39c`
- yumsaq muted soft text tonlari

Sari accent bu sayt-in kimliyidir. Basqa ana rengle evez etme.

### 7.3 Surface language

Qorunmali hiss:
- qaranliq premium panel
- nazik border
- yumsaq shadow
- kontrollu glow
- radius-lar yumsaq ve premium
- butonlar toxunulasi gorunmelidir

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
- campaign hero
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
- cox informasiyali amma qarisiq olmayan ekran
- qisa spacing
- rahat axtaris
- ekranda cox bosluq olmadan premium ritm

## 9. Known Reference Material

Istifadeci based.az-a aid bir nece screenshot gonderib. Bunlar vacib vizual referensdir:
- `C:\Users\User\Pictures\Yeni qovluq\1000401245.jpg`
- `C:\Users\User\Pictures\Yeni qovluq\1000401246.jpg`
- `C:\Users\User\Pictures\Yeni qovluq\1000401247.jpg`
- `C:\Users\User\Pictures\Yeni qovluq\1000401248.jpg`
- `C:\Users\User\Pictures\Yeni qovluq\1000401249.jpg`

Thread daxilinde daha once hem mobil, hem desktop based.az screenshot-lari de gonderilib.

Bu screenshot-lardan cixan esas netice:
- telefon UI-si yigcamdir
- axtaris ve ust nav qisa ve rahatdir
- mehsul kartlari boyuk amma six ritmde duzulub
- alt nav mobilde cox vacibdir
- chat support elementi vardir
- detail sehifede mehsul secimi, qiymet ve CTA aydindir

## 10. QA And Verification Workflow

Her yeni deyisiklikden sonra minimum bunlari yoxla.

### 10.1 Local run

Bu repo static-dir. Adeten bele run edilib:

```powershell
python -m http.server 4173
```

Sonra:
- `http://127.0.0.1:4173/index.html`
- `http://127.0.0.1:4173/cart.html`
- `http://127.0.0.1:4173/payment.html`
- `http://127.0.0.1:4173/success.html`

### 10.2 Phone access

Bir merhelede telefon ucun lokal IP verilib:
- `http://192.168.100.8:4173`

Bu IP deyisken ola biler. Gelecek Codex yeni IP-ni dynamic olaraq tapmalidir, bunu hardcoded dogma qebul etmesin.

### 10.3 Functional checks

Minimum yoxla:
- butun HTML sehifeleri acilir
- JS parse olunur
- home page product secimi isleyir
- `Sebete at` isleyir
- `Indi al` payment axinina aparir
- cart total count duz hesablanir
- payment to success axini qirilmayib
- mobile nav gorunur
- footer overflow etmir
- floating chat kenara cixmir

## 11. Git And Change Management Rules

Bu repo-da isleyende bu qaydalari pozma:
- istifadeci istemeyince dizayni kaskin deyisme
- istifadeci istemeyince framework elave etme
- tesadufi refactor etme
- basqasinin deyisikliyini geri alma
- `.codex/` qovlugunu ozbascina commit etme
- her menali deyisiklikden sonra `AGENTS.md` yenile
- sonra `prompt.md`-ni de sync et
- mumkundurse git history temiz, konkret ve niyyetli qalsin

Praktik qeyd:
- bu masinda git bezen `.git/index.lock` permission problemi vere biler
- bele halda shell icin escalation teleb oluna biler

## 12. What Must NOT Be Changed

Etme:
- React, Next, Vite elave etme
- Tailwind-e kecirme
- font degisdirme
- sari ana accent-i deyisdirme
- qaranliq premium sistemi pozma
- floating canli destek elementini silme
- mobile nav-i legv etme
- based.az tipli yigcamligi itirme
- animasiya dilini zeyifletme
- buton click hissini azaltma
- butun CSS-i temizlemek adiyla strukturu dagitma
- localStorage sebet axinini qirma

Bu layihe yeniden dusunulmus design concept istemir. Bu layihe mevcut premium mockup-u eyni ruhla genisletmek ister.

## 13. Suggested Next Steps That Were Already Discussed

Men bu thread boyunca istifadeciye bir nece gelecek addim teklifi vermisdim.

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

Cart payment flow-dan sonra teklif edilen istiqametler:
- login profile sehifesi
- sifaris tarixcesi

### 13.4 Hala meqbul olan gelecek roadmap

Eger istifadeci davam etmek istese, bu ardicilliq uyqun olar:
1. Product detail ucun ayrica sehife
2. Search results ve category sehifesi
3. Filter ve sorting
4. Login ve account mockup
5. Order history
6. Vercel deploy
7. Figma sync

Amma butun bunlar eyni vizual dilde edilmelidir.

## 14. Current Working Assumptions

Gelecek Codex bunlari default qebul ede biler:
- istifadeci hereketli, premium, tunde UI sevir
- o, based.az mobil ritmini esas benchmark sayir
- sadelik deyende darixdirici sade UI demir
- o, real gore bileceyi mockup isteyir
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
- User-in yeni continuity qaydasi elave edildi: bu thread-den davam edilir, her tapshirigin evvelinde handoff fayli oxunur, her emrden ve ya menali komanda batch-indan sonra handoff fayli yenilenir.
- `prompt.md`-deki esas kontekst `AGENTS.md`-e dasindi ki Codex onu autoload source kimi her defe oxusun.

## 16. Mandatory Update Rule For Future Codex

Eger repo-da her hansisa degisiklik etdinse:
- evvel `AGENTS.md`-ni oxu
- sonra ishi gor
- sonra `AGENTS.md`-ni yenile
- sonra `prompt.md`-ni sync et
- `Current Change Log` hissesine yeni qeyd elave et

Bu qayda istifadecinin birbasa isteyidir. Pozma.

## 17. Session Continuity Rule For This Thread

Istifadeci aciq sekilde bildirib ki bu eyni thread-den davam edilacak ve `Context automatically compacted` halinda detal itmemelidir.

Bu thread ucun mecburi qayda:
- her yeni user tapshirigindan once `AGENTS.md` oxu
- sonra ehtiyac varsa `prompt.md`-ye de bax
- her komanda ve ya her menali komanda batch-indan sonra continuity note yaz
- hec bir vacib niyyet, qerar, bug, fix, yoxlama neticesi ve ya user tercihi yalniz chat mesajlarinda qalmasin

Praktik icra formasi:
- once `AGENTS.md`-ni oxu
- sonra komandalari ve ya fayl deyisikliklerini et
- sonra `AGENTS.md`-de execution note elave et
- sonra `prompt.md`-ni sync et

## 18. Session Execution Notes

Bu hisse bu thread daxilinde son vacib addimlari ve user-in operational qaydalarini qisa qeyd etmek ucundur.

### 2026-04-05

- User bildirdi ki chat deyisdirilmeyecek, eyni thread-den davam edilecek.
- User xususi qayda qoydu ki her tapshiriga ve her emre baslamazdan once handoff fayli oxunmalidir.
- User xususi qayda qoydu ki her emrin icrasindan sonra handoff faylina qeyd dusulmelidir.
- Meqsed odur ki `Context automatically compacted` olanda hec bir detail itmesin.
- Bu operational continuity qaydasi elave olundu.
- `prompt.md` guclendirildi ve continuity source kimi istifade edildi.
- Sonra eyni melumat `AGENTS.md`-e dasindi ki Codex onu autoload etsin.
- Daha sonra `prompt.md` backup mirror faylina cevrildi ve primary source kimi `AGENTS.md` secildi.

## 19. Copy-Paste Prompt For The Next Codex

Asagidaki metni basqa chat-deki Codex-e birbasa vermek olar:

> Bu repo-da ishe baslamazdan once `C:\Users\User\Documents\Playground\AGENTS.md` faylini tam oxu ve oradaki butun qaydalara emel et. Bu layihe based.az ritminde, amma daha premium animasiya ve click feedback-e sahib statik `HTML + CSS + JS` marketplace mockup-dir. Istifadeci mevcut dizayni beyənib, ona gore reng sistemini, fontlari (`Manrope`, `Sora`), sari CTA-lari, dark premium panel sistemini, purple support glow-u, ripple, magnetic, reveal animasiyalarini ve mobil yigcamligi qoru. Hech bir random redesign etme, framework elave etme, mobile qurulusu pozma, based.az referensinden uzaqlasma. Repo-da indiye qeder neler istendiyini, neler quruldugunu, commit tarixini, bug fixleri, future roadmap-i ve qorunmali hisseleri `AGENTS.md` daxilinde goreceksen. Her yeni deyisiklikden sonra `AGENTS.md`-ni de mutleq yenile ve `prompt.md` ile sync saxla. Bu thread daxilinde her tapshirigin evvelinde `AGENTS.md`-ni oxu ve her emrden ve ya menali komanda batch-indan sonra execution note yaz.

## 20. Final Reminder To The Next Codex

Bu repo-da esasy ugur kriteriyasi budur:
- istifadeci acib baxanda he, bu ele eyni saytdir, sadece daha tamamlanib desin

Yox eger:
- bu niye tamam ferqli olub
- animasiyalar niye zeyifleyib
- mobil niye based.az kimi yigcam deyil

kimi reaksiya yaradacaqsa, demeli dogru istiqametde getmirsan.
