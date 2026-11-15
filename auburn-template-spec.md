# Squarespace Auburn Template — Complete Re-creation Specification

> **Template Source**: [Squarespace Auburn Fluid Demo](https://www.squarespace.com/templates/auburn-fluid-demo)  
> **Live Demo URL**: `https://auburn-fluid-demo.squarespace.com`  
> **Target Industry**: Restaurant / Hospitality / Thai & Asian Fine Dining  
> **Architecture**: Responsive multi-page layout (Fluid Engine 24-column grid on desktop, 8-column grid on mobile)

---

## 1. Design System & Global Styles

### 1.1 Color Palette
The template uses a high-contrast minimalist monochrome palette that lets food photography take center stage.

| Role | CSS Variable | HSL | Hex / RGB | Usage |
| :--- | :--- | :--- | :--- | :--- |
| **Darkest (Black)** | `--sqsp-palette-darkest-color` | `hsl(0, 0%, 0%)` | `#000000` | Section backgrounds, primary dark headings, hero overlays |
| **Dark (Charcoal)** | `--sqsp-palette-dark-color` | `hsl(0, 0%, 10.98%)` | `#1C1C1C` | Pre-footer background, secondary dark cards |
| **Accent (Silver / Border)** | `--sqsp-palette-accent-color` | `hsl(0, 0%, 86.27%)` | `#DCDCDC` | Dividers, subtle borders, inactive elements |
| **Lightest (Off-White)** | `--sqsp-palette-lightest-color` | `hsl(0, 0%, 98.04%)` | `#FAFAFA` | Page background for light sections |
| **Pure White** | `--sqsp-palette-light-color` | `hsl(0, 0%, 100%)` | `#FFFFFF` | Text in dark sections, button backgrounds on dark |

### 1.2 Section Color Themes
Each section on the website is tagged with one of three themes:
- `theme: black` (`bg: #000000`, `text: #FAFAFA`): Used for Hero banners and visual breaks.
- `theme: light` (`bg: #FAFAFA` or `#FFFFFF`, `text: #000000`): Used for readable content, menus, lists, and articles.
- `theme: dark` (`bg: #1C1C1C`, `text: #FAFAFA`): Used for the multi-column locations pre-footer.

### 1.3 Typography
The primary typeface throughout the template is **Aktiv Grotesk** (Typekit / Adobe Fonts). Clean fallbacks are `'Helvetica Neue', Helvetica, Arial, sans-serif` or **Inter**.

- **Heading Font**: `"aktiv-grotesk", sans-serif`
  - Font Weight: `700` (Bold)
  - Letter Spacing: `0em` (or `0.05em` to `0.1em` for uppercase sub-headers)
  - Line Height: `1.4em`
  - Text Transform: Headings (H1, H2, H3, H4) are primarily styled in **UPPERCASE**.
- **Body Font**: `"aktiv-grotesk", sans-serif`
  - Font Weight: `400` (Regular)
  - Letter Spacing: `0em`
  - Line Height: `1.8em`
  - Text Color: `#000000` on light sections, `#FFFFFF` / `rgba(255,255,255,0.85)` on dark sections.
- **Sizes**:
  - `H1`: `clamp(2.5rem, 5vw, 4.5rem)` (e.g. Hero headings: "INSPIRED THAI CUISINE")
  - `H2`: `clamp(1.75rem, 3.5vw, 2.75rem)` (e.g. "A DESTINATION")
  - `H3`: `clamp(1.25rem, 2.5vw, 1.75rem)` (e.g. "LOCATIONS")
  - `H4`: `1.125rem` (`18px`), Bold, Uppercase (e.g. Chef names, Menu categories)
  - `Body / P`: `1rem` (`16px`), `line-height: 1.8`
  - `Meta / Date / Small`: `0.8125rem` (`13px`), Uppercase, `letter-spacing: 0.1em`

### 1.4 Layout Grid & Spacing
- **Container Max Width**: `1500px`
- **Desktop Grid**: 24-column CSS grid, column gap `11px`, row min-height `24px`
- **Mobile Grid**: 8-column CSS grid, column gap `11px`
- **Horizontal Site Gutter**: `4vw` (desktop), `6vw` (mobile)
- **Section Padding**: `clamp(40px, 6vw, 90px)` vertical padding

---

## 2. Global Components

### 2.1 Navigation Header
- **Layout**: Fixed / static top header on transparent overlay or solid background.
  - **Left**: Site Title / Logo text `"AUBURN"` (Font: Aktiv Grotesk, Bold, uppercase, `letter-spacing: 0.1em`).
  - **Right**:
    - Navigation Links:
      1. `Home` (`/`)
      2. `Menu` (`/menu`)
      3. `Reservations` (`/reservations`)
      4. `News` (`/news`)
      5. `Locations` (`/locations`)
    - Social Media Icons (SVGs, 18px-20px):
      - Yelp: `https://www.yelp.com/biz/squarespace-new-york`
      - Instagram: `http://instagram.com/squarespace`
      - Facebook: `http://facebook.com/squarespace`

### 2.2 Global Pre-Footer (Locations Section)
Appears at the bottom of every page above the final copyright line:
- **Theme**: `dark` (`background: #1C1C1C`, `color: #FFFFFF`)
- **Title**: `H3` — `"LOCATIONS"`
- **Columns (3 columns on desktop, 1 column stacked on mobile)**:
  - **Column 1 — BROOKLYN**:
    - Name: `BROOKLYN` (Bold, uppercase)
    - Address: `123 Demo Street New York, NY 12345`
    - Phone: `(555) 555-5555`
    - Hours: `Monday - Sunday 10am - 10pm`
  - **Column 2 — QUEENS**:
    - Name: `QUEENS` (Bold, uppercase)
    - Address: `123 Demo Street New York, NY 12345`
    - Phone: `(555) 555-5555`
    - Hours: `Monday - Sunday 10am - 10pm`
  - **Column 3 — FOOD TRUCK**:
    - Name: `FOOD TRUCK` (Bold, uppercase)
    - Address: `123 Demo Street New York, NY 12345`
    - Phone: `(555) 555-5555`
    - Hours: `Monday - Thursday 1pm - 7pm`

### 2.3 Global Footer
- Social Links repeated: Yelp, Instagram, Facebook
- Attribution text: `"Made with Squarespace"` (or custom copyright)

---

## 3. Page-by-Page Specifications

---

### Page 1: Home (`/`)

#### Section 1: Hero Banner
- **Theme**: `black` (`#000000`)
- **Background Image**: Full bleed cover
  - `URL`: `https://images.squarespace-cdn.com/content/v1/624b503b3a6154640a1517ce/1649102925432-S8BT3WWVCOSEW8DM87YE/IMG_4508.jpg`
  - `Description`: Top-down gourmet plate with seared beef steak slices and fresh Thai herbs.
  - `Overlay`: 30% dark tint for readability.
- **Content (Centered)**:
  - `H1`: `INSPIRED THAI CUISINE` (White, Bold, Uppercase)
  - `Subtitle (P)`: `Voted New York’s Best Thai Restaurant`

#### Section 2: "A Destination" Intro
- **Theme**: `light` (`#FAFAFA`)
- **Layout**: Centered text block (narrow container, max-width ~800px)
- **Content**:
  - `H2`: `A DESTINATION`
  - `P`: `Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Nullam quis risus eget urna mollis ornare vel eu leo. Aenean lacinia bibendum nulla sed consectetur.`

#### Section 3: "Eat Together" Banner
- **Theme**: `black` (`#000000`)
- **Background Image**: Full bleed cover with parallax / fixed scroll
  - `URL`: `https://images.squarespace-cdn.com/content/v1/624b503b3a6154640a1517ce/1649102925438-ZGS9DWD73V5KD5PPTE1I/Stocksy_txp0f79248d7x2100_Large_821143.jpg`
  - `Description`: Communal dining scene with dishes and guests enjoying food.
- **Content (Centered)**:
  - `H1`: `Eat Together`
  - `P`: `Every plate achieves that elusive, cuisine-defining balance of sweet, salty, and sour – dessert.`

#### Section 4: Three-Column Feature (Kitchen & Ingredients)
- **Theme**: `light` (`#FAFAFA`)
- **Layout**: 3-column grid (desktop), stacked (mobile)
- **Columns**:
  - **Column 1**:
    - Image: `https://images.squarespace-cdn.com/content/v1/624b503b3a6154640a1517ce/1649102925443-UK27HNRN7E6H00GDKYUB/IMG_4739.jpg` (Food dish plating)
    - Heading (H4/P Bold): `CRAFTED IN THE KITCHEN`
    - Body (P): `Cras mattis consectetur purus sit amet fermentum. Sed posuere consectetur est at lobortis. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Sed posuere consectetur est at lobortis. Maecenas faucibus mollis interdum. Nulla vitae elit libero a pharetra.`
  - **Column 2**:
    - Image: `https://images.squarespace-cdn.com/content/v1/624b503b3a6154640a1517ce/1649102925448-ZPSO7AJ08AX9DW2W9LV5/IMG_4508+%281%29.jpg` (Fresh Thai herbs and spices)
    - Heading (H4/P Bold): `FRESH INGREDIENTS`
    - Body (P): `Aenean lacinia bibendum nulla sed consectetur. Etiam porta sem malesuada magna mollis euismod. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras mattis consectetur purus sit amet fermentum.`
  - **Column 3**:
    - Image: `https://images.squarespace-cdn.com/content/v1/624b503b3a6154640a1517ce/1649102925454-T4BD03248DFZ6O4VPET5/IMG_5157.jpg` (Plated gourmet appetizer)
    - Heading (H4/P Bold): `MASTER CHEF`
    - Body (P): `Nulla vitae elit libero, a pharetra augue. Maecenas sed diam eget risus varius blandit sit amet non magna. Cras mattis consectetur purus sit amet fermentum. Integer posuere erat a ante venenatis dapibus posuere velit luctus sem adipiscing elit.`

#### Section 5: "The Kitchen" Full Banner
- **Theme**: `black` (`#000000`)
- **Background Image**: Full bleed cover
  - `URL`: `https://images.squarespace-cdn.com/content/v1/624b503b3a6154640a1517ce/1649102925462-195FJT075U5MKLVWAFE7/Stocksy_txp0f79248d7x2100_Large_543118.jpg`
  - `Description`: Chef in kitchen preparing meals.
- **Content (Centered)**:
  - `H1`: `THE KITCHEN`

#### Section 6: Chefs Bio & Featured Photo
- **Theme**: `light` (`#FAFAFA`)
- **Layout**: 2-part grid (Large photo on left or right, 3 chef bios on the adjacent side)
- **Photo**:
  - `URL`: `https://images.squarespace-cdn.com/content/v1/624b503b3a6154640a1517ce/1649102925468-KG4VY9BUB2R71289Y2I5/IMG_4431.jpg`
  - `Description`: Vibrant Asian street noodle dish.
- **Chef Bios**:
  1. **LIZ GRISAITIS**
     - Title: `Executive Chef`
     - Bio: `Nullam quis risus eget urna mollis ornare vel eu leo. Curabitur blandit tempus porttitor. Curabitur blandit tempus porttitor. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.`
  2. **MATTEO CAPON**
     - Title: `Chef De Cuisine`
     - Bio: `Nullam quis risus eget urna mollis ornare vel eu leo. Curabitur blandit tempus porttitor. Curabitur blandit tempus porttitor. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.`
  3. **ANGIE WALSH**
     - Title: `Pastry Chef`
     - Bio: `Nullam quis risus eget urna mollis ornare vel eu leo. Curabitur blandit tempus porttitor. Curabitur blandit tempus porttitor. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.`

#### Section 7: Global Pre-Footer (Locations)
- (See Global Pre-Footer specification above)

---

### Page 2: Menu (`/menu`)

#### Section 1: Hero Banner
- **Theme**: `black` (`#000000`)
- **Background Image**: Full bleed cover
  - `URL`: `https://images.squarespace-cdn.com/content/v1/624b503b3a6154640a1517ce/1649102919116-8DR2NWOU4UOULX40RJ3C/IMG_4508.jpg`
- **Content**:
  - `H1`: `MENU`
  - `P`: `This mission is simple: serve delicious, affordable food that guests will want to return to week after week.`

#### Section 2: Full Menu List
- **Theme**: `light` (`#FAFAFA`)
- **Layout**: Classical restaurant menu layout, separated into 3 distinct sections. Each dish has Title, Optional Price (or clean sans-price styling), and description.

##### Category 1: APPETIZERS
1. **Fried Spring Rolls**  
   *chicken or vegetable*
2. **Tofu Tod**  
   *fried tofu with a mild chili peanut sauce*
3. **Fried Tiger Shrimp Rolls**  
   *with a plum sauce*
4. **Gai Of Nuur Satay**  
   *skewered chicken or beef with a peanut sauce*
5. **Fresh Thai Summer Roll**  
   *with shrimp in a tamarind sauce*
6. **Thai Spare Ribs**  
   *glazed and grilled pork ribs*

##### Category 2: ENTRÉES
1. **Gai Pad Khing**  
   *sauteed sliced chicken with mushrooms, peppers, cabbage, carrots and onions in a fresh ginger sauce*
2. **Nuur Kra Prow**  
   *sauteed sliced beef with peppers, cabbage, carrots and onions in a chili basil sauce*
3. **Koong Pad Khing**  
   *sauteed shrimp with mushrooms, peppers, cabbage, carrots and onions in a fresh ginger sauce*
4. **Gai Kratiam**  
   *sauteed sliced chicken with broccoli, cabbage and onions in a fresh garlic sauce*
5. **Beef and Broccoli**  
   *sauteed in oyster sauce*
6. **Koong Kratiam**  
   *sauteed shrimp with broccoli, cabbage, carrots and onions in a fresh garlic sauce*
7. **Gai Kra Prow**  
   *sauteed sliced chicken with peppers, cabbage, carrots and onions in a chili basil sauce*
8. **Gai Or Moo Prik Khing**  
   *sauteed sliced chicken or pork and stringbeans in a red curry paste*
9. **Koong Kra Prow**  
   *sauteed shrimp with peppers, cabbage, carrots and onions in a fresh basil sauce*
10. **Chicken and Broccoli**  
    *sauteed in oyster sauce*
11. **Moo Kratiam**  
    *sauteed sliced pork with broccoli, cabbage, carrots and onions in a fresh garlic sauce*
12. **Pla Muk Kratiam**  
    *sauteed squid with broccoli, cabbage, carrots and onions in a fresh garlic sauce*
13. **Nuur Kratiam**  
    *sauteed sliced beef with broccoli, cabbage, carrots and onions in a fresh garlic sauce*
14. **Moo Kra Prow**  
    *sauteed sliced pork with peppers, cabbage, carrots and onions in a chili basil sauce*
15. **Pla Muk Kra Prow**  
    *sauteed squid with peppers, cabbage, carrots and onions in a chili basil sauce*

##### Category 3: DESSERT
1. **Khao Neow Ma Muang**  
   *sliced mango with sticky rice and coconut milk*
2. **Khao Tom Mud**  
   *steamed sticky rice in a banana leaf with baby banana*
3. **Fried Banana**  
   *deep-fried banana topped with coconut ice cream*
4. **Khao Neow Dam**  
   *black sticky rice with shredded coconut*
5. **Nam Kang Sai**  
   *shaved ice with grass jelly and jackfruit*
6. **Gelato**  
   *seasonal flavor made in-house*

#### Section 3: Global Pre-Footer (Locations)

---

### Page 3: Reservations (`/reservations`)

#### Section 1: Hero Banner
- **Theme**: `black` (`#000000`)
- **Background Image**:
  - `URL`: `https://images.squarespace-cdn.com/content/v1/624b503b3a6154640a1517ce/1649102915442-9ZIBO0EDGY0EPHAYBLA9/Stocksy_txp0f79248d7x2100_Large_821143.jpg`
- **Content**:
  - `H1`: `RESERVATIONS`
  - `P`: `We accept a limited number of reservations up to one month in advance for parties of up to ten guests.`

#### Section 2: Online Booking Integration
- **Widget**: Integrated Tock / OpenTable booking component
  - Container config: `data-tock-business-slug="squarespacecafe"`, `data-tock-display-mode="Inline"`
  - *For re-creation*: Can use an OpenTable widget, Resy widget, or a clean reservation form (Party Size, Date, Time, Name, Email, Phone, Special Requests).

#### Section 3: By Phone & Special Events Info
- **Theme**: `light` (`#FAFAFA`)
- **Layout**: 2-column grid
- **Column 1**:
  - `H4`: `By Phone`
  - `P`: `Nullam quis risus eget urna mollis ornare vel eu leo. Curabitur blandit tempus porttitor. Curabitur blandit tempus porttitor.`
- **Column 2**:
  - `H4`: `Special Events & Private Parties`
  - `P`: `Nullam quis risus eget urna mollis ornare vel eu leo. Curabitur blandit tempus porttitor. Curabitur blandit.`

#### Section 4: Private Dining Image Showcase
- **Theme**: `light`
- **Full-width / Large image**:
  - `URL`: `https://images.squarespace-cdn.com/content/v1/624b503b3a6154640a1517ce/1649102915456-IDMKHZBB4NJJZGJQEB5O/image-asset.jpeg`
  - `Description`: Warm, moody restaurant private dining table setup with glassware and lighting.

#### Section 5: Private Dining Rooms Info
- **Theme**: `light` (`#FAFAFA`)
- **Layout**: 2-column grid
- **Column 1 — The Big Room**:
  - `H4`: `The Big Room`
  - `Subtitle`: `Seats up to 60`
  - `P`: `Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Maecenas faucibus mollis interdum. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Cum sociis natoque penatibus et magnis dis parturient montes.`
- **Column 2 — The Small Room**:
  - `H4`: `The Small Room`
  - `Subtitle`: `Seats up to 15`
  - `P`: `Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Maecenas faucibus mollis interdum. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Cum sociis natoque penatibus et magnis dis parturient montes.`

#### Section 6: Phone Reservation Callout
- **Theme**: `light` (`#FAFAFA`)
- **Layout**: Centered prominent banner
- **Content**:
  - `H3`: `Call (555) 555-5555 to reserve a room for your reception or party.`

#### Section 7: Global Pre-Footer (Locations)

---

### Page 4: News (`/news`)

#### Section 1: Hero Banner
- **Theme**: `black` (`#000000`)
- **Background Image**:
  - `URL`: `https://images.squarespace-cdn.com/content/v1/624b503b3a6154640a1517ce/1649102908354-8Q5O3R9H0D79W6YB1E4J/unspecified-17.jpg`
- **Content**:
  - `H1`: `NEWS`

#### Section 2: Blog Posts Feed
- **Theme**: `light` (`#FAFAFA`)
- **Layout**: Vertical stack / blog feed with featured image, date, title, excerpt, and link.

##### Post 1: NEW DESSERTS
- **Date**: March 21, 2019
- **Image**: `https://images.squarespace-cdn.com/content/v1/624b503b3a6154640a1517ce/1649102908274-I0R5DP9UAWCHCJIQM7CO/IMG_5157+%281%29.jpg`
- **Excerpt**: `Nulla non mauris vel orci condimentum vulputate. Aliquam erat volutpat. Aenean feugiat felis dui, id rutrum elit placerat vitae. Aenean lobortis dictum lacus nec scelerisque. Vivamus gravida magna enim, vel varius metus fermentum.`
- **Full Body**: `Suspendisse potenti. Vestibulum cursus, leo at auctor mollis, dui ante porttitor orci, vel venenatis tellus magna nec nulla. Cras dolor dolor, facilisis viverra orci pellentesque, suscipit luctus mi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam rhoncus lacinia mauris porta dapibus. Integer condimentum massa eget leo ornare accumsan et id ex. Nulla fringilla lectus et justo lobortis, sit amet sagittis magna bibendum. Suspendisse elementum, ante sed pellentesque malesuada, augue nulla ultrices orci, quis dictum dui nulla a tortor. In nec dignissim sapien. Sed convallis convallis pretium.`

##### Post 2: DISH OF THE MONTH
- **Date**: February 19, 2019
- **Image**: `https://images.squarespace-cdn.com/content/v1/624b503b3a6154640a1517ce/1649102908309-VJM95AP4LYT7K5VL4WVD/IMG_4431+%281%29.jpg`
- **Excerpt**: `Morbi vitae nisl nec velit gravida fringilla. Mauris a ex sit amet est aliquam auctor ac non turpis. Nam suscipit, enim sit amet varius auctor, nisi dolor malesuada lectus, eget dictum velit magna eget erat. Donec nunc odio, consectetur ut ante at, rutrum condimentum velit.`
- **Full Body**: `Integer viverra odio augue, nec pharetra est finibus a. Ut ullamcorper faucibus quam, vel hendrerit mauris scelerisque eu. Phasellus quis viverra massa. Phasellus et sapien massa. Curabitur sit amet augue neque. Aliquam rutrum varius malesuada. Pellentesque in diam accumsan, vulputate urna nec, rutrum lorem. Suspendisse id dui rutrum, egestas quam sed, consequat magna. Quisque ultricies gravida turpis. Aliquam consectetur at est sollicitudin lobortis. Pellentesque ut fringilla tortor. Proin tempus mi enim, in mattis metus sodales a. In sit amet ante eu arcu rhoncus tincidunt id eget urna. Duis ullamcorper porttitor turpis eget euismod. Morbi a metus finibus, dictum dolor vel, ultricies tortor. Praesent feugiat ante ex, eget venenatis felis porttitor et. Sed convallis quam eu vulputate fermentum. Etiam ut felis a est tempus tempus. Cras semper eros justo, eu venenatis odio bibendum tincidunt. Fusce porttitor finibus rutrum. Vivamus luctus nisl quis lectus tincidunt porta. Sed eget placerat ante. Vivamus sed elit turpis. Fusce odio odio, tincidunt at dui vitae, volutpat accumsan diam. Maecenas auctor ornare lacus eu blandit. Quisque malesuada justo risus, et consequat ante consectetur quis. Integer interdum hendrerit sem, vitae vehicula lacus feugiat eget. Praesent sit amet pretium sem, vel eleifend lacus.`

##### Post 3: MEET THE CHEFS
- **Date**: January 19, 2019
- **Image**: `https://images.squarespace-cdn.com/content/v1/624b503b3a6154640a1517ce/1649102908282-N5QPCFZAM9X7FRGWMDXX/Stocksy_txp0f79248d7x2100_Large_543118.jpg`
- **Excerpt**: `Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Cras mattis consectetur purus sit amet fermentum. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam.`
- **Full Body**: `Etiam pellentesque ac tellus sit amet mattis. Proin lobortis diam nec imperdiet vestibulum. Vivamus mauris lectus, interdum non purus ac, dictum condimentum orci. Cras magna nunc, malesuada eu sodales eget, tristique id neque. Donec ornare faucibus ultricies. Ut nibh magna, sollicitudin ut nunc vel, feugiat interdum sapien. Nam non lobortis augue, id varius leo. Nulla sagittis viverra dignissim. Maecenas tristique, elit id vestibulum pretium, lorem ex elementum diam, at ultricies metus quam vitae augue. Integer augue eros, semper vel suscipit ut, dapibus et erat. Cras luctus non neque semper tincidunt. Maecenas ac dapibus ligula, et tincidunt sapien. Sed sagittis vitae risus vel dictum. Curabitur a blandit arcu. Phasellus lorem ligula, luctus et maximus ut, interdum in risus. Ut aliquet nulla vitae odio pharetra, a scelerisque mauris vulputate. Nam lorem tellus, condimentum eu blandit a, bibendum non justo. Sed vitae magna dolor. Fusce vitae fermentum ante. Nullam fermentum dignissim maximus. Morbi vitae nisl nec velit gravida fringilla. Mauris a ex sit amet est aliquam auctor ac non turpis. Nam suscipit, enim sit amet varius auctor, nisi dolor malesuada lectus, eget dictum velit magna eget erat. Donec nunc odio, consectetur ut ante at, rutrum condimentum velit. In euismod nisi et arcu vulputate lacinia. Aliquam sapien nunc, lobortis ut cursus eget, iaculis vel metus. Mauris pharetra suscipit ex, et vehicula ante faucibus a. Ut ac purus velit. Mauris venenatis elit eget augue condimentum iaculis. Morbi mollis aliquet urna, ac vulputate enim porta nec. Vestibulum nec accumsan nunc, eget blandit libero. Aenean congue auctor massa vel auctor.`

##### Post 4: WHY WE BUY LOCAL
- **Date**: November 8, 2018
- **Image**: `https://images.squarespace-cdn.com/content/v1/624b503b3a6154640a1517ce/1649102908296-7U3UBTDP09X36NOPIQKS/IMG_4607_sm.jpg`
- **Excerpt**: `Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Sed posuere consectetur est at lobortis.`
- **Full Body**: `Praesent vel mauris id libero placerat congue. Nullam vestibulum risus et neque ultrices fermentum. Aliquam erat volutpat. Pellentesque malesuada vulputate ullamcorper. Nam sapien augue, lacinia ut est quis, malesuada accumsan lorem. Morbi id fermentum tellus. Suspendisse et rutrum turpis, eu viverra libero. Suspendisse potenti. Sed eu lobortis justo, ut pellentesque nisl. Integer rutrum aliquet pellentesque. Phasellus et fringilla ligula. Suspendisse leo metus, placerat quis lorem in, sagittis maximus urna. Proin mollis metus sed diam pulvinar blandit. Fusce quis enim ex. Aenean varius tortor tortor, varius lobortis enim egestas id. Nullam et massa eget mauris aliquam euismod. Etiam auctor ac leo nec consectetur. Quisque magna dolor, placerat sit amet maximus non, imperdiet nec mi. Duis id eleifend tellus. Duis nec laoreet ligula, a vestibulum lorem. Donec scelerisque ac tellus eu blandit. Proin ligula mauris, tincidunt gravida lectus non, viverra dictum nunc. Maecenas nunc elit, malesuada a eleifend pharetra, aliquet id diam. Vivamus commodo porttitor tortor sed molestie. Proin at leo sit amet dolor vulputate lacinia. Suspendisse porttitor viverra purus, nec interdum justo eleifend eu. Duis hendrerit justo at ornare rhoncus. Curabitur eleifend magna in odio congue maximus.`

#### Section 3: Global Pre-Footer (Locations)

---

### Page 5: Locations (`/locations`)

#### Section 1: Hero Banner
- **Theme**: `black` (`#000000`)
- **Background Image**:
  - `URL`: `https://images.squarespace-cdn.com/content/v1/624b503b3a6154640a1517ce/1649102921603-0GUHAO8BZJ0X2CG9QEKF/IMG_3616.jpg`
- **Content**:
  - `H1`: `LOCATIONS`

#### Section 2: Three Branch Locations (Detailed)
- **Theme**: `light` (`#FAFAFA`)
- **Layout**: 3 columns (desktop), stacked (mobile)
- **Column 1 — BROOKLYN**:
  - `H4`: `BROOKLYN`
  - Address: `123 Demo Street New York, NY 12345`
  - Contact: `(555) 555-5555 email@example.com`
  - Hours: `Monday - Sunday 10am – 10pm`
- **Column 2 — QUEENS**:
  - `H4`: `QUEENS`
  - Address: `123 Demo Street New York, NY 12345`
  - Contact: `(555) 555-5555 email@example.com`
  - Hours: `Monday - Sunday 10am – 10pm`
- **Column 3 — FOOD TRUCK**:
  - `H4`: `FOOD TRUCK`
  - Address: `123 Demo Street New York, NY 12345`
  - Contact: `(555) 555-5555 email@example.com`
  - Hours: `Monday - Thursday 1pm – 7pm`

#### Section 3: Media & Press Inquiries
- **Theme**: `light` (`#FAFAFA`)
- **Layout**: 2-column grid
- **Column 1 — MEDIA INQUIRIES**:
  - `H4`: `MEDIA INQUIRIES`
  - Contact: `(555) 555-5555 email@example.com`
- **Column 2 — PUBLIC RELATIONS**:
  - `H4`: `PUBLIC RELATIONS`
  - Contact: `(555) 555-5555 email@example.com`

#### Section 4: Global Pre-Footer (Locations)

---

## 4. Complete Image Asset Inventory

All images are hosted on the Squarespace CDN and can be directly used or replaced with high-res equivalents:

| Identifier | Context | Resolution / Ratio | URL |
| :--- | :--- | :--- | :--- |
| `IMG_4508.jpg` | Home Hero & Menu Hero | 2500x1667 (16:9) | `https://images.squarespace-cdn.com/content/v1/624b503b3a6154640a1517ce/1649102925432-S8BT3WWVCOSEW8DM87YE/IMG_4508.jpg` |
| `Stocksy_txp0f7...821143.jpg` | Home Eat Together & Reservations Hero | 2100x1400 (3:2) | `https://images.squarespace-cdn.com/content/v1/624b503b3a6154640a1517ce/1649102925438-ZGS9DWD73V5KD5PPTE1I/Stocksy_txp0f79248d7x2100_Large_821143.jpg` |
| `IMG_4739.jpg` | Home Column 1 (Crafted) | 1200x800 (3:2) | `https://images.squarespace-cdn.com/content/v1/624b503b3a6154640a1517ce/1649102925443-UK27HNRN7E6H00GDKYUB/IMG_4739.jpg` |
| `IMG_4508+(1).jpg` | Home Column 2 (Fresh Ingredients) | 1200x800 (3:2) | `https://images.squarespace-cdn.com/content/v1/624b503b3a6154640a1517ce/1649102925448-ZPSO7AJ08AX9DW2W9LV5/IMG_4508+%281%29.jpg` |
| `IMG_5157.jpg` | Home Column 3 (Master Chef) | 1200x800 (3:2) | `https://images.squarespace-cdn.com/content/v1/624b503b3a6154640a1517ce/1649102925454-T4BD03248DFZ6O4VPET5/IMG_5157.jpg` |
| `Stocksy_txp0f7...543118.jpg` | Home The Kitchen & News Meet The Chefs | 2100x1400 (3:2) | `https://images.squarespace-cdn.com/content/v1/624b503b3a6154640a1517ce/1649102925462-195FJT075U5MKLVWAFE7/Stocksy_txp0f79248d7x2100_Large_543118.jpg` |
| `IMG_4431.jpg` | Home Chefs Bio & News Dish of Month | 1200x800 (3:2) | `https://images.squarespace-cdn.com/content/v1/624b503b3a6154640a1517ce/1649102925468-KG4VY9BUB2R71289Y2I5/IMG_4431.jpg` |
| `image-asset.jpeg` | Reservations Private Dining Room | 1500x1000 (3:2) | `https://images.squarespace-cdn.com/content/v1/624b503b3a6154640a1517ce/1649102915456-IDMKHZBB4NJJZGJQEB5O/image-asset.jpeg` |
| `unspecified-17.jpg` | News Hero Banner | 2500x1667 (16:9) | `https://images.squarespace-cdn.com/content/v1/624b503b3a6154640a1517ce/1649102908354-8Q5O3R9H0D79W6YB1E4J/unspecified-17.jpg` |
| `IMG_4607_sm.jpg` | News Why We Buy Local | 1200x800 (3:2) | `https://images.squarespace-cdn.com/content/v1/624b503b3a6154640a1517ce/1649102908296-7U3UBTDP09X36NOPIQKS/IMG_4607_sm.jpg` |
| `IMG_3616.jpg` | Locations Hero Banner | 2500x1667 (16:9) | `https://images.squarespace-cdn.com/content/v1/624b503b3a6154640a1517ce/1649102921603-0GUHAO8BZJ0X2CG9QEKF/IMG_3616.jpg` |

---

## 5. Interactions & Behaviors

1. **Header Transparency & Scroll**:
   - Header sits with a transparent background over the hero images.
   - Text is pure white (`#FFFFFF`) to ensure contrast with the dark background images.
2. **Smooth Scroll & Navigation**:
   - Navigation links trigger clean page transitions or smooth scroll.
   - Active navigation item has subtle underline or bold styling.
3. **Hero Image Parallax / Fixed Positioning**:
   - Hero banner images have `background-size: cover`, `background-position: center`.
   - Subtle parallax scroll or fixed attachment gives depth to the dark break banners (`Eat Together`, `THE KITCHEN`).
4. **Mobile Responsiveness**:
   - Hamburger menu toggle appears at `< 768px`.
   - 3-column layouts (Features on Home, Locations on Locations page) collapse into single-column vertical stacks.
   - Menu items keep title and description stacked with clean vertical spacing.
