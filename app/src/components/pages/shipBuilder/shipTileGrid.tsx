import { ShipTile } from '@root/models/tile';
import React from 'react';
import { NodeTile } from './nodeTile';
import './shipTileGrid.scss';

interface ShipTileGridProps {
  tiles: ShipTile[][];
}

interface ShipTileGridState {
}

export class ShipTileGrid extends React.PureComponent<ShipTileGridProps, ShipTileGridState> {
  constructor(props: ShipTileGridProps) {
    super(props);
    this.state = {
    };
  }

  public render(): React.ReactNode {
    return <div className='mt-ShipTileGrid'>
      {this.props.tiles.map((row, ri) => (
        <div className='cc-shipRow' key={ri}>
          {row.map((col, ci) => (
            <NodeTile nodeId={col.nodeId} rotation={col.rotation || 0} key={ci} />
          ))}
        </div>
      ))}
    </div>;
  }
}