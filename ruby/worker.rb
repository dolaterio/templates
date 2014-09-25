def read_all_stdin
  stdin = ""
  while line = $stdin.gets
    stdin += line
  end
  stdin
end

def read_env_var(var_name)
  ENV[var_name]
end

# How to read an environment variable.
# If your worker doesn't any any environment variable, delete all env_var related code.
config_var = read_env_var("SOME_CONFIG")

# Read all STDIN of the job. This is only needed if your job contains STDIN.
# If your worker doesn't need STDIN, delete all input related code and write your worker code right away.
input = read_all_stdin()

# Your worker code here...
