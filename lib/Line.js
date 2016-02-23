'use strict';

var createComponent = require('./createComponent');
var LayerMixin = require('./LayerMixin');

var Line = createComponent('Line', LayerMixin, {

  mountComponent: function (rootID, transaction, context) {
    var props = this._currentElement.props;
    var layer = this.node;
    layer.type = 'line';
    this.applyLayerProps({}, props);
    return layer;
  },

  receiveComponent: function (nextComponent, transaction, context) {
    var prevProps = this._currentElement.props;
    var props = nextComponent.props;
    this.applyLayerProps(prevProps, props);
    this._currentElement = nextComponent;
    this.node.invalidateLayout();
  }

});

module.exports = Line;
