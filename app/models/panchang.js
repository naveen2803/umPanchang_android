exports.definition = {
	config: {

		adapter: {
			type: "sql",
			collection_name: "panchang"
		},
		
		columns: {
			transId: "String",
			pDate: "String",
			pMonth: "String",
			pYear: "String",
			ayan: "String",
			ritu: "String",
			masa: "String",			
			tithi: "String",
			pDay: "String",
			nakshtra: "String",
			yoga: "String",
			karnan: "String",
			shradhaTithi: "String",
			sunRiseHour: "String",
			sunRiseMinute: "String",
			sunSetHour: "String",
			sunsetMinute: "String"
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