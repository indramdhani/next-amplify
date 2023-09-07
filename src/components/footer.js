'use client';

import Image from 'next/image';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
library.add(faPhone);

import BaseDivider from '@/components/base/divider';

import { useMediaQuery } from '@/lib/useMediaQuery';

export default function Footer({ }) {
  const { isMobile } = useMediaQuery();

  return (
    <footer className="h-[220px] bg-black">
      <div className="pl-content-container flex justify-between pt-8">
        <div className="mr-10">
          <Image
            src="/new-quotient/paperlust-logo-white.svg"
            width={isMobile ? '124' : '208'}
            height={isMobile ? '31' : '52'}
            alt="Logo"
          ></Image>
        </div>

        <div className="text-base text-white lg:text-lg">
          <div>
            23 Manton Road, {isMobile ? <br /> : null}
            Oakleigh South <br />
            VIC 3167
          </div>
          <div className="my-4">
            <FontAwesomeIcon
              icon="fa-solid fa-phone fa-xs"
              width={16}
              className="mr-2"
            />
            1300 176 727
          </div>
          <div>ABN 66 600 060 115</div>
        </div>
      </div>
    </footer>
  );
}
