import GetUserBtn from "@/components/main/GetUserBtn";

export default function Home() {
  return (
    <div className="container xl w-full items-center flex flex-col gap-5 h-screen justify-center">
      {/* 유저정보 확인 버튼 */}
      <GetUserBtn />
    </div>
  );
}
