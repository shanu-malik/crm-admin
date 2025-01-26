# Use the latest Node.js 20.x Alpine image
FROM node:20-alpine

# Set working directory in container
WORKDIR /app

# Copy only package.json and package-lock.json to leverage Docker cache for dependencies
COPY ./package.json ./package-lock.json ./

# Install dependencies
RUN npm install

# Expose port 4200 for the Angular app
EXPOSE 4200

# Copy the rest of the application files into the container
COPY . .

# Install Angular CLI globally
RUN npm install -g @angular/cli

# Run the Angular development server
CMD ["ng", "serve", "--host", "0.0.0.0"]
