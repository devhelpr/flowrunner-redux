import * as Promise from 'promise';
import { FlowTask, FlowTaskPackageType } from '@devhelpr/flowrunner';

export class ReduxThunkActionTask extends FlowTask {
  public execute(node: any) {
    console.log('RUNNING ReduxThunkActionTask: ' + node.id + ' - ' + node.title);

    return true;
  }

  public getName() {
    return 'ReduxThunkActionTask';
  }

  public getFullName() {
    return 'ReduxThunkAction';
  }

  public getIcon() {
    return 'reduxthunkaction';
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

  public getAction(actionName: string, nodeInstance: any, nodeEmitter: any) {
    return (nodeEvent: any, payload: any) => {
      return (dispatch: any) => {
        console.log('reactthunkaction dispatched...ready to trigger events', nodeEvent);
        nodeEvent.outputs.map((node: any) => {
          nodeEmitter.emit(node.endshapeid.toString(), payload, dispatch);
        });
      };
    };
  }
}
