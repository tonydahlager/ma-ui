/*jshint undef:false */

var expect = chai.expect;
var assert = chai.assert;
var should = chai.should();

chai.Assertion.includeStack = true;

Ember.testing = true;
MaUi.rootElement = "#ember-testing";
Ember.Test.adapter = Ember.Test.MochaAdapter.create();

document.write('<div id="ember-testing-container"><div id="ember-testing"></div></div>');
document.write('<style>#ember-testing-container { position: absolute; background: white; bottom: 0; right: 0; width: 800px; height: 500px; overflow: auto; z-index: 9999; border: 5px solid #ccc; } #ember-testing { zoom: 80%; }</style>');

MaUi.setupForTesting();
MaUi.injectTestHelpers();
Ember.run(MaUi, MaUi.advanceReadiness);

window.start = function () {};
window.stop = function () {};
