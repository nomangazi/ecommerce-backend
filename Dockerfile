# Use the official Node.js image as a base
FROM node:20

# Set the working directory in the container
WORKDIR /app

# Copy the dependencies file to the working directory
COPY package.json .

# Install all dependencies using yarn
RUN yarn install

# Copy the rest of the application code to the working directory
COPY . .

# Build the TypeScript code (optional, if using TypeScript)
RUN yarn build

# Expose the port the app runs on 5050
EXPOSE 5050

# Run the application
CMD ["yarn", "start"]