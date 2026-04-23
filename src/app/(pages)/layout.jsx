import NavbarTwo from "@/components/layout/NavbarTwo";

export default function Layout({ children }) {
  return (
    <>
      <NavbarTwo />
      {children}
    </>
  );
}