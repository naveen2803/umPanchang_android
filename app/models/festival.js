exports.definition = {
	config: {

		adapter: {
			type: "sql",
			collection_name: "festivals"
		},
		
		columns: {
			transId: "String",
			fDate: "String",
			fMonth: "String",
			fYear: "String",
			name: "String"
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