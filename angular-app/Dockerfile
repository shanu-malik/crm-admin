# Use the latest Node.js 20.x Alpine image
FROM node:20-alpine

# Set working directory in container
WORKDIR /app

# Install Angular CLI globally
RUN npm install -g @angular/cli

# Expose port 4200 for the Angular app
EXPOSE 4200

# Install dependencies and create the Angular app when running
CMD ["sh", "-c", "ng new my-angular-app --defaults"]
# CMD ["ng", "serve", "--host", "0.0.0.0"]

