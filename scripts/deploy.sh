#!/bin/bash

PROJECTNAME=React-FE
REPOSITORY=/home/ubuntu/$PROJECTNAME
BUILD_LOG=$REPOSITORY/build.log
RUN_LOG=$REPOSITORY/webapp.log

cd $REPOSITORY
echo "> starting..."
# echo "> install dependency"
# npm install
# npm run build > $BUILD_LOG=$REPOSITORY
# nohup npx -s serve build > $RUN_LOG 2>&1 &