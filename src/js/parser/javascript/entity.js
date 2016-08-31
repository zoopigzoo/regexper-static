// Entity nodes are for plain strings in the regular expression. They are
// rendered as labels with the value of the literal quoted.

import _ from 'lodash';

export default {
  type: 'entity',

  // Renders the literal into the currently set container.
  _render() {
    console.log("entity->render");

    return this.renderLabel([this.emsg])
      .then(label => {
        label.select('rect').attr({
          rx: 3,
          ry: 3
        });

        return label;
      });
  },

  setup() {
    console.log("entity:");
    console.log(this);
    
    // Value of the literal.
    this.etype = this.properties.etype.textValue;
    if(this.etype === "1") {
        this.emsg = "PER";
    } else if(this.etype === "2") {
        this.emsg = "LOC";
    } else if(this.etype === "3") {
        this.emsg = "ORG";
    } else {
        this.emsg = "ENTITY[" + this.etype + "]";
    }
  }
};
