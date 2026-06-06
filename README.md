# Fast Social

A modern social hub platform with fast, reliable authentication and community features.

## 🎯 Features

- ✨ **Modern UI** - Beautiful gradient design with responsive layout
- 🔐 **Secure Authentication** - Email/Username login and Google OAuth integration
- 📱 **Mobile Responsive** - Works seamlessly on all devices
- ⚡ **Fast Performance** - Optimized with Next.js and Tailwind CSS
- 👥 **Community Focused** - Connect with millions of people worldwide
- 🔒 **Enterprise Security** - Your data is protected with enterprise-level security

## 🛠️ Tech Stack

- **Frontend Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Form Handling**: React Hook Form
- **Validation**: Zod
- **HTTP Client**: Axios

## 📁 Project Structure

```
fast-social/fast/
├── app/
│   ├── page.tsx                 # Landing page with "Get Started" button
│   ├── layout.tsx               # Root layout component
│   ├── globals.css              # Global styles
│   └── auth/
│       └── page.tsx             # Authentication page (Login/Sign Up toggle)
├── components/
│   └── auth/
│       ├── LoginForm.tsx        # Email/Password login form
│       └── SignUpForm.tsx       # Username/Email/Password sign up form
├── package.json                 # Project dependencies
├── tsconfig.json               # TypeScript configuration
├── tailwind.config.ts          # Tailwind CSS configuration
├── postcss.config.js           # PostCSS configuration
├── next.config.js              # Next.js configuration
└── README.md                   # This file
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/fast-social/fast.git
   cd fast
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser and navigate to:**
   ```
   http://localhost:3000
   ```

## 📄 Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the project for production
- `npm run start` - Start the production server
- `npm run lint` - Run ESLint for code quality

## 🎨 Pages

### Landing Page (`/`)
- Main entry point
- **"Get Started"** button - Redirects to authentication page
- **"Learn More"** button - Scrolls to features section
- Features showcase with 3 cards
- Beautiful purple gradient background

### Authentication Page (`/auth`)
- **Login Form**
  - Email field
  - Password field
  - Form validation
  - Google Sign-In button
  - Toggle to Sign Up

- **Sign Up Form**
  - Username field (min 3 characters)
  - Email field
  - Password field
  - Confirm Password field
  - Password match validation
  - Google Sign-Up button
  - Toggle to Login

## 🔐 Authentication Features

### Login with Email
- Email validation
- Password validation (min 6 characters)
- Real-time error messages
- Loading states

### Sign Up with Email & Username
- Username validation (min 3 characters)
- Email validation
- Password validation (min 6 characters)
- Password confirmation matching
- Real-time error messages
- Loading states

### Google OAuth
- One-click Google authentication
- Available on both login and sign-up forms
- Secure OAuth flow integration ready

## 🎨 UI/UX Features

- **Responsive Design** - Mobile, tablet, and desktop support
- **Form Validation** - Real-time validation with helpful error messages
- **Loading States** - User feedback during form submission
- **Smooth Transitions** - Polished animations and hover effects
- **Clean Design** - Modern card-based layout with glass morphism effects
- **Accessibility** - Proper labels and semantic HTML

## 📦 Dependencies

### Production
- `react` - React library
- `react-dom` - React DOM library
- `next` - Next.js framework
- `axios` - HTTP client
- `react-hook-form` - Form state management
- `@hookform/resolvers` - Form validation resolvers
- `zod` - TypeScript-first schema validation

### Development
- `typescript` - TypeScript support
- `@types/react` - React types
- `@types/react-dom` - React DOM types
- `@types/node` - Node.js types
- `tailwindcss` - CSS framework
- `autoprefixer` - CSS vendor prefixing
- `postcss` - CSS processing

## 🔧 Configuration Files

### tsconfig.json
- ES2020 target
- Strict type checking
- Path aliases for clean imports

### tailwind.config.ts
- Custom color scheme (primary: indigo, secondary: pink)
- Responsive breakpoints
- Extended theme configurations

### next.config.js
- Next.js specific configurations
- Build optimizations

### postcss.config.js
- Tailwind CSS processing
- Autoprefixer integration

## 📱 Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

## 🔒 Security Considerations

- Form validation on client side
- TypeScript for type safety
- Environment variables ready for API keys
- Secure password handling

## 🌐 Navigation Flow

```
Home (/)
  ↓
  [Get Started Button]
  ↓
Auth Page (/auth)
  ├── Login Form
  │   ├── Email Login
  │   └── Google Sign-In
  │
  └── Sign Up Form
      ├── Email + Username Sign Up
      └── Google Sign-Up
```

## 📖 Usage

### Starting the Development Server

```bash
npm run dev
```

The app will be available at `http://localhost:3000`

### Building for Production

```bash
npm run build
npm run start
```

### Form Validation Examples

The forms use Zod for validation with helpful error messages:

- **Email**: Must be a valid email format
- **Username**: Minimum 3 characters
- **Password**: Minimum 6 characters
- **Confirm Password**: Must match the password field

## 🚀 Next Steps

1. Install dependencies: `npm install`
2. Run development server: `npm run dev`
3. Open `http://localhost:3000` in your browser
4. Click the "Get Started" button to see the authentication forms
5. Integrate with your backend API by updating the form submission handlers

## 🔄 Integration Points

The authentication forms are ready to be connected to your backend:

- **LoginForm.tsx** - Update the `onSubmit` function (line 19)
- **SignUpForm.tsx** - Update the `onSubmit` function (line 36)

Example API integration:
```typescript
const response = await axios.post('/api/auth/login', data);
// Handle response and redirect
```

## 📧 Contact & Support

For issues or questions about Fast Social, please create an issue in the repository.

## 📝 License

This project is open source and available under the MIT License.

---

**Happy coding! 🚀** Start building your social hub today!
