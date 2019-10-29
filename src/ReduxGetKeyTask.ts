import * as Promise from 'promise';
import { FlowTask, FlowTaskPackageType } from '@devhelpr/flowrunner';

export class ReduxGetKeyTask extends FlowTask {
  public execute(node: any, services: any, callStack: any): any {
    return new Promise((resolve, reject) => {
      if (node.assignTo != undefined && node.readKey != undefined && node.assignTo != '' && node.readKey != '') {
        const reducerName = node.variableName.replace(/ /g, '');
        const store = services.getStore().getState();

        const payload = Object.assign({}, node.payload, {
          [node.assignTo]: store[reducerName][node.readKey],
        });
        resolve(payload);
      } else {
        reject();
      }
    });
  }

  public getName() {
    return 'ReduxGetKeyTask';
  }

  public getFullName() {
    return 'ReduxGetKey';
  }

  public getDescription() {
    return 'Reducer name: {{{title}}} - get property: {{{readKey}}} set property {{{assignTo}}} in payload';
  }

  public getIcon() {
    return 'reactgetkey';
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
      { name: 'readKey', defaultValue: '', valueType: 'string', required: true },
      { name: 'assignTo', defaultValue: '', valueType: 'string', required: true },
    ];
  }
}
