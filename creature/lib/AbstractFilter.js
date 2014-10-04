// define filter base
var filter = {
	rules : {
	},
	addRule : function(name, rule){
		this.rules[name] = rule;
	},
	filter : function(urls){
		rules = this.rules;
		filteredUrls = urls;
		for(i = filteredUrls.length-1; i>=0; i--){
			for( rule in rules ){
				if(rules[rule](filteredUrls[i])){
					console.log("success");
				}	
			}	
		}
		return filteredUrls;
	}
};

module.exports = filter;
