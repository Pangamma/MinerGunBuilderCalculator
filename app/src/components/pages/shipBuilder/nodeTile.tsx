import { TileRotation } from '@root/models/tile';
import React from 'react';
import './nodeTile.scss';

interface NodeTileProps {
  onClick?: () => void;
  nodeId: string | number;
  title?: string;
  rotation?: TileRotation
}

interface NodeTileState { }

export class NodeTile extends React.PureComponent<NodeTileProps, NodeTileState> {
  constructor(props: NodeTileProps) {
    super(props);
    this.state = {};
  }

  public render(): React.ReactNode {
    const {
      nodeId,
      title,
      rotation = 0
    } = this.props;

    const imgURL = `${process.env.PUBLIC_URL}/assets/img/nodes/node_${nodeId || 'empty'}.png`;
    
    return <div className={`mt-nodeTile rotate-${rotation}`} data-nodeid={nodeId}
      tabIndex={0} role='button' title={title || undefined}
      onClick={!!this.props.onClick ? () => this.props.onClick!() : undefined}
    >
      <div className='f-foreground-tile'>
        <img src={imgURL} alt={title}></img>
      </div>
    </div>;
  }
}