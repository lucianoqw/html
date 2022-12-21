function getFlagValue(flag){
  const index =  Process.argv.indexOf(flag) + 1
  return process.argv[index]
}

module.exports = getFlagValue;
