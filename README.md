# Airdrop Finder

A modern, professional-grade web application built with **Next.js** and **TypeScript** to help you discover and search for cryptocurrency airdrops effortlessly.

## 🚀 Features

- **Fast Search**: Real-time airdrop search functionality
- **Modern Stack**: Built with Next.js 14, React 18, and TypeScript
- **Type-Safe**: Full TypeScript support for better code quality
- **API Integration**: RESTful API endpoints for seamless data fetching
- **Responsive Design**: Works smoothly across all devices

## 📋 Prerequisites

Before you begin, ensure you have installed:
- **Node.js** (v16 or higher)
- **npm** or **yarn** package manager
- **Git**

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Adrijan-Petek/airdrop-finder-2.git
   cd airdrop-finder
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Configure environment variables** (if needed)
   Create a `.env.local` file in the root directory and add any required variables.

## 🏃 Getting Started

### Development Mode
Run the development server:
```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application in action. The page will auto-refresh as you make changes.

### Production Build
Build the application for production:
```bash
npm run build
npm start
# or
yarn build
yarn start
```

## 📁 Project Structure

```
airdrop-finder/
├── pages/
│   ├── index.tsx           # Main application page
│   └── api/
│       └── search.ts       # API endpoint for airdrop search
├── package.json            # Project dependencies and scripts
├── next.config.js          # Next.js configuration
└── README.md              # This file
```

## 🔌 API Endpoints

### Search Airdrops
- **Endpoint**: `GET /api/search`
- **Description**: Search for airdrops based on query parameters
- **Example**:
  ```bash
  curl http://localhost:3000/api/search?q=ethereum
  ```

## 🧪 Testing

To run tests (when implemented):
```bash
npm test
# or
yarn test
```

## 🐛 Troubleshooting

**Port 3000 already in use:**
```bash
# Use a different port
npm run dev -- -p 3001
```

**Dependencies not installing:**
```bash
# Clear npm cache and reinstall
npm cache clean --force
npm install
```

## 📦 Dependencies

- **next**: ^14.0.0 - React framework for production
- **react**: ^18.2.0 - UI library
- **react-dom**: ^18.2.0 - React DOM library
- **typescript**: ^5.0.0 - Type safety and development

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👤 Author

**Adrijan Petek**
- GitHub: [@Adrijan-Petek](https://github.com/Adrijan-Petek)

## 📞 Support

If you have any questions or need assistance, please open an issue on the [GitHub repository](https://github.com/Adrijan-Petek/airdrop-finder-2/issues).

---

**Last Updated**: November 25, 2025