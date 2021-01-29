import { FlowTask, FlowTaskPackageType } from '@devhelpr/flowrunner';

export class ReduxGetTask extends FlowTask {
  public execute(node: any, services: any, _callStack: any) {
    return new Promise((resolve, reject) => {
      if (node.assignTo !== undefined && node.assignTo !== '') {
        const reducerName = node.getVariable.replace(/ /g, '');

        const store = services.getStore().getState();

        const payload = Object.assign({}, node.payload, {
          [node.assignTo]: store[reducerName],
        });
        resolve(payload);
      } else {
        reject();
      }
    });
  }

  public getName() {
    return 'ReduxGetTask';
  }

  public getFullName() {
    return 'ReduxGet';
  }

  public getDescription() {
    return 'Get from store: Reducer name: {{{title}}} - and set property {{{assignTo}}} in payload';
  }

  public getIcon() {
    return 'reactget';
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
    return [
      {
        name: 'assignTo',
        defaultValue: '',
        valueType: 'string',
        required: true,
      },
      {
        name: 'getVariable',
        defaultValue: '',
        valueType: 'string',
        required: true,
      },
    ];
  }
}
