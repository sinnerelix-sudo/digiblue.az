# Codex Handoff Prompt

Bu fayl növbəti Codex üçün məcburi başlanğıc kontekstidir. Bu repo üzərində işləməyə başlamazdan əvvəl bu faylı tam oxu və burada yazılan vizual/texniki qərarlardan kənara çıxma.

## Qısa Status

- Repo tipi: framework-siz, statik, yüksək performanslı `HTML + CSS + JS modules`
- Cari commit: `e889d0b`
- GitHub repo: `https://github.com/sinnerelix-sudo/digiblue.az`
- Lokal run:
  - `python -m http.server 4173`
  - əsas səhifə: `http://127.0.0.1:4173/index.html`
- Bu repo artıq GitHub-a push olunub. Yeni dəyişiklik edəndə `prompt.md` də yenilənməlidir və dəyişiklik GitHub tarixçəsinə yazılmalıdır.

## Ən Vacib Qayda

İstifadəçi bu dizaynı və animasiya dilini bəyənib. İstifadəçi açıq şəkildə istəməyibsə:

- mövcud rəng sistemini dəyişmə
- animasiyaları zəiflətmə
- layout-u başqa dizayn dilinə keçirmə
- framework əlavə etmə
- fontları dəyişmə
- “modernləşdirmək” adı ilə bütün UI-ni yenidən dizayn etmə
- based.az referensindən uzaqlaşma

Məqsəd bu repo-nu “başqa sayt etmək” deyil. Məqsəd hazır vizual dilin içində qalaraq inkişaf etdirməkdir.

## Dizayn Tezi

Bu layihə `based.az`-ın telefon görünüşündəki kompakt və yığcam marketplace ritmini götürür, amma animasiya, klik hissi, glow və düymə keyfiyyətini daha premium edir.

Yəni vizual istiqamət:

- tünd fon
- sarı əsas CTA
- yumşaq bənövşəyi support glow
- sıx mobil spacing
- böyük boşluqlar yox, kontrollu sıxlıq
- məhsul kartları qara fonda parlaq accent-lərlə
- based.az kimi “çox şey görünür, amma qarışıq deyil” hissi

## Vizual Sistem

Mövcud vizual sistemi qoru:

- Fontlar:
  - `Manrope` əsas UI mətnləri üçün
  - `Sora` böyük başlıqlar və məhsul kimliyi üçün
- Əsas rənglər:
  - fon: çox tünd qara/near-black
  - accent sarı: `#ffc71d`
  - accent sarı ikinci ton: `#ffde67`
  - support purple: `#7565ff`
  - yaşıl status: `#46d39c`
- Düymə dili:
  - primary: sarı gradient
  - secondary/outline: tünd panel + nazik border
  - ripple aktiv qalmalıdır
  - magnetic hover aktiv qalmalıdır
- Səthlər:
  - şüşəvari deyil, tünd premium panel
  - border-lər nazik və yumşaq
  - hover glow çox abartısız amma hiss olunan

## Mobil Qaydalar

Bu repo üçün mobil görünüş prioritetdir. Yeni dəyişikliklərdə aşağıdakılar pozulmamalıdır:

- `320px`-ə qədər enlərdə horizontal overflow olmamalıdır
- footer-də mail və linklər ekrandan kənara daşmamalıdır
- floating canlı dəstək bubble viewport-dan kənara çıxmamalıdır
- alt mobile nav tam ekrana sığmalıdır
- mobile nav label-ləri qısa saxlanmalıdır
- header, search və məhsul kartları based.az kimi yığcam hiss etməlidir
- desktop dizaynını sadəcə balacalaşdırmaq olmaz; mobil üçün ayrıca sıxlaşdırılmış spacing saxlanmalıdır

Əgər mobil layout dəyişirsə, minimum bunları gözlə yoxla:

- `index.html`
- `cart.html`
- `payment.html`
- `success.html`

## Kod Arxitekturası

Bu repo qəsdən framework-siz saxlanılıb. Səbəb:

- çox sürətli açılış
- az komplekslik
- telefonlarda yüngül hiss
- başqa Codex üçün asan davam etmə

### Fayl Strukturu

- [index.html](C:/Users/User/Documents/Playground/index.html)
  - ana marketplace/home səhifə
- [cart.html](C:/Users/User/Documents/Playground/cart.html)
  - səbət səhifəsi
- [payment.html](C:/Users/User/Documents/Playground/payment.html)
  - ödəniş səhifəsi
- [success.html](C:/Users/User/Documents/Playground/success.html)
  - sifariş uğurlu səhifəsi
- [styles.css](C:/Users/User/Documents/Playground/styles.css)
  - bütün vizual sistem və responsive qaydalar
- [store.js](C:/Users/User/Documents/Playground/store.js)
  - shared məhsul datası, cart storage, totals, order yaratma
- [ui.js](C:/Users/User/Documents/Playground/ui.js)
  - reveal, ripple, magnetic, glow, drawer, cart UI sync, toast
- [script.js](C:/Users/User/Documents/Playground/script.js)
  - ana səhifə detail/product interaction
- [cart.js](C:/Users/User/Documents/Playground/cart.js)
  - səbət render və cart controls
- [payment.js](C:/Users/User/Documents/Playground/payment.js)
  - checkout render və order submit
- [success.js](C:/Users/User/Documents/Playground/success.js)
  - uğurlu sifariş səhifəsi

## Mövcud Funksionallıq

- home page məhsul kartları
- seçilən məhsul detail paneli
- option seçimi
- səbətə əlavə etmə
- localStorage ilə səbət saxlanması
- səbət səhifəsi
- miqdar artır/azalt
- məhsul sil
- səbəti təmizlə
- ödəniş səhifəsi
- sifariş summary
- mock order completion
- success səhifəsi
- cart counter və total sync
- mobile drawer
- ripple / magnetic / glow / reveal animasiyaları

## Qorunmalı UI Hissələri

Aşağıdakılar bu repo-nun əsas kimliyidir. Bunları qorumaq lazımdır:

- hero-də böyük qısa mesaj + floating info panellər
- məhsul kart grid-i
- detail card
- sarı CTA-lar
- purple canlı dəstək hissi
- kompakt mobil alt nav
- tünd premium card sistemi

Əgər yeni səhifə əlavə olunacaqsa, bu dili təkrarlamalıdır. Yeni səhifə “başqa məhsulun saytı” kimi görünməməlidir.

## Nələri Etmə

- React / Next / Vite əlavə etmə, istifadəçi bunu açıq istəməyibsə
- Tailwind-ə keçirmə
- font dəyişmə
- sarı accent-i başqa rənglə əvəz etmə
- mobile nav-ı icon-heavy fərqli sistemə keçirmə
- floating support bubble-ı silmə
- bütün CSS-i “refactor” adı ilə dağıtma
- localStorage flow-u pozma

## Dəyişiklik Etmə Qaydası

Yeni Codex bu repo-da işləyəndə bu ardıcıllığı saxlasın:

1. Əvvəl `prompt.md` oxu.
2. Sonra relevant faylları açıb mövcud dizaynı başa düş.
3. Dəyişiklikdən əvvəl “mövcud vizual dil qorunacaq” prinsipini əsas götür.
4. Hər yeni UI elementdə eyni border, radius, rəng və animation dilini istifadə et.
5. Mobil görünüşü ayrıca düşün.
6. Dəyişiklikdən sonra local HTTP ilə səhifələri yoxla.
7. Sonra `prompt.md` içində aşağıdakı `Change Log` hissəsinə yeni entry əlavə et.

## Yoxlama Checklist

Hər ciddi dəyişiklikdən sonra bunları yoxla:

- bütün HTML səhifələr `200` açılır
- JS parse olunur
- mobile horizontal overflow yoxdur
- footer linkləri daşmır
- floating chat viewport içindədir
- mobile nav tam görünür
- səbət count və total işləyir
- cart -> payment -> success flow qırılmayıb

## Növbəti Mümkün Addımlar

Bunlar edilə bilər, amma yalnız bu dizayn dili içində:

- ayrıca məhsul-detail səhifəsi
- login / account mockup
- order history səhifəsi
- kateqoriya səhifəsi
- axtarış nəticələri səhifəsi
- filtrlər və sorting

Bunları edərkən də vizual dili dəyişmə.

## Change Log

Bu hissə hər dəyişiklikdən sonra yenilənməlidir.

### 2026-04-05

- Initial premium marketplace mockup yaradıldı.
- `based.az` ritmində home page quruldu.
- məhsul kartları, detail panel, review bölməsi əlavə edildi.
- `cart.html`, `payment.html`, `success.html` əlavə olundu.
- `store.js` və `ui.js` ilə shared state/UI sistemi quruldu.
- mobile overflow problemləri düzəldildi.
- footer mail/link wrap düzəldildi.
- floating canlı dəstək bubble viewport daxilinə salındı.
- mobile nav daha yığcam edildi.
- hazırda repo vizual olaraq qorunmalı vəziyyətdədir; növbəti Codex bu dili saxlamalıdır.

## Copy-Paste Prompt For Another Codex

Aşağıdakı mətni başqa Codex hesabına birbaşa verə bilərsən:

> Bu repo-da işləməzdən əvvəl `prompt.md` faylını tam oxu və oradakı dizayn/animasiya qaydalarına tam əməl et. Bu layihə based.az-ın mobil marketplace ritmində, amma daha premium animasiyalı statik HTML/CSS/JS store mockup-dır. Mövcud rəng sistemi, fontlar (`Manrope`, `Sora`), sarı CTA-lar, tünd panellər, purple canlı dəstək glow-u, kompakt mobil görünüş və ripple/magnetic/glow animasiyaları qorunmalıdır. Framework əlavə etmə, dizayn dilini dəyişmə, mobil spacing-i pozma. Hər dəyişiklikdən sonra `prompt.md`-də `Change Log` hissəsini yenilə və lokal yoxlama et.
