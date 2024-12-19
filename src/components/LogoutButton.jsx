import { useAuth } from "@/contexts/AuthContext";
import { LogOut } from "lucide-react";
import toast from "react-hot-toast";
import { signOut } from "firebase/auth";
import { auth } from "@/lib/firebase";

export default function LogoutButton() {
  const { user, isLoading } = useAuth();

  if (isLoading) {
    return <div>Loading...</div>; // You can show a loading indicator here
  }

  if (!user) {
    return <></>; // Return nothing if there's no user
  }

  return (
    <button
      onClick={async () => {
        if (!confirm("Are you sure?")) return;
        try {
          await toast.promise(signOut(auth), {
            error: (e) => e?.message,
            loading: "Loading...",
            success: "Successfully Logged out",
          });
        } catch (error) {
          toast.error(error?.message);
        }
      }}
      className="h-8 w-8 flex justify-center items-center rounded-full hover:bg-gray-50"
    >
      <LogOut size={14} />
    </button>
  );
}
