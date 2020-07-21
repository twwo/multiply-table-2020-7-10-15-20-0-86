function createMultiplyTable(start, end) {
  if (isValid(start, end)) {
    return generateAllLines(start, end); 
  }
  return null;
}

function isValid(start, end) {
  if (start <= end && start <= 1000 && start >= 0
    && end <= 1000 && end >= 0) {
    return true;
  }
  return false;
}

function generateAllLines(start, end) {
  let str = "";
  for (let i = start; i <= end; i++) {
    str = str + generateLine(start, i);
    if (i != end) {
      str += "\n";
    }
  }
  return str;
}

function generateLine(lineStart, lineEnd) {
  let str = "";
  for (let i = start; i <= end; i++) {
    str = str + i + "*" + end + "=" + i * end;
    if (i != end) {
      str += "\t";
    }
  }
  return str;
}

module.exports = {
  createMultiplyTable,
};
