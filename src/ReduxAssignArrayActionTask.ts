import * as Promise from 'promise';
import { FlowTask, FlowTaskPackageType } from '@devhelpr/flowrunner';

export class ReduxAssignArrayActionTask extends FlowTask {
  public execute(node: any, services: any) {
    services.dispatch({
      type: node.setVariable.replace(/ /g, '') + 'AssignArrayAction',
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

  public getConfigMetaData() {
    return [{ name: 'setVariable', defaultValue: '', valueType: 'string', required: true }];
  }
}
