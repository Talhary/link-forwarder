
FROM node:22  
  
WORKDIR /app  
  
COPY package*.json ./  
  
RUN npm install  
  
COPY . .  
  
EXPOSE 54230  
  
CMD ["node", "index.js"]
