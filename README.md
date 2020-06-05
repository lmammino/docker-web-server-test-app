# docker-web-server-test-app

A super simple web server application used to test http configuration in different dockerized environments (e.g. Kubernetes)

## Usage

```bash
docker build . -t docker-web-server-test-app
docker run -p 8080:8080 -p 8081:8081 docker-web-server-test-app
```

## Configuration

The app can be configured through environment variables:

 - `ADDRESS`: address on which the server is going to listen for connections (default `"0.0.0.0"`)
 - `PORT`: service port number (default `8080`)
 - `HEALTH_PORT`: health check port number (default `8081`)
 - `MESSAGE`: the message that will be returned for every request (default `"Hello"`)

 ## Contributing

Everyone is very welcome to contribute to this project.
You can contribute just by submitting bugs or suggesting improvements by
[opening an issue on GitHub](https://github.com/lmammino/docker-web-server-test-app/issues).


## License

Licensed under [MIT License](LICENSE). © Luciano Mammino & Stefano Abalsamo.