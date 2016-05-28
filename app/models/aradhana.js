exports.definition = {
	config: {

		adapter: {
			type: "sql",
			collection_name: "aradhanas"
		},
		
		columns: {
			transId: "String",
			aDate: "String",
			aMonth: "String",
			aYear: "String",
			name: "String",
			lat: "String",
			lng: "String",
			contact: "String"
		}
	},
	extendModel: function(Model) {
		_.extend(Model.prototype, {
			// extended functions and properties go here
		});

		return Model;
	},
	extendCollection: function(Collection) {
		_.extend(Collection.prototype, {
			// extended functions and properties go here
		});

		return Collection;
	}
};