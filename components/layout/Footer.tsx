import { SITE_META } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="foot" data-screen-label="08 Footer">
      <div className="foot__lock">
        Mariela<em>.</em>
      </div>
      <div className="foot__bar">
        <div>© MMXXVI · Plovdiv, BG</div>
        <div className="foot__social">
          <a href={SITE_META.social.linkedin} target="_blank" rel="noopener noreferrer" data-magnetic="0.3">LinkedIn</a>
          <a href={SITE_META.social.twitter}  target="_blank" rel="noopener noreferrer" data-magnetic="0.3">X / Twitter</a>
          <a href={SITE_META.social.github}   target="_blank" rel="noopener noreferrer" data-magnetic="0.3">GitHub</a>
          <a href={SITE_META.social.readcv}   target="_blank" rel="noopener noreferrer" data-magnetic="0.3">Read.cv</a>
        </div>
        <div className="foot__copy">Volume 01 · Designed in motion</div>
      </div>
    </footer>
  );
}
