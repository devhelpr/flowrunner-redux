import * as Promise from 'promise';
import { FlowTask, FlowTaskPackageType } from '@devhelpr/flowrunner';

export class ReduxSetKeyActionTask extends FlowTask {
  public execute(node: any, services: any) {
    services.callStack.dispatch({
      key: node.assignToKey,
      type: node.variableName.replace(' ', '') + 'SetKeyAction',
      value: node.payload.value,
    });

    return true;
  }

  public getDescription() {
    return "Reducer name: {{{title}}} - set property: {{{assignToKey}}} using property 'value' from payload";
  }

  public getName() {
    return 'ReduxSetKeyActionTask';
  }

  public getFullName() {
    return 'ReduxSetKeyAction';
  }

  public getIcon() {
    return 'reduxsetkeyaction';
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
    return [{ name: 'assignToKey', defaultValue: '', valueType: 'string', required: true }];
  }
}
