function getLongestChain(dominoes) {
    let longest = [];
    
    function dfs(lastNum, chain, used) {
        if (chain.length > longest.length) {
            longest = [...chain];
        }
        
        for (let i = 0; i < dominoes.length; i++) {
            if (used.has(i)) continue;
            
            const [a, b] = dominoes[i];
            
            if (lastNum === a) {
                used.add(i);
                chain.push([a, b]);
                dfs(b, chain, used);
                chain.pop();
                used.delete(i);
            } else if (lastNum === b) {
                used.add(i);
                chain.push([b, a]);
                dfs(a, chain, used);
                chain.pop();
                used.delete(i);
            }
        }
    }
    
    for (let i = 0; i < dominoes.length; i++) {
        const [a, b] = dominoes[i];
        dfs(b, [[a, b]], new Set([i]));
    }
    
    return longest;
}

console.log(getLongestChain([[0, 4], [3, 3], [0, 3], [5, 6], [4, 5], [4, 2], [5, 5], [1, 2], [4, 4]])); 