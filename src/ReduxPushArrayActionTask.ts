let FlowTask = require("cdmas/flowcontrol/FlowTask.js")
let FlowTaskPackageType = require("cdmas/flowcontrol/FlowTaskPackageType.js");
let Promise = require('promise');

class ReduxPushArrayActionTask extends FlowTask {
	execute(node, services, dispatch) {
		
		dispatch({
			type:node.title.replace(" ","")+"PushArrayAction",
			value:node.payload.value
		})

		return true;
	}

	getName() {
		return "ReduxPushArrayActionTask"
	}

	getFullName() {
		return "ReduxPushArrayAction"
	}

	getIcon() {
		return "reduxpusharrayaction"
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

module.exports = ReduxPushArrayActionTask