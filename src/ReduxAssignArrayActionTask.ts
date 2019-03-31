let FlowTask = require("cdmas/flowcontrol/FlowTask.js")
let FlowTaskPackageType = require("cdmas/flowcontrol/FlowTaskPackageType.js");
let Promise = require('promise');

class ReduxAssignArrayActionTask extends FlowTask {
	execute(node, services, dispatch) {
		
		dispatch({
			type:node.title.replace(" ","")+"AssignArrayAction",
			list:node.payload.list
		})

		return true;
	}

	getName() {
		return "ReduxAssignArrayActionTask"
	}

	getFullName() {
		return "ReduxAssignArrayAction"
	}

	getIcon() {
		return "reduxassignarrayaction"
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
}

module.exports = ReduxAssignArrayActionTask