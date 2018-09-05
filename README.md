# Installation and usage

## Using Docker

1. Run with:
```
docker-compose up 
```
2. You **MUST IGNORE the QR** code printed on the container output([here's why](https://github.com/MPS-FGA/Avaleasy-app/issues/1))
3. Run the script to show the right address to connect with the app:
```
./show-address.sh
```
4. Access Expo app on your smartphone  
    4.1 Tap on "Explore"  
    4.2 Write the address showed on the step before  
    4.3 Tap on "Tap to attempt to open the project at"  

# Troubleshooting

1. "There are no available inotify watches" 
    - [Solution](https://github.com/react-community/create-react-native-app/issues/234#issuecomment-313849888)

**Obs**: You must run this command in the **Host**, not in the container.

