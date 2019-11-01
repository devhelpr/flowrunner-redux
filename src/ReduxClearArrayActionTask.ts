import * as Promise from 'promise';
import { FlowTask, FlowTaskPackageType } from '@devhelpr/flowrunner';

export class ReduxClearArrayActionTask extends FlowTask {
  public execute(node: any, services: any) {
    services.dispatch({
      type: node.setVariable.replace(/ /g, '') + 'ClearArrayAction',
      value: node.payload.value,
    });

    return true;
  }

  public getName() {
    return 'ReduxClearArrayActionTask';
  }

  public getFullName() {
    return 'ReduxClearArrayActionTask';
  }

  public getIcon() {
    return 'reduxcleararrayaction';
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
