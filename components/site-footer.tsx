import { profile } from "@/content/profile";
import { SocialLinks } from "@/components/social-links";

export function SiteFooter() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto grid w-full max-w-6xl gap-5 px-6 py-8 text-sm text-slate-600 sm:grid-cols-[1fr_auto] sm:items-center">
        <div>
          <p className="font-semibold text-slate-950">{profile.name}</p>
          <p className="mt-2 max-w-2xl leading-6">
            {profile.buildWithAIStatement}
          </p>
        </div>
        <SocialLinks profile={profile} />
      </div>
    </footer>
  );
}
