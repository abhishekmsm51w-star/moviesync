# 🎬 MovieSync

A modern, real-time venue experience application designed to keep cinema attendees updated instantly on live movie schedules and facility waiting times. Featuring a stunning premium dark aesthetic, dynamic glow effects, and live data simulation.

## ✨ Features
- **Real-Time Data Simulation:** Experience live, fluctuating wait times for washrooms and food courts directly on the dashboard.
- **Premium UI/UX:** Built with high-end glassmorphism, responsive micro-animations, and modern Google Fonts (Inter & Outfit).
- **Cloud-Native Ready:** Designed to be containerized and deployed natively to Google Cloud Run as a stateless, highly scalable service.

## 🚀 How to Clone & Run Locally

To get this project running on your own machine:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/abhishekmsm51w-star/moviesync.git
   ```
2. **Navigate into the project directory:**
   ```bash
   cd moviesync
   ```
3. **Install the required dependencies:**
   ```bash
   npm install
   ```
4. **Start the development server:**
   ```bash
   npm run dev
   ```
   *Your app will be live at `http://localhost:5173/` by default.*

## ☁️ Google Cloud Run Deployment

This project includes a perfectly optimized multi-stage `Dockerfile` making it plug-and-play for Google Cloud Run on port `8080`.

To deploy straight from the Google Cloud Shell:
```bash
gcloud run deploy moviesync --source . --port 8080 --allow-unauthenticated --region us-central1
```

---

<div align="center">
  <b>Made with ❤️ by Dr. Abhishek 🚀</b><br>
  <i>Future of Cloud is Here</i><br><br>
  
  <a href="https://instagram.com/drabhishek.5460">📸 Instagram</a> &nbsp;&bull;&nbsp;
  <a href="https://twitter.com/DAbhishek5460">🐦 X (Twitter)</a> &nbsp;&bull;&nbsp;
  <b>💼 LinkedIn:</b> dr-abhishek
</div>
