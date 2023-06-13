"use client";

import Image from "next/image";
import { Combobox, Transition} from "@headlessui/react";

import { SearchManufacturerProps } from '@/types'

const SearchManufacturer = ({ manufacturer, setmanufacturer }: SearchManufacturerProps) => {
  return (
    <div className="search-manufacturer">
        <Combobox>
            <div className="relative w-full">
                <Combobox.Button className="absolute top-[14px]">
                    <Image 
                        src="/car-logo.svg"
                        wight={20}
                        height={20}
                        className="ml-4"
                        alt="Car Logo"
                        />
            </div>
        </Combobox>
    </div>
  )
}

export default SearchManufacturer