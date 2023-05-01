#!/bin/bash
#sudo nano restore-db.sh
#sudo chmod +x restore-db.sh &&  sudo ./restore-db.sh
path_to_volume=redwood-cloud-deploy_pgdata
backup_name=backup_2023-05-01_17_06_01.zip

# shellcheck disable=SC2164
cd /home/db-backups
unzip ${backup_name}

sudo rm -r /var/lib/docker/volumes/"${path_to_volume}"
mv /home/db-backups/var/lib/docker/volumes/${path_to_volume} /var/lib/docker/volumes
