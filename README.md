# 🦾 Iron Signal – Emergency Signal Generator

**Iron Signal** is a React Native mobile application that allows users to quickly generate and send emergency information.
The UI is inspired by **Iron Man's futuristic HUD**, delivering a modern, tech-heavy interface for high-speed data entry and visual feedback.

## 🚀 Features

* **Iron Man–inspired design** with custom buttons, logos, and inputs.
* **Emergency Activation Button** – instantly reveals the emergency form.
* **Multi-field Emergency Form** to collect critical details:

  * Name
  * Age
  * Identification number
  * Phone number
  * Current address
  * Brief description of the emergency
  * Emergency category
  * Number of people involved
  * Condition of people involved
  * Additional remarks
* **Visibility Toggle System** – hide or show sections of the UI for a cleaner experience.

## 🛠️ Tech Stack

* **React Native** (Expo)
* **TypeScript**
* **Custom styled components** for Iron Man–themed visuals
* **State management** with `useState` hooks

## 📂 Project Structure

```
src/
│
├── components/
│   ├── IronLogo/
│   ├── IronButton/
│   ├── IronTextInputs/
│
└── screens/
    └── Home.tsx
```

* **Home.tsx** → Main screen containing logo, activation button, and emergency form.
* **IronButton.tsx** → Custom button to trigger visibility toggle.
* **IronLogo** & **IronSmallLogo** → UI branding elements.
* **Input Components** → Reusable form inputs for emergency details.

## 📦 Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/iron-signal.git
   cd iron-signal
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Run the app:

   ```bash
   npx expo start
   ```

## 💡 How It Works

1. Launch the app.
2. Tap **⚠️ Activate Iron Signal** to reveal the emergency form.
3. Fill out the required information.
4. Data can then be sent to your emergency contact system (future implementation).

## 📜 License

This project is open-source and available under the [MIT License](LICENSE).

---

## 👤 Author

**Gustavo Silva**
📧 [gugahenriquebatista@gmail.com](mailto:gugahenriquebatista@gmail.com)
