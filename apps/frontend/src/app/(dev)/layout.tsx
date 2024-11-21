import Pagina from "@/components/template/Pagina";

interface LayoutProps {
  children: React.ReactNode;
}
export default function Layout({children}: LayoutProps) {
  return (
    <Pagina>{children}</Pagina>
  )
}