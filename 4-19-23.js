// 6 kyu
// Tribonacci Sequence

function tribonacci(sig ,n){
  if (n === 0) return [];
  if (n > 0 && n < 4) return sig.slice(0, n);
  
  const newArr = [...sig];
  
  for (let i = 0; i < n - sig.length; i++) {
    const sum = newArr[i] + newArr[i + 1] + newArr[i + 2];
    newArr.push(sum);
  }
  return newArr
}