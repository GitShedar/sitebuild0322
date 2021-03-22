FROM nginx

COPY ./frontend/build usr/share/nginx/html

EXPOSE 80