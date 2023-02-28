import Image from 'next/image';
import React from 'react';
import { HomeIcon, MagnifyingGlassIcon } from '@heroicons/react/24/solid';
import { ChevronDownIcon, Bars3Icon } from '@heroicons/react/20/solid';
import {
  SparklesIcon,
  GlobeAltIcon,
  VideoCameraIcon,
  ChatBubbleOvalLeftEllipsisIcon,
  BellIcon,
  PlusIcon,
  SpeakerWaveIcon,
  ArrowRightOnRectangleIcon,
  ArrowLeftOnRectangleIcon,
} from '@heroicons/react/24/outline';
import { signIn, signOut, useSession } from 'next-auth/react';

const Header = () => {
  const { data: session } = useSession();

  return (
    <div className="flex bg-white px-4 py-2 shadow-sm sticky top-0">
      <div className="relative h-10 w-20 flex-shrink-0 cursor-pointer">
        <Image
          src="https://www.redditinc.com/assets/images/site/logo.svg"
          alt="Header Logo"
          fill
          style={{ objectFit: 'contain' }}
        />
      </div>

      <div className="flex items-center mx-7 xl:min-w-[300px]">
        <HomeIcon className="h-5 w-5" />
        <p className="flex-1 ml-2 hidden lg:inline">Home</p>
        <ChevronDownIcon className="h-5 w-5 ml-2" />
      </div>

      {/* Search Box */}
      <form className="flex flex-1 items-center space-x-2 rounded-full border border-gray-200 bg-gray-100 px-3 py-1">
        <MagnifyingGlassIcon className="h-6 w-6 text-gray-400" />
        <input
          className="flex-1 bg-transparent outline-none"
          type="text"
          placeholder="Search Reddit"
        />
        <button type="submit" hidden />
      </form>

      <div className="text-gray-500 items-center mx-5 hidden lg:inline-flex">
        <SparklesIcon className="icon" />
        <GlobeAltIcon className="icon" />
        <VideoCameraIcon className="icon" />
        <ChatBubbleOvalLeftEllipsisIcon className="icon" />
        <hr className="h-10 border border-gray-100" />
        <BellIcon className="icon" />
        <PlusIcon className="icon" />
        <SpeakerWaveIcon className="icon" />
      </div>

      <div className="ml-5 flex items-center lg:hidden">
        <Bars3Icon className="icon" />
      </div>

      {/* Sign in / Sign out button */}
      {session ? (
        <div
          className="hidden lg:flex items-center space-x-2 border border-gray-100 p-2 cursor-pointer"
          onClick={() => signOut()}
        >
          <ArrowLeftOnRectangleIcon className="h-5 w-5" />

          <div className="flex-1 text-sm">
            <p className="truncate">{session.user?.name}</p>
            <p className="text-gray-400">1 karma</p>
          </div>

          <ChevronDownIcon className="h-5 w-5 flex-shrink-0 text-gray-400" />
        </div>
      ) : (
        <div
          className="hidden lg:flex items-center space-x-2 border border-gray-100 p-2 cursor-pointer"
          onClick={() => signIn()}
        >
          <ArrowRightOnRectangleIcon className="h-5 w-5" />

          <p>Sign In</p>
        </div>
      )}
    </div>
  );
};

export default Header;
