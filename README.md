Persyaratan Sistem
Pastikan sistem Anda memiliki:

1. Node.js versi ≥ 16.x 

2. npm atau alternatif yarn (yarn ≥ 1.x atau yarn v2+)

3. Git untuk melakukan clone repository

Instalasi & Setup
Clone repository ke lokal Anda:
git clone https://github.com/Addel12/technical-test.git
cd technical-test

Proyek terdiri dari dua bagian, masuk ke masing-masing subfolder:
cd technical-test-fe        #frontend bernama technical-test-fe
dan
cd technical-test-be        #backend bernama technical-test-be

Instalasi dependensi:
Jika menggunakan npm:
npm install

Jika menggunakan yarn:
yarn install

Menjalankan Proyek

Untuk menjalankan backend:
cd technical-test-be
npm run dev        

Biasanya server akan berjalan di http://localhost:8001 atau port yang ditentukan di .env.

Untuk menjalankan frontend:
cd technical-test-fe
npm run dev        

Setelah itu buka browser ke http://localhost:3000/products untuk melihat aplikasi.


Catatan Tambahan
Pastikan Anda memiliki file konfigurasi lingkungan (misalnya .env) di root atau sub-folder yang sesuai
jika proyek memerlukannya. Ubah nama dari .env.example atau sesuaikan variabel seperti PORT, DATABASE_URL, dll.

Jika menggunakan database lokal (sqlite, postgre, mysql) atau file database (contoh: database.db dalam repo), pastikan file tersebut memiliki permission yang tepat dan Anda telah membuat / menginisialisasi sesuai kebutuhan.

Jika backend dan frontend dijalankan secara bersamaan, pastikan tidak terjadi konflik port.
