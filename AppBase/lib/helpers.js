

export function camelToReadable(str) {
  if( typeof str !== "string") {
    throw new Error("This function only accepts strings as arguments");
  }
  
  return str.replace(/([A-Z])/g, ' $1')
      .replace(/^./, function(str){
          return str.toUpperCase();
      });
}