import { Ship } from '@root/models/ships';

export class TileHelper {
  public static getLayoutFromShipDefinition(ship: Ship, GRID_SIZE = 11): string[][] {
    const yOffset = Math.ceil((GRID_SIZE - ship.layout.length) / 2);
    const xOffset = Math.floor((GRID_SIZE - ship.layout[0].length) / 2);
    const yLen = ship.layout.length;
    const xLen = ship.layout[0].length;
    const array: string[][] = [];

    for (let y = 0; y < GRID_SIZE; y++) {
      array[y] = [];
      for (let x = 0; x < GRID_SIZE; x++) {
        array[y][x] = 'X';
      }
    }

    for (let y = 0; y < yLen; y++) {
      for (let x = 0; x < xLen; x++) {
        array[y + yOffset][x + xOffset] = ship.layout[y][x];
      }
    }

    return array;
  }
}
