#!/bin/bash

# Prompt the user for a migration message
read -p "Enter migration message: " migration_message

# Run the drizzle-kit generate command with the provided message
npx drizzle-kit generate --name "$migration_message"

echo "Migration generated!"