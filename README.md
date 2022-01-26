#Coingecko Site

An application which displays the first 10 exchanges from the Coingecko API.

**Known Issues**

The program will typically fetch the exchange site, Kraken, from the API. What I found is that an adblocker will typically block website which makes the app showcase a blank string under the URL section. If there are any potential URL's not showing up, turning off adblock may potentially resolve the issue.

**To run**
The application requires the react-router-dom dependency. To run a development server of the following application, Run the following:
```
cd coingecko-site
npm install react-router-dom --save
npm start
```

I have also deployed the project on Vercel to run on different devices/browsers to check compatability. You may view here: https://coingecko-site.vercel.app/
