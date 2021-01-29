import { FlowTask, FlowTaskPackageType } from '@devhelpr/flowrunner';

export class ReduxSetItemByKeyArrayActionTask extends FlowTask {
  public execute(node: any, services: any) {
    services.dispatch({
      type: node.setVariable.replace(/ /g, '') + 'SetItemByKeyAction',
      payload: node.payload,
    });

    return true;
  }

  public getName() {
    return 'ReduxSetItemByKeyArrayActionTask';
  }

  public getFullName() {
    return 'ReduxSetItemByKeyArrayAction';
  }

  public getIcon() {
    return 'reduxsetitembykeyarrayaction';
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
