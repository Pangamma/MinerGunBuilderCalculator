import { Ship, ships } from '@root/models/ships';
import { ShipTile } from '@root/models/tile';
import { actions, AppState } from '@root/store';
import React from 'react';
import { connect } from 'react-redux';
import { NodeTile } from './nodeTile';
import './shipSelector.scss';

type ShipSelectorProps = PropsFromStore & {

}

interface PropsFromStore {
  ship: Ship;
}

interface ShipSelectorState {
  isOpen: boolean;
}

class ShipSelectorComponent extends React.PureComponent<ShipSelectorProps, ShipSelectorState> {
  constructor(props: ShipSelectorProps) {
    super(props);
    this.state = {
      isOpen: false
    };
  }

  public render(): React.ReactNode {
    const { ship } = this.props;
    const imgURL = `${process.env.PUBLIC_URL}/assets/img/ships/ship${ship.id}.png`;

    return <div className='mt-ShipSelector'>
      <div className='cc-selectedShipFrame'>
        <div className='cc-imgWrapper'>
          <img src={imgURL} alt={ship.name}></img>
        </div>
      </div>
      <div className='cc-selector'>
        <select
        onChange={(e) => {
          const val = parseInt(e.target.value,10);
          const found = ships.filter((ship) => ship.id == val)[0];
          if (!!found) actions.setShip(found);
        }}>
          {ships.map(x => <option key={x.id} value={x.id}>{x.name}</option>)}
        </select>
      </div>
    </div>;
  }
}

const stateToProps = (state: AppState, ownProps: Omit<ShipSelectorProps, keyof PropsFromStore>): PropsFromStore => {
  return {
    ship: state.ship
  };
};

export const ShipSelector = connect(stateToProps)(ShipSelectorComponent);