FROM ianwalter/puppeteer:latest

WORKDIR /HOME-PROJECT-QA-TEST

COPY package.json /HOME-PROJECT-QA-TEST 

RUN npm install

COPY . .

ENV PORT=9515

EXPOSE ${PORT}

VOLUME [ "/data" ]

CMD npx wdio 