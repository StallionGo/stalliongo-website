import Image from "next/image";

export default function Logo({ className = "" }: { className?: string }) {
  return (
    <Image
      src="/stalliongo.png"
      alt="StallionGo - Enterprise Software Solutions Company"
      width={180}
      height={45}
      className={`h-10 w-auto ${className}`}
      priority
    />
  );
}
