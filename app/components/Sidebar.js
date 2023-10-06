import React from "react";
import Link from "next/link";

export default function Sidebar() {
  return (
    <aside className="fixed flex flex-col w-64 h-screen px-5 py-8 overflow-y-auto bg-gray-200 border-r rtl:border-r-0 rtl:border-l dark:bg-gray-900 dark:border-gray-700">
      <div className="flex flex-col justify-between flex-1 mt-6">
        <nav className="-mx-3 space-y-6 ">
          <div className="space-y-3 ">
            <div
              className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg"
              href="#"
            >
              <a href="/">
                <span className="mx-2 text-sm font-medium">Home</span>
              </a>
            </div>

            <div
              className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
              href="#"
            >
              <Link href="/admin/list">
                <span className="mx-2 text-sm font-medium">List</span>
              </Link>
            </div>

            <div
              className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
              href="#"
            >
              <Link href="/admin/addItem">
                <span className="mx-2 text-sm font-medium">AddItem</span>
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </aside>
  );
}
