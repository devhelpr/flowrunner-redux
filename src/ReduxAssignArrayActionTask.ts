import * as Promise from 'promise';
import { FlowTask, FlowTaskPackageType } from '@devhelpr/flowrunner';

export class ReduxAssignArrayActionTask extends FlowTask {
  public execute(node: any, services: any, dispatch: any) {
    dispatch({
      type: node.title.replace(' ', '') + 'AssignArrayAction',
      list: node.payload.list,
    });

    return true;
  }

  public getName() {
    return 'ReduxAssignArrayActionTask';
  }

  public getFullName() {
    return 'ReduxAssignArrayAction';
  }

  public getIcon() {
    return 'reduxassignarrayaction';
  }

  public getShape() {
    return 'circle';
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
}
