module.exports = function (testModule, args) {

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

    // enable the optimization controls below
    require('v8').setFlagsFromString('--allow_natives_syntax');

    // Run function once
    testModule.apply(this, args);

    // Tag function for optimization
    eval('%OptimizeFunctionOnNextCall(testModule)');

    // 2 calls are needed to go from uninitialized -> pre-monomorphic -> monomorphic
    testModule.apply(this, args);

    // Check/verify it (of not have code that cant be optimised)
    return printStatus(testModule);
};
