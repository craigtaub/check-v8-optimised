module.exports = function (testModule, argumentString) {

   // Convert CLI arguments to array
   var inputArray = [];
   argumentString.split(',').map(function(key) {
        inputArray.push(parseInt(key));
    });

    // call function + hand CLI arguements as arguments for function.
    function callFunctionWithArgs(func, ourArgs){
        return func.apply(this, ourArgs, 1);
    }

    function printStatus(fn) {
        switch(eval('%GetOptimizationStatus(fn)')) {
            case 1: return 'Function is optimized'; break;
            case 2: return 'Function is not optimized'; break;
            case 3: return 'Function is always optimized'; break;
            case 4: return 'Function is never optimized'; break;
            case 6: return 'Function is maybe deoptimized'; break;
            case 7: return 'Function is optimized by TurboFan'; break;
            default: return 'Unknown optimization status'; break;
        }
    }

    // Run function once
    callFunctionWithArgs(testModule, inputArray);

    // Tag function for optimization
    eval('%OptimizeFunctionOnNextCall(testModule)');

    // 2 calls are needed to go from uninitialized -> pre-monomorphic -> monomorphic
    callFunctionWithArgs(testModule, inputArray);

    // Check/verify it (of not have code that cant be optimised)
    return printStatus(testModule);
};
