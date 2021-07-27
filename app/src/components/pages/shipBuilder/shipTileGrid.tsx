import React from 'react';
import { Ship } from '@root/models/ships';
import './shipTileGrid.scss';
import { NodeTile } from './nodeTile';

const MAX_TILE_HEIGHT = 11;

interface ShipTileGridProps {
  ship: Ship;
  itemLayout?: string[][];
}

interface ShipTileGridState {
  shipLayout: string[][];
}

export class ShipTileGrid extends React.PureComponent<ShipTileGridProps, ShipTileGridState> {
  constructor(props: ShipTileGridProps) {
    super(props);
    this.state = {
      shipLayout: this.getLayoutFromShipDefinition(props.ship)
    };
  }

  private getLayoutFromShipDefinition(ship: Ship): string[][] {
    let yOffset = Math.floor((MAX_TILE_HEIGHT - ship.layout.length) / 2);
    let xOffset = Math.floor((MAX_TILE_HEIGHT - ship.layout[0].length) / 2);
    let yLen = ship.layout.length;
    let xLen = ship.layout[0].length;
    let array: string[][] = [];

    for (let y = 0; y < MAX_TILE_HEIGHT; y++) {
      array[y] = [];
      for (let x = 0; x < MAX_TILE_HEIGHT; x++) {
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

  public render(): React.ReactNode {
    return <div className='mt-ShipTileGrid'>
      {this.state.shipLayout.map((row, ri) => (
        <div className='cc-shipRow'>
          {row.map((col, ci) => {
            switch (col) {
              case 'X':
                return (<NodeTile isFilled={true} nodeId='filled' />);
              case 'F':
                return (<NodeTile isFilled={true} nodeId='finish' />);
              case 'S':
                return (<NodeTile isFilled={true} nodeId='start' />);
              case '_':
              default:
                return (<NodeTile isFilled={false} nodeId='empty' />);
            }
          })}
        </div>
      ))}
    </div>;
  }
}