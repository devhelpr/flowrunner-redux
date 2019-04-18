import * as Redux from 'redux';
import * as Rx from '@reactivex/rxjs';
import thunk from 'redux-thunk';

import { FlowEventRunner, HumanFlowToMachineFlow } from '@devhelpr/flowrunner';
import { ReduxActionTask } from './ReduxActionTask';
import { ReduxArrayTask } from './ReduxArrayTask';
import { ReduxAssignArrayActionTask } from './ReduxAssignArrayActionTask';
import { ReduxAssignTask } from './ReduxAssignTask';
import { ReduxClearArrayActionTask } from './ReduxClearArrayActionTask';
import { ReduxGetKeyTask } from './ReduxGetKeyTask';
import { ReduxGetTask } from './ReduxGetTask';
import { ReduxKeyValueTask } from './ReduxKeyValueTask';
import { ReduxPushArrayActionTask } from './ReduxPushArrayActionTask';
import { ReduxSetKeyActionTask } from './ReduxSetKeyActionTask';
import { ReduxThunkActionTask } from './ReduxThunkActionTask';
import { StoreObserverTask } from './StoreObserverTask';

let actions: any = {};
let reducers: any = {};
let store: any = {};
let services: any = {};
let observers: any = {};

services = {
  logMessage: () => {},
  pluginClasses: {},
  registerModel: () => {},
};

services.pluginClasses['ReduxActionTask'] = ReduxActionTask;
services.pluginClasses['ReduxArrayTask'] = ReduxArrayTask;
services.pluginClasses['ReduxAssignArrayActionTask'] = ReduxAssignArrayActionTask;
services.pluginClasses['ReduxAssignTask'] = ReduxAssignTask;
services.pluginClasses['ReduxClearArrayActionTask'] = ReduxClearArrayActionTask;
services.pluginClasses['ReduxGetKeyTask'] = ReduxGetKeyTask;
services.pluginClasses['ReduxGetTask'] = ReduxGetTask;
services.pluginClasses['ReduxKeyValueTask'] = ReduxKeyValueTask;
services.pluginClasses['ReduxPushArrayActionTask'] = ReduxPushArrayActionTask;
services.pluginClasses['ReduxSetKeyActionTask'] = ReduxSetKeyActionTask;
services.pluginClasses['ReduxThunkActionTask'] = ReduxThunkActionTask;
services.pluginClasses['StoreObserverTask'] = StoreObserverTask;

// TODO : replace "hook : any" met interface
FlowEventRunner.useFlowNodeOverrideAttachHook((node: any, task: any, eventEmitter: any, nodeEvent: any) => {
  if (typeof task.getAction === 'function') {
    let nodeInstance = (<any>Object).assign({}, node);
    const actionName = node.title.replace(/ /g, '');
    actions[actionName] = {
      action: task.getAction(actionName, node, eventEmitter),
      nodeEvent: nodeEvent,
    };
  }
});

FlowEventRunner.useFlowNodeRegisterHook((node: any, task: any) => {
  if (typeof task.getReducer === 'function') {
    reducers[node.title.replace(/ /g, '')] = task.getReducer(node);
    return true;
  }
  return false;
});

let subjectStoreChange = new Rx.Subject();
let flowNotifierFactory = (name: string) => {
  return function(middlewareAPI: any) {
    return function(next: any) {
      return function(action: any) {
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

function flowAction(actionName : string, payload : any) {
  const action = actions[actionName.replace(/ /g, '')];

  if (typeof action != "undefined" && action != null) {
    services.getStore().dispatch(action.action(action.nodeEvent, payload))
  }
}

let startFlow: any = (flowPackage: any) =>
  FlowEventRunner.start(flowPackage, services, true).then((services: any) => {
    const rootReducer = Redux.combineReducers(reducers);

    if ((window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ !== undefined) {
      const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || Redux.compose;
      const enhancer = composeEnhancers(Redux.applyMiddleware(thunk, flowNotifierFactory('flownotifier')));

      store = Redux.createStore(rootReducer, enhancer);
    } else {
      store = Redux.createStore(rootReducer, Redux.applyMiddleware(thunk, flowNotifierFactory('flownotifier')));
    }

    // TODO : dispatch gaat verhuizen van callStack naar services
    //  ... het is immers ook een externe dependency
    // .. dus aanpassen in de diverse tasks

    services.dispatch = store.dispatch;

    return services;
  });

export { startFlow, flowAction };
