import { FlowTask, FlowTaskPackageType } from '@devhelpr/flowrunner';

//const REDUX_ASSIGN_SET_VALUE_ACTION = 'REDUX_ASSIGN_SET_VALUE_ACTION';

export class ReduxPropertyStateType extends FlowTask {
  public execute(node: any, _services: any, _callStack: any) {
    console.log(
      'RUNNING ReduxPropertyStateType: ' + node.id + ' - ' + node.name
    );

    return true;
  }

  public getName() {
    return 'ReduxPropertyStateType';
  }

  public getFullName() {
    return 'ReduxProperty';
  }

  public getReducer(node: any) {
    const actionId = node.variableName.replace(/ /g, '') + 'SetAction';
    return (state = '', action: any) => {
      try {
        switch (action.type) {
          case actionId:
            if (action.value !== undefined) {
              return action.value;
            } else {
              return state;
            }
          default:
            return state;
        }
      } catch (err) {
        return state;
      }
    };
  }

  public getIcon() {
    return 'reduxproperty';
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
      { name: 'value', defaultValue: '', valueType: 'string', required: false },
      {
        name: 'variableName',
        defaultValue: '',
        valueType: 'string',
        required: false,
      },
    ];
  }
}
