# 🔐 SecureDesk

SecureDesk is a modern authentication system built with **Next.js 16** and **Clerk**, supporting **role-based authentication** for **Customers** and **Providers** with a clean and simple UI.

---

## ✨ Features

- Email & Password Login / Register
- Google OAuth
- Email OTP Verification
- Forgot Password (OTP based)
- Role-based authentication (Customer / Provider)
- Secure session handling
- Logout support
- Minimal & responsive UI

---

## 🧱 Tech Stack

- **Next.js 16**
- **React 19**
- **TypeScript**
- **Clerk Authentication**
- **Redux Toolkit**
- **React Hook Form**
- **Tailwind CSS v4**
- **shadcn/ui + Radix UI**
- **Lucide Icons**
- **React Toastify**

---

## Role-Based Auth Flow

User selects Customer or Provider during registration
Role is stored in Clerk unsafeMetadata
After login, users are redirected based on role
Customer → /customer
Provider → /provider

## 🛠️ Setup

1) npm install
```
npm install
```

2) Environment Variables
```
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=""
CLERK_SECRET_KEY=""
NEXT_PUBLIC_CLERK_SIGN_UP_FORCE_REDIRECT_URL=""
```
3) Run project
```
npm run dev
```
## 🎨 UI Reference

Authentication flow inspired by this Figma design:

https://www.figma.com/make/KnkpbcPA73wW7ntp0XFUvt/Authentication-Registration-Flow-UI--Community-?p=f&t=MMTaTHl0UaZOm31J-0


