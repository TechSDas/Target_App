/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"receiver/Receiver_Application/test/integration/AllJourneys"
	], function () {
		QUnit.start();
	});
});