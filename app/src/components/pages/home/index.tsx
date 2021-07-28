import React from 'react';
import { Page } from '@pages/page';
import { ShipTileGrid } from '../shipBuilder/shipTileGrid';
import { Ship } from '@root/models/ships';
import { TileHelper } from '@root/logic/TileHelper';
import { ShipTile } from '@root/models/tile';
import { ShipSelector } from '../shipBuilder/shipSelector';
import { AppState } from '@root/store';
import { connect } from 'react-redux';

interface PropsFromStore {
  ship: Ship;
}

type HomeIndexProps = PropsFromStore & {
}

interface HomeIndexState {
}

class HomeIndexComponent extends React.PureComponent<HomeIndexProps, HomeIndexState> {
  constructor(props: HomeIndexProps) {
    super(props);

    this.state = {

    };
  }

  public render(): React.ReactNode {
    const layout = TileHelper.getLayoutFromShipDefinition(this.props.ship);
    const tileLayout: ShipTile[][] = layout.map<ShipTile[]>((row) => {
      return row.map<ShipTile>((col: string) => {
        switch (col) {
          case 'X':
            return { nodeId: 'filled', rotation: 0 };
          case 'S':
            return { nodeId: 'start', rotation: 0 };
          case '_':
            return { nodeId: 'empty', rotation: 0 };
          case 'F':
          default:
            return { nodeId: 'finish', rotation: 0 };
        }
      });
    });

    return (
      <Page>
      <ShipSelector />
      <ShipTileGrid tiles={tileLayout} />
        {/* <div className='mt-tile-container'>
                    <TileButton key={-1} title='Fonts' className='f-purple' onClick={() => { window.location.href = '/assets/demo.html'; }} />
                    {appRoutes.filter(r => r.label).map((r, i) =>
                        <TileButton key={i} title={r.label!}
                            onClick={() => appHistory.push(r.defaultPathOnClick)}
                            className={this.getTileClass(r)}
                        />
                    )}
                </div> */}
      </Page >
    );
  }
}

const stateToProps = (state: AppState, ownProps: Omit<HomeIndexProps, keyof PropsFromStore>): PropsFromStore => {
  return {
    ship: state.ship
  };
};

export const HomeIndex = connect(stateToProps)(HomeIndexComponent);