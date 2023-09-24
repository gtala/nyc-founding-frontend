"use client";

import React, { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { FC } from "react";
import Checkbox from "@/shared/Checkbox/Checkbox";

// DEMO DATA
const typeOfProperty = [
  {
    name: "Image",
    description: "Items in JPG, PNG, GIF, SVG format",
    checked: true,
  },
  {
    name: "Video",
    description: "Items in MP4, WEBM, MP3 format",
    checked: true,
  },
  {
    name: "Audio",
    description: "Items in MP4, WEBM, MP3 format",
  },
];

export interface ItemTypeSelectProps {
  onChange?: (data: any) => void;
  fieldClassName?: string;
}

const ItemTypeSelect: FC<ItemTypeSelectProps> = ({
  onChange,
  fieldClassName = "[ nc-hero-field-padding ]",
}) => {
  return (
    <Popover className="flex relative flex-1">
      {({ open, close }) => (
        <>
          <Popover.Button
            className={`flex text-left flex-1 items-center ${fieldClassName} space-x-3 focus:outline-none cursor-pointer ${
              open ? "nc-hero-field-focused" : ""
            }`}
            // PHẦN LOCATION-INPUT KHÔNG BẮT ĐƯỢC EVEN-CLICK KHI CLICK VÀO NÚT NÀY, NÊN CẦN CHẠY HACK NÀY
            onClick={() => {
              if (window.innerWidth >= 1024) {
                document.querySelector("html")?.click();
              }
            }}
          >

          </Popover.Button>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
          >
            <Popover.Panel className="absolute left-0 z-30 w-full sm:min-w-[340px] max-w-sm bg-white dark:bg-neutral-800 top-full mt-3 py-5 sm:py-6 px-4 sm:px-8 rounded-3xl shadow-xl">
              <div className="">
                <div className="relative flex flex-col space-y-5">
                  {typeOfProperty.map((item) => (
                    <div key={item.name} className="">
                      <Checkbox
                        name={item.name}
                        label={item.name}
                        subLabel={item.description}
                        defaultChecked={item.checked}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
};

export default ItemTypeSelect;