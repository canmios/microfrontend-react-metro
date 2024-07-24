# Base image
FROM node:20.16.0-alpine

# Set working directory
WORKDIR /app

# Install dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm install

# Copy source files
COPY . .

# Build the application
RUN npm run build

# Install serve to run the build
RUN npm install -g serve

# Expose port
EXPOSE 3000

# Command to run the application
CMD ["serve", "-s", "dist"]
