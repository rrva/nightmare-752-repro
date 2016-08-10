FROM node:5
RUN apt-get update && apt-get install -y xvfb libgnome-keyring0 libasound2 libcap2 libcups2 libxtst6 libgtk2.0-0 libnotify4 libgconf2-4 libnss3 dbus-x11 libxss1 locales tzdata
RUN echo "en_US.UTF-8 UTF-8" >> /etc/locale.gen && locale-gen
RUN npm install -g npm
RUN mkdir /app
WORKDIR /app
ADD package.json /app
RUN npm install
ADD run.sh /app
COPY *.js /app
CMD ["sh", "/app/run.sh"]
