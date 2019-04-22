import * as FlowRunner from '@devhelpr/flowrunner';
import * as Promise from 'promise';

export class ReduxArrayStateType extends FlowRunner.FlowTask {
  public execute(node: any, services: any) {
    console.log('RUNNING ReduxArrayStateType: ' + node.id + ' - ' + node.title);

    return true;
  }

  public getName() {
    return 'ReduxArrayStateType';
  }

  public getFullName() {
    return 'ReduxArray';
  }

  public getReducer(node: any) {
    const pushActionId = node.title.replace(' ', '') + 'PushArrayAction';
    const clearActionId = node.title.replace(' ', '') + 'ClearArrayAction';
    const assignActionId = node.title.replace(' ', '') + 'AssignArrayAction';

    return (state = [], action: any) => {
      switch (action.type) {
        case clearActionId: {
          return [];
        }
        case assignActionId: {
          return action.list;
        }
        case pushActionId: {
          const newState: any = state.slice();
          newState.push(action.value);
          return newState;
        }
        default:
          return state;
      }
    };
  }

  public getIcon() {
    return 'reduxarray';
  }

  public getShape() {
    return 'rect';
  }

  public getTaskType() {
    return 'frontend';
  }

  public getPackageType() {
    return FlowRunner.FlowTaskPackageType.DEFAULT_NODE;
  }

  public getCategory() {
    return 'FlowCanvas';
  }

  public getController() {
    return 'FlowCanvasController';
  }

  public getConfigMetaData() {
    return [];
  }
}
