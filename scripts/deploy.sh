#!/bin/bash

PROJECTNAME=React-FE
REPOSITORY=/home/ubuntu/$PROJECTNAME
BUILD_LOG=$REPOSITORY/build.log
RUN_LOG=$REPOSITORY/webapp.log
PID_FILE="$REPOSITORY/.pid"

echo "> starting..."
cd $REPOSITORY

echo "> install dependency"
npm install

echo "> stopping previous server..."
if [ -f $PID_FILE ]; then
    kill -9 `cat $PID_FILE`
    rm $PID_FILE
fi

echo "> build project log : [$BUILD_LOG]"
npm run build > $BUILD_LOG

echo "> run log : [$RUN_LOG]"
nohup npx -s serve build > $RUN_LOG 2>&1 &