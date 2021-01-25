import * as Promise from 'promise';
import { FlowTask, FlowTaskPackageType } from '@devhelpr/flowrunner';
import { Observable } from 'rxjs';

var isEqual = function (value: any, other: any) {
  // Get the value type
  var type = Object.prototype.toString.call(value);

  // If the two objects are not the same type, return false
  if (type !== Object.prototype.toString.call(other)) return false;

  // If items are not an object or array, return false
  if (['[object Array]', '[object Object]'].indexOf(type) < 0) return false;

  // Compare the length of the length of the two items
  var valueLen = type === '[object Array]' ? value.length : Object.keys(value).length;
  var otherLen = type === '[object Array]' ? other.length : Object.keys(other).length;
  if (valueLen !== otherLen) return false;

  // Compare two items
  var compare = function (item1: any, item2: any) {
    // Get the object type
    var itemType = Object.prototype.toString.call(item1);

    // If an object or array, compare recursively
    if (['[object Array]', '[object Object]'].indexOf(itemType) >= 0) {
      if (!isEqual(item1, item2)) return false;
    }

    // Otherwise, do a simple comparison
    else {
      // If the two items are not the same type, return false
      if (itemType !== Object.prototype.toString.call(item2)) return false;

      // Else if it's a function, convert to a string and compare
      // Otherwise, just compare
      if (itemType === '[object Function]') {
        if (item1.toString() !== item2.toString()) return false;
      } else {
        if (item1 !== item2) return false;
      }
    }
  };

  // Compare properties
  if (type === '[object Array]') {
    for (var i = 0; i < valueLen; i++) {
      if (compare(value[i], other[i]) === false) return false;
    }
  } else {
    for (var key in value) {
      if (value.hasOwnProperty(key)) {
        if (compare(value[key], other[key]) === false) return false;
      }
    }
  }

  // If nothing failed, return true
  return true;
};

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
