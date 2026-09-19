import AdminNavBar from "@/components/navigation/adminNavBar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return <AdminNavBar>{children}</AdminNavBar>;
}
