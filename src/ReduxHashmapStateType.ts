import * as Promise from 'promise';
import { FlowTask, FlowTaskPackageType } from '@devhelpr/flowrunner';

export class ReduxHashmapStateType extends FlowTask {
  public execute(node: any, services: any) {
    console.log('RUNNING ReduxHashmapStateType: ' + node.id + ' - ' + node.name);

    return true;
  }

  public getName() {
    return 'ReduxHashmapStateType';
  }

  public getFullName() {
    return 'ReduxHashmap';
  }

  public getReducer(node: any) {
    const setKeyActionId = node.variableName.replace(' ', '') + 'SetKeyAction';
    return (state = {}, action: any) => {
      switch (action.type) {
        case setKeyActionId:
          return Object.assign({}, state, { [action.key]: action.value });
        default:
          return state;
      }
    };
  }

  public getIcon() {
    return 'reduxhashmap';
  }

  public getShape() {
    return 'rect';
  }

  public getTaskType() {
    return 'frontend';
  }

  public getPackageType() {
    return FlowTaskPackageType.DEFAULT_NODE;
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
