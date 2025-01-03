import "./globals.css";
import Header from "./_components/Header.jsx";
import 'tailwindcss/tailwind.css'; // تأكد من تضمين هذا في _app.js



export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="transition duration-300 ease-in-out bg-white dark:bg-gray-800">
        <Header/>
        {children}
      </body>
    </html>
  );
}
