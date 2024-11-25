# Use the official Nginx image as the base image
FROM nginx:alpine

# Copy the build directory from your local machine into nginx server
COPY dist/todo-angular/browser /usr/share/nginx/html

# Expose port 80 to the outside world
EXPOSE 80

#
CMD ["nginx", "-g", "daemon off;"]
