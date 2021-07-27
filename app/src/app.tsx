import React from 'react';
import ReactDOM from 'react-dom';

import './app.css'
import { connect } from 'react-redux';
import { actions, AppState } from './store';
import { setStateAsyncFactory } from './utils/stateSetter';
import { RateLimiter } from './utils/rateLimiter';
import { isDiffPrimitiveProps } from './utils/diffChecker';

interface PropsFromStore {
}

type AppComponentProps = PropsFromStore & {
}

interface AppComponentState {
  isLoading: boolean;
  loadingMessage?: string;
}

class AppComponent extends React.Component<AppComponentProps, AppComponentState> {
  private setStateAsync = setStateAsyncFactory(this);
  private resizeLimiter = new RateLimiter(50);
  private isAuthAttempted = false;

  constructor(props: AppComponentProps) {
    super(props);

    this.state = {
      isLoading: true
    };
  }

  static displayName = AppComponent.name;

  // -------  onResize()  -----------------------------------------------------------------------
  // Handles setting of IsMobile, handles any changes between mobile and desktop that are needed.
  private onResize = () => {
    this.resizeLimiter.tryAction(this.onResizeActual);
  }

  private onResizeActual = (): void => {
    const vh = (window.innerHeight - 0.5) * 0.01;
    const vw = window.innerWidth * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
    document.documentElement.style.setProperty('--vw', `${vw}px`);
    actions.setInnerWidth(window.innerWidth);
  }

  public shouldComponentUpdate(nextProps: Readonly<AppComponentProps>, nextState: Readonly<AppComponentState>): boolean {
    if (this.state.isLoading && nextState.isLoading) {
      return this.state.loadingMessage !== nextState.loadingMessage;
    }

    if (isDiffPrimitiveProps(this.state, nextState)) {
      return true;
    }

    return false;
  }

  // public componentDidUpdate = async (prevProps: Readonly<AppComponentProps>) => {
  // }

  public async componentDidMount(): Promise<void> {
    window.addEventListener('resize', this.onResize);
    this.onResize();
    // Load stuff here if needed
    this.setState({ isLoading: false });
  }

  public componentWillUnmount() {
    window.removeEventListener('resize', this.onResize);
    this.resizeLimiter.cancel();
  }

  public render(): React.ReactNode {
    /* TODO: show loading screen if loading core data */
    if (this.state.isLoading) {
      return ReactDOM.createPortal((<div className='mt-loading-panel'>
        <div className='mt-loading-text'>
          <div className='f-title'>
            MGB (Calculator)
          </div>
          <div className='f-subtitle'>
            Loading...
          </div>
          <div className='f-details' aria-hidden={true}>{this.state.loadingMessage}</div>
        </div>
      </div>
      ), document.body, 'loading-screen');
    }

    return this.props.children;
  }
}

const stateToProps = (state: AppState, ownProps: Omit<AppComponentProps, keyof PropsFromStore>): PropsFromStore => {
  return ({
  });
};

export const App = connect(stateToProps)(AppComponent);