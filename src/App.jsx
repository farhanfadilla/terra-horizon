import React, { useState, useEffect, useRef } from 'react';
import { Leaf, ArrowRight, Recycle, Newspaper, ExternalLink, Menu, X, ChevronRight, Globe, BarChart3, Cpu, Shield, Zap, Activity, ArrowLeft, Heart, Target, Users, Sparkles, TrendingUp, Building2, ShirtIcon, UtensilsCrossed } from 'lucide-react';

// --- Font Styles ---
const FontStyles = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&family=Playfair+Display:wght@400;600;700;800&family=JetBrains+Mono:wght@400;500;600;700&display=swap');
    
    .font-heading { font-family: 'Playfair Display', serif; }
    .font-body { font-family: 'Montserrat', sans-serif; }
    .font-mono { font-family: 'JetBrains Mono', monospace; }
  `}</style>
);

// --- Article Data (Bahasa Indonesia) ---
const articlesData = [
  {
    id: 'article-1',
    category: "Lingkungan",
    title: "Dapurmu Menelan Rp 8.700 Triliun Setiap Tahun",
    excerpt: "Setiap tahun, 1,3 miliar ton makanan terbuang sia-sia. Dampaknya bukan hanya membuang uang, tapi juga merusak planet.",
    date: "19 Mar 2026",
    color: "from-[#84A98C] to-[#52796F]",
    icon: <UtensilsCrossed size={40} className="text-white" />,
    readTime: "8 menit baca",
    body: [
      {
        type: 'paragraph',
        text: 'Bayangkan ini: sepertiga dari seluruh makanan yang diproduksi di dunia tidak pernah dimakan. Menurut data terbaru dari UNEP (United Nations Environment Programme), sekitar 1,3 miliar ton makanan terbuang setiap tahun — senilai lebih dari USD 526 miliar atau setara Rp 8.700 triliun. Angka ini bukan sekadar statistik; ini adalah krisis global yang dimulai dari dapur rumah kita sendiri.'
      },
      {
        type: 'heading',
        text: 'Mengapa Ini Penting?'
      },
      {
        type: 'paragraph',
        text: 'Limbah makanan menyumbang 8-10% dari total emisi gas rumah kaca global. Ketika makanan membusuk di tempat pembuangan sampah, ia menghasilkan metana — gas rumah kaca yang 80 kali lebih kuat dari karbon dioksida dalam jangka 20 tahun pertama. Menurut FAO (Food and Agriculture Organization), jika limbah makanan adalah sebuah negara, ia akan menjadi penghasil emisi terbesar ketiga di dunia setelah China dan Amerika Serikat.'
      },
      {
        type: 'stat',
        value: '8-10%',
        label: 'emisi gas rumah kaca global berasal dari limbah makanan'
      },
      {
        type: 'heading',
        text: 'Dari Mana Sumber Pemborosan?'
      },
      {
        type: 'paragraph',
        text: 'Data dari EPA (Environmental Protection Agency) menunjukkan bahwa rumah tangga adalah penyumbang terbesar limbah makanan — sekitar 40-50% di tingkat konsumen. Penyebabnya beragam: membeli terlalu banyak, lupa memeriksa tanggal kedaluwarsa, salah menyimpan bahan makanan, hingga memasak porsi yang berlebihan. Di Indonesia sendiri, Bappenas mencatat bahwa rata-rata penduduk Indonesia membuang 300 kg makanan per kapita per tahun.'
      },
      {
        type: 'heading',
        text: '5 Langkah Nyata dari Dapurmu'
      },
      {
        type: 'list',
        items: [
          'Meal Planning — Rencanakan menu mingguan sebelum belanja. Riset menunjukkan ini bisa mengurangi food waste hingga 25%.',
          'FIFO (First In, First Out) — Letakkan bahan makanan yang lebih lama di depan kulkas. Teknik sederhana ini mencegah makanan terlupakan.',
          'Cintai "Ugly Produce" — Buah dan sayur yang bentuknya tidak sempurna memiliki nutrisi yang sama. 40% produksi pertanian ditolak karena alasan estetika.',
          'Komposting — Ubah sisa makanan menjadi pupuk. Satu keluarga bisa mengalihkan 200 kg limbah dari tempat pembuangan per tahun.',
          'Kontrol Porsi — Gunakan piring yang lebih kecil. Studi dari Cornell University menunjukkan piring 2 inci lebih kecil mengurangi konsumsi hingga 22%.'
        ]
      },
      {
        type: 'heading',
        text: 'Target Global: SDG 12.3'
      },
      {
        type: 'paragraph',
        text: 'PBB melalui Sustainable Development Goal 12.3 menargetkan pengurangan 50% limbah makanan per kapita di tingkat ritel dan konsumen pada tahun 2030. Kita hanya punya waktu 4 tahun lagi. Setiap langkah kecil yang kamu ambil di dapur — dari menghabiskan makanan hingga mengomposkan sisa — adalah kontribusi nyata terhadap target global ini.'
      },
      {
        type: 'quote',
        text: '"Mengurangi food waste adalah salah satu cara paling efektif yang bisa dilakukan individu untuk melawan perubahan iklim." — Project Drawdown'
      },
      {
        type: 'sources',
        items: ['UNEP Food Waste Index Report 2024', 'FAO – The State of Food and Agriculture', 'EPA – Food: Material-Specific Data', 'Bappenas – Kajian Food Loss and Waste Indonesia', 'Project Drawdown – Reduced Food Waste Solution']
      }
    ]
  },
  {
    id: 'article-2',
    category: "Gaya Hidup",
    title: "Kaos yang Kamu Pakai Hari Ini Butuh 2.700 Liter Air",
    excerpt: "Industri fast fashion menyumbang 10% emisi karbon global. Setiap pilihan pakaianmu punya jejak lingkungan yang besar.",
    date: "19 Mar 2026",
    color: "from-[#52796F] to-[#354F52]",
    icon: <ShirtIcon size={40} className="text-white" />,
    readTime: "7 menit baca",
    body: [
      {
        type: 'paragraph',
        text: 'Kamu mungkin tidak menyadarinya, tapi kaos katun yang kamu kenakan hari ini membutuhkan sekitar 2.700 liter air untuk diproduksi — setara dengan air minum satu orang selama 2,5 tahun. Ini hanya untuk satu potong kaos. Menurut data dari University of Manchester dan World Resources Institute, industri fashion bertanggung jawab atas 10% dari total emisi karbon global — lebih besar dari gabungan penerbangan internasional dan pelayaran.'
      },
      {
        type: 'heading',
        text: 'Skala Masalahnya'
      },
      {
        type: 'paragraph',
        text: 'Earth.org melaporkan bahwa setiap tahun, 92 juta ton tekstil berakhir di tempat pembuangan sampah. Ini setara dengan satu truk sampah penuh pakaian dibuang setiap detik. Di Indonesia, dengan populasi lebih dari 270 juta jiwa dan budaya fast fashion yang semakin menguat, kontribusi kita terhadap masalah ini tidak bisa diabaikan.'
      },
      {
        type: 'stat',
        value: '92 juta ton',
        label: 'limbah tekstil dibuang ke TPA setiap tahun secara global'
      },
      {
        type: 'heading',
        text: 'Mikroplastik: Ancaman Tersembunyi'
      },
      {
        type: 'paragraph',
        text: 'Sebuah studi yang dipublikasikan oleh ResearchGate menemukan bahwa 35% mikroplastik di lautan berasal dari pencucian pakaian sintetis seperti poliester dan nilon. Setiap kali kamu mencuci jaket fleece, hingga 700.000 serat mikro lepas ke saluran air dan akhirnya ke laut. Mikroplastik ini dimakan oleh ikan dan akhirnya masuk ke rantai makanan kita.'
      },
      {
        type: 'heading',
        text: 'Apa yang Bisa Kamu Lakukan?'
      },
      {
        type: 'list',
        items: [
          'Cuci Lebih Bijak — Cuci pakaian dengan air dingin dan kantong pencuci khusus untuk menangkap mikroplastik. Kurangi frekuensi mencuci jika pakaian belum benar-benar kotor.',
          'Secondhand First — Pasar thrift store dan platform resale seperti di Indonesia tumbuh 25% per tahun. Membeli bekas mengurangi jejak karbon pakaian hingga 82%.',
          'Perpanjang Umur Pakaian — Belajar menjahit sederhana dan merawat pakaian. Memperpanjang umur pakaian 9 bulan saja bisa mengurangi jejak karbonnya 20-30%.',
          'Pilih Kualitas, Bukan Kuantitas — Prinsip capsule wardrobe: miliki lebih sedikit pakaian, tapi yang berkualitas bagus dan timeless. Biaya per pemakaian jauh lebih hemat.',
          'Dukung Brand Berkelanjutan — Cari label yang transparan tentang supply chain mereka. Di Indonesia, semakin banyak brand lokal yang mengadopsi praktik sustainable fashion.'
        ]
      },
      {
        type: 'heading',
        text: 'Gerakan Slow Fashion'
      },
      {
        type: 'paragraph',
        text: 'Slow fashion bukan tentang berhenti membeli pakaian sama sekali — ini tentang membuat keputusan yang lebih sadar. Tanyakan pada dirimu sebelum membeli: "Apakah aku akan memakai ini setidaknya 30 kali?" Jika jawabannya tidak, mungkin kamu tidak benar-benar membutuhkannya. Perubahan besar dimulai dari keputusan kecil di lemari pakaianmu.'
      },
      {
        type: 'quote',
        text: '"Mode tercepat untuk menyelamatkan planet? Pakai apa yang sudah kamu punya." — Orsola de Castro, Fashion Revolution'
      },
      {
        type: 'sources',
        items: ['UNEP – Sustainability and Circularity in the Textile Value Chain', 'Earth.org – Fast Fashion and Its Environmental Impact (2025)', 'University of Manchester – The Environmental Costs of Fast Fashion', 'ResearchGate – Microplastics from Textile Washing', 'World Resources Institute – The Apparel Industry\'s Environmental Impact']
      }
    ]
  },
  {
    id: 'article-3',
    category: "Korporasi",
    title: "ESG Bukan Lagi Pilihan: Era Baru Pelaporan Keberlanjutan di Indonesia",
    excerpt: "Regulasi OJK dan standar ISSB akan mengubah cara perusahaan Indonesia melaporkan dampak lingkungan mereka mulai 2027.",
    date: "19 Mar 2026",
    color: "from-[#354F52] to-[#2F3E46]",
    icon: <Building2 size={40} className="text-white" />,
    readTime: "9 menit baca",
    body: [
      {
        type: 'paragraph',
        text: 'Era di mana laporan keberlanjutan perusahaan hanya menjadi dokumen formalitas yang berdebu di rak kantor akan segera berakhir. Otoritas Jasa Keuangan (OJK) telah mengambil langkah tegas: mulai 1 Januari 2027, perusahaan terbuka (emiten) papan utama dan bank-bank besar di Indonesia wajib menerbitkan laporan keberlanjutan yang selaras dengan standar International Sustainability Standards Board (ISSB) — standar global yang setara dengan IFRS untuk keuangan.'
      },
      {
        type: 'heading',
        text: 'Apa Itu SPK dan Mengapa Penting?'
      },
      {
        type: 'paragraph',
        text: 'Standar Pelaporan Keberlanjutan (SPK) Indonesia — tepatnya PSPK 1 dan PSPK 2 — diterbitkan resmi pada Juli 2025. Ini adalah adaptasi nasional dari IFRS S1 (persyaratan umum pengungkapan informasi terkait keberlanjutan) dan IFRS S2 (pengungkapan terkait iklim). Artinya, data ESG perusahaan Indonesia harus memenuhi standar investor internasional dan setara dengan benchmark global.'
      },
      {
        type: 'stat',
        value: '2027',
        label: 'tahun berlakunya kewajiban pelaporan keberlanjutan standar ISSB di Indonesia'
      },
      {
        type: 'heading',
        text: 'Implementasi Bertahap'
      },
      {
        type: 'paragraph',
        text: 'OJK menerapkan pendekatan bertahap untuk memberi waktu perusahaan membangun kapabilitas. Kelompok 1 (Januari 2027) mencakup emiten papan utama dan bank besar. Kelompok 2 (Januari 2028) mencakup emiten kategori menengah dan bank yang lebih kecil. Kelompok 3 (Januari 2029) mencakup manajer investasi dan perusahaan di papan pengawasan khusus. Selain itu, OJK juga akan mewajibkan assurance independen — verifikasi pihak ketiga — untuk memerangi greenwashing.'
      },
      {
        type: 'heading',
        text: 'Dampak bagi Dunia Usaha'
      },
      {
        type: 'list',
        items: [
          'Transparansi Menyeluruh — Perusahaan wajib mengungkapkan risiko dan peluang terkait iklim yang memengaruhi kinerja keuangan, termasuk metrik emisi karbon dan rencana transisi ke net-zero.',
          'Biaya Kepatuhan vs Akses Modal — Meskipun beban kepatuhan meningkat, perusahaan dengan performa ESG yang kuat akan lebih menarik bagi investor global dan mendapat biaya modal yang lebih rendah.',
          'Taksonomi Keuangan Berkelanjutan (TKBI) — Versi 2 diluncurkan Februari 2025, Versi 3 akan hadir 2026. Ini mengharmonisasi klasifikasi aktivitas bisnis "hijau" dengan kerangka IFRS.',
          'Green Finance — Peluang obligasi hijau (green bonds) dan produk keuangan berkelanjutan semakin terbuka bagi perusahaan yang early adopter standar tinggi.',
          'Sektor Prioritas — Energi, pertambangan, manufaktur, agrikultur, dan kehutanan (AFOLU) akan paling terdampak oleh regulasi baru ini.'
        ]
      },
      {
        type: 'heading',
        text: 'Dari Kepatuhan ke Strategi'
      },
      {
        type: 'paragraph',
        text: 'Survei RSM Global menunjukkan bahwa perusahaan-perusahaan yang melihat ESG sebagai pendorong strategis — bukan sekadar checklist kepatuhan — mengalami pertumbuhan nilai yang lebih konsisten. ESG yang dilakukan dengan benar membangun kepercayaan investor, menarik talenta terbaik, dan menciptakan ketahanan bisnis jangka panjang. Di Indonesia, transisi ini bukan hanya soal memenuhi peraturan OJK, tapi tentang memposisikan diri di panggung ekonomi global yang semakin menuntut transparansi.'
      },
      {
        type: 'quote',
        text: '"ESG bukan biaya — ESG adalah investasi dalam ketahanan bisnis dan kepercayaan publik." — OJK Sustainability Finance Roadmap'
      },
      {
        type: 'sources',
        items: ['OJK – POJK 51/2017 tentang Pelaporan Keberlanjutan', 'EY – Indonesia ISSB Readiness Assessment 2025', 'Nusantara-X – PSPK Implementation Timeline', 'Chambers & Partners – Indonesia ESG Regulatory Landscape', 'KPMG – ESG Regulatory Developments in Southeast Asia']
      }
    ]
  }
];

// --- Animated Counter Component ---
const AnimatedCounter = ({ target, suffix = '', prefix = '' }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const duration = 2000;
          const steps = 60;
          const increment = target / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <span ref={ref} className="font-mono font-bold">
      {prefix}{count.toLocaleString('id-ID')}{suffix}
    </span>
  );
};

// --- Navigation Bar ---
const Navbar = ({ activeTab, setActiveTab, mobileMenuOpen, setMobileMenuOpen }) => (
  <nav className="fixed top-0 left-0 right-0 bg-[#F5F7F5]/70 backdrop-blur-xl z-50 border-b border-[#84A98C]/10 font-body">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center h-20">
        {/* Logo */}
        <div className="flex items-center space-x-3 cursor-pointer group" onClick={() => setActiveTab('home')}>
          <div className="bg-gradient-to-br from-[#84A98C] to-[#52796F] p-2.5 rounded-xl text-white transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-[#84A98C]/30">
            <Leaf size={22} fill="currentColor" />
          </div>
          <div className="flex flex-col">
            <span className="font-heading text-2xl font-bold text-[#2F3E46] tracking-tight leading-none">
              TERRA HORIZON
            </span>
            <span className="text-[10px] text-[#52796F] font-bold uppercase tracking-[0.2em] mt-1">
              Sustainable Lifestyle
            </span>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {[
            { key: 'home', label: 'HOME' },
            { key: 'news', label: 'BERITA' },
            { key: 'mission', label: 'MISI KAMI' }
          ].map(tab => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`text-sm font-semibold tracking-wide transition-all duration-300 relative ${
                activeTab === tab.key
                  ? 'text-[#2F3E46]'
                  : 'text-[#52796F] hover:text-[#2F3E46]'
              }`}
            >
              {tab.label}
              {activeTab === tab.key && (
                <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-[#84A98C] to-[#52796F] rounded-full" />
              )}
            </button>
          ))}
          <a
            href="#"
            onClick={(e) => e.preventDefault()}
            className="bg-gradient-to-r from-[#354F52] to-[#2F3E46] hover:from-[#2F3E46] hover:to-[#354F52] text-white px-5 py-2.5 rounded-xl text-sm font-semibold tracking-wide transition-all duration-300 flex items-center shadow-lg hover:shadow-xl hover:shadow-[#354F52]/20 transform hover:-translate-y-0.5"
          >
            SUSTAINABILITY REPORT <ExternalLink size={14} className="ml-2" />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-[#354F52] p-2 rounded-lg hover:bg-[#CAD2C5]/30 transition-colors">
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>
    </div>

    {/* Mobile Menu */}
    {mobileMenuOpen && (
      <div className="md:hidden bg-[#F5F7F5]/95 backdrop-blur-xl border-t border-[#84A98C]/10 shadow-xl">
        <div className="px-4 pt-2 pb-6 space-y-1">
          {[
            { key: 'home', label: 'Home' },
            { key: 'news', label: 'Berita Keberlanjutan' },
            { key: 'mission', label: 'Misi Kami' }
          ].map(tab => (
            <button
              key={tab.key}
              onClick={() => { setActiveTab(tab.key); setMobileMenuOpen(false); }}
              className={`block w-full text-left px-4 py-3 rounded-xl text-sm font-bold uppercase tracking-wider transition-all ${
                activeTab === tab.key
                  ? 'text-[#2F3E46] bg-[#CAD2C5]/30'
                  : 'text-[#52796F] hover:bg-[#CAD2C5]/20'
              }`}
            >
              {tab.label}
            </button>
          ))}
          <a
            href="#"
            onClick={(e) => e.preventDefault()}
            className="block w-full text-left px-4 py-3 rounded-xl text-sm font-bold uppercase tracking-wider text-[#84A98C] hover:bg-[#CAD2C5]/20 flex items-center"
          >
            Sustainability Report <ExternalLink size={16} className="ml-2" />
          </a>
        </div>
      </div>
    )}
  </nav>
);

// --- Hero Section ---
const Hero = ({ setActiveTab }) => (
  <div className="relative bg-[#F5F7F5] pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden font-body">
    {/* Dot Grid Background */}
    <div className="absolute inset-0 opacity-[0.03]" style={{
      backgroundImage: 'radial-gradient(circle, #2F3E46 1px, transparent 1px)',
      backgroundSize: '32px 32px'
    }} />

    {/* Floating Orbs */}
    <div className="absolute top-20 right-[15%] w-72 h-72 rounded-full bg-gradient-to-br from-[#84A98C]/15 to-transparent blur-3xl animate-float" />
    <div className="absolute bottom-10 left-[10%] w-96 h-96 rounded-full bg-gradient-to-tr from-[#52796F]/10 to-transparent blur-3xl animate-float-delayed" />
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-[#84A98C]/5 to-transparent blur-3xl" />

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="text-center max-w-4xl mx-auto">
        <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#CAD2C5]/30 backdrop-blur-sm text-[#354F52] text-xs font-bold tracking-widest uppercase mb-8 border border-[#84A98C]/20">
          <span className="w-2 h-2 rounded-full bg-[#84A98C] mr-3 animate-pulse" />
          Building a Greener Future
        </div>
        <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold text-[#2F3E46] mb-8 leading-[1.1] animate-fade-up">
          Sustain the Planet,<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#84A98C] to-[#52796F] italic">Secure the Future.</span>
        </h1>
        <p className="mt-4 text-lg md:text-xl text-[#52796F] mb-12 leading-relaxed max-w-2xl mx-auto font-medium animate-fade-up-delay">
          Terra Horizon menjembatani kebiasaan sehari-hari dengan dampak global melalui transparansi, edukasi, dan teknologi keberlanjutan.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-5 animate-fade-up-delay-2">
          <a
            href="#"
            onClick={(e) => e.preventDefault()}
            className="bg-gradient-to-r from-[#354F52] to-[#2F3E46] text-white px-8 py-4 rounded-xl text-sm font-bold uppercase tracking-wide hover:from-[#2F3E46] hover:to-[#354F52] transition-all shadow-lg hover:shadow-xl hover:shadow-[#354F52]/20 flex items-center justify-center transform hover:-translate-y-1"
          >
            Launch Sustainability Report <ArrowRight size={18} className="ml-2" />
          </a>
          <button
            onClick={() => setActiveTab('news')}
            className="bg-transparent text-[#354F52] border-2 border-[#354F52]/20 px-8 py-4 rounded-xl text-sm font-bold uppercase tracking-wide hover:bg-[#354F52] hover:text-white hover:border-transparent transition-all flex items-center justify-center backdrop-blur-sm"
          >
            Baca Berita Terbaru
          </button>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
        {[
          { value: 1.3, suffix: 'M', label: 'Ton makanan terbuang/tahun', prefix: '' },
          { value: 92, suffix: 'jt', label: 'Ton limbah tekstil/tahun', prefix: '' },
          { value: 526, suffix: 'B', label: 'USD biaya food waste global', prefix: '$' }
        ].map((stat, idx) => (
          <div key={idx} className="text-center p-6 rounded-2xl bg-white/50 backdrop-blur-sm border border-[#84A98C]/10 hover:border-[#84A98C]/30 transition-all hover:shadow-lg hover:shadow-[#84A98C]/5 group">
            <div className="text-3xl md:text-4xl text-[#2F3E46] mb-2 group-hover:text-[#84A98C] transition-colors">
              <AnimatedCounter target={stat.value} suffix={stat.suffix} prefix={stat.prefix} />
            </div>
            <p className="text-xs text-[#52796F] font-medium uppercase tracking-wide">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

// --- Features Section ---
const Features = () => (
  <div className="py-24 bg-white font-body relative overflow-hidden">
    {/* Subtle grid background */}
    <div className="absolute inset-0 opacity-[0.02]" style={{
      backgroundImage: 'linear-gradient(#2F3E46 1px, transparent 1px), linear-gradient(90deg, #2F3E46 1px, transparent 1px)',
      backgroundSize: '64px 64px'
    }} />

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="text-center mb-16">
        <div className="inline-flex items-center px-3 py-1 rounded-full bg-[#84A98C]/10 text-[#52796F] text-xs font-bold tracking-widest uppercase mb-6">
          <Cpu size={12} className="mr-2" /> Platform
        </div>
        <h2 className="font-heading text-4xl md:text-5xl font-bold text-[#2F3E46] mb-6">Mengapa Terra Horizon?</h2>
        <p className="text-[#52796F] max-w-2xl mx-auto text-lg">Kami menyediakan tools dan pengetahuan untuk mentransformasi kebiasaan pengelolaan limbahmu.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {[
          {
            icon: <Recycle size={28} className="text-[#84A98C]" />,
            title: "Smart Tracking",
            desc: "Monitor output limbah harianmu dan dapatkan insight untuk menguranginya secara efektif.",
            badge: "AI-Powered"
          },
          {
            icon: <Globe size={28} className="text-[#84A98C]" />,
            title: "Global Impact",
            desc: "Bergabung dengan komunitas eco-warriors. Lihat bagaimana perubahan kecilmu berkontribusi pada planet.",
            badge: "Community"
          },
          {
            icon: <BarChart3 size={28} className="text-[#84A98C]" />,
            title: "Data-Driven Insights",
            desc: "Visualisasikan progress-mu dengan dashboard analytics canggih yang tersedia di aplikasi kami.",
            badge: "Analytics"
          }
        ].map((feature, idx) => (
          <div key={idx} className="group relative p-8 rounded-2xl bg-[#F5F7F5] hover:bg-white transition-all duration-500 border border-transparent hover:border-[#84A98C]/20 hover:shadow-xl hover:shadow-[#84A98C]/5 cursor-default">
            {/* Gradient border glow on hover */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#84A98C]/0 to-[#52796F]/0 group-hover:from-[#84A98C]/5 group-hover:to-[#52796F]/5 transition-all duration-500" />
            
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-6">
                <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center shadow-sm group-hover:shadow-md group-hover:shadow-[#84A98C]/10 transition-all duration-300 group-hover:scale-105">
                  {feature.icon}
                </div>
                <span className="text-[10px] font-mono font-bold text-[#84A98C] bg-[#84A98C]/10 px-2 py-1 rounded-md uppercase tracking-wider">
                  {feature.badge}
                </span>
              </div>
              <h3 className="font-heading text-xl font-bold text-[#2F3E46] mb-3">{feature.title}</h3>
              <p className="text-[#52796F] leading-relaxed text-sm font-medium">{feature.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

// --- News Section ---
const NewsSection = ({ setActiveTab }) => (
  <div className="py-24 bg-[#F5F7F5] min-h-screen font-body">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16 pt-10">
        <div className="inline-flex items-center px-3 py-1 rounded-full bg-[#84A98C]/10 text-[#52796F] text-xs font-bold tracking-widest uppercase mb-6">
          <Newspaper size={12} className="mr-2" /> Berita Terbaru
        </div>
        <h2 className="font-heading text-4xl md:text-5xl font-bold text-[#2F3E46] mb-6">Berita Keberlanjutan</h2>
        <p className="text-[#52796F] text-lg">Tetap update dengan perkembangan terbaru di dunia keberlanjutan.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {articlesData.map((item) => (
          <div
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 group border border-transparent hover:border-[#84A98C]/20 cursor-pointer transform hover:-translate-y-1"
          >
            <div className={`h-52 bg-gradient-to-br ${item.color} relative overflow-hidden`}>
              <div className="absolute inset-0 opacity-10" style={{
                backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
                backgroundSize: '20px 20px'
              }} />
              <div className="absolute inset-0 flex items-center justify-center opacity-30 transform group-hover:scale-110 transition-transform duration-700">
                {item.icon}
              </div>
              <div className="absolute bottom-4 left-4">
                <span className="text-xs font-mono font-bold text-white/80 bg-white/10 backdrop-blur-sm px-3 py-1 rounded-lg">
                  {item.readTime}
                </span>
              </div>
            </div>
            <div className="p-7">
              <div className="flex justify-between items-center mb-4">
                <span className="text-xs font-bold text-[#84A98C] uppercase tracking-widest bg-[#84A98C]/10 px-3 py-1 rounded-full">{item.category}</span>
                <span className="text-xs text-gray-400 font-mono">{item.date}</span>
              </div>
              <h3 className="font-heading text-xl font-bold text-[#2F3E46] mb-3 group-hover:text-[#84A98C] transition-colors leading-tight">
                {item.title}
              </h3>
              <p className="text-[#52796F] text-sm mb-5 line-clamp-3 leading-relaxed">
                {item.excerpt}
              </p>
              <span className="text-[#354F52] font-bold text-sm uppercase tracking-wide flex items-center hover:text-[#84A98C] transition-colors group/btn">
                Baca Selengkapnya <ChevronRight size={16} className="ml-1 transform group-hover:translate-x-1 transition-transform" />
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

// --- Article View ---
const ArticleView = ({ article, setActiveTab }) => (
  <div className="py-24 bg-[#F5F7F5] min-h-screen font-body">
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
      {/* Back Button */}
      <button
        onClick={() => setActiveTab('news')}
        className="flex items-center text-[#52796F] hover:text-[#2F3E46] transition-colors mb-8 text-sm font-semibold group"
      >
        <ArrowLeft size={18} className="mr-2 transform group-hover:-translate-x-1 transition-transform" />
        Kembali ke Berita
      </button>

      {/* Header */}
      <div className={`rounded-2xl bg-gradient-to-br ${article.color} p-8 md:p-12 mb-10 relative overflow-hidden`}>
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
          backgroundSize: '24px 24px'
        }} />
        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-bold text-white/80 uppercase tracking-widest bg-white/15 backdrop-blur-sm px-3 py-1 rounded-full">{article.category}</span>
            <span className="text-xs font-mono text-white/60">{article.date}</span>
            <span className="text-xs font-mono text-white/60">· {article.readTime}</span>
          </div>
          <h1 className="font-heading text-3xl md:text-4xl font-bold text-white leading-tight">{article.title}</h1>
        </div>
      </div>

      {/* Body */}
      <div className="space-y-6">
        {article.body.map((block, idx) => {
          switch (block.type) {
            case 'paragraph':
              return <p key={idx} className="text-[#354F52] leading-[1.8] text-base">{block.text}</p>;
            case 'heading':
              return <h2 key={idx} className="font-heading text-2xl font-bold text-[#2F3E46] pt-4">{block.text}</h2>;
            case 'stat':
              return (
                <div key={idx} className="my-8 p-8 rounded-2xl bg-white border border-[#84A98C]/20 text-center hover:shadow-lg hover:shadow-[#84A98C]/5 transition-all">
                  <div className="font-mono text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#84A98C] to-[#52796F] mb-2">{block.value}</div>
                  <p className="text-[#52796F] text-sm font-medium uppercase tracking-wide">{block.label}</p>
                </div>
              );
            case 'list':
              return (
                <ul key={idx} className="space-y-4 my-4">
                  {block.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 p-4 rounded-xl bg-white border border-[#84A98C]/10 hover:border-[#84A98C]/20 transition-all">
                      <div className="w-6 h-6 bg-gradient-to-br from-[#84A98C] to-[#52796F] rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-white text-xs font-mono font-bold">{i + 1}</span>
                      </div>
                      <span className="text-[#354F52] text-sm leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              );
            case 'quote':
              return (
                <blockquote key={idx} className="my-8 border-l-4 border-[#84A98C] pl-6 py-4 bg-[#84A98C]/5 rounded-r-xl">
                  <p className="text-[#354F52] italic font-medium leading-relaxed">{block.text}</p>
                </blockquote>
              );
            case 'sources':
              return (
                <div key={idx} className="mt-10 p-6 rounded-2xl bg-white border border-[#CAD2C5] text-sm">
                  <h4 className="font-bold text-[#2F3E46] mb-3 flex items-center gap-2 uppercase tracking-wide text-xs">
                    <Shield size={14} className="text-[#84A98C]" /> Sumber Referensi
                  </h4>
                  <ul className="space-y-1 text-[#52796F]">
                    {block.items.map((src, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="font-mono text-[#84A98C] text-xs mt-0.5">[{i + 1}]</span>
                        <span className="text-xs">{src}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            default:
              return null;
          }
        })}
      </div>
    </div>
  </div>
);

// --- Mission Section ---
const MissionSection = () => (
  <div className="font-body">
    {/* Mission Hero */}
    <div className="relative bg-[#F5F7F5] pt-32 pb-20 lg:pt-44 lg:pb-28 overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'radial-gradient(circle, #2F3E46 1px, transparent 1px)',
        backgroundSize: '32px 32px'
      }} />
      <div className="absolute top-20 right-[20%] w-64 h-64 rounded-full bg-gradient-to-br from-[#84A98C]/15 to-transparent blur-3xl animate-float" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#CAD2C5]/30 backdrop-blur-sm text-[#354F52] text-xs font-bold tracking-widest uppercase mb-8 border border-[#84A98C]/20">
          <Heart size={12} className="mr-2" /> Misi Kami
        </div>
        <h1 className="font-heading text-4xl md:text-6xl font-bold text-[#2F3E46] mb-6 leading-[1.15]">
          Memberdayakan Perubahan <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#84A98C] to-[#52796F] italic">Melalui Transparansi</span>
        </h1>
        <p className="text-lg text-[#52796F] max-w-2xl mx-auto leading-relaxed font-medium">
          Terra Horizon hadir untuk menjembatani kesenjangan antara kebiasaan individu dan dampak global — melalui data, edukasi, dan teknologi yang dapat diakses oleh semua orang.
        </p>
      </div>
    </div>

    {/* Values */}
    <div className="py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: 'linear-gradient(#2F3E46 1px, transparent 1px), linear-gradient(90deg, #2F3E46 1px, transparent 1px)',
        backgroundSize: '64px 64px'
      }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#2F3E46] mb-4">Nilai-Nilai Inti</h2>
          <p className="text-[#52796F] max-w-xl mx-auto">Empat pilar yang menjadi fondasi setiap keputusan dan langkah kami.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: <Shield size={28} />, title: "Transparansi", desc: "Data terbuka dan akuntabel. Setiap metrik, setiap laporan, dapat diverifikasi.", gradient: "from-[#84A98C] to-[#52796F]" },
            { icon: <Zap size={28} />, title: "Inovasi", desc: "Memanfaatkan teknologi terkini untuk solusi keberlanjutan yang scalable.", gradient: "from-[#52796F] to-[#354F52]" },
            { icon: <Users size={28} />, title: "Komunitas", desc: "Membangun jaringan individu dan organisasi yang berkomitmen pada perubahan.", gradient: "from-[#354F52] to-[#2F3E46]" },
            { icon: <Target size={28} />, title: "Dampak Nyata", desc: "Bukan sekadar awareness — kami mengukur dan melaporkan perubahan yang terjadi.", gradient: "from-[#84A98C] to-[#354F52]" },
          ].map((value, idx) => (
            <div key={idx} className="group relative p-7 rounded-2xl bg-[#F5F7F5] hover:bg-white border border-transparent hover:border-[#84A98C]/20 transition-all duration-500 hover:shadow-xl hover:shadow-[#84A98C]/5 cursor-default">
              <div className={`w-12 h-12 bg-gradient-to-br ${value.gradient} rounded-xl flex items-center justify-center text-white mb-5 group-hover:scale-110 transition-transform duration-300 shadow-md`}>
                {value.icon}
              </div>
              <h3 className="font-heading text-lg font-bold text-[#2F3E46] mb-2">{value.title}</h3>
              <p className="text-[#52796F] text-sm leading-relaxed">{value.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>

    {/* What We Do */}
    <div className="py-24 bg-[#F5F7F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-[#84A98C]/10 text-[#52796F] text-xs font-bold tracking-widest uppercase mb-6">
              <Activity size={12} className="mr-2" /> Apa yang Kami Lakukan
            </div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#2F3E46] mb-6 leading-tight">
              Platform Keberlanjutan Terintegrasi
            </h2>
            <p className="text-[#52796F] leading-relaxed mb-6">
              Kami mengembangkan tools pelaporan keberlanjutan yang membantu individu dan organisasi memantau, mengukur, dan mengurangi dampak lingkungan mereka — dari jejak karbon sehari-hari hingga pelaporan ESG korporasi.
            </p>
            <p className="text-[#52796F] leading-relaxed mb-8">
              Melalui edukasi berbasis data dan berita keberlanjutan yang terkurasi, kami memastikan setiap orang memiliki pengetahuan untuk membuat keputusan yang lebih baik bagi planet ini.
            </p>
            <div className="flex flex-wrap gap-3">
              {['Sustainability Report', 'ESG Analytics', 'Carbon Tracking', 'Edukasi Publik'].map((tag, i) => (
                <span key={i} className="text-xs font-mono font-bold text-[#52796F] bg-white border border-[#84A98C]/20 px-3 py-1.5 rounded-lg">
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: <TrendingUp size={24} />, label: "Impact Tracking", value: "Real-time" },
              { icon: <Shield size={24} />, label: "Data Security", value: "End-to-end" },
              { icon: <Sparkles size={24} />, label: "AI Insights", value: "Automated" },
              { icon: <Globe size={24} />, label: "SDG Alignment", value: "17 Goals" }
            ].map((item, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-white border border-[#84A98C]/10 hover:border-[#84A98C]/25 transition-all hover:shadow-lg hover:shadow-[#84A98C]/5 group cursor-default">
                <div className="w-10 h-10 bg-gradient-to-br from-[#84A98C] to-[#52796F] rounded-lg flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <p className="font-mono text-xs font-bold text-[#84A98C] mb-1">{item.value}</p>
                <p className="text-sm font-semibold text-[#2F3E46]">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
);

// --- Footer ---
const Footer = ({ setActiveTab }) => (
  <footer className="bg-[#2F3E46] text-white py-16 font-body relative overflow-hidden">
    {/* Subtle dot pattern */}
    <div className="absolute inset-0 opacity-[0.03]" style={{
      backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
      backgroundSize: '32px 32px'
    }} />

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="grid md:grid-cols-4 gap-12 mb-12">
        <div className="col-span-1 md:col-span-2">
          <div className="flex items-center space-x-3 mb-6">
            <div className="bg-gradient-to-br from-[#84A98C] to-[#52796F] p-2 rounded-xl text-white">
              <Leaf size={20} fill="currentColor" />
            </div>
            <div className="flex flex-col">
              <span className="font-heading text-xl font-bold tracking-wide leading-none">TERRA HORIZON</span>
            </div>
          </div>
          <p className="text-gray-400 text-sm max-w-sm leading-relaxed mb-6">
            Memberdayakan individu dan organisasi untuk mengurangi limbah dan merangkul masa depan yang berkelanjutan melalui teknologi dan edukasi.
          </p>
          <div className="flex space-x-3">
            <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#84A98C] hover:border-[#84A98C] transition-all cursor-pointer">
              <Globe size={16} />
            </div>
            <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#84A98C] hover:border-[#84A98C] transition-all cursor-pointer">
              <ExternalLink size={16} />
            </div>
          </div>
        </div>

        <div>
          <h4 className="font-heading text-lg font-bold mb-6 text-[#F5F7F5]">Quick Links</h4>
          <ul className="space-y-3 text-sm text-gray-400 font-medium">
            <li><button onClick={() => setActiveTab('home')} className="hover:text-[#84A98C] transition-colors flex items-center"><ChevronRight size={14} className="mr-2"/> Home</button></li>
            <li><button onClick={() => setActiveTab('mission')} className="hover:text-[#84A98C] transition-colors flex items-center"><ChevronRight size={14} className="mr-2"/> Misi Kami</button></li>
            <li><button onClick={() => setActiveTab('news')} className="hover:text-[#84A98C] transition-colors flex items-center"><ChevronRight size={14} className="mr-2"/> Berita</button></li>
            <li>
              <a href="#" onClick={(e) => e.preventDefault()} className="hover:text-[#84A98C] transition-colors flex items-center">
                <ChevronRight size={14} className="mr-2"/> Sustainability Report
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-heading text-lg font-bold mb-6 text-[#F5F7F5]">Kontak</h4>
          <ul className="space-y-3 text-sm text-gray-400 font-medium">
            <li className="flex items-start">
              <span className="font-mono text-[#84A98C] font-bold mr-2 text-xs mt-0.5">@</span> contact.terrahorizon@gmail.com
            </li>
            <li className="flex items-start">
              <span className="font-mono text-[#84A98C] font-bold mr-2 text-xs mt-0.5">T</span> +62 8123-456-7890
            </li>
            <li className="flex items-start">
              <span className="font-mono text-[#84A98C] font-bold mr-2 text-xs mt-0.5">L</span> Jakarta, Indonesia
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 font-medium tracking-wide">
        <p>&copy; 2025 Terra Horizon. All rights reserved.</p>
        <div className="flex space-x-8 mt-4 md:mt-0">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
        </div>
      </div>
    </div>
  </footer>
);

// --- Main App ---
const App = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeTab]);

  // Find article data if viewing an article
  const currentArticle = articlesData.find(a => a.id === activeTab);

  return (
    <div className="min-h-screen bg-[#F5F7F5] font-body text-[#2F3E46]">
      <FontStyles />
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />

      <main>
        {activeTab === 'home' && (
          <>
            <Hero setActiveTab={setActiveTab} />
            <Features />
          </>
        )}

        {activeTab === 'news' && (
          <NewsSection setActiveTab={setActiveTab} />
        )}

        {activeTab === 'mission' && (
          <MissionSection />
        )}

        {currentArticle && (
          <ArticleView article={currentArticle} setActiveTab={setActiveTab} />
        )}
      </main>

      <Footer setActiveTab={setActiveTab} />
    </div>
  );
};

export default App;