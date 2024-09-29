// settings.js

// Objek untuk menyimpan semua pengaturan profil
const profileSettings = {
  favicon: "media/profile.jpg", // Path ke favicon
  title: "ziell.xml | Profile", // Judul halaman
  metaTitle: "ziell.xml || Profile", // Meta title untuk SEO
  metaDescription: "Profile Website ziell.xml, anak mami yg imoet", // Deskripsi meta untuk SEO
  metaKeywords: "Ziell, ziell.xml, profile ziell, siapa ziell?", // Keywords meta untuk SEO
  metaRobots: "index, follow", // Pengaturan robot meta untuk SEO
  imageSrc: "media/profile.jpg", // Path ke gambar profil
  name: "ziell.xml", // Nama profil
  occupation: "Anak mamih", // Pekerjaan atau jabatan
  location: "Karawang, Jawa Barat, Indonesia", // Lokasi
  backgroundImage: "media/background.jpg", // Latar belakang halaman
  links: [
    { title: "TikTok", url: "https://tiktok.com/@ziell.xml", icon: "fa-github" }, // Tautan GitHub
    { title: "Instagram", url: "https://www.instagram.com/sr.nyzz", icon: "fa-instagram" }, // Tautan Instagram
    { title: "Telegram", url: "https://t.me/nyzziell", icon: "fa-telegram" }, // Tautan Telegram
    { title: "Email", url: "mailto:nyzziell@gmail.com", icon: "fa-envelope" }, // Tautan Email
    { title: "WhatsApp", url: "https://wa.me/12268950399?text=hai", icon: "fa-whatsapp" }, // Tautan WhatsApp
    { title: "Group WhatsApp", url: "https://chat.whatsapp.com/F729CJyYPA13hamtqQxn96", icon: "fa-whatsapp" } // Tautan YouTube
  ]
};

// Mengatur favicon
document.getElementById('favicon').href = profileSettings.favicon;

// Mengatur judul halaman
document.getElementById('title').textContent = profileSettings.title;

// Mengatur meta tags
document.getElementById('meta-title').content = profileSettings.metaTitle;
document.getElementById('meta-description').content = profileSettings.metaDescription;
document.getElementById('meta-keywords').content = profileSettings.metaKeywords;
document.getElementById('meta-robots').content = profileSettings.metaRobots;

// Mengatur gambar profil
document.getElementById('profile-image').src = profileSettings.imageSrc;

// Mengatur nama profil
document.getElementById('profile-name').textContent = profileSettings.name;

// Mengatur teks pekerjaan atau jabatan
document.getElementById('occupation-text').textContent = profileSettings.occupation;

// Mengatur lokasi
document.getElementById('location').innerHTML = `<i class="fa fa-map-marker icon" aria-hidden="true"></i> ${profileSettings.location}`;

// Mengatur gambar latar belakang
document.body.style.backgroundImage = `url("${profileSettings.backgroundImage}")`;

// Mengatur tautan-tautan
const linkBoxes = document.getElementById('link-boxes');
profileSettings.links.forEach(link => {
  const linkElement = document.createElement('a');
  linkElement.href = link.url;
  linkElement.innerHTML = `<i class="fa ${link.icon}" aria-hidden="true"></i> ${link.title}`;
  linkBoxes.appendChild(linkElement);
});
