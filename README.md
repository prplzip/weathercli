# 🌦️ Weather CLI v1.0

## A very simple weather command-line tool built with Node.js using clacks.js prompts, axios, dotenv, and the OpenWeatherMap API.

**Getting Started**

**Prerequisites:**

* Node.js version 17 or higher 
* A free OpenWeatherMap API Key. [https://home.openweathermap.org/users/sign_up]

**Installation:**
1. Clone this repository:
   ```
   git clone https://github.com/prplzips/weathercli.git
   ```

2. Change into the project directory:
   ```
   cd weather-cli
   ```

3. Install dependencies:
   ```
   npm i 
   ```

4. Download the example environment file:
   ```
   wget https://prpls.zip/files/example.env
   ```

5. Edit the environment file:
   * You can use either nano or vi: (if you aren't familiar with these tools you can substitute for any gui text editor, or if you choose you could do this whole process in a code editor like VSC if that's easier, however the way explained is terminal focused only.)
     ```
     nano example.env 
     # OR
     vi example.env
     ```
   * Replace `your_api_key` with your actual API key from OpenWeatherMap.
   * Make sure to save your changes and exit.

6. Rename the environment file:
   ```
   mv example.env .env 
   ```

**Usage**

1. Run the weather CLI tool:
   ```
   node weathercli.js
   ```

**You're all set!**
