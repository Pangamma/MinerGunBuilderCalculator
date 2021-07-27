import { createBrowserHistory } from 'history';
import { HomeIndex } from './components/pages/home';

export interface AppRoute {
  component: React.ComponentType<any>;
  path: string | string[];
  defaultPathOnClick: string;
  exact?: boolean;
  icon?: string;
  label?: string;
}

export interface AppRouteParameters {
  /**
   * <EXAMPLE> Room Id. Short version (without the organization ID)
   */
  id: string;
}

type PartialBy<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;
export const appHistory = createBrowserHistory({ basename: '/projects/mgb-calc' });
export const appRoutes: AppRoute[] = [
  { path: '/', label: 'Home', component: HomeIndex, exact: true },
].map<AppRoute>((r: PartialBy<AppRoute, 'defaultPathOnClick'>) => {
  if (r.defaultPathOnClick === undefined) {
    if (!Array.isArray(r.path)) {
      r.defaultPathOnClick = r.path as string;
    } else {
      r.defaultPathOnClick = (r.path as string[])[0];
    }
  }

  return r as AppRoute;
});

// .map(r => {r.});
