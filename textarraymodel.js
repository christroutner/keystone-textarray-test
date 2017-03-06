var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Text Array Model
 * ==========
 */

var TextArrayModel = new keystone.List('TextArrayModel', {});

TextArrayModel.add({
  textArray: { type: Types.TextArray }
});


//TextArrayModel.defaultColumns = '';
TextArrayModel.register();