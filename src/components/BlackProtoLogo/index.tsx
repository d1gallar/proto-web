import Image from "next/image";
import BlackProtoIcon from "../../../public/img/proto-logo-black.svg";

type BlackProtoLogoProps = {
  [x: string]: string;
};

export default function BlackProtoLogo(props: BlackProtoLogoProps) {
  return (
    <Image
      src={BlackProtoIcon}
      alt="Proto Logo"
      draggable={false}
      priority
      {...props}
    />
  );
}
