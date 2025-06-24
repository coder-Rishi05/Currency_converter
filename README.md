# 💱 Currency tracker Web App

A responsive currency tracker web application built using **HTML**, **CSS**, and **JavaScript**. It allows users to see any selected amount in a base currency (like INR, USD, EUR) to a wide range of world currencies using real-time exchange rates. 
It gives list of countries of the currency amount.

---

## 🚀 Live Demo

👉 [Live Demo Link](#) — https://curencyconvert.netlify.app/

---

## 🧠 Features

- ✅ Real-time exchange rates using [CurrencyAPI](https://currencyapi.com/)
- ✅ Currency selection dropdown
- ✅ Amount input with validation
- ✅ Conversion results in a styled table
- ✅ Error handling for failed API calls
- ✅ Responsive design for mobile and desktop

---

## 📂 Project Structure
```
Currency-Converter/
├── index.html
├── style.css
├── script.js
└── README.md
```


---

## 💡 Key JavaScript Concepts Used

| Concept | How It's Used |
|--------|---------------|
| `fetch` + `async/await` | To get data from the CurrencyAPI |
| DOM Manipulation | To update UI dynamically based on user input |
| `map()` | To iterate over currency data and render table rows |
| Event Listeners | For form submission and DOM events |
| Error Handling | Wrapped fetch in `try-catch` block with `alert()` fallback |
| Responsive CSS | Used media queries and flexbox/grid styling |

---

## 🧪 How to Use

1. Open the web app in a browser.
2. Enter an amount in the input box.
3. Choose a base currency (INR, USD, EUR).
4. Click the **Submit** button.
5. View the converted values for multiple currencies.
6. Scroll down to see recent conversion history.

---

## 📦 Tech Stack

- HTML5
- CSS3 (Flexbox, Media Queries)
- Vanilla JavaScript (ES6+)

---

## 🌍 API Used

**[CurrencyAPI](https://currencyapi.com/)** — Free tier used for real-time exchange rate data.

---
