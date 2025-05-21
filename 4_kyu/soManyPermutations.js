
function permutations(inputString) {
  // Mảng để lưu trữ tất cả các hoán vị (có thể có trùng lặp ban đầu)
  let results = [];

  // Trường hợp chuỗi rỗng (đề bài nói là non-empty, nhưng để an toàn)
  if (inputString.length === 0) {
    return [];
  }

  // Trường hợp cơ sở của đệ quy: chuỗi chỉ có 1 ký tự
  if (inputString.length === 1) {
    return [inputString];
  }

  for (let i = 0; i < inputString.length; i++) {
    const currentChar = inputString[i];
    const remainingChars = inputString.slice(0, i) + inputString.slice(i + 1);
    console.log(remainingChars, "anh")
    // Gọi đệ quy để lấy tất cả các hoán vị của các ký tự còn lại
    const permsOfRemaining = permutations(remainingChars);
    console.log(permsOfRemaining, "khoi")
    // Ghép ký tự hiện tại vào đầu mỗi hoán vị của phần còn lại
    for (let j = 0; j < permsOfRemaining.length; j++) {
      results.push(currentChar + permsOfRemaining[j]);
    }
  }

  // Loại bỏ các hoán vị trùng lặp bằng cách sử dụng Set
  // và chuyển Set trở lại thành Array
  return Array.from(new Set(results));
}

// Ví dụ sử dụng:
console.log("Với input 'a':");
console.log(permutations('a')); // Mong đợi: ['a']

console.log("Với input 'ab':");
console.log(permutations('ab')); // Mong đợi: ['ab', 'ba'] (thứ tự có thể khác)

console.log("Với input 'abc':");
console.log(permutations('abc')); // Mong đợi: ['abc','acb','bac','bca','cab','cba'] (thứ tự có thể khác)

console.log("Với input 'aabb':");
console.log(permutations('aabb')); // Mong đợi: ['aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa'] (thứ tự có thể khác)