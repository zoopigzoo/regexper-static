// Entity nodes are for plain strings in the regular expression. They are
// rendered as labels with the value of the literal quoted.

import _ from 'lodash';

export default {
  type: 'nestregex',

  // Renders the literal into the currently set container.
  _render() {
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
    // Value of the literal.
    this.emsg = this.properties.emsg.textValue;
  }
};
