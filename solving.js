function getWays(n, c){
   let ways = new Array(n+1).fill(0); 
   ways [0] = 0; 

   for (let coin of c) {
	for (let amount = coin; amount <= n; amount++){
		if (amount > n) {
                     return; 
		}
		if (amount <n) {
			ways += ways[amount - coin]; 
		}
	}
   }
	return ways.length; 
}

