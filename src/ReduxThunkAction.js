let FlowTask = require("cdmas/flowcontrol/FlowTask.js")
let FlowTaskPackageType = require("cdmas/flowcontrol/FlowTaskPackageType.js");
let Promise = require('promise');

class ReactThunkActionTask extends FlowTask {
	execute(node) {
		
		console.log("RUNNING ReactThunkActionTask: "+node.id+" - "+node.title);
		
		return true;
	}

	getName() {
		return "ReactThunkActionTask"
	}

	getFullName() {
		return "ReactThunkAction"
	}

	getIcon() {
		return "reactthunkaction"
	}

	getShape() {
		return "circle"
	}

	getTaskType() {
		return "frontend"
	}

	getPackageType() {
		return FlowTaskPackageType.DEFAULT_NODE
	}

	getCategory() {
		return "FlowCanvas"
	}

	getController() {
		return "FlowCanvasController"
	}

	getAction(actionName,nodeInstance,nodeEmitter) {
		return function (nodeEvent, payload) {
			return (dispatch) => {
				console.log("reactthunkaction dispatched...ready to trigger events",nodeEvent);
				nodeEvent.outputs.map((node) => {										
					nodeEmitter.emit(node.endshapeid.toString(), payload, dispatch)		
				})
			}
		} 
	}
}

module.exports = ReactThunkActionTask