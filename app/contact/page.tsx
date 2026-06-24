import type { Metadata } from "next";
import { SocialLinks } from "@/components/social-links";
import { profile } from "@/content/profile";

export const metadata: Metadata = {
  title: "Contact | Sulav Baral",
  description:
    "Professional contact information for Sulav Baral's applied AI, data, automation, and backend portfolio.",
};

export default function ContactPage() {
  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-16 sm:py-20">
      <div className="max-w-3xl">
        <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-slate-600">
          Contact
        </p>
        <h1 className="text-3xl font-semibold tracking-normal text-slate-950 sm:text-4xl">
          Connect about practical AI, data, automation, and backend work.
        </h1>
        <p className="mt-5 text-base leading-7 text-slate-700">
          For professional context, project review, or collaboration
          discussions, use the available profile link below.
        </p>
        <div className="mt-8">
          <SocialLinks profile={profile} />
        </div>
      </div>
    </section>
  );
}
