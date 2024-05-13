#!/bin/bash

PROJECTNAME=React-FE
REPOSITORY=/home/ubuntu/$PROJECTNAME
FLASK_APP_DIR=/home/ubuntu/$PROJECTNAME
ENV_PATH=$FLASK_APP_DIR/.env

cd $REPOSITORY
echo "> install dependency"
npm install