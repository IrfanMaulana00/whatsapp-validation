# Whatsapp Validation App

This application allows users to validate a list of phone numbers is registered on whatsapp via an external API from <a href="https://pushwa.com/">PushWa.com</a>. It provides real-time feedback to users, indicating whether each number is valid or invalid, and also includes a progress indicator. The application is built using **Node.js**, **Express**, and **Socket.IO**, with a **Bootstrap** front-end.

## Features

- **Real-time validation** of phone numbers.
- Removes any symbols from the numbers, retaining only digits.
- Uses Socket.IO for real-time communication between the client and server.
- Displays progress in the format `X/Y`, where `X` is the number of processed numbers and `Y` is the total input numbers.
- Option to **copy valid and invalid numbers** to the clipboard.
- Separate data for each user – no user can see the data submitted by others.
- **Responsive design** using Bootstrap.

## Prerequisites

- **Node.js** (v14.x or later)
- **npm** (comes with Node.js)

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/IrfanMaulana00/whatsapp-validation.git
cd whatsapp-validation
```

### 2. Install dependencies:

``` bash
npm install
```

### 3. Setup your token
- Connect your device to Pushwa.com
- Copy your token
- Save your token in .env
``` bash
PUSHWA_TOKEN="xxxx"
```

### 4. Start  the server:

``` bash
npm start
```
The app will run at http://localhost:3000.

## Usage
- Enter phone numbers in the "List Nomor" textarea (one number per line).
- Click Submit to validate the numbers.
- Results will appear in the "Result Valid" or "Result Invalid" textareas.
- Use the Copy Valid and Copy Invalid buttons to copy results to the clipboard.
- The progress is shown as `X/Y`, where `X` is the number processed and `Y` is the total.

## License
This project is licensed under the MIT License.
