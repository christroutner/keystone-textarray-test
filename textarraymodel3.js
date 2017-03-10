var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Text Array Model
 * ==========
 */

var TextArrayModel3 = new keystone.List('TextArrayModel3', {});

TextArrayModel3.add({
  textArray: { type: Types.TextArray },
  publication: { type: String },
  publication_index: { type: Number },
  reportGenerated: { type: Types.Datetime, default: Date.now },

});


//TextArrayModel.defaultColumns = '';
TextArrayModel3.register();