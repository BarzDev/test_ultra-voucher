const array = ["cook", "save", "taste", "aves", "vase", "state", "map"];
const result = groupStringsByAnagram(array);

console.log(result);

function groupStringsByAnagram(arr) {
  const anagramGroups = {};

  arr.forEach((word) => {
    const key = word.split("").sort().join("");
    // console.log({ key });

    if (anagramGroups[key]) {
      anagramGroups[key].push(word);
    } else {
      anagramGroups[key] = [word];
    }
  });

  const result = Object.values(anagramGroups);

  return result;
}
