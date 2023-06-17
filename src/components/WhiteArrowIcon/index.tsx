import WhiteArrowIcon from "../../../public/img/white-right-arrow-icon.svg";
import Image from "next/image";

type WhiteArrowProps = {
  className?: string;
}

export default function WhiteArrow(props: WhiteArrowProps) {
  return (
    <Image
      priority
      src={WhiteArrowIcon}
      alt="White Arrow Icon"
      className={props.className}
    />
  );
}
