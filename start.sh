IP="$(ip addr show | grep -E -A2 "enp|wlp" | grep -A2 "state UP" | tail -n1 | awk '{print $2}' | cut -f1 -d'/')"

PRE="\n----------------------------------------------------------------------------\n "
MSG="Server is running on"
PORT="19000"

echo -e $PRE$MSG "exp://""$IP":"$PORT$PRE"
