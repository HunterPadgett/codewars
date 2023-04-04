// Extract the domain name from a URL 5kyu
// Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:
// * url = "http://github.com/carbonfive/raygun" -> domain name = "github"
// * url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
// * url = "https://www.cnet.com"                -> domain name = cnet"

function domainName(url) {
 const trimmed = url
  .replace("http://", "")
  .replace("https://", "")
  .replace("www.", "");
 return trimmed.split(".")[0];
}

// just replace all the domain prefixes with n empty string
// that should leave you with *domain*.com or something similar
// you can then split the string on the '.' to get rid of the periods and put the words into an array and the 0th index will be ur domain