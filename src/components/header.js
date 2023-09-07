'use client';

import Image from 'next/image';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
library.add(faPhone);

import BaseDivider from '@/components/base/divider';

import { useMediaQuery } from '@/lib/useMediaQuery';

export default function Header({ }) {
  const { isMobile } = useMediaQuery();

  return (
    <div className="pl-content-container mt-3 lg:mt-16">
      <div className="grid lg:flex lg:justify-between">
        <div className="">
          <Image
            src="/new-quotient/text-logo.svg"
            width="208"
            height="53"
            alt="Logo"
          ></Image>
        </div>

        {isMobile ? (
          <div>
            <BaseDivider className="my-3"></BaseDivider>
          </div>
        ) : null}

        <div className="lg:text-right">
          <h1 className="my-0 text-2xl lg:text-3xl">Custom Order Quote</h1>
          <h2 className="my-0 mt-2 text-base lg:text-lg">
            Number #5787
            {isMobile ? <br /> : <span className="mx-2">|</span>}
            Valid: 12 Nov - 12 Dec 2023
          </h2>
        </div>
      </div>

      <BaseDivider className="invisible lg:visible lg:mt-3"></BaseDivider>

      <div className="mb-6 mt-5 grid grid-cols-1 text-base lg:my-12 lg:grid-cols-2 lg:text-lg">
        <div>
          <div className="text-sm lg:text-base">Prepared for:</div>
          <div className="my-0 text-xl font-bold  lg:my-1 lg:text-2xl">
            Arief Widyananda
          </div>
          <div className="">arief@krafthaus.co.id</div>
          <div className="">
            <FontAwesomeIcon
              icon="fa-solid fa-phone fa-xs"
              width={14}
              className="mr-2"
            />
            082161617788
          </div>
        </div>

        <div>
          <div className="mt-4 text-sm  lg:mt-0 lg:text-base">Prepared by:</div>
          <div className="my-0 text-xl font-bold  lg:my-1 lg:text-2xl">
            Erin Ruth
          </div>
          <div className="">erin@paperlust.co</div>
          <div className="">
            <FontAwesomeIcon
              icon="fa-solid fa-phone fa-xs"
              width={14}
              className="mr-2"
            />
            08112233000
          </div>
        </div>
      </div>

      <BaseDivider className=""></BaseDivider>

      <div className="mt-6 text-base lg:text-lg">
        <p className="my-0">Hi Arief,</p>

        <p className="my-6">
          Here is your personal Paperlust quote :) <br />
          <b>
            We`re happy to offer 15% discount for purchasing minimum 3 card
            items or more.
          </b>
        </p>

        <div>
          Included in this quote:
          <ul className="my-0">
            <li>Free premium white invitation envelopes</li>
            <li>Printing</li>
            <li>
              Free Shipping (Australian Wide and for orders globally over $300
              USD)
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
