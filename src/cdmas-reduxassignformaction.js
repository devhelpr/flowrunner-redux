let FlowTask = require("cdmas/flowcontrol/FlowTask.js")
let FlowTaskPackageType = require("cdmas/flowcontrol/FlowTaskPackageType.js");
let Promise = require('promise');

class ReduxAssignFormActionTask extends FlowTask {
	execute(node, services, dispatch) {
		
		dispatch({
			type:node.formName.replace(" ","")+"AssigFormAction",
			formfields:node.payload.formfields
		})

		return true;
	}

	getName() {
		return "ReduxAssignFormActionTask"
	}

	getFullName() {
		return "ReduxAssignFormAction"
	}

	getIcon() {
		return "reduxassignformaction"
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

	getConfigMetaData() {
		return [
			{name:"formName", defaultValue:"", valueType:"string", required: true}
		]
	}
}

module.exports = ReduxAssignFormActionTask