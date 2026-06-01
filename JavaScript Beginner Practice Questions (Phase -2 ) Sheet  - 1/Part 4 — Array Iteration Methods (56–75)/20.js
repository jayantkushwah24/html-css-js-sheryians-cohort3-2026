// Explain difference between map and forEach.

// The primary difference is that map() returns a brand new array 
// containing transformed elements, whereas forEach() returns 
// undefined and is purely used to execute side effects. Neither 
// method alters the original array structure by default.Quick 
// ComparisonFeaturemap()forEach()Return ValueA new array with 
// transformed data.Always undefined.Method ChainingYes. 
// Can chain .filter(), .reduce(), etc.No. Cannot chain other array 
// methods.Primary Use CaseData transformation.Executing side effects 
// (logging, API calls).Coding StyleFunctional programming.Imperative / 
// traditional looping.