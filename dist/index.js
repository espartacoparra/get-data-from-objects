const getClosedCharacter = (openCharacter) => {
  switch (openCharacter) {
    case "[":
      return "]";
    case "{":
      return "}";
    case '"':
      return '"';
  }
};
const findObject = (object, key) => {
  const dataJson = JSON.stringify(object);
  const dataSplit = dataJson.split(`"${key}":`);
  dataSplit.shift();
  let firstString = "";
  let firstStringReapeted = 0;
  let closedCharacter = "";
  const res = dataSplit.map((stirngData) => {
    console.log(stirngData);
    let resolve = "";
    for (let index = 0; index < stirngData.length; index++) {
      const character = stirngData[index];
      if (index === 0) {
        firstString = character;
        closedCharacter = getClosedCharacter(character);
      }
      if (closedCharacter == character && closedCharacter == '"' && index > 0) {
        resolve = stirngData.substring(0, index + 1);
        break;
      }
      if (character == firstString) {
        firstStringReapeted++;
      }
      if (closedCharacter == character && firstStringReapeted > 0) {
        firstStringReapeted--;
      }
      if (
        closedCharacter == character &&
        firstStringReapeted == 0 &&
        closedCharacter != '"'
      ) {
        resolve = stirngData.substring(0, index + 1);
        break;
      }
    }

    return JSON.parse(resolve);
  });
  return res;
};

export { findObject };
