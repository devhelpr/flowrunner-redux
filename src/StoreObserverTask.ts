import * as Promise from 'promise';
import { FlowTask, FlowTaskPackageType } from '@devhelpr/flowrunner';
import { Observable } from '@reactivex/rxjs';
import { isEqual } from 'lodash';

export class StoreObserverTask extends FlowTask {
  public execute(node: any, services: any) {
    let counter = 0;
    const observable = Observable.create((observer: any) => {
      try {
        if (node.propertyName !== undefined && node.propertyName != '') {
          const observableSubscription = services.getObservable('storechange');

          if (observableSubscription !== undefined && observableSubscription !== false) {
            const observerSubscription = {
              complete: () => {
                console.log('StoreObserverTask: Completed observable for ', node.name);
              },
              error: (err: any) => {
                observer.error(err);
              },
              next: (payload: any) => {
                // payload:
                // - nextState
                // - prevState
                if (node.propertyName !== undefined && node.propertyName != null && node.propertyName != '') {
                  if (!isEqual(payload.nextState[node.propertyName], payload.prevState[node.propertyName])) {
                    observer.next(payload.nextState);
                  }
                }
              },
            };

            observableSubscription.subscribe(observerSubscription);
          } else {
            observer.error('StoreObserverTask: Error - observable not found', node.observe);
          }
        } else {
          observer.error('StoreObserverTask: Error - nothing to observe');
        }
      } catch (err) {
        observer.error(err);
      }
    });

    return observable;
  }

  public isAttachedToExternalObservable() {
    return true;
  }
  public isAttachedToStoreChanges() {
    return true;
  }

  public getDescription() {
    return 'Node that observes store changes for {{{propertyName}}}';
  }

  public getName() {
    return 'StoreObserverTask';
  }

  public getFullName() {
    return 'StoreObserver';
  }

  public getIcon() {
    return 'storeobserver';
  }

  public getShape() {
    return 'smallcircle';
  }

  public getDefaultColor() {
    return '#00ff80ff';
  }

  public getTaskType() {
    return 'both';
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
    return [{ name: 'propertyName', defaultValue: '', valueType: 'string', required: true }];
  }
}
