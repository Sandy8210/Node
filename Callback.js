function callback(name) {
  console.log(`welcome : ${name}`);
}

function hof(callback) {
  const name = "sandy";

  callback(name);
}
hof(callback);
