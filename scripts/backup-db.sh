#!/bin/bash
#sudo chmod +x backup-db.sh &&  sudo ./backup-db.sh
mkdir /home/db-backups

cd /var/lib/docker/volumes
sudo zip -r /home/db-backups/backup_$(date +"%Y-%m-%d_%H_%M_%S").zip  ./redwood-cloud-deploy_pgdata
