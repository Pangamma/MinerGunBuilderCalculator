import { ProjectileBundle } from './projectile';
import { ShipTile, TileRotation } from './tile';

export type Side = 'TOP' | 'LEFT' | 'RIGHT' | 'BOTTOM';
export type NodeType = 'empty' | 'filled' | 'start' | 'finish'
  | '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10'
  | '11' | '12' | '13' | '14' | '15' | '16' | '17' | '19' | '20'
  | '21' | '22' | '23' | '24' | '25' | '26' | '27' | '29' | '30'
  | '31' | '32' | '33' | '34' | '35' | '36' | '37' | '39' | '40'
  | '41' | '42' | '43' | '44' | '45' | '46' | '47' | '49' | '50';

export interface NodeProps extends ShipTile {

};

export abstract class Node implements ShipTile {
  rotation: TileRotation;
  nodeId: NodeType;

  constructor(props: NodeProps) {
    this.rotation = props.rotation;
    this.nodeId = props.nodeId;
  }

  public abstract processProjectiles(projectiles: ProjectileBundle): ProjectileBundle;
  public abstract canBePlaced(projectiles: ProjectileBundle): ProjectileBundle;

  /**
   * Reset the node back to its original state.
   */
  public reset() {
    this.rotation = 0;
    if (!['filled', 'finish', 'start'].includes(this.nodeId)) {
      this.nodeId = 'empty';
    }
  }
}