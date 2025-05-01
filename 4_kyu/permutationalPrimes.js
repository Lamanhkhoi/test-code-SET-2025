function sieve(n) {
    const isPrime = new Array(n + 1).fill(true);
    isPrime[0] = isPrime[1] = false;
    for (let i = 2; i * i <= n; i++) {
        if (isPrime[i]) {
            for (let j = i * i; j <= n; j += i) {
                isPrime[j] = false;
            }
        }
    }
    const primes = [];
    for (let i = 2; i <= n; i++) {
        if (isPrime[i]) primes.push(i);
    }
    return { primes, isPrime };
}

function getPermutations(num) {
    const str = num.toString();
    const visited = new Array(str.length).fill(false);
    const perms = new Set();
    
    function backtrack(current) {
        for (let i = 0; i < str.length; i++) {
            if (!visited[i]) {
                visited[i] = true;
                backtrack(current + str[i]);
                visited[i] = false;
            }
        }
        if (current.length === str.length) {
            if (current[0] !== '0') {
                perms.add(parseInt(current));
            }
            return;
        }
    }
    
    backtrack('');
    return Array.from(perms);
}

function permutational_primes(nMax, kPerms) {
    const { primes, isPrime } = sieve(nMax);
    const processed = new Set();
    const groupReps = []; // Lưu các số đại diện nhóm (số nhỏ nhất của mỗi nhóm)
    
    for (const number of primes) {
        if (processed.has(number)) continue;
        
        const allPerms = getPermutations(number);
        const primePerms = allPerms.filter(n => n <= nMax && isPrime[n]); // chỗ này để lọc ra số nguyên tố 
        const validPermCount = primePerms.filter(n => n !== number).length; // chỗ này để lọc số đại diện nhóm
        
        if (validPermCount === kPerms) {
            primePerms.forEach(n => processed.add(n)); //Thêm tất cả các hoán vị nguyên tố (bao gồm số gốc) vào tập processed để đánh dấu đã xử lý.
            groupReps.push(number);
        }
    }
    
    if (groupReps.length === 0) return [0, 0, 0];
    return [groupReps.length, groupReps[0], groupReps[groupReps.length - 1]];
}

// Test cases
console.log(permutationalPrimes(5000, 3)); // [3, 149, 379]
console.log(permutationalPrimes(1000, 2)); // [9, 113, 389]
console.log(permutationalPrimes(1000, 1)); // [34, 13, 797]
