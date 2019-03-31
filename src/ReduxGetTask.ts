let FlowTask = require("cdmas/flowcontrol/FlowTask.js")
let FlowTaskPackageType = require("cdmas/flowcontrol/FlowTaskPackageType.js");
let Promise = require('promise');

class ReactGetTask extends FlowTask {
	execute(node, services, dispatch) {
		
		return new Promise((resolve,reject) => {
			if (node.assignTo != undefined &&
			 	node.assignTo != "") {
				
				let reducerName = node.title.replaceAll(" ","");

				const store =  services.getStore().getState();

				let payload = Object.assign({}, node.payload, {
					[node.assignTo]:store[reducerName]
				})
				resolve(payload);
			} else {
				reject();
			}
		});
	}

	getName() {
		return "ReactGetTask"
	}

	getFullName() {
		return "ReactGet"
	}

	getDescription() {
		return "Get from store: Reducer name: {{{title}}} - and set property {{{assignTo}}} in payload";
	}

	getIcon() {
		return "reactget"
	}

	getShape() {
		return "rect"
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
			{name:"assignTo", defaultValue:"", valueType:"string", required: true}
		]
	}
}

module.exports = ReactGetTask;