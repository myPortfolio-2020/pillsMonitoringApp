import Image from "next/image";
// import logoOne from "../../public/logo.png";
import logoOne from "public/img01.jpg";
// import logoOne from "@/assets/logo.png";

export default function Home() {
  return (
    <>
      <div>this is the main page</div>
      <Image src={logoOne} alt="" width={500} height={500} />
    </>
  );
}
