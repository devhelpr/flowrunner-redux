import { createElement, Fragment, Component } from 'react';
import { combineReducers, applyMiddleware, createStore, compose } from 'redux';
import { Observable, Subject } from 'rxjs';
import thunk from 'redux-thunk';
import { FlowTaskPackageType, FlowTask, FlowEventRunner } from '@devhelpr/flowrunner';

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

var ReduxActionTask = /*#__PURE__*/function (_FlowTask) {
  _inheritsLoose(ReduxActionTask, _FlowTask);

  function ReduxActionTask() {
    return _FlowTask.apply(this, arguments) || this;
  }

  var _proto = ReduxActionTask.prototype;

  _proto.execute = function execute(node, services) {
    services.dispatch({
      type: node.setVariable.replace(/ /g, '') + 'SetAction',
      value: node.payload.value
    });
    return true;
  };

  _proto.getName = function getName() {
    return 'ReduxActionTask';
  };

  _proto.getFullName = function getFullName() {
    return 'ReduxAction';
  };

  _proto.getDescription = function getDescription() {
    return 'Node that performs a simple redux action';
  };

  _proto.getIcon = function getIcon() {
    return 'reduxaction';
  };

  _proto.getShape = function getShape() {
    return 'circle';
  };

  _proto.getTaskType = function getTaskType() {
    return 'frontend';
  };

  _proto.getPackageType = function getPackageType() {
    return FlowTaskPackageType.DEFAULT_NODE;
  };

  _proto.getCategory = function getCategory() {
    return 'FlowCanvas';
  };

  _proto.getController = function getController() {
    return 'FlowCanvasController';
  };

  _proto.getConfigMetaData = function getConfigMetaData() {
    return [{
      name: 'setVariable',
      defaultValue: '',
      valueType: 'string',
      required: true
    }];
  };

  return ReduxActionTask;
}(FlowTask);

var ReduxArrayStateType = /*#__PURE__*/function (_FlowRunner$FlowTask) {
  _inheritsLoose(ReduxArrayStateType, _FlowRunner$FlowTask);

  function ReduxArrayStateType() {
    return _FlowRunner$FlowTask.apply(this, arguments) || this;
  }

  var _proto = ReduxArrayStateType.prototype;

  _proto.execute = function execute(node, _services) {
    console.log('RUNNING ReduxArrayStateType: ' + node.id + ' - ' + node.name);
    return true;
  };

  _proto.getName = function getName() {
    return 'ReduxArrayStateType';
  };

  _proto.getFullName = function getFullName() {
    return 'ReduxArray';
  };

  _proto.getReducer = function getReducer(node) {
    var variableName = node.variableName.replace(/ /g, '');
    var pushActionId = variableName + 'PushArrayAction';
    var clearActionId = variableName + 'ClearArrayAction';
    var assignActionId = variableName + 'AssignArrayAction';
    var setItemByKeyActionId = variableName + 'SetItemByKeyAction';
    return function (state, action) {
      if (state === void 0) {
        state = [];
      }

      switch (action.type) {
        case clearActionId:
          {
            return [];
          }

        case assignActionId:
          {
            return action.list;
          }

        case pushActionId:
          {
            var newState = state.slice();
            newState.push(action.value);
            return newState;
          }

        case setItemByKeyActionId:
          {
            var _newState = state.map(function (item) {
              if (item[node.idPropertyName] === action.payload[node.idPropertyName]) {
                return _extends({}, action.payload);
              }

              return _extends({}, item);
            });

            return _newState;
          }

        default:
          return state;
      }
    };
  };

  _proto.getIcon = function getIcon() {
    return 'reduxarray';
  };

  _proto.getShape = function getShape() {
    return 'rect';
  };

  _proto.getTaskType = function getTaskType() {
    return 'frontend';
  };

  _proto.getPackageType = function getPackageType() {
    return FlowTaskPackageType.DEFAULT_NODE;
  };

  _proto.getCategory = function getCategory() {
    return 'FlowCanvas';
  };

  _proto.getController = function getController() {
    return 'FlowCanvasController';
  };

  _proto.getConfigMetaData = function getConfigMetaData() {
    return [{
      name: 'variableName',
      defaultValue: '',
      valueType: 'string',
      required: true
    }];
  };

  return ReduxArrayStateType;
}(FlowTask);

var ReduxAssignArrayActionTask = /*#__PURE__*/function (_FlowTask) {
  _inheritsLoose(ReduxAssignArrayActionTask, _FlowTask);

  function ReduxAssignArrayActionTask() {
    return _FlowTask.apply(this, arguments) || this;
  }

  var _proto = ReduxAssignArrayActionTask.prototype;

  _proto.execute = function execute(node, services) {
    services.dispatch({
      type: node.setVariable.replace(/ /g, '') + 'AssignArrayAction',
      list: node.payload.list
    });
    return true;
  };

  _proto.getName = function getName() {
    return 'ReduxAssignArrayActionTask';
  };

  _proto.getFullName = function getFullName() {
    return 'ReduxAssignArrayAction';
  };

  _proto.getIcon = function getIcon() {
    return 'reduxassignarrayaction';
  };

  _proto.getShape = function getShape() {
    return 'circle';
  };

  _proto.getTaskType = function getTaskType() {
    return 'frontend';
  };

  _proto.getPackageType = function getPackageType() {
    return FlowTaskPackageType.DEFAULT_NODE;
  };

  _proto.getCategory = function getCategory() {
    return 'FlowCanvas';
  };

  _proto.getController = function getController() {
    return 'FlowCanvasController';
  };

  _proto.getConfigMetaData = function getConfigMetaData() {
    return [{
      name: 'setVariable',
      defaultValue: '',
      valueType: 'string',
      required: true
    }];
  };

  return ReduxAssignArrayActionTask;
}(FlowTask);

var ReduxSetItemByKeyArrayActionTask = /*#__PURE__*/function (_FlowTask) {
  _inheritsLoose(ReduxSetItemByKeyArrayActionTask, _FlowTask);

  function ReduxSetItemByKeyArrayActionTask() {
    return _FlowTask.apply(this, arguments) || this;
  }

  var _proto = ReduxSetItemByKeyArrayActionTask.prototype;

  _proto.execute = function execute(node, services) {
    services.dispatch({
      type: node.setVariable.replace(/ /g, '') + 'SetItemByKeyAction',
      payload: node.payload
    });
    return true;
  };

  _proto.getName = function getName() {
    return 'ReduxSetItemByKeyArrayActionTask';
  };

  _proto.getFullName = function getFullName() {
    return 'ReduxSetItemByKeyArrayAction';
  };

  _proto.getIcon = function getIcon() {
    return 'reduxsetitembykeyarrayaction';
  };

  _proto.getShape = function getShape() {
    return 'circle';
  };

  _proto.getTaskType = function getTaskType() {
    return 'frontend';
  };

  _proto.getPackageType = function getPackageType() {
    return FlowTaskPackageType.DEFAULT_NODE;
  };

  _proto.getCategory = function getCategory() {
    return 'FlowCanvas';
  };

  _proto.getController = function getController() {
    return 'FlowCanvasController';
  };

  _proto.getConfigMetaData = function getConfigMetaData() {
    return [{
      name: 'setVariable',
      defaultValue: '',
      valueType: 'string',
      required: true
    }];
  };

  return ReduxSetItemByKeyArrayActionTask;
}(FlowTask);

var ReduxPropertyStateType = /*#__PURE__*/function (_FlowTask) {
  _inheritsLoose(ReduxPropertyStateType, _FlowTask);

  function ReduxPropertyStateType() {
    return _FlowTask.apply(this, arguments) || this;
  }

  var _proto = ReduxPropertyStateType.prototype;

  _proto.execute = function execute(node, _services, _callStack) {
    console.log('RUNNING ReduxPropertyStateType: ' + node.id + ' - ' + node.name);
    return true;
  };

  _proto.getName = function getName() {
    return 'ReduxPropertyStateType';
  };

  _proto.getFullName = function getFullName() {
    return 'ReduxProperty';
  };

  _proto.getReducer = function getReducer(node) {
    var actionId = node.variableName.replace(/ /g, '') + 'SetAction';
    return function (state, action) {
      if (state === void 0) {
        state = '';
      }

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
  };

  _proto.getIcon = function getIcon() {
    return 'reduxproperty';
  };

  _proto.getShape = function getShape() {
    return 'rect';
  };

  _proto.getTaskType = function getTaskType() {
    return 'frontend';
  };

  _proto.getPackageType = function getPackageType() {
    return FlowTaskPackageType.DEFAULT_NODE;
  };

  _proto.getCategory = function getCategory() {
    return 'FlowCanvas';
  };

  _proto.getController = function getController() {
    return 'FlowCanvasController';
  };

  _proto.getConfigMetaData = function getConfigMetaData() {
    return [{
      name: 'value',
      defaultValue: '',
      valueType: 'string',
      required: false
    }, {
      name: 'variableName',
      defaultValue: '',
      valueType: 'string',
      required: false
    }];
  };

  return ReduxPropertyStateType;
}(FlowTask);

var ReduxClearArrayActionTask = /*#__PURE__*/function (_FlowTask) {
  _inheritsLoose(ReduxClearArrayActionTask, _FlowTask);

  function ReduxClearArrayActionTask() {
    return _FlowTask.apply(this, arguments) || this;
  }

  var _proto = ReduxClearArrayActionTask.prototype;

  _proto.execute = function execute(node, services) {
    services.dispatch({
      type: node.setVariable.replace(/ /g, '') + 'ClearArrayAction',
      value: node.payload.value
    });
    return true;
  };

  _proto.getName = function getName() {
    return 'ReduxClearArrayActionTask';
  };

  _proto.getFullName = function getFullName() {
    return 'ReduxClearArrayActionTask';
  };

  _proto.getIcon = function getIcon() {
    return 'reduxcleararrayaction';
  };

  _proto.getShape = function getShape() {
    return 'circle';
  };

  _proto.getTaskType = function getTaskType() {
    return 'frontend';
  };

  _proto.getPackageType = function getPackageType() {
    return FlowTaskPackageType.DEFAULT_NODE;
  };

  _proto.getCategory = function getCategory() {
    return 'FlowCanvas';
  };

  _proto.getController = function getController() {
    return 'FlowCanvasController';
  };

  _proto.getConfigMetaData = function getConfigMetaData() {
    return [{
      name: 'setVariable',
      defaultValue: '',
      valueType: 'string',
      required: true
    }];
  };

  return ReduxClearArrayActionTask;
}(FlowTask);

var ReduxGetKeyTask = /*#__PURE__*/function (_FlowTask) {
  _inheritsLoose(ReduxGetKeyTask, _FlowTask);

  function ReduxGetKeyTask() {
    return _FlowTask.apply(this, arguments) || this;
  }

  var _proto = ReduxGetKeyTask.prototype;

  _proto.execute = function execute(node, services, _callStack) {
    return new Promise(function (resolve, reject) {
      if (node.assignTo !== undefined && node.readKey !== undefined && node.assignTo !== '' && node.readKey !== '') {
        var _Object$assign;

        var reducerName = node.getVariable.replace(/ /g, '');
        var store = services.getStore().getState();
        var payload = Object.assign({}, node.payload, (_Object$assign = {}, _Object$assign[node.assignTo] = store[reducerName][node.readKey], _Object$assign));
        resolve(payload);
      } else {
        reject();
      }
    });
  };

  _proto.getName = function getName() {
    return 'ReduxGetKeyTask';
  };

  _proto.getFullName = function getFullName() {
    return 'ReduxGetKey';
  };

  _proto.getDescription = function getDescription() {
    return 'Reducer name: {{{title}}} - get property: {{{readKey}}} set property {{{assignTo}}} in payload';
  };

  _proto.getIcon = function getIcon() {
    return 'reactgetkey';
  };

  _proto.getShape = function getShape() {
    return 'circle';
  };

  _proto.getTaskType = function getTaskType() {
    return 'frontend';
  };

  _proto.getPackageType = function getPackageType() {
    return FlowTaskPackageType.DEFAULT_NODE;
  };

  _proto.getCategory = function getCategory() {
    return 'FlowCanvas';
  };

  _proto.getController = function getController() {
    return 'FlowCanvasController';
  };

  _proto.getConfigMetaData = function getConfigMetaData() {
    return [{
      name: 'readKey',
      defaultValue: '',
      valueType: 'string',
      required: true
    }, {
      name: 'assignTo',
      defaultValue: '',
      valueType: 'string',
      required: true
    }, {
      name: 'getVariable',
      defaultValue: '',
      valueType: 'string',
      required: true
    }];
  };

  return ReduxGetKeyTask;
}(FlowTask);

var ReduxGetTask = /*#__PURE__*/function (_FlowTask) {
  _inheritsLoose(ReduxGetTask, _FlowTask);

  function ReduxGetTask() {
    return _FlowTask.apply(this, arguments) || this;
  }

  var _proto = ReduxGetTask.prototype;

  _proto.execute = function execute(node, services, _callStack) {
    return new Promise(function (resolve, reject) {
      if (node.assignTo !== undefined && node.assignTo !== '') {
        var _Object$assign;

        var reducerName = node.getVariable.replace(/ /g, '');
        var store = services.getStore().getState();
        var payload = Object.assign({}, node.payload, (_Object$assign = {}, _Object$assign[node.assignTo] = store[reducerName], _Object$assign));
        resolve(payload);
      } else {
        reject();
      }
    });
  };

  _proto.getName = function getName() {
    return 'ReduxGetTask';
  };

  _proto.getFullName = function getFullName() {
    return 'ReduxGet';
  };

  _proto.getDescription = function getDescription() {
    return 'Get from store: Reducer name: {{{title}}} - and set property {{{assignTo}}} in payload';
  };

  _proto.getIcon = function getIcon() {
    return 'reactget';
  };

  _proto.getShape = function getShape() {
    return 'rect';
  };

  _proto.getTaskType = function getTaskType() {
    return 'frontend';
  };

  _proto.getPackageType = function getPackageType() {
    return FlowTaskPackageType.DEFAULT_NODE;
  };

  _proto.getCategory = function getCategory() {
    return 'FlowCanvas';
  };

  _proto.getController = function getController() {
    return 'FlowCanvasController';
  };

  _proto.getConfigMetaData = function getConfigMetaData() {
    return [{
      name: 'assignTo',
      defaultValue: '',
      valueType: 'string',
      required: true
    }, {
      name: 'getVariable',
      defaultValue: '',
      valueType: 'string',
      required: true
    }];
  };

  return ReduxGetTask;
}(FlowTask);

var ReduxHashmapStateType = /*#__PURE__*/function (_FlowTask) {
  _inheritsLoose(ReduxHashmapStateType, _FlowTask);

  function ReduxHashmapStateType() {
    return _FlowTask.apply(this, arguments) || this;
  }

  var _proto = ReduxHashmapStateType.prototype;

  _proto.execute = function execute(node, _services) {
    console.log('RUNNING ReduxHashmapStateType: ' + node.id + ' - ' + node.name);
    return true;
  };

  _proto.getName = function getName() {
    return 'ReduxHashmapStateType';
  };

  _proto.getFullName = function getFullName() {
    return 'ReduxHashmap';
  };

  _proto.getReducer = function getReducer(node) {
    var setKeyActionId = node.variableName.replace(/ /g, '') + 'SetKeyAction';
    return function (state, action) {
      var _Object$assign;

      if (state === void 0) {
        state = {};
      }

      switch (action.type) {
        case setKeyActionId:
          return Object.assign({}, state, (_Object$assign = {}, _Object$assign[action.key] = action.value, _Object$assign));

        default:
          return state;
      }
    };
  };

  _proto.getIcon = function getIcon() {
    return 'reduxhashmap';
  };

  _proto.getShape = function getShape() {
    return 'rect';
  };

  _proto.getTaskType = function getTaskType() {
    return 'frontend';
  };

  _proto.getPackageType = function getPackageType() {
    return FlowTaskPackageType.DEFAULT_NODE;
  };

  _proto.getCategory = function getCategory() {
    return 'FlowCanvas';
  };

  _proto.getController = function getController() {
    return 'FlowCanvasController';
  };

  _proto.getConfigMetaData = function getConfigMetaData() {
    return [{
      name: 'variableName',
      defaultValue: '',
      valueType: 'string',
      required: true
    }];
  };

  return ReduxHashmapStateType;
}(FlowTask);

var ReduxPushArrayActionTask = /*#__PURE__*/function (_FlowTask) {
  _inheritsLoose(ReduxPushArrayActionTask, _FlowTask);

  function ReduxPushArrayActionTask() {
    return _FlowTask.apply(this, arguments) || this;
  }

  var _proto = ReduxPushArrayActionTask.prototype;

  _proto.execute = function execute(node, services) {
    services.dispatch({
      type: node.setVariable.replace(/ /g, '') + 'PushArrayAction',
      value: node.payload.value
    });
    return true;
  };

  _proto.getName = function getName() {
    return 'ReduxPushArrayActionTask';
  };

  _proto.getFullName = function getFullName() {
    return 'ReduxPushArrayAction';
  };

  _proto.getIcon = function getIcon() {
    return 'reduxpusharrayaction';
  };

  _proto.getShape = function getShape() {
    return 'circle';
  };

  _proto.getTaskType = function getTaskType() {
    return 'frontend';
  };

  _proto.getPackageType = function getPackageType() {
    return FlowTaskPackageType.DEFAULT_NODE;
  };

  _proto.getCategory = function getCategory() {
    return 'FlowCanvas';
  };

  _proto.getController = function getController() {
    return 'FlowCanvasController';
  };

  _proto.getConfigMetaData = function getConfigMetaData() {
    return [{
      name: 'setVariable',
      defaultValue: '',
      valueType: 'string',
      required: true
    }];
  };

  return ReduxPushArrayActionTask;
}(FlowTask);

var ReduxSetKeyActionTask = /*#__PURE__*/function (_FlowTask) {
  _inheritsLoose(ReduxSetKeyActionTask, _FlowTask);

  function ReduxSetKeyActionTask() {
    return _FlowTask.apply(this, arguments) || this;
  }

  var _proto = ReduxSetKeyActionTask.prototype;

  _proto.execute = function execute(node, services) {
    services.callStack.dispatch({
      key: node.assignToKey,
      type: node.setVariable.replace(/ /g, '') + 'SetKeyAction',
      value: node.payload.value
    });
    return true;
  };

  _proto.getDescription = function getDescription() {
    return "Reducer name: {{{title}}} - set property: {{{assignToKey}}} using property 'value' from payload";
  };

  _proto.getName = function getName() {
    return 'ReduxSetKeyActionTask';
  };

  _proto.getFullName = function getFullName() {
    return 'ReduxSetKeyAction';
  };

  _proto.getIcon = function getIcon() {
    return 'reduxsetkeyaction';
  };

  _proto.getShape = function getShape() {
    return 'circle';
  };

  _proto.getTaskType = function getTaskType() {
    return 'frontend';
  };

  _proto.getPackageType = function getPackageType() {
    return FlowTaskPackageType.DEFAULT_NODE;
  };

  _proto.getCategory = function getCategory() {
    return 'FlowCanvas';
  };

  _proto.getController = function getController() {
    return 'FlowCanvasController';
  };

  _proto.getConfigMetaData = function getConfigMetaData() {
    return [{
      name: 'assignToKey',
      defaultValue: '',
      valueType: 'string',
      required: true
    }, {
      name: 'setVariable',
      defaultValue: '',
      valueType: 'string',
      required: true
    }];
  };

  return ReduxSetKeyActionTask;
}(FlowTask);

var ReduxThunkActionTask = /*#__PURE__*/function (_FlowTask) {
  _inheritsLoose(ReduxThunkActionTask, _FlowTask);

  function ReduxThunkActionTask() {
    return _FlowTask.apply(this, arguments) || this;
  }

  var _proto = ReduxThunkActionTask.prototype;

  _proto.execute = function execute(node) {
    console.log('RUNNING ReduxThunkActionTask: ' + node.id + ' - ' + node.name);
    return true;
  };

  _proto.getName = function getName() {
    return 'ReduxThunkActionTask';
  };

  _proto.getFullName = function getFullName() {
    return 'ReduxThunkAction';
  };

  _proto.getIcon = function getIcon() {
    return 'reduxthunkaction';
  };

  _proto.getShape = function getShape() {
    return 'circle';
  };

  _proto.getTaskType = function getTaskType() {
    return 'frontend';
  };

  _proto.getPackageType = function getPackageType() {
    return FlowTaskPackageType.DEFAULT_NODE;
  };

  _proto.getCategory = function getCategory() {
    return 'FlowCanvas';
  };

  _proto.getController = function getController() {
    return 'FlowCanvasController';
  };

  _proto.getAction = function getAction(_actionName, _nodeInstance, nodeEmitter) {
    return function (nodeEvent, payload) {
      return function (dispatch) {
        //console.log('reactthunkaction dispatched...ready to trigger events', nodeEvent);
        nodeEvent.outputs.map(function (node) {
          nodeEmitter.emit(node.endshapeid.toString(), payload, dispatch);
          return true;
        });
      };
    };
  };

  return ReduxThunkActionTask;
}(FlowTask);

var isEqual = function isEqual(value, other) {
  // Get the value type
  var type = Object.prototype.toString.call(value); // If the two objects are not the same type, return false

  if (type !== Object.prototype.toString.call(other)) return false; // If items are not an object or array, return false

  if (['[object Array]', '[object Object]'].indexOf(type) < 0) return false; // Compare the length of the length of the two items

  var valueLen = type === '[object Array]' ? value.length : Object.keys(value).length;
  var otherLen = type === '[object Array]' ? other.length : Object.keys(other).length;
  if (valueLen !== otherLen) return false; // Compare two items

  var compare = function compare(item1, item2) {
    // Get the object type
    var itemType = Object.prototype.toString.call(item1); // If an object or array, compare recursively

    if (['[object Array]', '[object Object]'].indexOf(itemType) >= 0) {
      if (!isEqual(item1, item2)) return false;
    } // Otherwise, do a simple comparison
    else {
        // If the two items are not the same type, return false
        if (itemType !== Object.prototype.toString.call(item2)) return false; // Else if it's a function, convert to a string and compare
        // Otherwise, just compare

        if (itemType === '[object Function]') {
          if (item1.toString() !== item2.toString()) return false;
        } else {
          if (item1 !== item2) return false;
        }
      }

    return true;
  }; // Compare properties


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
  } // If nothing failed, return true


  return true;
};

var StoreObserverTask = /*#__PURE__*/function (_FlowTask) {
  _inheritsLoose(StoreObserverTask, _FlowTask);

  function StoreObserverTask() {
    return _FlowTask.apply(this, arguments) || this;
  }

  var _proto = StoreObserverTask.prototype;

  _proto.execute = function execute(node, services) {
    var observable = Observable.create(function (observer) {
      try {
        if (node.propertyName !== undefined && node.propertyName !== '') {
          var observableSubscription = services.getObservable('storechange');

          if (observableSubscription !== undefined && observableSubscription !== false) {
            var observerSubscription = {
              complete: function complete() {
                console.log('StoreObserverTask: Completed observable for ', node.name);
              },
              error: function error(err) {
                observer.error(err);
              },
              next: function next(payload) {
                // payload:
                // - nextState
                // - prevState
                if (node.propertyName !== undefined && node.propertyName !== null && node.propertyName !== '') {
                  if (!isEqual(payload.nextState[node.propertyName], payload.prevState[node.propertyName])) {
                    observer.next(payload.nextState);
                  }
                }
              }
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
  };

  _proto.isAttachedToExternalObservable = function isAttachedToExternalObservable() {
    return true;
  };

  _proto.isAttachedToStoreChanges = function isAttachedToStoreChanges() {
    return true;
  };

  _proto.getDescription = function getDescription() {
    return 'Node that observes store changes for {{{propertyName}}}';
  };

  _proto.getName = function getName() {
    return 'StoreObserverTask';
  };

  _proto.getFullName = function getFullName() {
    return 'StoreObserver';
  };

  _proto.getIcon = function getIcon() {
    return 'storeobserver';
  };

  _proto.getShape = function getShape() {
    return 'smallcircle';
  };

  _proto.getDefaultColor = function getDefaultColor() {
    return '#00ff80ff';
  };

  _proto.getTaskType = function getTaskType() {
    return 'both';
  };

  _proto.getPackageType = function getPackageType() {
    return FlowTaskPackageType.DEFAULT_NODE;
  };

  _proto.getCategory = function getCategory() {
    return 'FlowCanvas';
  };

  _proto.getController = function getController() {
    return 'FlowCanvasController';
  };

  _proto.getConfigMetaData = function getConfigMetaData() {
    return [{
      name: 'propertyName',
      defaultValue: '',
      valueType: 'string',
      required: true
    }];
  };

  return StoreObserverTask;
}(FlowTask);

var actions = {};
var reducers = {};
var store = {};
var services = {};
services = {
  logMessage: function logMessage() {},
  pluginClasses: {},
  registerModel: function registerModel() {}
};
services.pluginClasses['ReduxActionTask'] = ReduxActionTask;
services.pluginClasses['ReduxArrayStateType'] = ReduxArrayStateType;
services.pluginClasses['ReduxAssignArrayActionTask'] = ReduxAssignArrayActionTask;
services.pluginClasses['ReduxSetItemByKeyArrayActionTask'] = ReduxSetItemByKeyArrayActionTask;
services.pluginClasses['ReduxPropertyStateType'] = ReduxPropertyStateType;
services.pluginClasses['ReduxClearArrayActionTask'] = ReduxClearArrayActionTask;
services.pluginClasses['ReduxGetKeyTask'] = ReduxGetKeyTask;
services.pluginClasses['ReduxGetTask'] = ReduxGetTask;
services.pluginClasses['ReduxHashmapStateType'] = ReduxHashmapStateType;
services.pluginClasses['ReduxPushArrayActionTask'] = ReduxPushArrayActionTask;
services.pluginClasses['ReduxSetKeyActionTask'] = ReduxSetKeyActionTask;
services.pluginClasses['ReduxThunkActionTask'] = ReduxThunkActionTask;
services.pluginClasses['StoreObserverTask'] = StoreObserverTask; // TODO : replace "hook : any" met interface

var flowEventRunner = /*#__PURE__*/new FlowEventRunner();
flowEventRunner.registerFlowNodeOverrideAttachHook(function (node, task, eventEmitter, nodeEvent) {
  if (typeof task.getAction === 'function') {
    //let nodeInstance = (<any>Object).assign({}, node);
    var actionName = node.name.replace(/ /g, '');
    actions[actionName] = {
      action: task.getAction(actionName, node, eventEmitter),
      nodeEvent: nodeEvent
    };
  }
});
flowEventRunner.registerFlowNodeRegisterHook(function (node, task) {
  if (typeof task.getReducer === 'function') {
    reducers[node.variableName.replace(/ /g, '')] = task.getReducer(node);
    return true;
  }

  return false;
});
var subjectStoreChange = /*#__PURE__*/new Subject();

var flowNotifierFactory = function flowNotifierFactory(_name) {
  return function (middlewareAPI) {
    return function (next) {
      return function (action) {
        var prevState = middlewareAPI.getState();
        var result = next(action);
        var nextState = middlewareAPI.getState();
        subjectStoreChange.next({
          nextState: nextState,
          prevState: prevState
        });
        return result;
      };
    };
  };
};

services.getStore = function () {
  return store;
};

function flowAction(actionName, payload) {
  var action = actions[actionName.replace(/ /g, '')];

  if (typeof action != 'undefined' && action != null) {
    services.getStore().dispatch(action.action(action.nodeEvent, payload));
  }
}

var startFlow = function startFlow(flowPackage, appReducers, options) {
  if (options) {
    if (options.debug) {
      services.logMessage = function () {
        var _console;

        return (_console = console).log.apply(_console, arguments);
      };
    }
  }

  return flowEventRunner.start(flowPackage, services, true).then(function (services) {
    var rootReducer = combineReducers(Object.assign({}, reducers, appReducers));

    if (process.env.NODE_ENV !== 'production' && typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ !== undefined) {
      var composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
      var enhancer;

      if (options.reduxMiddleware) {
        enhancer = composeEnhancers(applyMiddleware(thunk, flowNotifierFactory(), options.reduxMiddleware));
      } else {
        enhancer = composeEnhancers(applyMiddleware(thunk, flowNotifierFactory()));
      }

      store = createStore(rootReducer, options.initialStoreState, enhancer);
    } else {
      if (options.reduxMiddleware) {
        store = createStore(rootReducer, options.initialStoreState, applyMiddleware(thunk, flowNotifierFactory(), options.reduxMiddleware));
      } else {
        store = createStore(rootReducer, options.initialStoreState, applyMiddleware(thunk, flowNotifierFactory()));
      }
    } // TODO : dispatch gaat verhuizen van callStack naar services
    //  ... het is immers ook een externe dependency
    // .. dus aanpassen in de diverse tasks


    services.dispatch = store.dispatch;
    return services;
  });
};

var getFlowEventRunner = function getFlowEventRunner() {
  return flowEventRunner;
};

var ReactComponentFlowConnector = function ReactComponentFlowConnector(Component$1) {
  return /*#__PURE__*/function (_React$Component) {
    _inheritsLoose(_class, _React$Component);

    function _class() {
      var _this;

      //constructor(props: any) {
      //  super(props);
      //}
      _this = _React$Component.apply(this, arguments) || this;
      _this.state = {
        showWrappedComponent: false,
        payload: {},
        renderCounter: 1
      };
      _this.renderCounter = 1;
      return _this;
    }

    var _proto = _class.prototype;

    _proto.componentDidMount = function componentDidMount() {
      var _this2 = this;

      var observable = getFlowEventRunner().getObservableNode(this.props.nodeName);

      if (observable) {
        observable.subscribe({
          next: function next(payload) {
            _this2.setState({
              showWrappedComponent: payload.showComponent !== undefined ? payload.showComponent : true,
              payload: payload,
              renderCounter: _this2.state.renderCounter + 1
            });
          }
        });
      }
    };

    _proto.render = function render() {
      var _this3 = this;

      // TODO : hoe hier zorgen dat Component echt een nieuwe instantie is
      //   bij wisselen van layout/form ? (payload veranderd dan)
      //  ... is render prop hier een oplossing voor ? wellicht alleen intern
      //   {getComponent()}
      //   getComponent => () => {
      //		return ...
      //   };
      var getComponent = function getComponent() {
        return createElement(Component$1, Object.assign({}, _this3.props, {
          payload: _this3.state.payload
        }));
      };

      if (this.state.showWrappedComponent && this.renderCounter < this.state.renderCounter) {
        this.renderCounter = this.state.renderCounter;
        return createElement(Fragment, null, getComponent());
      }

      return createElement(Fragment, null);
    };

    return _class;
  }(Component);
};

var ReactComponentTriggerFlow = function ReactComponentTriggerFlow(Component$1) {
  return /*#__PURE__*/function (_React$Component) {
    _inheritsLoose(_class, _React$Component);

    function _class() {
      var _this;

      //constructor(props: any) {
      //  super(props);
      //}
      _this = _React$Component.apply(this, arguments) || this;
      _this.state = {};

      _this.onTriggerFlow = function (payload) {
        var _extends2;

        getFlowEventRunner().executeNode(_this.props.nodeName, _extends({}, payload, (_extends2 = {}, _extends2[_this.props.triggerProperty] = true, _extends2)));
      };

      return _this;
    }

    var _proto = _class.prototype;

    _proto.render = function render() {
      return createElement(Component$1, Object.assign({}, this.props, {
        triggerProperty: this.props.triggerProperty,
        nodeName: this.props.nodeName,
        onTriggerFlow: this.onTriggerFlow
      }));
    };

    return _class;
  }(Component);
};

export { ReactComponentFlowConnector, ReactComponentTriggerFlow, ReduxActionTask, ReduxArrayStateType, ReduxAssignArrayActionTask, ReduxClearArrayActionTask, ReduxGetKeyTask, ReduxGetTask, ReduxHashmapStateType, ReduxPropertyStateType, ReduxPushArrayActionTask, ReduxSetItemByKeyArrayActionTask, ReduxSetKeyActionTask, ReduxThunkActionTask, StoreObserverTask, flowAction, getFlowEventRunner, startFlow };
//# sourceMappingURL=flowrunner-redux.esm.js.map
