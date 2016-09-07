function jQuery(selector){
  if(!(this instanceof jQuery)){
    return new jQuery(selector);
  }
  this.results = [];
    if(selector[0] === "."){
      //look for class
      this.results = document.getElementsByClassName(selector.slice(1));
    }
    else if (selector[0] === "#"){
      //look for id 
      this.results.push(document.getElementById(selector.slice(1)));
    }
    else if (selector[0] === "<"){
      this.results.push(selector);
    }
    else{
      //look for element
      this.results = document.getElementsByTagName(selector);
    }
  
  this.length = this.results.length;
  this.idx = function(index){
    return this.results[index];
  };
  this.hasClass = function(class){
    
  }
}

function $(selector){ return jQuery(selector);}
