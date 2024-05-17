#!/bin/bash

PROJECTNAME=React-FE
REPOSITORY=/home/ubuntu/$PROJECTNAME
BUILD_LOG=$REPOSITORY/build.log
RUN_LOG=$REPOSITORY/webapp.log
PID_FILE="$REPOSITORY/.pid"

echo "> starting..."
cd $REPOSITORY

if [ ! -f $PID_FILE ]; then # 실행이 안되고 있으면, 실행해줘야함
    echo "> no run project!"
    echo "> install serve..."
    sudo npm install serve -g

    echo "> run log : [$RUN_LOG]"
    nohup serve -s build > $RUN_LOG 2>&1 & echo $! > $PID_FILE

else
    echo "> already running `cat ${$PID_FILD}`"
fi

