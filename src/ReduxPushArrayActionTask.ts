import * as Promise from 'promise';
import { FlowTask, FlowTaskPackageType } from '@devhelpr/flowrunner';

export class ReduxPushArrayActionTask extends FlowTask {
  public execute(node: any, services: any) {
    services.dispatch({
      type: node.setVariable.replace(/ /g, '') + 'PushArrayAction',
      value: node.payload.value,
    });

    return true;
  }

  public getName() {
    return 'ReduxPushArrayActionTask';
  }

  public getFullName() {
    return 'ReduxPushArrayAction';
  }

  public getIcon() {
    return 'reduxpusharrayaction';
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
    return [
      {name: 'setVariable', defaultValue: '', valueType: 'string', required: true }
    ];
  }
}
