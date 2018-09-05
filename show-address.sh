IP="$(ip addr show | grep -E -A2 "enp|wlp" | grep -A2 "state UP" | tail -n1 | awk '{print $2}' | cut -f1 -d'/')"

PRE="\n----------------------------------------------------------------------------\n "
MSG="Server is running on"
PORT="19000"

echo -e "So you're running with Docker :D. You must IGNORE the QR code printed!!\n"
echo -e "YOU MUST USE THIS ADDRESS TO CONNECT TO THE APP WITH EXPO:"
echo -e $PRE$MSG "exp://""$IP":"$PORT$PRE"
