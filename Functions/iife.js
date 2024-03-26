(function DbConnectionCheck(){
  // this is a `named` iife
  console.log("DB is Connected!");
})();

// there ust be ; used to terminate the flow 

((username)=>{
  // this is a simple iife
  console.log(`DB is connedted via arrow function for user ${username}`);
} )('Zaplava')
