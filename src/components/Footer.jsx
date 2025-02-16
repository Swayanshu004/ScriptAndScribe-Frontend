import Link from "next/link"

import { Forum } from 'next/font/google';

const forum = Forum({ subsets: ['latin'], weight: ['400'] });

export default function Footer() {
  return (
    <footer className="bg-neutral-50 py-6 px-10">
      <div className={`${forum.className}`}>
        <div className="flex flex-col md:flex-row items-start justify-between md:text-left">
          <div>
            <h3 className="text-lg font-light mb-1">STORYCRAFT</h3>
            <p className="text-gray-600 text-sm">Crafting timeless narratives</p>
          </div>
          <div>
            <h4 className="font-light mt-5 md:mt-0">Explore</h4>
            <ul className="space-y-1 text-sm">
              <li>
                <Link href="/collections" className="text-neutral-600 hover:text-neutral-900">
                  Collections
                </Link>
              </li>
              <li>
                <Link href="/process" className="text-neutral-600 hover:text-neutral-900">
                  Process
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-neutral-600 hover:text-neutral-900">
                  About Us
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-light mt-5 md:mt-0">Support</h4>
            <ul className="space-y-1 text-sm">
              <li>
                <Link href="/faq" className="text-gray-600 hover:text-gray-800">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-gray-800">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/shipping" className="text-gray-600 hover:text-gray-800">
                  Shipping
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-light mt-5 md:mt-0">Legal</h4>
            <ul className="space-y-1 text-sm">
              <li>
                <Link href="/terms" className="text-gray-600 hover:text-gray-800">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-600 hover:text-gray-800">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-5 pt-5 border-t border-gray-300 text-center text-sm text-gray-600">
          <p>&copy; 2025 Storycraft. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

