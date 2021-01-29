import { FlowTask, FlowTaskPackageType } from '@devhelpr/flowrunner';

export class ReduxActionTask extends FlowTask {
  public execute(node: any, services: any) {
    services.dispatch({
      type: node.setVariable.replace(/ /g, '') + 'SetAction',
      value: node.payload.value,
    });

    return true;
  }

  public getName() {
    return 'ReduxActionTask';
  }

  public getFullName() {
    return 'ReduxAction';
  }

  public getDescription() {
    return 'Node that performs a simple redux action';
  }

  public getIcon() {
    return 'reduxaction';
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
      {
        name: 'setVariable',
        defaultValue: '',
        valueType: 'string',
        required: true,
      },
    ];
  }
}
