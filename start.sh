#/bin/sh

sysctl -w fs.inotify.max_user_instances=1024
sysctl -w fs.inotify.max_user_watches=12288
yarn start