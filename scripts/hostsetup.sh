#!/bin/bash
# sudo nano hostsetup.sh
# sudo chmod +x hostsetup.sh &&  sudo ./hostsetup.sh
RepositoryUrl=https://github.com/YuriyL-Git/redwood-cloud-deploy
UserEmail=yuriy.lipchey.work@gmail.com
UserName="Yuriy Lipchey"

#source .env
sudo apt update

sudo curl -sL https://deb.nodesource.com/setup_18.x | sudo -E bash - && sudo apt-get install -y nodejs
sudo npm install --global yarn

sudo mkdir -m 0755 -p /etc/apt/keyrings
echo \
  "deb [arch="$(dpkg --print-architecture)" signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/debian \
  "$(. /etc/os-release && echo "$VERSION_CODENAME")" stable" | \
sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
sudo apt-get update
sudo apt install apt-transport-https ca-certificates curl software-properties-common -y
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -

sudo apt-get update
sudo apt install docker.io -y
sudo apt-get install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin -y
sudo systemctl start docker
sudo apt install git -y
sudo dockerd --debug
sudo systemctl stop docker
sudo cp -au /var/lib/docker /var/lib/docker.bk
sudo systemctl start docker

sudo curl -L https://github.com/docker/compose/releases/download/1.25.3/docker-compose-`uname -s`-`uname -m` -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose

git config --global user.email ${UserEmail}
git config --global user.name "${UserName}"
yes '' | ssh-keygen -N '' > /dev/null
cat ~/.ssh/id_rsa.pub

git clone "${RepositoryUrl}.git"



