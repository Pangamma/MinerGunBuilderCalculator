import { ProjectileBundle } from './projectile';
import { ShipTile } from './tile';

export class DpsCalculator {
  private layout: ShipTile[][] = [];
  private visited: boolean[][] = [];

  public setLayout(layout: ShipTile[][]) {
    this.layout = layout;
  }

  public calculateDps(projectile: ProjectileBundle, x: number, y: number) {

  }
}