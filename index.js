
function receivesAFunction (cb) {
    console.log(cb());
  }
  function returnsANamedFunction (){
return function jane(){
  return jane;
}
  }
  function returnsAnAnonymousFunction(){
    return function (){
      return "Awsome";
    }
  }

  