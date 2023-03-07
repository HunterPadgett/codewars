// 7 kyu Credit Card Mask
// Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.
// Your task is to write a function maskify, which changes all but the last four characters into '#'.

// return masked string
function maskify(cc) {
  // padStart(target length, what you want to replace the space with)
 if (cc.length > 4) return cc.slice(-4).padStart(cc.length, "#");

 return cc;
}
console.log(maskify("124657955672"));
