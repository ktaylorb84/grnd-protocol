
# Use Node official image
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy remaining files
COPY . .

# Expose Fly.io port
ENV PORT=$PORT
EXPOSE $PORT

# Start server
CMD ["npm", "start"]
