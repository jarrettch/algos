// s = "abcd";
// t = "abcde";

s = "a";
t = "aa";

var findTheDifference = function(s, t) {
  const mapS = {};
  const mapT = {};
  for (let i = 0; i < s.length; i++) {
    if (s[i] in mapS) {
      mapS[s[i]] += 1;
    } else {
      mapS[s[i]] = 1;
    }
  }
  for (let i = 0; i < t.length; i++) {
    if (t[i] in mapT) {
      mapT[t[i]] += 1;
    } else {
      mapT[t[i]] = 1;
    }
  }

  console.log(`S: ${JSON.stringify(mapS)} \nT: ${JSON.stringify(mapT)}`);

  for (let i = 0; i < t.length; i++) {
    if (t[i] in mapS) {
      if (mapT[t[i]] !== mapS[t[i]]) {
        console.log('nope');
        console.log(mapT[t[i]]);
        return t[i];
      }
    } else {
      return t[i];
    }
  }
};

findTheDifference(s, t);