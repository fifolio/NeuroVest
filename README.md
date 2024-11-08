### **NeuroVest Flowchart Overview 🧠📈**

The NeuroVest flowchart provides a roadmap for the app's functionality, illustrating how users interact with it to make informed investment decisions. The diagram highlights NeuroVest's seamless user flow, from login authentication to data fetching, analysis, and prediction presentation. This breakdown serves as a comprehensive reference for both developers and users, offering insights into the core technical processes that power NeuroVest’s AI-driven recommendations.

🔗 **Full-sized flowchart link**: [NeuroVest Flowchart](https://raw.githubusercontent.com/fifolio/NeuroVest/refs/heads/main/Prototype%20files/Flowchart/NeuroVest%20Flowchart%20-%20PNG/NeuroVest%20Flowchart-1.png)

---

### **Detailed Walkthrough of Each Step**

1. **User Authentication** 🔒
   - **Login Check**: NeuroVest initiates by determining if the user is logged in. If not, the app redirects to the **Login Screen**.
   - **Login Process**: The user inputs their **Email** and **Password**. Upon successful authentication, they proceed to the **Dashboard**. In case of failure, an error message appears, prompting the user to re-enter their credentials.
   - **Purpose**: This step ensures secure access, protecting user data and account integrity.

2. **Dashboard and Initial Interaction** 📊
   - **Dashboard Entry**: Once logged in, users arrive at the Dashboard, the central hub where they initiate predictions.
   - **Stock Symbol Input**: The user enters a **Ticker Symbol** (e.g., AAPL) to receive stock predictions. The system validates the symbol format, with an error message if the symbol is invalid, allowing a retry.
   - **Purpose**: This interaction ensures users have quick access to the prediction tool, minimizing errors in symbol input.

3. **Data Fetching and Sources** 🔍
   - **Fetching Data**: Upon successful symbol entry, NeuroVest queries data providers **Yahoo Finance** and **Polygon.io**. These sources provide:
     - **Historical Prices**: Used to calculate indicators like **SMA** (Simple Moving Average) and **EMA** (Exponential Moving Average).
     - **Volume Data**: Helps analyze market interest and trends.
     - **Real-time or Near-real-time Prices**: Essential for making timely buy/sell decisions.
     - **Additional Indicator Data**: Fields for calculating indicators like **MACD** (Moving Average Convergence/Divergence) and **RSI** (Relative Strength Index).
   - **Outcome**: The fetched data forms a comprehensive dataset, essential for generating accurate predictions.

4. **Analysis Modules** 💡
   - **AI-Driven Analysis**: NeuroVest’s core analysis is handled by an AI model, which processes raw data from Yahoo Finance and Polygon.io. The model calculates key indicators:
     - **SMA (Simple Moving Average)**: Tracks average closing prices over a period to reveal trends.
     - **EMA (Exponential Moving Average)**: Provides a weighted average that emphasizes recent prices, helping capture momentum shifts.
     - **MACD (Moving Average Convergence/Divergence)**: Aids in identifying buy/sell signals based on the convergence or divergence of EMAs.
     - **RSI (Relative Strength Index)**: Measures the stock’s momentum, signaling whether it’s overbought or oversold.
   - **Outcome Generation**: The model combines these indicators, producing a recommendation (Positive or Negative) with a confidence score, helping users gauge signal strength.
   - **Purpose**: This analysis synthesizes historical data, technical indicators, and predictive algorithms to offer clear investment guidance.

5. **Result Presentation** 📈
   - **Result Display**: The prediction is presented with a “Buy” (Positive) or “Sell” (Negative) recommendation.
   - **Indicator Summary**: Each indicator’s current value (SMA, EMA, MACD, RSI) is shown, accompanied by optional visualizations like trend graphs, offering transparency.
   - **Interactive Options**:
     - **New Symbol Entry**: Users can input another symbol for additional predictions.
     - **Logout Option**: Ensures users can easily end their session when needed.
   - **Purpose**: This step provides a comprehensive, user-friendly overview, empowering users with actionable insights while supporting iterative analysis.

6. **Logout and Security** 🔓
   - **User Logout**: If users choose to log out, NeuroVest securely ends the session and redirects to the home screen.
   - **Purpose**: This ensures user data privacy, maintaining app security.

---

### **Summary of Flowchart and Key Takeaways**

NeuroVest’s flowchart emphasizes a **sequential and user-centric experience**:
   - **Login**: Secure access to the app.
   - **Dashboard**: Simple entry point for initiating predictions.
   - **Data Fetching**: Aggregated data from top-tier providers, ensuring comprehensive analysis.
   - **Analysis Module**: AI-powered insights, backed by technical indicators.
   - **Result Presentation**: Clear, actionable recommendations.
   - **Logout**: Streamlined user exit.

![enter image description here](https://github.com/fifolio/NeuroVest/blob/main/Prototype%20files/Flowchart/NeuroVest%20Flowchart%20-%20PNG/NeuroVest%20Flowchart-1.png?raw=true)
🔗 **Full-sized flowchart link**: [NeuroVest Flowchart](https://raw.githubusercontent.com/fifolio/NeuroVest/refs/heads/main/Prototype%20files/Flowchart/NeuroVest%20Flowchart%20-%20PNG/NeuroVest%20Flowchart-1.png)

---
