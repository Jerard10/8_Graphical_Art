const artworks = [
  {
    title: "1. Crispy Taco",
    svg: `
      <svg viewBox="0 0 200 200">
        <circle cx="42" cy="88" r="22" fill="#4CAF50" stroke="#2b231d" stroke-width="4"/>
        <circle cx="68" cy="94" r="22" fill="#4CAF50" stroke="#2b231d" stroke-width="4"/>
        <circle cx="100" cy="88" r="22" fill="#4CAF50" stroke="#2b231d" stroke-width="4"/>
        <circle cx="132" cy="94" r="22" fill="#4CAF50" stroke="#2b231d" stroke-width="4"/>
        <circle cx="158" cy="88" r="22" fill="#4CAF50" stroke="#2b231d" stroke-width="4"/>
        <circle cx="62" cy="92" r="7.5" fill="#E53935" stroke="#2b231d" stroke-width="3"/>
        <circle cx="118" cy="86" r="7.5" fill="#E53935" stroke="#2b231d" stroke-width="3"/>
        <circle cx="142" cy="96" r="7.5" fill="#E53935" stroke="#2b231d" stroke-width="3"/>
        <rect x="86" y="82" width="13" height="8" rx="2" fill="#FFC107" stroke="#2b231d" stroke-width="2.5"/>
        <rect x="104" y="94" width="13" height="8" rx="2" fill="#FFC107" stroke="#2b231d" stroke-width="2.5"/>
        <rect x="130" y="80" width="13" height="8" rx="2" fill="#FFC107" stroke="#2b231d" stroke-width="2.5"/>
        <path d="M 26 138 A 74 74 0 0 1 174 138 Z" fill="#F4A236" stroke="#2b231d" stroke-width="4.5" stroke-linejoin="round"/>
        <path d="M 35 135 A 65 65 0 0 1 165 135" fill="none" stroke="#D9821B" stroke-width="4" stroke-linecap="round"/>
        <circle cx="56" cy="118" r="2.8" fill="#9c5209"/>
        <circle cx="80" cy="106" r="2.8" fill="#9c5209"/>
        <circle cx="112" cy="112" r="2.8" fill="#9c5209"/>
        <circle cx="145" cy="122" r="2.8" fill="#9c5209"/>
        <circle cx="95" cy="126" r="2.8" fill="#9c5209"/>
        <circle cx="126" cy="128" r="2.8" fill="#9c5209"/>
      </svg>
    `
  },
  {
    title: "2. Pancake Stack",
    svg: `
      <svg viewBox="0 0 200 200">
        <ellipse cx="100" cy="162" rx="76" ry="14" fill="#CFD8DC" stroke="#2b231d" stroke-width="4"/>
        <rect x="42" y="134" width="116" height="24" rx="12" fill="#D4883A" stroke="#2b231d" stroke-width="4"/>
        <rect x="42" y="112" width="116" height="24" rx="12" fill="#E09746" stroke="#2b231d" stroke-width="4"/>
        <rect x="42" y="90" width="116" height="24" rx="12" fill="#EBAA57" stroke="#2b231d" stroke-width="4"/>
        <path d="M 56 88 H 144 A 9 9 0 0 1 153 97 A 9 9 0 0 1 144 106 H 137 V 118 A 4.5 4.5 0 0 1 128 118 V 106 H 114 V 130 A 6 6 0 0 1 102 130 V 106 H 76 V 122 A 5 5 0 0 1 66 122 V 106 H 56 A 9 9 0 0 1 47 97 A 9 9 0 0 1 56 88 Z" fill="#7B241C" stroke="#2b231d" stroke-width="3.5" stroke-linejoin="round"/>
        <rect x="84" y="76" width="32" height="20" rx="5" fill="#FFE066" stroke="#2b231d" stroke-width="3.5"/>
      </svg>
    `
  },
  {
    title: "3. Ice Cream Cone",
    svg: `
      <svg viewBox="0 0 200 200">
        <polygon points="58,96 142,96 100,182" fill="#DDA15E" stroke="#2b231d" stroke-width="4" stroke-linejoin="round"/>
        <line x1="72" y1="96" x2="112" y2="156" stroke="#BC8A5F" stroke-width="2.5"/>
        <line x1="92" y1="96" x2="126" y2="128" stroke="#BC8A5F" stroke-width="2.5"/>
        <line x1="128" y1="96" x2="76" y2="132" stroke="#BC8A5F" stroke-width="2.5"/>
        <line x1="108" y1="96" x2="88" y2="158" stroke="#BC8A5F" stroke-width="2.5"/>
        <circle cx="76" cy="86" r="26" fill="#80ED99" stroke="#2b231d" stroke-width="4"/>
        <circle cx="124" cy="86" r="26" fill="#80ED99" stroke="#2b231d" stroke-width="4"/>
        <circle cx="100" cy="64" r="34" fill="#FF8FA3" stroke="#2b231d" stroke-width="4"/>
        <path d="M 100 17 Q 110 8 118 14" fill="none" stroke="#2D6A4F" stroke-width="3.5" stroke-linecap="round"/>
        <circle cx="100" cy="26" r="9.5" fill="#D62828" stroke="#2b231d" stroke-width="3.5"/>
      </svg>
    `
  },
  {
    title: "4. Golden Waffle",
    svg: `
      <svg viewBox="0 0 200 200">
        <rect x="36" y="36" width="128" height="128" rx="22" fill="#F3A738" stroke="#2b231d" stroke-width="4.5"/>
        <rect x="46" y="46" width="108" height="108" rx="14" fill="none" stroke="#D4841E" stroke-width="4"/>
        <rect x="58" y="58" width="24" height="24" rx="4" fill="#C97A16" stroke="#2b231d" stroke-width="2.5"/>
        <rect x="88" y="58" width="24" height="24" rx="4" fill="#C97A16" stroke="#2b231d" stroke-width="2.5"/>
        <rect x="118" y="58" width="24" height="24" rx="4" fill="#C97A16" stroke="#2b231d" stroke-width="2.5"/>
        <rect x="58" y="88" width="24" height="24" rx="4" fill="#C97A16" stroke="#2b231d" stroke-width="2.5"/>
        <rect x="88" y="88" width="24" height="24" rx="4" fill="#C97A16" stroke="#2b231d" stroke-width="2.5"/>
        <rect x="118" y="88" width="24" height="24" rx="4" fill="#C97A16" stroke="#2b231d" stroke-width="2.5"/>
        <rect x="58" y="118" width="24" height="24" rx="4" fill="#C97A16" stroke="#2b231d" stroke-width="2.5"/>
        <rect x="88" y="118" width="24" height="24" rx="4" fill="#C97A16" stroke="#2b231d" stroke-width="2.5"/>
        <rect x="118" y="118" width="24" height="24" rx="4" fill="#C97A16" stroke="#2b231d" stroke-width="2.5"/>
      </svg>
    `
  },
  {
    title: "5. Sushi Roll",
    svg: `
      <svg viewBox="0 0 200 200">
        <path d="M 44 92 V 116 A 56 38 0 0 0 156 116 V 92 Z" fill="#263238" stroke="#2b231d" stroke-width="4"/>
        <ellipse cx="100" cy="92" rx="56" ry="40" fill="#FFFFFF" stroke="#2b231d" stroke-width="4"/>
        <ellipse cx="100" cy="92" rx="34" ry="24" fill="#66BB6A" stroke="#2b231d" stroke-width="3.5"/>
        <ellipse cx="100" cy="92" rx="18" ry="13" fill="#FF7043" stroke="#2b231d" stroke-width="3"/>
      </svg>
    `
  },
  {
    title: "6. Twisted Pretzel",
    svg: `
      <svg viewBox="0 0 200 200">
        <ellipse cx="66" cy="102" rx="32" ry="24" transform="rotate(-20 66 102)" fill="none" stroke="#2b231d" stroke-width="23"/>
        <ellipse cx="66" cy="102" rx="32" ry="24" transform="rotate(-20 66 102)" fill="none" stroke="#A0522D" stroke-width="16"/>
        <ellipse cx="134" cy="102" rx="32" ry="24" transform="rotate(20 134 102)" fill="none" stroke="#2b231d" stroke-width="23"/>
        <ellipse cx="134" cy="102" rx="32" ry="24" transform="rotate(20 134 102)" fill="none" stroke="#A0522D" stroke-width="16"/>
        <path d="M 58 82 C 65 42, 135 42, 142 82 C 148 122, 114 138, 100 156 C 86 138, 52 122, 58 82" fill="none" stroke="#2b231d" stroke-width="23" stroke-linecap="round"/>
        <path d="M 58 82 C 65 42, 135 42, 142 82 C 148 122, 114 138, 100 156 C 86 138, 52 122, 58 82" fill="none" stroke="#A0522D" stroke-width="16" stroke-linecap="round"/>
        <rect x="69.5" y="63.5" width="5" height="5" rx="1" fill="#FFFDF7"/>
        <rect x="97.5" y="53.5" width="5" height="5" rx="1" fill="#FFFDF7"/>
        <rect x="125.5" y="63.5" width="5" height="5" rx="1" fill="#FFFDF7"/>
        <rect x="59.5" y="101.5" width="5" height="5" rx="1" fill="#FFFDF7"/>
        <rect x="135.5" y="101.5" width="5" height="5" rx="1" fill="#FFFDF7"/>
        <rect x="97.5" y="139.5" width="5" height="5" rx="1" fill="#FFFDF7"/>
      </svg>
    `
  },
  {
    title: "7. Watermelon Slice",
    svg: `
      <svg viewBox="0 0 200 200">
        <path d="M 100 42 L 210 108 A 128 128 0 0 1 -10 108 Z" fill="#2E7D32" stroke="#2b231d" stroke-width="4" stroke-linejoin="round"/>
        <path d="M 100 42 L 201 102 A 118 118 0 0 1 -1 102 Z" fill="#C8E6C9"/>
        <path d="M 100 42 L 194 98 A 110 110 0 0 1 6 98 Z" fill="#EF5350" stroke="#2b231d" stroke-width="3.5" stroke-linejoin="round"/>
        <ellipse cx="78" cy="86" rx="3.5" ry="5.5" fill="#212121"/>
        <ellipse cx="100" cy="82" rx="3.5" ry="5.5" fill="#212121"/>
        <ellipse cx="122" cy="86" rx="3.5" ry="5.5" fill="#212121"/>
        <ellipse cx="64" cy="110" rx="3.5" ry="5.5" fill="#212121"/>
        <ellipse cx="88" cy="112" rx="3.5" ry="5.5" fill="#212121"/>
        <ellipse cx="112" cy="112" rx="3.5" ry="5.5" fill="#212121"/>
        <ellipse cx="136" cy="110" rx="3.5" ry="5.5" fill="#212121"/>
        <ellipse cx="100" cy="128" rx="3.5" ry="5.5" fill="#212121"/>
      </svg>
    `
  },
  {
   title: "8. Boba Tea",
    svg: `
      <svg viewBox="0 0 200 200">
        <line x1="116" y1="26" x2="104" y2="82" stroke="#2b231d" stroke-width="15" stroke-linecap="round"/>
        <line x1="116" y1="26" x2="104" y2="82" stroke="#FF7043" stroke-width="9" stroke-linecap="round"/>
        <polygon points="56,66 144,66 132,168 68,168" fill="#F3D2B3" stroke="#2b231d" stroke-width="4" stroke-linejoin="round"/>
        <circle cx="78" cy="154" r="6.5" fill="#212121"/>
        <circle cx="94" cy="156" r="6.5" fill="#212121"/>
        <circle cx="110" cy="154" r="6.5" fill="#212121"/>
        <circle cx="124" cy="152" r="6.5" fill="#212121"/>
        <circle cx="86" cy="142" r="6.5" fill="#212121"/>
        <circle cx="104" cy="142" r="6.5" fill="#212121"/>
        <circle cx="118" cy="140" r="6.5" fill="#212121"/>
        <rect x="61" y="98" width="78" height="28" fill="#8D6E63" stroke="#2b231d" stroke-width="3.5"/>
        <rect x="48" y="54" width="104" height="16" rx="8" fill="#90A4AE" stroke="#2b231d" stroke-width="4"/>
      </svg>
    `
  }
];

document.addEventListener("DOMContentLoaded", () => {
  const gallery = document.getElementById("gallery");
  if (!gallery) return;

  artworks.forEach((item) => {
    const card = document.createElement("div");
    card.className = "art-card";

    const graphic = document.createElement("div");
    graphic.className = "art-graphic";
    graphic.innerHTML = item.svg;

    const label = document.createElement("div");
    label.className = "art-label";
    label.textContent = item.title;

    card.appendChild(graphic);
    card.appendChild(label);
    gallery.appendChild(card);
  });
});