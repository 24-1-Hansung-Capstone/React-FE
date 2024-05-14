#!/bin/bash

PROJECTNAME=React-FE
REPOSITORY=/home/ubuntu/$PROJECTNAME
BUILD_LOG=$REPOSITORY/build.log
RUN_LOG=$REPOSITORY/webapp.log
PID_FILE="$REPOSITORY/.pid"

echo "> starting..."
cd $REPOSITORY

echo "> stopping previous server..."
if [ -f $PID_FILE ]; then
    kill -9 `cat $PID_FILE`
    rm $PID_FILE
fi

echo "> install serve..."
sudo npm install serve -g

echo "> run log : [$RUN_LOG]"
nohup serve -s build > $RUN_LOG 2>&1 &
