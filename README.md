# Dolater.io worker templates

Here you can find [dolater.io](http//dolater.io) code templates to create your own workers.

Please refer to our guide [How to write a doalter.io worker](https://github.com/dolaterio/docs/blob/master/write_your_worker.md).

# Available templates

+ [Node.js](nodejs)

# Building the docker image

Once you've built your worker using the template you'll need to wrap it as a docker image with the following command

```
docker build -t username/project . && docker push username/project
```

where `username` is your hub.docker.com username, and `project` is the project name in hub.docker.com.

That command will build your worker and push it to your public project registry in hub.docker.com.

If it was all successful you are ready to run it on dolater.io using the same `username/project` as _docker image_.
