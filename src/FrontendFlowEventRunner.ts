import * as Redux from 'redux';
import * as Rx from 'rxjs';
import thunk from 'redux-thunk';

import { FlowEventRunner } from '@devhelpr/flowrunner';
import { ReduxActionTask } from './ReduxActionTask';
import { ReduxArrayStateType } from './ReduxArrayStateType';
import { ReduxAssignArrayActionTask } from './ReduxAssignArrayActionTask';
import { ReduxSetItemByKeyArrayActionTask } from './ReduxSetItemByKeyArrayActionTask';
import { ReduxPropertyStateType } from './ReduxPropertyStateType';
import { ReduxClearArrayActionTask } from './ReduxClearArrayActionTask';
import { ReduxGetKeyTask } from './ReduxGetKeyTask';
import { ReduxGetTask } from './ReduxGetTask';
import { ReduxHashmapStateType } from './ReduxHashmapStateType';
import { ReduxPushArrayActionTask } from './ReduxPushArrayActionTask';
import { ReduxSetKeyActionTask } from './ReduxSetKeyActionTask';
import { ReduxThunkActionTask } from './ReduxThunkActionTask';
import { StoreObserverTask } from './StoreObserverTask';

let actions: any = {};
let reducers: any = {};
let store: any = {};
let services: any = {};
let observers: any = {};

export interface IFrontendFlowRunner {
  debug: boolean;
  reduxMiddleware: any;
  initialStoreState: any;
}

services = {
  logMessage: () => {},
  pluginClasses: {},
  registerModel: () => {},
};

services.pluginClasses['ReduxActionTask'] = ReduxActionTask;
services.pluginClasses['ReduxArrayStateType'] = ReduxArrayStateType;
services.pluginClasses['ReduxAssignArrayActionTask'] = ReduxAssignArrayActionTask;
services.pluginClasses['ReduxSetItemByKeyArrayActionTask'] = ReduxSetItemByKeyArrayActionTask;
services.pluginClasses['ReduxPropertyStateType'] = ReduxPropertyStateType;
services.pluginClasses['ReduxClearArrayActionTask'] = ReduxClearArrayActionTask;
services.pluginClasses['ReduxGetKeyTask'] = ReduxGetKeyTask;
services.pluginClasses['ReduxGetTask'] = ReduxGetTask;
services.pluginClasses['ReduxHashmapStateType'] = ReduxHashmapStateType;
services.pluginClasses['ReduxPushArrayActionTask'] = ReduxPushArrayActionTask;
services.pluginClasses['ReduxSetKeyActionTask'] = ReduxSetKeyActionTask;
services.pluginClasses['ReduxThunkActionTask'] = ReduxThunkActionTask;
services.pluginClasses['StoreObserverTask'] = StoreObserverTask;

// TODO : replace "hook : any" met interface

let flowEventRunner = new FlowEventRunner();

flowEventRunner.registerFlowNodeOverrideAttachHook((node: any, task: any, eventEmitter: any, nodeEvent: any) => {
  if (typeof task.getAction === 'function') {
    let nodeInstance = (<any>Object).assign({}, node);
    const actionName = node.name.replace(/ /g, '');
    actions[actionName] = {
      action: task.getAction(actionName, node, eventEmitter),
      nodeEvent: nodeEvent,
    };
  }
});

flowEventRunner.registerFlowNodeRegisterHook((node: any, task: any) => {
  if (typeof task.getReducer === 'function') {
    reducers[node.variableName.replace(/ /g, '')] = task.getReducer(node);
    return true;
  }
  return false;
});

let subjectStoreChange = new Rx.Subject();
let flowNotifierFactory = (name: string) => {
  return function (middlewareAPI: any) {
    return function (next: any) {
      return function (action: any) {
        let prevState = middlewareAPI.getState();

        var result = next(action);

        let nextState = middlewareAPI.getState();

        subjectStoreChange.next({ nextState: nextState, prevState: prevState });
        return result;
      };
    };
  };
};
observers['storechange'] = subjectStoreChange;

services.getStore = () => {
  return store;
};

function flowAction(actionName: string, payload: any) {
  const action = actions[actionName.replace(/ /g, '')];

  if (typeof action != 'undefined' && action != null) {
    services.getStore().dispatch(action.action(action.nodeEvent, payload));
  }
}

let startFlow: any = (flowPackage: any, appReducers: any, options: IFrontendFlowRunner) => {
  if (options) {
    if (options.debug) {
      services.logMessage = (...args: any[]) => console.log(...args);
    }
  }
  return flowEventRunner.start(flowPackage, services, true).then((services: any) => {
    const rootReducer = Redux.combineReducers(Object.assign({}, reducers, appReducers));

    if (
      process.env.NODE_ENV !== 'production' &&
      typeof window !== 'undefined' &&
      (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ !== undefined
    ) {
      const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || Redux.compose;
      let enhancer;
      if (options.reduxMiddleware) {
        enhancer = composeEnhancers(
          Redux.applyMiddleware(thunk, flowNotifierFactory('flownotifier'), options.reduxMiddleware),
        );
      } else {
        enhancer = composeEnhancers(Redux.applyMiddleware(thunk, flowNotifierFactory('flownotifier')));
      }

      store = Redux.createStore(rootReducer, options.initialStoreState, enhancer);
    } else {
      if (options.reduxMiddleware) {
        store = Redux.createStore(
          rootReducer,
          options.initialStoreState,
          Redux.applyMiddleware(thunk, flowNotifierFactory('flownotifier'), options.reduxMiddleware),
        );
      } else {
        store = Redux.createStore(
          rootReducer,
          options.initialStoreState,
          Redux.applyMiddleware(thunk, flowNotifierFactory('flownotifier')),
        );
      }
    }

    // TODO : dispatch gaat verhuizen van callStack naar services
    //  ... het is immers ook een externe dependency
    // .. dus aanpassen in de diverse tasks

    services.dispatch = store.dispatch;

    return services;
  });
};

const getFlowEventRunner: any = () => flowEventRunner;

export { startFlow, flowAction, getFlowEventRunner };
