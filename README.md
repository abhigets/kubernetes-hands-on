# Running this app locally in minikube

Aim is to make this run in kubernates minikube 

## Development requirements

- Use [nvm] or [nvm-windows]
- apt-get install xvfb libgtk-3-dev libnotify-dev libgconf-2-4 libnss3 libxss1 libasound2
- [sudo] npm install forever -g

## following are few helpful commands

eval $(minikube docker-env)
docker build -t abhijeet/node-api-app .

kubectl create -f mypod.yml
kubectl describe pod scraper
kubectl delete pods scraper
kubectl get pods
kubectl explain pod.spec
kubectl explain pod --recursive

## To Run

```sh
# Use correct version of node
npm start

# Install Dependencies
npm install

# Run as service
forever start server.js

# Stop the service
forever stop server.js

# endpoint examples
```javascript
http://localhost:3001/address?searchTerm=TW183BX
http://<ip>:3001/address?searchTerm=TW183BX
```

Response expected
```javascript
{
  "searchTerm": "liverpool street station",
  "searchResults": [
    "Liverpool Street Station, Liverpool StreetLondon, EC2M 7PY - More Addresses",
    "Liverpool Street Station, Liverpool StreetLondon, EC2M 7QA",
    "Lime Street Station, Lime StreetLiverpool, L1 1JD - More Addresses",
    "Fire Station, 60 Liverpool StreetSalford, M5 4LT",
    "Western Mall, Liverpool Street Station, Liverpool StreetLondon, EC2M 7QA"
  ]
}
```


## Further Resources

- [Angular CLI README]

<!-- Markdown References -->
[nvm]: https://github.com/creationix/nvm
[nvm-windows]: https://github.com/coreybutler/nvm-windows
