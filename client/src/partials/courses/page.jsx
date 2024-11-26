/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import CloudLogo from "../../../public/a-cloud-guru-logo (1).webp";
import { SiSimpleanalytics } from "react-icons/si";
import { CiClock1 } from "react-icons/ci";
import { CiCalendarDate } from "react-icons/ci";
import { IoSearchOutline } from "react-icons/io5";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import {
  ChevronDownIcon,
  FunnelIcon,
  MinusIcon,
  PlusIcon,
  Squares2X2Icon,
} from "@heroicons/react/20/solid";

const sortOptions = [
  { name: "Most Popular", href: "#", current: true },
  { name: "Best Rating", href: "#", current: false },
  { name: "Newest", href: "#", current: false },
  { name: "Price: Low to High", href: "#", current: false },
  { name: "Price: High to Low", href: "#", current: false },
];
const filters = [
  {
    id: "learningtype",
    name: "Learning Type",
    options: [
      { value: "all", label: "All", checked: false },
      { value: "courses", label: "Courses", checked: false },
      { value: "handsonlabs", label: "Hands on labs", checked: true },
      { value: "learningpaths", label: "Learning paths", checked: false },
    ],
  },
  {
    id: "skilllevels",
    name: "Skill Levels",
    options: [
      { value: "all", label: "All", checked: false },
      { value: "beginner", label: "Beginner", checked: false },
      { value: "intemediate", label: "Intermediate", checked: true },
      { value: "advanced", label: "Advanced", checked: false },
      { value: "novice", label: "Novice", checked: false },
    ],
  },
];
const courses = [
    {
        "subName":"Hands on Labs",
        "title":"Managing S3 Buckets and Policies with Terraform",
        "Tutor":"Cloud Guru",
        "Skilllevel":"Intermediate",
        "time":30,
        "Date":new Date().toLocaleDateString(),
    },
    {
      "subName":"Hands on Labs",
      "title":"Managing Infrastructure as Code with Ansible",
      "Tutor":"Cloud Guru",
      "Skilllevel":"Advanced",
      "time":55,
      "Date":new Date().toLocaleDateString(),
  }
]

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Page = () => {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)
  return (
    <div className="h-full lg:p-20 md:p-16 sm:p-7 p-7">
      <div className="flex justify-center items-center ">
        <div className="flex justify-center items-center flex-col text-center">
          <img src={CloudLogo} alt="" className="h-16 w-96" />
          <h1 className="text-gray-900 font-bold lg:text-3xl md:text-3xl sm:text-2xl text-2xl mt-7 lg:w-[70%] md:w-full sm:w-full w-full ">
            Hundreds of courses. Thousands of labs. Endless possibilities.
          </h1>
        </div>
      </div>
      <div className="lg:w-[85%] md:w-[85%] m-auto sm:w-full w-full">
        <div className="mt-[8%] flex items-center gap-2 px-4 overflow-hidden border-gray-500 rounded-full border-2">
          <div className="cursor-pointer text-2xl font-extrabold">
            <IoSearchOutline />
          </div>
          <input
            placeholder="Search resources"
            type="search"
            className="w-full p-2 focus:outline-none text-sm py-3  "
          />
        </div>

        <div className="text-gray-500 font-bold text-sm mt-3">
          <span>Viewing 12 of 3039 results</span>
        </div>

         <div className="bg-white">
      <div>
        {/* Mobile filter dialog */}
        <Dialog open={mobileFiltersOpen} onClose={setMobileFiltersOpen} className="relative z-40 lg:hidden">
          <DialogBackdrop
            transition
            className="fixed inset-0 bg-black/25 transition-opacity duration-300 ease-linear data-[closed]:opacity-0"
          />

          <div className="fixed inset-0 z-40 flex">
            <DialogPanel
              transition
              className="relative ml-auto flex size-full max-w-xs transform flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl transition duration-300 ease-in-out data-[closed]:translate-x-full"
            >
              <div className="flex items-center justify-between px-4">
                <h2 className="text-lg font-medium text-gray-900">Filters</h2>
                <button
                  type="button"
                  onClick={() => setMobileFiltersOpen(false)}
                  className="-mr-2 flex size-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
                >
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon aria-hidden="true" className="size-6" />
                </button>
              </div>

              {/* Filters */}
              <form className="mt-4 border-t border-gray-200">
                {filters.map((section) => (
                  <Disclosure key={section.id} as="div" className="border-t border-gray-200 px-4 py-6">
                    <h3 className="-mx-2 -my-3 flow-root">
                      <DisclosureButton className="group flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500">
                        <span className="font-medium text-gray-900">{section.name}</span>
                        <span className="ml-6 flex items-center">
                          <PlusIcon aria-hidden="true" className="size-5 group-data-[open]:hidden" />
                          <MinusIcon aria-hidden="true" className="size-5 [.group:not([data-open])_&]:hidden" />
                        </span>
                      </DisclosureButton>
                    </h3>
                    <DisclosurePanel className="pt-6">
                      <div className="space-y-6">
                        {section.options.map((option, optionIdx) => (
                          <div key={option.value} className="flex items-center">
                            <input
                              defaultValue={option.value}
                              defaultChecked={option.checked}
                              id={`filter-mobile-${section.id}-${optionIdx}`}
                              name={`${section.id}[]`}
                              type="checkbox"
                              className="size-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                            />
                            <label
                              htmlFor={`filter-mobile-${section.id}-${optionIdx}`}
                              className="ml-3 min-w-0 flex-1 text-gray-500"
                            >
                              {option.label}
                            </label>
                          </div>
                        ))}
                      </div>
                    </DisclosurePanel>
                  </Disclosure>
                ))}
              </form>
            </DialogPanel>
          </div>
        </Dialog>

        <main className="pt-16">
          <div className="flex items-baseline justify-between border-b border-gray-200 pb-6">
            {/* <h1 className="text-3xl font-bold tracking-tight text-gray-900">All Courses</h1> */}
            <div></div>

            <div className="flex items-center">
              <Menu as="div" className="relative inline-block text-left">
                <div>
                  <MenuButton className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
                    Sort
                    <ChevronDownIcon
                      aria-hidden="true"
                      className="-mr-1 ml-1 size-5 shrink-0 text-gray-400 group-hover:text-gray-500"
                    />
                  </MenuButton>
                </div>

                <MenuItems
                  transition
                  className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                >
                  <div className="py-1">
                    {sortOptions.map((option) => (
                      <MenuItem key={option.name}>
                        <a
                          href={option.href}
                          className={classNames(
                            option.current ? 'font-medium text-gray-900' : 'text-gray-500',
                            'block px-4 py-2 text-sm data-[focus]:bg-gray-100 data-[focus]:outline-none',
                          )}
                        >
                          {option.name}
                        </a>
                      </MenuItem>
                    ))}
                  </div>
                </MenuItems>
              </Menu>

              <button type="button" className="-m-2 ml-5 p-2 text-gray-400 hover:text-gray-500 sm:ml-7">
                <span className="sr-only">View grid</span>
                <Squares2X2Icon aria-hidden="true" className="size-5" />
              </button>
              <button
                type="button"
                onClick={() => setMobileFiltersOpen(true)}
                className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
              >
                <span className="sr-only">Filters</span>
                <FunnelIcon aria-hidden="true" className="size-5" />
              </button>
            </div>
          </div>

          <section aria-labelledby="products-heading" className="pb-24 pt-6">
            <h2 id="products-heading" className="sr-only">
              Products
            </h2>

            <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
              {/* Filters */}
              <form className="hidden lg:block">
                {filters.map((section) => (
                  <Disclosure key={section.id} as="div" className="border-b border-gray-200 py-6">
                    <h3 className="-my-3 flow-root">
                      <DisclosureButton className="group flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
                        <span className="font-medium text-gray-900">{section.name}</span>
                        <span className="ml-6 flex items-center">
                          <PlusIcon aria-hidden="true" className="size-5 group-data-[open]:hidden" />
                          <MinusIcon aria-hidden="true" className="size-5 [.group:not([data-open])_&]:hidden" />
                        </span>
                      </DisclosureButton>
                    </h3>
                    <DisclosurePanel className="pt-6">
                      <div className="space-y-4">
                        {section.options.map((option, optionIdx) => (
                          <div key={option.value} className="flex items-center">
                            <input
                              defaultValue={option.value}
                              defaultChecked={option.checked}
                              id={`filter-${section.id}-${optionIdx}`}
                              name={`${section.id}[]`}
                              type="checkbox"
                              className="size-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                            />
                            <label htmlFor={`filter-${section.id}-${optionIdx}`} className="ml-3 text-sm text-gray-600">
                              {option.label}
                            </label>
                          </div>
                        ))}
                      </div>
                    </DisclosurePanel>
                  </Disclosure>
                ))}
              </form>

              {/* Product grid */}
              <div className="lg:col-span-3">
               {courses.map((item, index)=>{
                return (<div key={index} className="border-[1px] mt-3 border-gray-300 rounded-xl lg:p-4 md:p-4 sm:p-3 p-3">
                    <div>
                        <span className="text-red-600 font-bold text-sm">{item.subName}</span>
                        <div><h1 className="text-lg mt-3 font-extrabold text-blue-950">{item.title}</h1></div>
                        <p className="mt-4 text-gray-500 font-semibold text-sm">By {item.Tutor}</p>
                        <div className="lg:flex lg:justify-start items-center flex-wrap gap-6 mt-6 text-sm">
                          <div className="flex gap-1 items-center">
                            <div><SiSimpleanalytics className="text-lg"/></div>
                            <div className="text-sm text-gray-600">{item.Skilllevel}</div>
                          </div>
                          <div className="flex gap-1 items-center">
                            <div><CiClock1 className="text-lg"/></div>
                            <div className="text-sm text-gray-600">{item.time > 60 ? "min":"hour"}</div>
                          </div>
                          <div className="flex gap-1 items-center">
                            <div><CiCalendarDate className="text-lg"/></div>
                            <div className="text-sm text-gray-600">{item.Date}</div>
                          </div>
                        </div>
                    </div>
                </div>)})}
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
      </div>
    </div>
  );
};

export default Page;
