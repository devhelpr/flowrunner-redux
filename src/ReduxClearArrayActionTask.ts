let FlowTask = require("cdmas/flowcontrol/FlowTask.js")
let FlowTaskPackageType = require("cdmas/flowcontrol/FlowTaskPackageType.js");
let Promise = require('promise');

class ReduxClearArrayActionTask extends FlowTask {
	execute(node, services, dispatch) {
		
		dispatch({
			type:node.title.replace(" ","")+"ClearArrayAction",
			value:node.payload.value
		})

		return true;
	}

	getName() {
		return "ReduxClearArrayActionTask"
	}

	getFullName() {
		return "ReduxClearArrayActionTask"
	}

	getIcon() {
		return "reduxcleararrayaction"
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

module.exports = ReduxClearArrayActionTask