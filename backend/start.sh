#!/bin/bash
echo "Waiting for database to be ready..."
sleep 3
echo "Starting backend service..."

flask run --host=0.0.0.0
