let _ = {
  clamp: function(num, low, up) {
    return Math.min(Math.max(num,low),up) ;
  },
  
  inRange: function(num, startV, endV) {
    if ( ! endV ) {
      endV = startV ;
      startV = 0 ;
    } 
    if ( endV < startV ) {
      [endV, startV] = [startV, endV] ;
    }
    return num === this.clamp(num, startV, endV) ;
  },
  
  words: function(str) {
    return str.split(' ') ;
  },
  
  pad: function(str, len) {
    let pad = len - str.length ;
    let add = 0 ;
    if ( pad <= 0 ) {
      return str ;
    } else if ( pad % 2 ) {
      pad -= 1 ;
      add += 1
    }
    return ' '.repeat(pad/2) + str + ' '.repeat(pad/2) + ' '.repeat(add);
  },
  
  has: function(obj, key) {
    let val = obj[`${key}`] ;
    return ( typeof(val) === 'undefined' ) ? false : true ;   
  },
  
  invert: function(obj) {
    let retObj = {} ;
    let keys = Object.keys(obj) ;
    //let keyVal = Object.entries(obj) ;
    for ( let i = keys.length -1 ; i >= 0 ; i-- ) {
      retObj[`${obj[`${keys[i]}`]}`] = keys[i] ;
    }
    return retObj ;
  },
  
  findKey: function(obj, fun) {
    let keys = Object.keys(obj) ;
    for ( let i = 0 ; i < keys.length ; i++ ) {
      let ans = fun(obj[`${keys[i]}`]) ;
      if ( ans ) {
        return keys[i] ;
      }
      return undefined ;
    }
  },
  
  drop: function(ar, num) {
    if ( typeof(num) === 'undefined' ) {
      num = 1 ;
    }
    return ar.slice(num) ;
  },
  
  dropWhile: function(ar, fun) {
    let idx = 0 ;
    while ( idx < ar.length && fun(ar[idx], idx, ar) )              
    {
      idx += 1;
    }
    return ar.slice(idx) ;
  },
  
  chunk: function(ar, size) {
    if ( size === 0 ) {
      size = 1 ;
    }
    let retAr = [] ;
    for ( let idx = 0 ; idx < ar.length ; idx += size) {
      retAr.push(ar.slice(idx, idx+size)) ;
      //idx += size ;
    }
    return retAr ;
  }
} ;




// Do not write or modify code below this line.
module.exports = _;
