const config = {
    env: process.env.NODE_ENV || 'development', 
    port: process.env.PORT || 3000,
    jwtSecret: process.env.JWT_SECRET || "YOUR_secret_key", 
    mongoUri: "mongodb+srv://asamp12345:xUhJJPHYl5shSpyR@mernapp.o4dvv.mongodb.net/?retryWrites=true&w=majority&appName=Mernapp"
}

export default config;
   