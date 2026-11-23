// 54th Street Grill & Bar / Five Four — the locations Ninja 360 Digital Media shot.
// Source: the "Locations Page Experiment for 54th Street / Five Four" design (Tim, 11/2026).
// Every Kuula collection id below was checked on kuula.co on 2026-11-20 (all 29 resolve).
// Tours link to kuula.co directly. The old ninja-360.com/share/... links 301 to the
// ninja360.net homepage and are dead.
// "Coming soon" stores from the design are left out: this page shows our finished work.

export type Region = 'kc' | 'stl' | 'sa' | 'dfw' | 'aus';

export interface Loc {
  region: Region;
  name: string;      // city line as the restaurant names it
  sub: string;       // neighborhood / center, when a city has several
  addr: string;
  city: string;      // "City, ST ZIP"
  phone: string;     // 816.229.0054
  slug: string;      // 54thstreetrestaurants.com/<slug>.html, and the clip file name
  kuula: string;     // Kuula collection id ('' = no tour)
  film: string;      // YouTube id of the drone / FPV film ('' = none)
  filmKind: string;  // 'FPV' | 'DRONE'
  filmNote: string;
  clip: boolean;     // a 360° moving clip exists in /media/54th-street/<slug>.mp4
}

export const REGIONS: { id: Region; name: string }[] = [
  { id: 'kc', name: 'Kansas City' },
  { id: 'stl', name: 'St. Louis' },
  { id: 'sa', name: 'San Antonio' },
  { id: 'dfw', name: 'Dallas / Fort Worth' },
  { id: 'aus', name: 'Austin' },
];

const L = (region: Region, name: string, sub: string, addr: string, city: string, phone: string,
  slug: string, kuula: string, film = '', filmKind = '', filmNote = '', clip = true): Loc =>
  ({ region, name, sub, addr, city, phone, slug, kuula, film, filmKind, filmNote, clip });

export const LOCS: Loc[] = [
  L('kc', 'Blue Springs, MO', '', '1307 South 7 Highway', 'Blue Springs, MO 64015', '816.229.0054', 'blue-springs-mo', '7KMcT'),
  L('kc', 'Independence, MO', '', '18700 East 38th Terrace S', 'Independence, MO 64057', '816.795.7077', 'independence-mo', '7cCF0', 'QVYWWu5k4Ss', 'DRONE', 'Five Four Draft House', false),
  L('kc', 'Kansas City, MO', 'Creekwood Commons', '303 NE Englewood Road', 'Kansas City, MO 64118', '816.455.5609', 'kansas-city-mo-creekwood-commons', '7YnLh'),
  L('kc', 'Kansas City, MO', 'Zona Rosa', '7200 NW 86th Terrace', 'Kansas City, MO 64153', '816.587.0864', 'kansas-city-mo-zone-rosa', '', 'aZW2q3-NLwc', 'DRONE', 'Golf simulators + pickleball', false),
  L('kc', 'Lee’s Summit, MO', '', '815 SE 3rd Street', 'Lee’s Summit, MO 64063', '816.524.5488', 'lees-summit-mo', '7qzC7'),
  L('kc', 'Liberty, MO', 'Barry Road', '9251 NE Barry Road', 'Kansas City, MO 64157', '816.792.5489', 'liberty-mo', '7qJQt'),
  L('kc', 'Olathe, KS', '', '14750 South Harrison Street', 'Olathe, KS 66061', '913.764.0540', 'olathe-ks', '7cSTD'),
  L('kc', 'St. Joseph, MO', '', '5103 North Belt Highway', 'St. Joseph, MO 64506', '816.233.5450', 'st-joseph-mo', '7cth9'),
  L('stl', 'Shiloh, IL', '', '3140 Green Mount Crossing Drive', 'Shiloh, IL 62269', '618.624.5454', 'shiloh-il', '7bW04'),
  L('stl', 'South County, MO', '', '5310 South Lindbergh Boulevard', 'St. Louis County, MO 63126', '314.849.5401', 'south-county-mo', '7ZJ6f'),
  L('stl', 'Glen Carbon, IL', '', '6660 Edwardsville Crossing Drive', 'Glen Carbon, IL 62034', '618.656.5455', 'edwardsville-il', '7ZhZM'),
  L('stl', 'Chesterfield, MO', '', '17395 Chesterfield Airport Road', 'Chesterfield, MO 63005', '636.536.0154', 'chesterfield-mo', '7ZPm8'),
  L('stl', 'Wentzville, MO', '', '1897 Wentzville Parkway', 'Wentzville, MO 63385', '636.327.5454', 'wentzville-mo', '7ZPKr'),
  L('sa', 'San Antonio, TX', 'Culebra', '5722 W Loop 1604 North', 'San Antonio, TX 78251', '210.684.0054', 'san-antonio-tx-culebra', '7q4kB'),
  L('sa', 'San Antonio, TX', 'City Base West', '7307 South New Braunfels', 'San Antonio, TX 78223', '210.333.5455', 'san-antonio-tx-city-base-west', '7q4hX'),
  L('sa', 'San Marcos, TX', '', '1303 South IH 35', 'San Marcos, TX 78666', '512.396.5400', 'san-marcos-tx', '7kwyW'),
  L('sa', 'San Antonio, TX', 'Stone Oak', '22902 US Highway 281 North', 'San Antonio, TX 78258', '210.499.5454', 'san-antonio-tx-stone-oak', '7kz0V'),
  L('sa', 'San Antonio, TX', 'The Rim', '17122 IH 10 West', 'San Antonio, TX 78257', '210.690.5424', 'san-antonio-tx-the-rim', '7kr2K'),
  L('sa', 'San Antonio, TX', 'Rector Street', '954 E Rector Street', 'San Antonio, TX 78216', '210.342.5454', 'san-antonio-tx-rector-street', '7qGHc'),
  L('sa', 'San Antonio, TX', 'Richland Hills', '7735 NW Loop 410', 'San Antonio, TX 78245', '210.681.5454', 'san-antonio-tx-richland-hills', '7qGXM'),
  L('sa', 'Live Oak, TX', '', '8111 Pat Booker Road', 'Live Oak, TX 78233', '210.657.5400', 'live-oak-tx', '7kRVv'),
  L('sa', 'San Antonio, TX', 'The Colonnade', '9907 I-10', 'San Antonio, TX 78230', '210.877.6254', 'san-antonio-tx-colonnade', '7qhFJ'),
  L('dfw', 'Frisco, TX', '', '9449 Dallas Parkway', 'Frisco, TX 75033', '214.387.0284', 'frisco-tx', '7YWBv'),
  L('dfw', 'The Colony, TX', '', '5201 State Highway 121', 'The Colony, TX 75056', '214.469.1054', 'the-colony-tx', '7YrRN'),
  L('dfw', 'Fort Worth, TX', 'Alliance', '9251 Rain Lily Trail', 'Fort Worth, TX 76177', '817.750.5400', 'fort-worth-tx', '7k7nm'),
  L('dfw', 'Lewisville, TX', '', '2415 S Stemmons Freeway', 'Lewisville, TX 75067', '972.436.0054', 'lewisville-tx', '7Yt0W'),
  L('dfw', 'Euless, TX', '', '2201 TX-121', 'Euless, TX 76039', '817.358.4654', 'euless-tx', '7Y2vC'),
  L('dfw', 'McKinney, TX', '', '3645 W University', 'McKinney, TX 75071', '469.293.1954', 'mckinney-tx', '7kNG4'),
  L('dfw', 'Mansfield, TX', '', '600 North US 287', 'Mansfield, TX 76063', '682.719.5410', 'mansfield-tx', '7Yj01'),
  L('aus', 'Pflugerville, TX', '', '19109 Limestone Commercial Drive', 'Pflugerville, TX 78660', '512.956.5354', 'pflugerville-tx', '', 'v87kC9x-F04', 'FPV', 'Through the bar', false),
  L('aus', 'South Austin, TX', '', '127 E Ralph Ablanedo Drive', 'Austin, TX 78748', '512.681.3154', 'south-austin-tx', '7bDmK'),
  L('aus', 'Cedar Park, TX', '', '1320 E. New Hope Dr.', 'Cedar Park, TX 78613', '512.722.6543', 'cedar-park-tx', '', 'EHRUOzmVtyA', 'FPV', 'Front door to first round', false),
];

export const SITE = 'https://www.54thstreetrestaurants.com/';
export const ORDER_URL = 'https://order.54expresstogo.com/';
export const FLYOVER = 'xSPPSP837ro';                       // hero flyover (YouTube)
export const HOURS = 'Sun–Thu 11a–11p · Fri–Sat 11a–12a';    // as listed in the design; confirm before go-live
export const tourUrl = (id: string) => `https://kuula.co/share/collection/${id}?fs=1&vr=1&sd=1&thumbs=3&info=1&logo=1`;
export const ytWatch = (id: string) => `https://www.youtube.com/watch?v=${id}`;
export const ytThumb = (id: string) => `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;
