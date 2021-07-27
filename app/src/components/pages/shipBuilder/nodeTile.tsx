import React from 'react';
import './nodeTile.scss';
import { Node } from '@root/models/nodes';

interface NodeTileProps {
  onClick?: () => void;
  nodeId: string | number;
  isFilled: boolean;
  title?: string;
}

interface NodeTileState { }

export class NodeTile extends React.PureComponent<NodeTileProps, NodeTileState> {
  constructor(props: NodeTileProps) {
    super(props);
    this.state = {};
  }

  public render(): React.ReactNode {
    const { isFilled, nodeId, title } = this.props;
    const imgURL = `${process.env.PUBLIC_URL}/assets/img/nodes/node_${nodeId || 'empty'}.png`;
    const bgURL = `${process.env.PUBLIC_URL}/assets/img/nodes/node_${isFilled ? 'filled' : 'empty'}.png`;

    return <div className='mt-nodeTile' data-nodeId={nodeId}
      tabIndex={0} role='button' title={title || undefined}
      onClick={!!this.props.onClick ? () => this.props.onClick!() : undefined}
    >
      <div className='f-background-tile'>
        <img src={bgURL} alt=''></img>
      </div>

      <div className='f-foreground-tile'>
        <img src={imgURL} alt={title}></img>
      </div>
    </div>;
  }
}