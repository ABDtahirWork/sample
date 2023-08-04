const experession = [ "OR" , ["AND" , ["==" , "c" , "d" ], ["+" , "10" , "2"]] , ["<" , [">" , "c" , "a"] , "s"] ]

const getExpressionRecursive = (exp) => {
    if(!Array.isArray(exp))
        return exp

    return `(${getExpressionRecursive(exp[1])} ${exp[0]} ${getExpressionRecursive(exp[2])})`;
}

console.log(getExpressionRecursive(experession))