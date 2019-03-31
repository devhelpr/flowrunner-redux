let FlowTask = require("cdmas/flowcontrol/FlowTask.js")
let FlowTaskPackageType = require("cdmas/flowcontrol/FlowTaskPackageType.js");
let Promise = require('promise');
let Rx = require('@reactivex/rxjs');
let _ = require('lodash');

class StoreObserverTask extends FlowTask {
	execute(node, services) {
		let counter = 0;
		var observable = Rx.Observable.create(function (observer) {
			try {
				if (node.propertyName !== undefined && 
					node.propertyName != "") {
					let observableSubscription = services.getObservable("storechange");					

					if (observableSubscription !== undefined && observableSubscription !== false) {
						
						var observerSubscription = {
							next: (payload) => {
								
								// payload:
								// - nextState
								// - prevState
								if (node.propertyName !== undefined && node.propertyName != null && node.propertyName != "") {
									if (!_.isEqual(payload.nextState[node.propertyName], payload.prevState[node.propertyName])) {
										observer.next(payload.nextState);
									}
								}
							},
							error: (err) => {
								observer.error(err);
							},
							complete: () => {
								console.log('StoreObserverTask: Completed observable for ',node.title)
							},
						};
						
						observableSubscription.subscribe(observerSubscription);
					} else {
						observer.error("StoreObserverTask: Error - observable not found",node.observe);
					}
				} else {
					observer.error("StoreObserverTask: Error - nothing to observe");
				}
			} catch (err) {
				observer.error(err);
			}
		});

		return observable;
	}

	isAttachedToExternalObservable() {
		return true;
	}
	isAttachedToStoreChanges() {
		return true;
	}

	getDescription() {
		return "Node that observes store changes for {{{propertyName}}}";
	}

	getName() {
		return "StoreObserverTask"
	}

	getFullName() {
		return "StoreObserver"
	}

	getIcon() {
		return "storeobserver"
	}

	getShape() {
		return "smallcircle"
	}

	getDefaultColor() {
		return "#00ff80ff";
	}

	getTaskType() {
		return "both"
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
			{name:"propertyName", defaultValue:"", valueType:"string", required: true}
		]
	}
}

module.exports = StoreObserverTask