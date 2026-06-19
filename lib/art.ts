/* Monochrome UI-mockup illustrations for each project.
   Uses currentColor + opacity so it adapts to light/dark automatically.
   viewBox 0 0 400 280, sliced to fill any container. */

function wrap(inner: string): string {
  return (
    '<svg viewBox="0 0 400 280" preserveAspectRatio="xMidYMid slice" ' +
    'xmlns="http://www.w3.org/2000/svg" fill="none">' +
    '<rect width="400" height="280" fill="currentColor" opacity="0.035"/>' +
    inner +
    "</svg>"
  );
}

function grid(step: number, op: number): string {
  let s = "";
  for (let x = step; x < 400; x += step)
    s += '<line x1="' + x + '" y1="0" x2="' + x + '" y2="280" stroke="currentColor" stroke-width="1" opacity="' + op + '"/>';
  for (let y = step; y < 280; y += step)
    s += '<line x1="0" y1="' + y + '" x2="400" y2="' + y + '" stroke="currentColor" stroke-width="1" opacity="' + op + '"/>';
  return s;
}

function tableRows(highlight: number): string {
  let s = "";
  for (let i = 0; i < 5; i++) {
    const y = 96 + i * 32;
    if (i === highlight) {
      s += '<rect x="40" y="' + (y - 10) + '" width="320" height="28" rx="6" fill="currentColor" opacity="0.08"/>';
      s += '<rect x="40" y="' + (y - 10) + '" width="4" height="28" rx="2" fill="currentColor" opacity="0.9"/>';
    }
    s += '<circle cx="58" cy="' + y + '" r="9" fill="currentColor" opacity="0.15"/>';
    s += '<rect x="78" y="' + (y - 4) + '" width="90" height="7" rx="3.5" fill="currentColor" opacity="' + (i === highlight ? 0.6 : 0.35) + '"/>';
    s += '<rect x="196" y="' + (y - 4) + '" width="60" height="7" rx="3.5" fill="currentColor" opacity="0.22"/>';
    const st = i === highlight ? 0.85 : 0.18;
    s += '<rect x="300" y="' + (y - 7) + '" width="44" height="14" rx="7" fill="currentColor" opacity="' + st + '"/>';
  }
  return s;
}

function pairs(): string {
  let s = "";
  const labels = [44, 50, 40, 54];
  for (let i = 0; i < 4; i++) {
    const y = 144 + i * 30;
    s += '<rect x="40" y="' + y + '" width="' + labels[i] + '" height="7" rx="3.5" fill="currentColor" opacity="0.28"/>';
    s += '<rect x="150" y="' + y + '" width="' + (120 + ((i * 17) % 90)) + '" height="7" rx="3.5" fill="currentColor" opacity="0.45"/>';
    s += '<line x1="40" y1="' + (y + 18) + '" x2="360" y2="' + (y + 18) + '" stroke="currentColor" stroke-width="1" opacity="0.1"/>';
  }
  return s;
}

function notifRows(accent: number): string {
  let s = "";
  for (let i = 0; i < 4; i++) {
    const y = 70 + i * 50;
    const on = i === accent;
    s += '<rect x="40" y="' + y + '" width="320" height="40" rx="10" fill="currentColor" opacity="' + (on ? 0.08 : 0.04) + '"/>';
    s += '<rect x="40" y="' + y + '" width="320" height="40" rx="10" stroke="currentColor" stroke-width="1" opacity="0.12"/>';
    s += '<circle cx="66" cy="' + (y + 20) + '" r="13" fill="currentColor" opacity="' + (on ? 0.85 : 0.14) + '"/>';
    if (on) {
      s += '<path d="M60 ' + (y + 20) + ' l4 4 l8 -9" stroke="currentColor" class="art-knock" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>';
    } else {
      s += '<path d="M66 ' + (y + 14) + ' a5 5 0 0 1 5 5 v3 l2 2 h-14 l2 -2 v-3 a5 5 0 0 1 5 -5 z" stroke="currentColor" stroke-width="1.5" opacity="0.5"/>';
    }
    s += '<rect x="92" y="' + (y + 11) + '" width="' + (130 + ((i * 23) % 90)) + '" height="7" rx="3.5" fill="currentColor" opacity="' + (on ? 0.55 : 0.35) + '"/>';
    s += '<rect x="92" y="' + (y + 24) + '" width="' + (70 + ((i * 31) % 60)) + '" height="6" rx="3" fill="currentColor" opacity="0.22"/>';
    s += '<rect x="324" y="' + (y + 12) + '" width="20" height="6" rx="3" fill="currentColor" opacity="0.18"/>';
  }
  return s;
}

function productTiles(): string {
  let s = "";
  for (let r = 0; r < 2; r++)
    for (let c = 0; c < 3; c++) {
      const x = 40 + c * 70, y = 70 + r * 84;
      s += '<rect x="' + x + '" y="' + y + '" width="58" height="72" rx="8" fill="currentColor" opacity="0.05"/>';
      s += '<rect x="' + x + '" y="' + y + '" width="58" height="72" rx="8" stroke="currentColor" stroke-width="1" opacity="0.14"/>';
      s += '<rect x="' + (x + 10) + '" y="' + (y + 10) + '" width="38" height="30" rx="5" fill="currentColor" opacity="0.1"/>';
      s += '<rect x="' + (x + 10) + '" y="' + (y + 48) + '" width="30" height="6" rx="3" fill="currentColor" opacity="0.35"/>';
      s += '<rect x="' + (x + 10) + '" y="' + (y + 58) + '" width="20" height="6" rx="3" fill="currentColor" opacity="0.6"/>';
    }
  return s;
}

function lineItems(): string {
  let s = "";
  for (let i = 0; i < 3; i++) {
    const y = 74 + i * 32;
    s += '<rect x="282" y="' + y + '" width="44" height="7" rx="3.5" fill="currentColor" opacity="0.35"/>';
    s += '<rect x="282" y="' + (y + 12) + '" width="24" height="6" rx="3" fill="currentColor" opacity="0.2"/>';
    s += '<rect x="332" y="' + y + '" width="16" height="7" rx="3.5" fill="currentColor" opacity="0.45"/>';
  }
  return s;
}

function invRows(): string {
  let s = "";
  const qty = [0.8, 0.45, 0.62, 0.3, 0.92];
  for (let i = 0; i < 5; i++) {
    const y = 96 + i * 30;
    s += '<rect x="40" y="' + (y - 4) + '" width="14" height="14" rx="3" fill="currentColor" opacity="0.12"/>';
    s += '<rect x="66" y="' + (y - 1) + '" width="86" height="7" rx="3.5" fill="currentColor" opacity="0.35"/>';
    s += '<rect x="186" y="' + (y - 1) + '" width="120" height="8" rx="4" fill="currentColor" opacity="0.1"/>';
    s += '<rect x="186" y="' + (y - 1) + '" width="' + (120 * qty[i]) + '" height="8" rx="4" fill="currentColor" opacity="' + (qty[i] < 0.35 ? 0.85 : 0.45) + '"/>';
    s += '<rect x="324" y="' + (y - 1) + '" width="20" height="7" rx="3.5" fill="currentColor" opacity="0.3"/>';
  }
  return s;
}

function bars(): string {
  let s = "";
  const h = [60, 90, 50, 120, 80, 140];
  for (let i = 0; i < 6; i++) {
    const x = 70 + i * 48, bh = h[i], y = 232 - bh;
    const on = i === 5;
    s += '<rect x="' + x + '" y="' + y + '" width="26" height="' + bh + '" rx="4" fill="currentColor" opacity="' + (on ? 0.85 : 0.2) + '"/>';
  }
  return s;
}

function codeLines(): string {
  let s = "";
  const rows = [[0, 180], [16, 120], [16, 90], [0, 150], [0, 110], [16, 70]];
  for (let i = 0; i < rows.length; i++) {
    const y = 92 + i * 24, indent = rows[i][0], w = rows[i][1];
    s += '<rect x="' + (54 + indent) + '" y="' + y + '" width="' + w + '" height="8" rx="4" fill="currentColor" opacity="' + (i % 3 === 0 ? 0.5 : 0.25) + '"/>';
  }
  return s;
}

function seatPlan(): string {
  let s = "";
  s += '<path d="M120 56 Q 200 40 280 56" stroke="currentColor" stroke-width="3" stroke-linecap="round" opacity="0.4"/>';
  s += '<rect x="176" y="64" width="48" height="6" rx="3" fill="currentColor" opacity="0.25"/>';
  const booked: Record<string, number> = { "1-2": 1, "1-3": 1, "2-5": 1, "3-1": 1, "3-2": 1, "0-6": 1 };
  for (let r = 0; r < 4; r++)
    for (let c = 0; c < 8; c++) {
      const gap = c >= 4 ? 16 : 0;
      const x = 64 + c * 32 + gap, y = 96 + r * 30;
      const on = booked[r + "-" + c];
      s += '<rect x="' + x + '" y="' + y + '" width="22" height="20" rx="5" ' +
        (on ? 'fill="currentColor" opacity="0.85"' : 'stroke="currentColor" stroke-width="1.5" opacity="0.3"') + "/>";
    }
  s += '<rect x="64" y="238" width="14" height="13" rx="4" fill="currentColor" opacity="0.85"/>';
  s += '<rect x="84" y="241" width="44" height="7" rx="3.5" fill="currentColor" opacity="0.3"/>';
  s += '<rect x="150" y="238" width="14" height="13" rx="4" stroke="currentColor" stroke-width="1.5" opacity="0.3"/>';
  s += '<rect x="170" y="241" width="54" height="7" rx="3.5" fill="currentColor" opacity="0.3"/>';
  return s;
}

export const ART: Record<string, string> = {
  map: wrap(
    grid(40, 0.06) +
    '<path d="M44 236 C 120 210 110 132 196 120 S 318 96 356 44" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-dasharray="2 9" opacity="0.55"/>' +
    '<circle cx="44" cy="236" r="7" fill="currentColor" opacity="0.3"/>' +
    '<circle cx="44" cy="236" r="3" fill="currentColor" opacity="0.9"/>' +
    '<path d="M356 26 c -11 0 -20 9 -20 20 c 0 15 20 32 20 32 s 20 -17 20 -32 c 0 -11 -9 -20 -20 -20 z" fill="currentColor" opacity="0.9"/>' +
    '<circle cx="356" cy="46" r="6.5" fill="currentColor" class="art-knock"/>' +
    '<rect x="40" y="196" width="150" height="56" rx="9" fill="currentColor" opacity="0.06"/>' +
    '<rect x="40" y="196" width="150" height="56" rx="9" stroke="currentColor" stroke-width="1" opacity="0.18"/>' +
    '<circle cx="64" cy="224" r="11" stroke="currentColor" stroke-width="2" opacity="0.4"/>' +
    '<path d="M59 224 l4 4 l7 -8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" opacity="0.8"/>' +
    '<rect x="84" y="214" width="86" height="7" rx="3.5" fill="currentColor" opacity="0.5"/>' +
    '<rect x="84" y="228" width="56" height="6" rx="3" fill="currentColor" opacity="0.25"/>'
  ),
  dashboard: wrap(
    '<rect x="0" y="0" width="62" height="280" fill="currentColor" opacity="0.05"/>' +
    '<rect x="16" y="22" width="30" height="9" rx="4.5" fill="currentColor" opacity="0.5"/>' +
    '<rect x="16" y="60" width="30" height="6" rx="3" fill="currentColor" opacity="0.3"/>' +
    '<rect x="16" y="80" width="30" height="6" rx="3" fill="currentColor" opacity="0.2"/>' +
    '<rect x="16" y="100" width="30" height="6" rx="3" fill="currentColor" opacity="0.2"/>' +
    '<rect x="80" y="22" width="120" height="10" rx="5" fill="currentColor" opacity="0.45"/>' +
    '<circle cx="372" cy="28" r="10" fill="currentColor" opacity="0.12"/>' +
    '<rect x="80" y="56" width="92" height="66" rx="9" fill="currentColor" opacity="0.05"/>' +
    '<rect x="80" y="56" width="92" height="66" rx="9" stroke="currentColor" stroke-width="1" opacity="0.15"/>' +
    '<rect x="94" y="72" width="40" height="7" rx="3.5" fill="currentColor" opacity="0.3"/>' +
    '<rect x="94" y="90" width="54" height="14" rx="4" fill="currentColor" opacity="0.7"/>' +
    '<rect x="190" y="56" width="92" height="66" rx="9" fill="currentColor" opacity="0.05"/>' +
    '<rect x="190" y="56" width="92" height="66" rx="9" stroke="currentColor" stroke-width="1" opacity="0.15"/>' +
    '<rect x="204" y="72" width="40" height="7" rx="3.5" fill="currentColor" opacity="0.3"/>' +
    '<rect x="204" y="90" width="46" height="14" rx="4" fill="currentColor" opacity="0.4"/>' +
    '<rect x="80" y="138" width="284" height="118" rx="9" fill="currentColor" opacity="0.04"/>' +
    '<rect x="80" y="138" width="284" height="118" rx="9" stroke="currentColor" stroke-width="1" opacity="0.13"/>' +
    '<polyline points="98,224 140,200 180,210 220,176 262,188 304,150 346,164" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" opacity="0.65"/>' +
    '<circle cx="220" cy="176" r="4" fill="currentColor" opacity="0.9"/>' +
    '<circle cx="346" cy="164" r="4" fill="currentColor" opacity="0.9"/>'
  ),
  phone: wrap(
    '<rect x="150" y="22" width="100" height="236" rx="18" fill="currentColor" opacity="0.04"/>' +
    '<rect x="150" y="22" width="100" height="236" rx="18" stroke="currentColor" stroke-width="1.5" opacity="0.35"/>' +
    '<rect x="184" y="33" width="32" height="6" rx="3" fill="currentColor" opacity="0.3"/>' +
    '<rect x="162" y="50" width="76" height="70" rx="8" fill="currentColor" opacity="0.06"/>' +
    '<path d="M170 110 C 188 96 192 76 214 70 S 232 60 232 58" stroke="currentColor" stroke-width="2" stroke-dasharray="2 6" stroke-linecap="round" opacity="0.5"/>' +
    '<circle cx="232" cy="58" r="4" fill="currentColor" opacity="0.9"/>' +
    '<circle cx="172" cy="146" r="6" fill="currentColor" opacity="0.9"/>' +
    '<line x1="178" y1="146" x2="200" y2="146" stroke="currentColor" stroke-width="2" opacity="0.5"/>' +
    '<circle cx="206" cy="146" r="6" fill="currentColor" opacity="0.9"/>' +
    '<line x1="212" y1="146" x2="234" y2="146" stroke="currentColor" stroke-width="2" stroke-dasharray="2 4" opacity="0.3"/>' +
    '<circle cx="228" cy="146" r="6" stroke="currentColor" stroke-width="2" opacity="0.35"/>' +
    '<rect x="162" y="172" width="76" height="7" rx="3.5" fill="currentColor" opacity="0.4"/>' +
    '<rect x="162" y="186" width="58" height="6" rx="3" fill="currentColor" opacity="0.22"/>' +
    '<rect x="162" y="214" width="76" height="26" rx="8" fill="currentColor" opacity="0.85"/>'
  ),
  records: wrap(
    '<rect x="40" y="26" width="150" height="11" rx="5.5" fill="currentColor" opacity="0.5"/>' +
    '<rect x="258" y="22" width="102" height="20" rx="10" stroke="currentColor" stroke-width="1" opacity="0.25"/>' +
    '<circle cx="272" cy="32" r="5" stroke="currentColor" stroke-width="1.5" opacity="0.4"/>' +
    '<rect x="78" y="62" width="50" height="7" rx="3.5" fill="currentColor" opacity="0.3"/>' +
    '<rect x="196" y="62" width="40" height="7" rx="3.5" fill="currentColor" opacity="0.3"/>' +
    '<rect x="300" y="62" width="44" height="7" rx="3.5" fill="currentColor" opacity="0.3"/>' +
    '<line x1="40" y1="78" x2="360" y2="78" stroke="currentColor" stroke-width="1" opacity="0.15"/>' +
    tableRows(2)
  ),
  profile: wrap(
    '<circle cx="80" cy="74" r="30" fill="currentColor" opacity="0.12"/>' +
    '<circle cx="80" cy="64" r="11" fill="currentColor" opacity="0.45"/>' +
    '<path d="M58 96 c 4 -14 40 -14 44 0" fill="currentColor" opacity="0.45"/>' +
    '<rect x="128" y="52" width="120" height="11" rx="5.5" fill="currentColor" opacity="0.55"/>' +
    '<rect x="128" y="74" width="80" height="7" rx="3.5" fill="currentColor" opacity="0.28"/>' +
    '<rect x="300" y="56" width="60" height="22" rx="11" fill="currentColor" opacity="0.85"/>' +
    pairs()
  ),
  sms: wrap(
    '<rect x="40" y="26" width="120" height="11" rx="5.5" fill="currentColor" opacity="0.5"/>' +
    notifRows(0)
  ),
  pos: wrap(
    '<rect x="40" y="26" width="100" height="10" rx="5" fill="currentColor" opacity="0.45"/>' +
    productTiles() +
    '<rect x="266" y="26" width="98" height="228" rx="10" fill="currentColor" opacity="0.05"/>' +
    '<rect x="266" y="26" width="98" height="228" rx="10" stroke="currentColor" stroke-width="1" opacity="0.14"/>' +
    '<rect x="282" y="44" width="50" height="8" rx="4" fill="currentColor" opacity="0.4"/>' +
    lineItems() +
    '<line x1="282" y1="186" x2="348" y2="186" stroke="currentColor" stroke-width="1" opacity="0.2"/>' +
    '<rect x="282" y="198" width="40" height="9" rx="4.5" fill="currentColor" opacity="0.4"/>' +
    '<rect x="318" y="198" width="30" height="9" rx="4.5" fill="currentColor" opacity="0.7"/>' +
    '<rect x="282" y="218" width="66" height="22" rx="8" fill="currentColor" opacity="0.85"/>'
  ),
  inventory: wrap(
    '<rect x="40" y="24" width="220" height="22" rx="11" stroke="currentColor" stroke-width="1" opacity="0.2"/>' +
    '<circle cx="56" cy="35" r="5" stroke="currentColor" stroke-width="1.5" opacity="0.4"/>' +
    '<rect x="300" y="24" width="60" height="22" rx="8" fill="currentColor" opacity="0.85"/>' +
    '<rect x="66" y="66" width="60" height="7" rx="3.5" fill="currentColor" opacity="0.28"/>' +
    '<rect x="186" y="66" width="50" height="7" rx="3.5" fill="currentColor" opacity="0.28"/>' +
    '<line x1="40" y1="82" x2="360" y2="82" stroke="currentColor" stroke-width="1" opacity="0.15"/>' +
    invRows()
  ),
  chart: wrap(
    '<rect x="40" y="26" width="120" height="10" rx="5" fill="currentColor" opacity="0.45"/>' +
    '<circle cx="300" cy="32" r="5" fill="currentColor" opacity="0.7"/>' +
    '<rect x="312" y="29" width="30" height="6" rx="3" fill="currentColor" opacity="0.3"/>' +
    '<line x1="56" y1="64" x2="56" y2="232" stroke="currentColor" stroke-width="1.5" opacity="0.25"/>' +
    '<line x1="56" y1="232" x2="372" y2="232" stroke="currentColor" stroke-width="1.5" opacity="0.25"/>' +
    bars() +
    '<polyline points="83,150 131,120 179,160 227,96 275,128 323,80" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" opacity="0.55"/>' +
    '<circle cx="227" cy="96" r="4" fill="currentColor" opacity="0.9"/>'
  ),
  terminal: wrap(
    '<rect x="36" y="34" width="328" height="212" rx="10" fill="currentColor" opacity="0.05"/>' +
    '<rect x="36" y="34" width="328" height="212" rx="10" stroke="currentColor" stroke-width="1" opacity="0.16"/>' +
    '<line x1="36" y1="60" x2="364" y2="60" stroke="currentColor" stroke-width="1" opacity="0.16"/>' +
    '<circle cx="52" cy="47" r="4" fill="currentColor" opacity="0.3"/>' +
    '<circle cx="68" cy="47" r="4" fill="currentColor" opacity="0.3"/>' +
    '<circle cx="84" cy="47" r="4" fill="currentColor" opacity="0.3"/>' +
    '<path d="M50 90 l10 8 l-10 8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" opacity="0.7"/>' +
    codeLines() +
    '<rect x="54" y="236" width="12" height="3" fill="currentColor" opacity="0.4"/>' +
    '<rect x="70" y="228" width="9" height="14" fill="currentColor" opacity="0.85"/>'
  ),
  seats: wrap(seatPlan()),
};

export function getArt(kind: string): string {
  return ART[kind] || wrap(grid(40, 0.06));
}
