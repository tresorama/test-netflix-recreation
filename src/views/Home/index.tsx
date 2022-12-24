import Link from "next/link";
import { AddIcon, AvatarIcons } from "@/views/shared/components/Icons";

const users = ['Luke', 'Matt', "Jane", 'Sarah'].map((name, i) => ({
  name,
  AvatarIcon: AvatarIcons[i % AvatarIcons.length],
}));

export const HomeView = () => (
  <>
    <div className="flex items-center justify-center w-screen min-h-screen text-white bg-zinc-900">
      <div className="flex flex-col items-center max-w-[85%]">
        <div className="">
          <div className="text-3xl lg:text-5xl">Who want to watch Netflix ?</div>
        </div>
        <div className="mt-5 lg:mt-10">
          <div className="flex flex-wrap justify-center gap-2 lg:gap-6">
            {users.map(user => (
              <div key={user.name} className="relative flex flex-col items-center gap-1 text-gray-500 group hover:text-gray-50">
                <Link href="/browse" className="absolute inset-0" />
                <div className="w-[10vw] min-w-[84px] max-w-[200px] rounded-md overflow-hidden border-2 border-transparent group-hover:border-gray-50">
                  <user.AvatarIcon />
                </div>
                <div className="text-sm">{user.name}</div>
              </div>
            ))}
            <div className="relative flex flex-col items-center gap-0 text-gray-500 group hover:text-gray-50">
              <div className="w-[10vw] min-w-[84px] max-w-[200px] rounded-md overflow-hidden group-hover:bg-gray-50 group-hover:text-gray-500">
                <Link href="#" className="absolute inset-0" />
                <div className="p-5">
                  <AddIcon />
                </div>
              </div>
              <div className="text-sm">Add new profile</div>
            </div>
          </div>
        </div>
        <div className="mt-10">
          <button type="button" className="px-5 py-2 text-sm text-gray-500 border border-gray-500 hover:text-gray-50 hover:border-gray-50">Manage profiles</button>
        </div>
        <div className="mt-10">
          <Link href="/components-demo" className="text-sm underline">View Components Demo</Link>
        </div>
      </div>
    </div>
  </>
);
