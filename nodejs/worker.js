function readAllInput(cb) {
  var input = "";
  process.stdin.setEncoding('utf8');
  process.stdin.on('readable', function() {
    var chunk = process.stdin.read();
    if (chunk) {
      input = input + chunk;
    } else if (input.length == 0) {
      return cb("");
    }
  });

  process.stdin.on('end', function() {
    cb(input);
  });
}

function readEnvVar(var_name) {
  return process.env[var_name];
}


// How to read an environment variable.
// If your worker doesn't any any environment variable, delete all EnvVar related code.
var configVar = readEnvVar("SOME_CONFIG");

// Read all STDIN of the job. This is only needed if your job contains STDIN.
// If your worker doesn't need STDIN, delete all input related code and write your worker code right away.
readAllInput(function(input, error){
  if (error){
    console.error(error.message);
    process.exit(1)
  }

  // Your worker code here...

});
