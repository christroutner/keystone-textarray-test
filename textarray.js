var async = require('async'),
	keystone = require('keystone');

//var security = keystone.security;

var TextArrayModel = keystone.list('TextArrayModel');

/**
 * List Posts
 */
exports.list = function(req, res) {
	TextArrayModel.model.find(function(err, items) {
		
		if (err) return res.apiError('database error', err);
		
		res.apiResponse({
			textArrayModel: items
		});
		
	});
}

/**
 * Get Post by ID
 */
exports.get = function(req, res) {
	TextArrayModel.model.findById(req.params.id).exec(function(err, item) {
		
		if (err) return res.apiError('database error', err);
		if (!item) return res.apiError('not found');
		
		res.apiResponse({
			textArrayModel: item
		});
		
	});
}


/**
 * Create a Post
 */
exports.create = function(req, res) {
	//debugger;
  
	var item = new TextArrayModel.model(),
		data = (req.method == 'POST') ? req.body : req.query;
	
	item.getUpdateHandler(req).process(data, function(err) {
		
		if (err) return res.apiError('error', err);
		
		res.apiResponse({
			textArrayModel: item
		});
		
	});
}

/**
 * Get Post by ID
 */
exports.update = function(req, res) {

  
	TextArrayModel.model.findById(req.params.id).exec(function(err, item) {
		
		if (err) return res.apiError('database error', err);
		if (!item) return res.apiError('not found');
		
		var data = (req.method == 'POST') ? req.body : req.query;
		
		item.getUpdateHandler(req).process(data, function(err) {
			
			if (err) return res.apiError('create error', err);
			
			res.apiResponse({
				textArrayModel: item
			});
			
		});
		
	});
}

/**
 * Delete Post by ID
 */
exports.remove = function(req, res) {
	
  
  TextArrayModel.model.findById(req.params.id).exec(function (err, item) {
		
		if (err) return res.apiError('database error', err);
		if (!item) return res.apiError('not found');
		
		item.remove(function (err) {
			if (err) return res.apiError('database error', err);
			
			return res.apiResponse({
				success: true
			});
		});
		
	});
}