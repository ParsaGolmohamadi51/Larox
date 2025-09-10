import HeaderActions from "@/components/molecules/HeaderActions";

export default function Header() {
  return (
    <header className="w-full flex justify-between items-center px-6 py-4 bg-gray-100 shadow-md">
      <h1 className="text-xl font-bold">لوگوی سایت</h1>
      <HeaderActions />
    </header>
  );
}
