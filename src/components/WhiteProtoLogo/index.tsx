import Image from "next/image";
import WhiteProtoIcon from "../../../public/img/proto-logo-white.svg";

type WhiteProtoLogoProps = {
  [x: string]: string;
}
export default function WhiteProtoLogo(props: WhiteProtoLogoProps) {
  return <Image src={WhiteProtoIcon} alt="White Proto Logo" priority {...props} />;
}
