FROM nginx:1.21.6-alpine

COPY nginx.conf /etc/nginx/nginx.conf
COPY dist/weather-web-app /usr/share/nginx/html/weather-web-app

EXPOSE 8080