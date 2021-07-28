import { NodeType } from './nodes';

export type TileRotation = 0 | 90 | 180 | 270;

export interface ShipTile {
  rotation: TileRotation;
  nodeId: NodeType;
}