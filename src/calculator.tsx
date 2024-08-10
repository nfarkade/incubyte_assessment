export function add(numbers: string): number {
    if (!numbers) return 0;
  
    let delimiter = /,|\n/;
    if (numbers.startsWith("//")) {
      const parts = numbers.split("\n");
      delimiter = new RegExp(parts[0].substring(2));
      numbers = parts[1];
    }
  
    const numArray = numbers.split(delimiter);
    const negatives: number[] = [];
  
    const sum = numArray.reduce((total, num) => {
      const n = parseInt(num);
      if (n < 0) negatives.push(n);
      return total + (isNaN(n) ? 0 : n);
    }, 0);
  
    if (negatives.length) {
      throw new Error(`negative numbers not allowed: ${negatives.join(",")}`);
    }
  
    return sum;
  }