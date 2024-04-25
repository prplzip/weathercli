# 🌦️ Weather CLI v1.0

## A very simple weather command-line tool built with Node.js using @clack/prompts, axios, dotenv, and the OpenWeatherMap API.

![alt text](https://media.discordapp.net/attachments/1220896730531233862/1233127391602151444/Screenshot_2024-04-25_at_2.47.47_PM.png?ex=662bf6e0&is=662aa560&hm=e61784e9c96b925aacd707114d65fe8c0140d63f4bd70de68580014291fbf649&=&format=webp&quality=lossless&width=1256&height=936)

**Getting Started**

**Prerequisites:**

* Node.js version 17 or higher (https://nodejs.org/en/download/)
* A free OpenWeatherMap API Key. [https://home.openweathermap.org/users/sign_up]
* You also need Git if you don't have it already. (https://git-scm.com/downloads)

**Installation:**
1. Clone this repository:
   ```
   git clone https://github.com/prplzips/weathercli.git
   ```

2. Change into the project directory:
   ```
   cd weathercli
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
   * You can use either nano or vi: (if you aren't familiar with these tools you can open the file in any gui text editor (notepad, kate etc.), or if you'd like, you could also open the project in a code editor like Visual Studio Code, but these instructions use the terminal only.)
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

1. Run Weather CLI with:
   ```
   node .
   ```

**You're all set!**
