import Image from "next/image";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="flex items-center justify-between p-4 md:p-6">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-2xl font-bold text-orange-500">
            BusinessHub.
          </span>
        </Link>
        <nav className="hidden md:flex space-x-4">
          <Link href="#" className="text-sm font-medium">
            Product
          </Link>
          <Link href="#" className="text-sm font-medium">
            Template
          </Link>
          <Link href="#" className="text-sm font-medium">
            Blog
          </Link>
          <Link href="#" className="text-sm font-medium">
            Pricing
          </Link>
        </nav>
        <div className="flex items-center space-x-4">
          <Link href="#" className="text-sm font-medium">
            Sign In
          </Link>
          <Button>Start Free</Button>
        </div>
      </header>
      <main className="flex-grow">
        <section className="px-4 py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-br from-white to-orange-50">
          <div className="container mx-auto grid gap-8 md:grid-cols-2 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Managing business payments has never been easier
              </h1>
              <p className="text-xl text-gray-600">
                Product Growth Solution in Single Platform. Never let your
                payments or Invoices get lost.
              </p>
              <form className="flex space-x-2">
                <Input
                  type="email"
                  placeholder="shashi360@gmail.com"
                  className="max-w-sm"
                />
                <Button type="submit">Submit</Button>
              </form>
              <div className="flex items-center space-x-4 text-sm text-gray-600">
                <span>✓ Free Register</span>
                <span>✓ Great Service</span>
              </div>
            </div>
            <div className="relative h-[400px]">
              <Image
                src="/placeholder.svg"
                alt="Business analytics"
                layout="fill"
                objectFit="contain"
              />
            </div>
          </div>
        </section>
        <section className="py-12 md:py-24 bg-white">
          <div className="container mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-8">
              Over 32k+ software businesses growing with AR Shakir
            </h2>
            <div className="flex flex-wrap justify-center items-center gap-8">
              {["Oracle", "Monday", "Segment", "Postman"].map((brand) => (
                <Image
                  key={brand}
                  src={`/placeholder.svg`}
                  alt={brand}
                  width={120}
                  height={60}
                />
              ))}
            </div>
          </div>
        </section>
        <section className="py-12 md:py-24 bg-gray-50">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              We have best team and best process
            </h2>
            <p className="text-xl text-gray-600 mb-12">
              We use an agile approach to test assumptions and connect with the
              needs of your audience early and often.
            </p>
            <Button size="lg">Get Started</Button>
            <div className="mt-16 grid gap-8 md:grid-cols-3">
              {[1, 2, 3].map((i) => (
                <div key={i} className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-2">
                    Project Discovery Call
                  </h3>
                  <p className="text-gray-600">
                    Donec aliquam est dui, vel vestibulum diam sollicitudin id.
                    Quisque feugiat malesuada molestie.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="py-12 md:py-24 bg-purple-700 text-white">
          <div className="container mx-auto grid gap-8 md:grid-cols-2 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Push your product to next level.
              </h2>
              <p className="text-xl mb-8">
                End-to-end payments and financial management in a single
                solution. Meet the right platform to help realize.
              </p>
              <Button variant="outline" size="lg">
                Get Started
              </Button>
            </div>
            <div className="relative h-[300px]">
              <Image
                src="/placeholder.svg"
                alt="Product showcase"
                layout="fill"
                objectFit="contain"
              />
            </div>
          </div>
        </section>
        <section className="py-12 md:py-24 bg-white">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              We help your business grow faster
            </h2>
            <p className="text-xl text-gray-600 mb-12">
              Why kept very ever home mrs. Considered sympathize ten uncommonly
              occasional assistance sufficient.
            </p>
            <div className="grid gap-8 md:grid-cols-3">
              {[
                "Offending belonging",
                "Promotion & provision",
                "Blessing application",
              ].map((title) => (
                <div key={title} className="space-y-4">
                  <div className="w-16 h-16 mx-auto bg-orange-100 rounded-full flex items-center justify-center">
                    <svg
                      className="w-8 h-8 text-orange-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold">{title}</h3>
                  <p className="text-gray-600">
                    Merits behind on afraid or warmly
                  </p>
                  <Link href="#" className="text-purple-600 hover:underline">
                    Read More →
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto grid gap-8 md:grid-cols-2">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Track your crytpo portfolio on the best way possible
            </h2>
            <p className="text-gray-400 mb-4">
              Market Watchman allow you to behold your wealth grow
              exponentially, with an easy to use the interface.
            </p>
            <form className="flex flex-col md:flex-row gap-4">
              <Input
                type="email"
                placeholder="Email Address"
                className="md:max-w-sm"
              />
              <Button>Get Started</Button>
            </form>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {["Company", "Resources", "Join Our Newsletter"].map((title) => (
              <div key={title}>
                <h3 className="font-semibold mb-2">{title}</h3>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>
                    <Link href="#">About Us</Link>
                  </li>
                  <li>
                    <Link href="#">Careers</Link>
                  </li>
                  <li>
                    <Link href="#">Blog</Link>
                  </li>
                  <li>
                    <Link href="#">Pricing</Link>
                  </li>
                </ul>
              </div>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
