import { IUser } from "@/types/interfaces";
import Image from "next/image";
import { memo } from "react";

const UserInfo = memo((props: IUser) => (
  <div className=" border-white border-2 px-4 py-2 cursor-pointer">
    <Image
      src={props.avatar_url}
      alt="user image"
      width={100}
      height={100}
      className="h-[100px] w-[100px] object-cover"
    />
    <p>{props.login}</p>
  </div>
));
UserInfo.displayName = "UserInfo";

export default UserInfo;
