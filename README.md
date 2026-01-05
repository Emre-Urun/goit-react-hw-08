# 📱 Phonebook App (Kişi Rehberi Uygulaması)

![React](https://img.shields.io/badge/React-19-blue?logo=react)
![Redux Toolkit](https://img.shields.io/badge/Redux_Toolkit-Compat-purple?logo=redux)
![Material UI](https://img.shields.io/badge/Material--UI-Design-blue?logo=mui)
![Vite](https://img.shields.io/badge/Vite-Fast-yellow?logo=vite)

Kullanıcıların kendi hesaplarını oluşturup, güvenli bir şekilde kişisel telefon rehberlerini yönetebilecekleri, tam kapsamlı bir React uygulaması. Bu proje, **Authentication (Kimlik Doğrulama)** süreçlerini, **Redux Toolkit** ile global state yönetimini ve **Material UI** ile modern tasarım prensiplerini içerir.

🔗 **Canlı Demo:** goit-react-hw-08-roan-theta.vercel.app

---

## 🚀 Özellikler

### 🔐 Kimlik Doğrulama (Authentication)
- **Kayıt ve Giriş:** Kullanıcılar yeni hesap oluşturabilir ve mevcut hesaplarıyla giriş yapabilir (JWT tabanlı).
- **Kalıcı Oturum (Redux Persist):** Sayfa yenilense bile kullanıcı oturumu açık kalır.
- **Güvenli Rotalar (Private & Restricted Routes):**
  - Giriş yapmamış kullanıcılar `/contacts` sayfasına erişemez.
  - Giriş yapmış kullanıcılar tekrar `/login` veya `/register` sayfasına giremez.

### 👥 Kişi Yönetimi (CRUD)
- **Kişi Ekleme:** İsim ve telefon numarası ile yeni kayıt oluşturma.
- **Kişi Silme:** Listeden istenilen kişiyi silme.
- **Arama/Filtreleme:** Kişiler arasında isme göre anlık filtreleme.
- **Arama Özelliği:** Telefon numarasına veya ikona tıklandığında cihazın arama uygulaması tetiklenir (`tel:` protokolü).

### 🎨 UI & UX (Kullanıcı Deneyimi)
- **Material UI:** Modern, temiz ve responsive (mobil uyumlu) tasarım.
- **Bildirimler:** Başarılı/Hatalı işlemler için `react-hot-toast` ile kullanıcı bilgilendirme.
- **Yükleniyor Durumları:** Veri çekilirken modern `spinner` animasyonları.

---

## 🛠️ Kullanılan Teknolojiler

* **Core:** React (v19), Vite
* **State Management:** Redux Toolkit, Redux Persist
* **Routing:** React Router DOM (v7)
* **HTTP Client:** Axios (Interceptors ile otomatik token yönetimi)
* **Forms & Validation:** Formik, Yup
* **UI Framework:** Material UI (@mui/material), Emotion
* **Utilities:** React Helmet Async (SEO/Başlık yönetimi), React Hot Toast

---

## ⚙️ Kurulum ve Çalıştırma

Bu projeyi yerel ortamınızda çalıştırmak için aşağıdaki adımları izleyin:

1.  **Repoyu klonlayın:**
    ```bash
    git clone https://github.com/Emre-Urun/goit-react-hw-08.git
    cd goit-react-hw-08
    ```

2.  **Bağımlılıkları yükleyin:**
    *(Not: React 19 uyumluluğu için `--legacy-peer-deps` bayrağı önerilir)*
    ```bash
    npm install --legacy-peer-deps
    ```

3.  **Projeyi başlatın:**
    ```bash
    npm run dev
    ```

4.  Tarayıcınızda `http://localhost:5173` adresine gidin.

---

## 📂 Proje Yapısı

```text
src/
├── components/        # Yeniden kullanılabilir bileşenler (Forms, AppBar, Lists vb.)
├── pages/             # Uygulama sayfaları (Home, Login, Register, Contacts)
├── redux/             # Redux state yönetimi
│   ├── auth/          # Kimlik doğrulama işlemleri (Slice, Operations, Selectors)
│   ├── contacts/      # Kişi listesi işlemleri
│   ├── filters/       # Arama filtresi mantığı
│   └── store.js       # Store ve Persist yapılandırması
└── main.jsx           # Uygulama giriş noktası ve Provider sarmalayıcıları
