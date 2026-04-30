import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/providers/theme-provider";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Elhadj.dev — Développeur Web & Mobile",
    template: "%s | Elhadj.dev",
  },
  description:
    "Portfolio de Elhadj Alhassana CAMARA — Développeur Web & Mobile spécialisé dans les solutions numériques personnalisées. Django, PHP, JavaScript, Python.",
  keywords: ["développeur web", "Elhadj CAMARA", "Django", "PHP", "Python", "Next.js", "Conakry", "Guinée", "Full Stack"],
  authors: [{ name: "Elhadj Alhassana CAMARA" }],
  creator: "Elhadj Alhassana CAMARA",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    title: "Elhadj.dev — Développeur Web & Mobile",
    description: "Solutions numériques personnalisées, modernes et performantes.",
    siteName: "Elhadj.dev",
  },
  twitter: {
    card: "summary_large_image",
    title: "Elhadj.dev — Développeur Web & Mobile",
    description: "Solutions numériques personnalisées, modernes et performantes.",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fafafa" },
    { media: "(prefers-color-scheme: dark)", color: "#030712" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="fr"
      suppressHydrationWarning
      className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} h-full`}
    >
      <body className="min-h-full antialiased">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
