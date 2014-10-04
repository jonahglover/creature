// define filter base
var filter = {
	rules : {
	},
	addRule : function(name, rule){
		this.rules[name] = rule;
	},
	filter : function(urls){
		var filteredUrls = [];
		rules = this.rules;
		for(i = urls.length-1; i>=0; i--){
			var invalid = false;
			for( rule in rules ){
				if(!rules[rule](urls[i])){
					invalid = true;
					break;
				}	
				if(!invalid){
					filteredUrls.push(urls[i]);
				}
			}	
		}
		return filteredUrls;
	}
};

module.exports = filter;
