'use strict';

var createComponent = require('./createComponent');
var LayerMixin = require('./LayerMixin');

var Ellipse = createComponent('Ellipse', LayerMixin, {

  mountComponent: function (rootID, transaction, context) {
    var props = this._currentElement.props;
    var layer = this.node;
    layer.type = 'ellipse';
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

module.exports = Ellipse;


// 'use strict';

// var createComponent = require('./createComponent');
// var LayerMixin = require('./LayerMixin');

// var Ellipse = createComponent('Ellipse', LayerMixin, {

//   applyTextProps: function (prevProps, props) {
//     var style = (props && props.style) ? props.style : {};
//     var layer = this.node;

//     layer.type = 'text';
//     layer.text = childrenAsString(props.children);

//     layer.color = style.color;
//     layer.fontFace = style.fontFace;
//     layer.fontSize = style.fontSize;
//     layer.lineHeight = style.lineHeight;
//     layer.textAlign = style.textAlign;
//   },

//   mountComponent: function (rootID, transaction, context) {
//     var props = this._currentElement.props;
//     var layer = this.node;
//     this.applyLayerProps({}, props);
//     this.applyTextProps({}, props);
//     return layer;
//   },

//   receiveComponent: function (nextComponent, transaction, context) {
//     var props = nextComponent.props;
//     var prevProps = this._currentElement.props;
//     this.applyLayerProps(prevProps, props);
//     this.applyTextProps(prevProps, props);
//     this._currentElement = nextComponent;
//     this.node.invalidateLayout();
//   }

// });

// module.exports = Ellipse;
