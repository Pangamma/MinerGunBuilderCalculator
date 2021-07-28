export interface Ship {
  id: number;
  name: string;
  fireRate: number;
  speed: number; // "projectile" speed.
  layout: string[];
}

// _ = blank tile
// X = filled tile
// S = entrance / "start"
// F = exit / "finish"
export const ships: Ship[] = [
  { id: 0, name: 'Rider (used)', fireRate: 1, speed: 1, layout: ['F', '_', 'S'] },
  { id: 1, name: 'Rider', fireRate: 1.3, speed: 1, layout: ['F', '_', '_', 'S'] },
  { id: 2, name: 'Transporter', fireRate: 1.2, speed: 1, layout: ['FFF', '___', '___', '___', 'XSX'] },
  { id: 3, name: 'Rocket', fireRate: 2.7, speed: 1, layout: ['F', '_', '_', '_', '_', 'S'] },
  { id: 4, name: 'Alien Seeker', fireRate: 4.9, speed: 2, layout: ['F', '_', '_', '_', 'S'] },
  { id: 5, name: 'Bus', fireRate: 2, speed: 1, layout: ['FXF', '___', '___', '___', '___', 'XSX'] },
  { id: 6, name: 'Fighter', fireRate: 3.5, speed: 2, layout: ['XXXF', '__X_', '__X_', '____', 'SXXX'] },
  { id: 7, name: 'Family Cruiser', fireRate: 4.5, speed: 2, layout: ['FXXXXXF', '_XXXXX_', '__XXX__', '________', '__XSX__'] },
  { id: 8, name: 'Pirate Blade', fireRate: 4, speed: 3, layout: ['FFF', '___', '___', '___', '___', 'XSX'] },
  { id: 9, name: 'Window', fireRate: 4.9, speed: 3, layout: ['FXXXF', '_XXX_', '_XXX_', '_XXX_', '_XXX_', '_____', 'XXSXX'] },
  { id: 10, name: 'Backsword', fireRate: 6.2, speed: 3, layout: ['XX___XX', 'X_____X', 'X_____X', 'XX___XX', 'F_____F', 'XXXSXXX'] },
  { id: 11, name: 'Container ship', fireRate: 1, speed: 2, layout: ['XFXFX', '__X__', '_____', '_____', '_____', 'S____'] },
  { id: 12, name: 'Prototype', fireRate: 5.1, speed: 3, layout: ['XXFXX', 'FX_XF', '_X_X_', '_____', '_____', '_____', 'X___X', 'XXSXX'] },
  { id: 13, name: 'Practice launcher', fireRate: 3.2, speed: 2, layout: ['XXFXX', 'F___F', '_____', '_____', '_____', 'X___X', 'X___X', 'XXSXX'] },
  { id: 29, name: 'Radio seeker', fireRate: 12.7, speed: 3, layout: ['X___X', '_____', '_____', '_____', 'F___F', 'XXSXX'] },
  { id: 14, name: 'Scout', fireRate: 1.6, speed: 1, layout: ['XXXFXXX', 'XXF_FXX', 'XX___XX', 'XF___FX', 'X_____X', 'X_____X', '_______', '_______', 'XXXSXXX'] },
  { id: 15, name: 'Eco seeker', fireRate: 4.9, speed: 2, layout: ['XXFXX', 'XF_FX', 'F___F', '_____', '_____', '_____', 'X___X', 'XX_XX', 'XX_XX', 'XX_XX', 'XXSXX'] },
  { id: 16, name: 'Spaceshuttle', fireRate: 2.8, speed: 2, layout: ['XFXFX', 'F___F', 'X___X', '_____', '_____', '_____', '_____', '_____', 'XXSXX'] },
  { id: 17, name: 'Army launcher', fireRate: 2.2, speed: 2, layout: ['XXFFFXX', 'X_____X', 'X_____X', 'XX___XX', 'XX___XX', 'XX___XX', 'XX___XX', 'X_____X', 'X_____X', 'XXXSXXX'] },
  { id: 18, name: 'Explorer', fireRate: 4.3, speed: 1.3, layout: ['XXXX___XXXX', 'XXXX___XXXX', 'F_________F', 'F_________F', 'F_________F', 'XXXX___XXXX', 'XXXX___XXXX', 'XXXX___XXXX', 'XXXXXSXXXXX'] },
  { id: 19, name: 'Luxus-Class', fireRate: 3.9, speed: 2, layout: ['XXXXFXXXX', 'XXX___XXX', 'XXX___XXX', 'XXX___XXX', 'XF_____FX', '_________', '_________', 'XXX___XXX', 'XXXX_XXXX', 'XXXXSXXXX'] },
  { id: 30, name: 'Extractor', fireRate: 11.1, speed: 3, layout: ['XX___XX', 'X_____X', '_______', '_______', '_______', 'F_____F', 'XF___FX', 'XXFSFXX'] },
  { id: 20, name: 'Endprice', fireRate: 1, speed: 1, layout: ['XXXXFXFXXXX', 'XXXX___XXXX', 'XX_______XX', 'F_________F', 'X_________X', 'F_________F', 'XX_______XX', 'XXXX___XXXX', 'XXXX___XXXX', 'XXXX___XXXX', 'XXXXXSXXXXX'] },
  { id: 21, name: 'Eco Destroyer', fireRate: 2.7, speed: 2, layout: ['XXXFXXX', 'FXF_FXF', '_X___X_', '_X___X_', '_X___X_', '_X___X_', '_X___X_', '_______', '_______', 'XXX_XXX', 'XXXSXXX'] },
  { id: 22, name: 'Alien Destroyer', fireRate: 1.8, speed: 2, layout: ['XXXXFFXXX', 'XXXF__FXX', 'XXXX___XX', 'XXXF____X', 'X___X____', 'X____X___', '___XSX___', '___XXX__X', '________X', 'X_______X'] },
  { id: 23, name: 'Rocket Carrier', fireRate: 1, speed: 1, layout: ['X_____X', 'F_____F', 'F_____F', 'X_____X', 'F_____F', 'F_____F', 'X_____X', 'F_____F', 'F_____F', 'XXXSXXX'] },
  { id: 24, name: 'Mothership', fireRate: 4, speed: 2, layout: ['XXXXFXXXX', 'XXX___XXX', 'F_______F', 'XX_____XX', 'XX_____XX', 'XX_____XX', 'XF_____FX', 'XX_____XX', 'XX_____XX', 'XXX___XXX', 'XXXXSXXXX'] },
  { id: 25, name: 'Cargo ship', fireRate: 1, speed: 1, layout: ['XFXFXFX', 'F_____F', '_______', 'F_____F', '_______', 'F_____F', '_______', 'F_____F', '_______', 'F_____F', 'XFXSXFX'] },
  { id: 26, name: 'Dead star', fireRate: 3, speed: 3, layout: ['XXX___XXX', 'XX_____XX', 'X___F___X', '_________', '_________', '_________', 'X_______X', 'XX_____XX', 'XXX___XXX', 'XXXXSXXXX'] },
  { id: 27, name: 'Archmage', fireRate: 4.3, speed: 1.3, layout: ['XXFXXFXXFXX', 'XF_XF_FX_FX', 'X__X___X__X', 'X__X___X__X', 'X______X__X', 'X_________X', 'X_________X', 'XF_______FX', 'XXXXX___XXX', 'XXXX____XXX', 'XXXXSFFXXXX'] },
  { id: 28, name: 'Eco death', fireRate: 2.6, speed: 4, layout: ['FXFFXFFXF', '_X__X__X_', '____X____', '_X__X__X_', '_X__X__X_', '_X__X__X_', '_X__X__X_', '_X_____X_', '_________', '_X_XSX_X_', 'FXFXXXFXF'] },
  { id: 31, name: 'Transmitter', fireRate: 3.9, speed: 4, layout: ['X_____X', '_______', '_______', '_______', '_______', '_______', 'F_____F', 'XF___FX', 'XXF_FXX', 'XXXSXXX'] },
  // { id: 6, name: '', fireRate: 0, speed: 1, layout: [] }, 
  // { id: 6, name: '', fireRate: 0, speed: 1, layout: [] },
  // { id: 6, name: '', fireRate: 0, speed: 1, layout: [] },
  // { id: 6, name: '', fireRate: 0, speed: 1, layout: [] },
];

