"use client";
import Image from "next/image";
import React from "react";
import { CheckBadgeIcon } from "@heroicons/react/24/outline";

const AboutUs: React.FC = () => {
  return (
    <>
      <div>
        <section className="flex flex-col items-center justify-center bg-primary500 bg-[url('/images/website/inner-pattern.png')] bg-cover bg-no-repeat p-6 text-center md:min-h-50">
          <h1 className="text-3xl font-bold text-white lg:text-5xl">
            About Us
          </h1>
          <p className="mt-3 text-base text-primary200 lg:text-xl text-white">
            Any question or remarks? Just write us a message!
          </p>
        </section>

        <section className="px-0 py-6 text-[#696E76] lg:py-12">
          <div className="container mx-auto max-w-[1296px] lg:px-10">
            <div className="grid grid-cols-12 gap-6 lg:gap-12">
              <div className="col-span-12 mb-10 lg:col-span-5 lg:mb-0">
                <div className="relative">
                  <span className="block w-11/12 overflow-hidden rounded-[25px] ">
                    <img
                      src="https://createvalue.org/wp-content/uploads/iStock-1250195664-3.jpg"
                      alt=""
                      className="h-full w-full object-cover"
                      width={1000}
                      height={900}
                    />
                  </span>
                  <div className="absolute -bottom-8 right-0 bg-primary400 p-6 text-lg font-bold text-white sm:text-xl lg:w-80 lg:text-[32px] lg:!leading-[44px]">
                    Faster than <br></br> you can imagine{" "}
                    <div
                      className="absolute right-0 top-0 
                    rotate-[90deg] border-b-[22px] border-l-[22px] border-t-[0]
                    border-b-transparent border-l-white
                    border-t-transparent md:border-b-[32px] md:border-l-[32px]"
                    ></div>
                  </div>
                </div>
              </div>
              <div className="col-span-12 lg:col-span-7">
                <div className="  mb-5 max-w-[540px] text-xl font-semibold text-white lg:text-2xl xl:text-4xl">
                  Revolutionizing Access to Products{" "}
                  <span className="text-red">Across Borders</span>
                </div>
                <p className="text-base font-semibold text-white">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry`s
                  standard dummy
                </p>

                <p className="mt-6 block w-full text-base text-white">
                  Our mission is to break down barriers of accessibility and
                  make the world a smaller, more connected place. With Bring Me,
                  you can access any product, anywhere, and travelers can make
                  their journeys even more meaningful by helping others.
                </p>
                <p className="mt-3 block w-full text-base text-white">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry`s
                  standard dummy text ever since the 1500s,
                </p>

                <ul className="mt-10 flex flex-col gap-4">
                  <li className="relative block w-full pl-8 text-base font-semibold text-white">
                    <span className="absolute left-0 top-0.5">
                      <CheckBadgeIcon className="h-6 w-6 text-[#FE4239]" />
                    </span>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry`s
                    standard dummy text ever since the 1500s
                  </li>
                  <li className="relative block w-full pl-8 text-base font-semibold  text-white">
                    <span className="absolute left-0 top-0.5">
                      <CheckBadgeIcon className="h-6 w-6 text-[#FE4239]" />
                    </span>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry`s
                    standard dummy text ever since the 1500s
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>

      <section className="mt-10 bg-[#F8F9F9] px-0 py-6 lg:py-12">
        <div className="container mx-auto  max-w-[1296px] lg:px-10">
          <div className="grid grid-cols-12 items-center gap-6 lg:gap-12">
            <div className="col-span-12 lg:col-span-6">
              <div className="mb-5 text-xl font-semibold text-black lg:text-2xl xl:text-4xl">
                Why Choose <span className="text-red-500">Bring Me</span>
              </div>
              <p className="text-base font-semibold text-gray-500">
                Our mission is to break down barriers of accessibility and make
                the world a smaller, more connected place. With Bring Me, you
                can access any product, anywhere, and travelers can make their
                journeys even more meaningful by helping others.
              </p>

              <p className="mt-6 block w-full text-base text-[#696E76]">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry`s standard dummy
                text ever since the 1500s,
              </p>
              <p className="mt-3 block w-full text-base text-[#696E76]">
                Our mission is to break down barriers of accessibility and make
                the world a smaller, more connected place. With Bring Me, you
                can access any product, anywhere, and travelers can make their
                journeys even more meaningful by helping others.
              </p>
              <p className="mt-3 block w-full text-base text-[#696E76]">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry`s standard dummy
                text ever since the 1500s,
              </p>

              <div className="mt-5 flex flex-wrap gap-5 md:gap-10 lg:mt-10">
                <div>
                  <h3 className="text-3xl font-bold text-primary500 md:text-5xl">
                    50{" "}
                    <span className="text-base  font-normal text-secondary300 md:text-[22px]">
                      cities
                    </span>
                  </h3>
                  <p className="text-sm  text-grey500">Around the world</p>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-primary500 md:text-5xl">
                    2{" "}
                    <span className="text-base font-normal text-secondary300 md:text-[22px]">
                      millions
                    </span>
                  </h3>
                  <p className="text-sm  text-grey500">
                    Delivery around the world
                  </p>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-primary500 md:text-5xl">
                    1.2{" "}
                    <span className="text-base font-normal text-secondary300 md:text-[22px]">
                      millions
                    </span>
                  </h3>
                  <p className="text-sm text-grey500">Around the world</p>
                </div>
              </div>
            </div>
            <div className="col-span-12 lg:col-span-6">
              <div className="grid grid-cols-12 gap-4">
                <div className="lg col-span-12 md:mt-12 lg:col-span-6">
                  <div className="common-shadow rounded-[10px] bg-[#0f0f6f] p-5 py-6 text-white">
                    <Image
                      src="/images/website/globe.svg"
                      width={60}
                      height={60}
                      alt="globe"
                      className="mb-5"
                    />
                    <div className="mb-3 text-lg font-semibold">
                      Lorem Ipsum is simply dummy{" "}
                    </div>
                    <p className="text-md font-normal">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry`s
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley.
                    </p>
                  </div>
                  <div className="common-shadow mt-6 rounded-[10px] bg-white  p-5 py-6 text-black">
                    <Image
                      src="/images/website/savings.svg"
                      width={60}
                      height={60}
                      alt="savings"
                      className="mb-5 "
                    />
                    <div className="mb-3 text-lg font-semibold">
                      Lorem Ipsum is simply dummy{" "}
                    </div>
                    <p className="text-md font-normal">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry`s
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley.
                    </p>
                  </div>
                </div>
                <div className="col-span-12 lg:col-span-6">
                  <div className="common-shadow rounded-[10px] bg-white  p-5 py-6  text-black">
                    <Image
                      src="/images/website/paid.svg"
                      width={60}
                      height={60}
                      alt="paid"
                      className="mb-5"
                    />
                    <div className="mb-3 text-lg font-semibold">
                      Lorem Ipsum is simply dummy{" "}
                    </div>
                    <p className="text-md font-normal">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry`s
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley.
                    </p>
                  </div>
                  <div className="common-shadow mt-6 rounded-[10px] bg-secondary300 p-5 py-6 text-white">
                    <Image
                      src="/images/website/add_reaction.svg"
                      width={60}
                      height={60}
                      alt="add_reaction"
                      className="mb-5"
                    />
                    <div className="mb-3 text-lg font-semibold">
                      Lorem Ipsum is simply dummy{" "}
                    </div>
                    <p className="text-md font-normal">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry`s
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
