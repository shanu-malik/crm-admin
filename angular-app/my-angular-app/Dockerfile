# Use the latest Node.js 20.x Alpine image
FROM node:20-alpine

# Set working directory in container
WORKDIR /app

# Install Angular CLI globally
RUN npm install -g @angular/cli

# Install dependencies (Ensure the package.json is in the root of the app)
COPY package.json package-lock.json ./
RUN npm install

# Expose port 4200 for the Angular app
EXPOSE 4200

# Copy the project files into the container
COPY . .

# Run the Angular development server
CMD ["ng", "serve", "--host", "0.0.0.0"]
