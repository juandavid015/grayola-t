import Link from "next/link";
import { UserAuthForm } from "@/components/authentication/user-auth-form";
// import Image from "next/image";
import { Icons } from "@/components/ui/icons";
import { signIn, signUp, signInWithGoogle } from "./actions";

export default function Login({
  searchParams,
}: {
  searchParams: { message: string };
}) {
  return (
    <>
      {/* <div className="md:hidden">
        <Image
          src="/examples/authentication-light.png"
          width={1280}
          height={843}
          alt="Authentication"
          className="block dark:hidden"
        />
        <Image
          src="/examples/authentication-dark.png"
          width={1280}
          height={843}
          alt="Authentication"
          className="hidden dark:block"
        />
      </div> */}
      <div
        className="container relative min-h-screen flex-col items-center justify-center 
      md:grid lg:max-w-none lg:grid-cols-2 lg:px-0"
      >

        <div className="relative hidden h-full flex-col bg-muted p-10 text-white dark:border-r lg:flex">
          <div className="absolute inset-0 bg-zinc-900" />
          <div className="relative z-20 flex items-center text-lg font-medium">
            <Icons.grayola className="h-12 fill-red" />
          </div>
          <div className="relative z-20 mt-auto">
            <blockquote className="space-y-2 text-[#75fa00]">
              <p className="text-lg">
                &ldquo;Our creative management platform gives you the ability to
                send projects, give feedback, and receive all your projects,
                including their editables, all in one place .&rdquo;
              </p>
            </blockquote>
          </div>
        </div>
        <div className="p-8">
          <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
            <div className="flex flex-col space-y-2 text-center">
              <h1 className="text-2xl font-semibold tracking-tight">
                Create an account
              </h1>
              <p className="text-sm text-muted-foreground">
                Enter your email below to create your account
              </p>
            </div>
            <UserAuthForm
              signIn={signIn}
              signUp={signUp}
              continueWith={signInWithGoogle}
            />
            <p className="px-8 text-center text-sm text-muted-foreground">
              By clicking continue, you agree to our{" "}
              <Link
                href="/terms"
                className="underline underline-offset-4 hover:text-primary"
              >
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link
                href="/privacy"
                className="underline underline-offset-4 hover:text-primary"
              >
                Privacy Policy
              </Link>
              .
            </p>
            {searchParams?.message && (
              <p className="mt-4 p-4 bg-foreground/10 text-foreground text-center">
                {searchParams.message}
              </p>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
