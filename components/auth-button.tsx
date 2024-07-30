import { createClient } from "@/utils/supabase/server";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function AuthButton() {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const signOut = async () => {
    "use server";

    const supabase = createClient();
    await supabase.auth.signOut();
    return redirect("/login");
  };

  return user ? (
    <div className="flex items-center gap-4 truncate">
      Hey, <span className="font-semibold shrink">{user.email}</span>!
      <form action={signOut} className="shrink-0 min-w-0 max-w-full">
        <button
          className="py-2 px-4 rounded-md bg-btn-background hover:bg-btn-background-hover
        underline"
        >
          Logout
        </button>
      </form>
    </div>
  ) : (
    <Link
      href="/login"
      className="py-2 px-3 flex rounded-md underline bg-btn-background hover:bg-btn-background-hover"
    >
      Login
    </Link>
  );
}
