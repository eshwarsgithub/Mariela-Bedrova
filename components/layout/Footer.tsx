import { SITE_META } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="foot" data-screen-label="08 Footer">
      <div className="foot__lock">
        Mariela<em>.</em>
      </div>
      <div className="foot__bar">
        <div>© MMXXVI · Plovdiv, BG</div>
        <div className="foot__social" />
      </div>
    </footer>
  );
}
