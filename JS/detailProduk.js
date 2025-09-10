// ================= Detail Produk =================
const products = [
    { id: 1, name: "Jaket Sweat", price: "Rp155.000", image: "/images/best-seller1.png", desc: "Detail Produk:✔ Bahan: Rajut halus, lembut, dan nyaman✔ Tersedia Ukuran: S, M, L, XL✔ Warna: Putih dengan motif garis hitam✔ Ideal untuk: Hangout, kuliah, atau gaya santai sehari-hari" },
    { id: 2, name: "Jaket Base Ball", price: "Rp199.000", image: "/images/best-seller2.png", desc: "Detail Produk:✔ Bahan: Rajut halus, lembut, dan nyaman✔ Tersedia Ukuran: S, M, L, XL✔ Warna: Putih dengan motif garis hitam✔ Ideal untuk: Hangout, kuliah, atau gaya santai sehari-hari" },
    { id: 3, name: "Celana Casual", price: "Rp200.000", image: "/images/best-seller3.png", desc: "Detail Produk:✔ Bahan: Nyaman & tidak kaku✔ Tersedia Ukuran: S, M, L, XL✔ Warna: Cream-hitam✔ Desain: Base ball jacket dengan detail patch huruf✔ Ideal untuk: Tampilan kasual, sporty, dan streetwear" },
    { id: 4, name: "Jaket Casual Hijau", price: "Rp180.000", image: "/images/best-seller4.png", desc: "Detail Produk:✔ Bahan: Nyaman dan ringan✔ Tersedia Ukuran: S, M, L, XL✔ Warna: Hijau✔ Ideal untuk: Gaya santai, hangout, atau streetwear" },
    { id: 5, name: "Jaket Blue Base Ball", price: "Rp150.000", image: "/images/best-seller5.png", desc: "Detail Produk:✔ Bahan: Nyaman dipakai & tidak kaku✔ Tersedia Ukuran: S, M, L, XL✔ Warna: Biru-putih✔ Fitur: Hoodie + detail patch huruf & motif di lengan✔ Ideal untuk: Tampilan sporty, kasual, maupun streetwear" },
    { id: 6, name: "Jaket Spider white Black", price: "Rp220.000", image: "/images/best-seller6.png", desc: "Detail Produk:✔ Bahan: Nyaman & ringan✔ Tersedia Ukuran: S, M, L, XL✔ Warna: Hitam✔ Desain: Grafis laba-laba putih di bagian depan✔ Ideal untuk: Tampilan unik, edgy, dan streetwear berani" },
    { id: 7, name: "Celana Denim Casual", price: "Rp300.000", image: "/images/best-seller7.png", desc: "Detail Produk:✔ Bahan: Denim tebal dan tidak kaku✔ Tersedia Ukuran: S, M, L, XL✔ Warna: Hitam-putih✔ Ideal untuk: Acara santai, hangout, atau gaya streetwear" },
    { id: 8, name: "Kacamata Black Casual", price: "Rp160.000", image: "/images/best-seller8.png", desc: "Detail Produk:✔ Model: Kacamata hitam modern & minimalis✔ Bingkai: Persegi panjang, cocok untuk berbagai bentuk wajah✔ Detail: Tulisan A BETTER FEELING pada sisi tangkai✔ Ideal untuk: Gaya kasual, jalan-jalan, hingga hangout di kafe" },
    { id: 9, name: "Topi Modis Motip", price: "Rp230.000", image: "/images/best-seller9.png", desc: "Detail Produk:✔ Model: Topi baker boy motif kotak-kotak✔ Aksen: Rantai di bagian depan untuk sentuhan modis & unik✔ Tersedia Ukuran: All size✔ Ideal untuk: Melengkapi gaya kasual & tampil lebih stylish" },
    { id: 10, name: "Shall Black Mamba", price: "Rp99.000", image: "/images/best-seller10.png", desc: "Detail Produk:✔ Model: Syal polos stylish✔ Warna: Hitam (Black Mamba)✔ Bahan: Kain lembut & nyaman dipakai✔ Ukuran: Panjang standar unisex✔ Ideal untuk: Gaya kasual, formal, hingga streetwear" },
    { id: 11, name: "Sabuk Casual Black", price: "Rp160.000", image: "/images/aksesoris1.png", desc: "Detail Produk:✔ Model: Sabuk pinggang dengan detail bolong-bolong✔ Warna: Hitam✔ Aksen: Hiasan metal untuk tampilan stylish✔ Bahan: Kulit sintetis kuat & awet✔ Ideal untuk: Gaya kasual, formal, maupun streetwear" },
    { id: 12, name: "Sarung Tangan Black Casual", price: "Rp133.000", image: "/images/aksesoris2.png", desc: "Detail Produk:✔ Model: Sarung tangan kasual✔ Warna: Hitam✔ Bahan: Nyaman & ringan✔ Ukuran: All size✔ Ideal untuk: Aktivitas santai, berkendara, maupun gaya streetwear" },
    { id: 13, name: "Gelang Anak Metal Black", price: "Rp90.000", image: "/images/aksesoris3.png", desc: "Detail Produk:✔ Model: Gelang anak✔ Warna: Hitam (Black)✔ Bahan: Metal ringan & aman✔ Desain: Simpel namun stylish✔ Ideal untuk: Aksesori sehari-hari & pelengkap gaya kasual anak" },
    { id: 14, name: "Sarung Tangan Style Korean", price: "Rp140.000", image: "/images/aksesoris4.png", desc: "Detail Produk:✔ Model: Sarung tangan gaya Korean✔ Warna: Hitam / Abu / Cream✔ Bahan: Lembut & nyaman dipakai✔ Ukuran: All size✔ Ideal untuk: Gaya kasual, hangout, atau outfit ala Korean style" },
    { id: 15, name: "Kacamata Bintang Kejora", price: "Rp160.000", image: "/images/aksesoris5.png", desc: "Detail Produk:✔ Model: Kacamata unik berbentuk bintang✔ Warna: Hitam / Silver / Gold✔ Bahan: Frame ringan & nyaman dipakai✔ Lensa: UV protection standar✔ Ideal untuk: Gaya kasual, pesta, festival, atau tampil standout" },
    { id: 16, name: "Kacamata Style Emote", price: "Rp160.000", image: "/images/aksesoris6.png", desc: "Detail Produk:✔ Model: Kacamata kotak-kotak unik ala emote✔ Warna: Hitam-putih✔ Bahan: Frame ringan & nyaman✔ Desain: Kotak pixelated khas gaya meme/emote✔ Ideal untuk: Hangout, foto OOTD, cosplay, atau gaya streetwear nyentrik" },
    { id: 17, name: "Kalung Guitar Hero", price: "Rp120.000", image: "/images/aksesoris7.png", desc: "Detail Produk:✔ Model: Kalung dengan liontin gitar unik✔ Warna: Hitam / Silver / Gold✔ Bahan: Metal ringan & awet✔ Desain: Liontin berbentuk gitar ala Guitar Hero✔ Ideal untuk: Pecinta musik, aksesoris kasual, atau pelengkap gaya streetwear" },
    { id: 18, name: "Hot White Black", price: "Rp135.000", image: "/images/tshirt1.png", desc: "Detail Produk:✔ Model: Kaos kasual dengan efek grafis api✔ Warna: Hitam-putih✔ Bahan: Katun lembut & nyaman✔ Ukuran: S, M, L, XL✔ Ideal untuk: Gaya streetwear, hangout, atau tampil lebih edgy" },
    { id: 19, name: "City Ground", price: "Rp135.000", image: "/images/tshirt2.png", desc: "Detail Produk:✔ Model: Kaos kasual City Ground✔ Warna: Hitam / Putih / Variasi sesuai desain✔ Bahan: Katun lembut & adem✔ Ukuran: S, M, L, XL✔ Ideal untuk: Gaya streetwear, casual look, dan hangout" },
    { id: 20, name: "T-Shirt LA", price: "Rp135.000", image: "/images/tshirt3.png", desc: "Detail Produk:✔ Model: T-Shirt kasual grafis LA✔ Warna: Putih-hijau✔ Bahan: Katun lembut & adem✔ Ukuran: S, M, L, XL✔ Ideal untuk: Streetwear, hangout, atau gaya kasual sporty" },
    { id: 21, name: "T-Shirt New York", price: "Rp135.000", image: "/images/tshirt4.png", desc: "Detail Produk:✔ Model: T-Shirt kasual grafis New York U.S.A✔ Warna: Hitam-putih✔ Bahan: Katun lembut & nyaman✔ Ukuran: S, M, L, XL✔ Ideal untuk: Streetwear, hangout, atau gaya kasual harian" },
    { id: 22, name: "Bear Rebouns", price: "Rp135.000", image: "/images/tshirt5.png", desc: "Detail Produk:✔ Model: T-Shirt grafis Bear Rebons✔ Warna: Hitam✔ Bahan: Katun lembut & adem✔ Ukuran: S, M, L, XL✔ Ideal untuk: Streetwear, hangout, atau gaya kasual harian" },
    { id: 23, name: "Panda Ngeselin", price: "Rp135.000", image: "/images/tshirt6.png", desc: "Detail Produk:✔ Model: T-Shirt grafis Panda Ngeselin✔ Warna: Hitam✔ Bahan: Katun lembut & nyaman dipakai✔ Ukuran: S, M, L, XL✔ Ideal untuk: Gaya kasual, streetwear, atau hangout santai" },
    { id: 24, name: "28 Black Hole", price: "Rp135.000", image: "/images/tshirt7.png", desc: "Detail Produk:✔ Model: T-Shirt grafis 28 Black Hole✔ Warna: Hitam / Variasi sesuai desain✔ Bahan: Katun lembut & adem✔ Ukuran: S, M, L, XL✔ Ideal untuk: Streetwear, hangout, atau gaya kasual edgy" },
    { id: 25, name: "Dream Dollar", price: "Rp135.000", image: "/images/tshirt8.png", desc: "Detail Produk:✔ Model: T-Shirt grafis Dream Dollar✔ Warna: Hitam / Putih / Variasi sesuai desain✔ Bahan: Katun lembut & nyaman✔ Ukuran: S, M, L, XL✔ Ideal untuk: Streetwear, hangout, atau gaya kasual trendy" },
    { id: 26, name: "Gangsta", price: "Rp135.000", image: "/images/tshirt9.png", desc: "Detail Produk:✔ Model: T-Shirt grafis Gangsta✔ Warna: Hitam / Putih / Variasi sesuai desain✔ Bahan: Katun lembut & adem✔ Ukuran: S, M, L, XL✔ Ideal untuk: Streetwear, hip-hop vibes, hangout, atau gaya kasual berani" },
    { id: 27, name: "White LA", price: "Rp135.000", image: "/images/tshirt10.png", desc: "Detail Produk:✔ Model: T-Shirt grafis LA✔ Warna: Putih✔ Bahan: Katun lembut & nyaman dipakai✔ Ukuran: S, M, L, XL✔ Ideal untuk: Streetwear, hangout, atau gaya kasual harian" },
    { id: 28, name: "Indigo Style", price: "Rp135.000", image: "/images/shirt1.png", desc: "Detail Produk:✔ Model: T-Shirt kasual Indigo Style✔ Warna: Biru Indigo✔ Bahan: Katun lembut & adem✔ Ukuran: S, M, L, XL✔ Ideal untuk: Streetwear, hangout, atau gaya kasual trendy" },
    { id: 29, name: "Casual Semi", price: "Rp135.000", image: "/images/shirt2.png", desc: "Detail Produk:✔ Model: Kaos kasual✔ Warna: Hitam / Putih / Variasi sesuai desain✔ Bahan: Katun lembut & adem✔ Ukuran: S, M, L, XL✔ Ideal untuk: Streetwear, hangout, olahraga ringan, atau gaya kasual sehari-hari" },
    { id: 30, name: "Street Casual", price: "Rp135.000", image: "/images/shirt3.png", desc: "Detail Produk:✔ Model: Kaos street casual✔ Warna: Hitam / Putih / Variasi sesuai desain✔ Bahan: Katun lembut & adem✔ Ukuran: S, M, L, XL✔ Ideal untuk: Streetwear, hangout, OOTD, atau gaya kasual anak muda" },
    { id: 31, name: "Senselees 24", price: "Rp135.000", image: "/images/shirt4.png", desc: "Detail Produk:✔ Model: T-Shirt grafis Senselees ✔ Warna: Hitam / Putih / Variasi sesuai desain✔ Bahan: Katun lembut & adem✔ Ukuran: S, M, L, XL✔ Ideal untuk: Streetwear, hangout, atau gaya kasual kekinian" },
    { id: 32, name: "LA", price: "Rp135.000", image: "/images/shirt5.png", desc: "Detail Produk:✔ Model: T-Shirt grafis LA dengan motif garis✔ Warna: Putih-biru✔ Bahan: Katun lembut & adem✔ Ukuran: S, M, L, XL✔ Ideal untuk: Streetwear, hangout, atau gaya kasual sporty" },
    { id: 33, name: "Einsight", price: "Rp135.000", image: "/images/shirt6.png", desc: "Detail Produk:✔ Model: T-Shirt grafis Einsight✔ Warna: Putih-biru✔ Bahan: Katun lembut & adem✔ Ukuran: S, M, L, XL✔ Ideal untuk: Streetwear, hangout, atau gaya kasual trendy" },
    { id: 34, name: "Astronout", price: "Rp135.000", image: "/images/shirt7.png", desc: "Detail Produk:✔ Model: T-Shirt grafis Astronaut✔ Warna: Hitam / Putih / Variasi sesuai desain✔ Bahan: Katun lembut & adem✔ Ukuran: S, M, L, XL✔ Ideal untuk: Streetwear, hangout, atau gaya kasual dengan tema outer space" },
    { id: 35, name: "BaseBall Blue White", price: "Rp135.000", image: "/images/shirt8.png", desc: "Detail Produk:✔ Model: Baseball jacket sporty✔ Warna: Biru-putih✔ Bahan: Nyaman dipakai & tidak kaku✔ Ukuran: S, M, L, XL✔ Ideal untuk: Streetwear, hangout, atau gaya kasual sporty." },
    { id: 36, name: "Blue White", price: "Rp135.000", image: "/images/shirt8.png", desc: "Detail Produk:✔ Model: T-Shirt kasual Blue White dengan desain 3 garis✔ Warna: Biru-putih✔ Bahan: Katun lembut & adem✔ Ukuran: S, M, L, XL✔ Ideal untuk: Streetwear, hangout, atau gaya kasual sporty" },
    { id: 37, name: "Vintage Style", price: "Rp135.000", image: "/images/shirt10.png", desc: "Detail Produk:✔ Model: T-Shirt vintage style dengan motif garis✔ Warna: Putih dasar dengan garis oranye & hitam✔ Bahan: Katun lembut & adem✔ Ukuran: S, M, L, XL✔ Ideal untuk: Streetwear, hangout, atau gaya kasual retro" },
    { id: 38, name: "Sweat White", price: "Rp290.000", image: "/images/sweater1.png", desc: "Detail Produk:✔ Model: Sweater kasual polos✔ Warna: Putih✔ Bahan: Tebal namun tetap nyaman & adem✔ Ukuran: S, M, L, XL✔ Ideal untuk: Hangout, streetwear, atau gaya kasual harian" },
    { id: 39, name: "Red Merona", price: "Rp250.000", image: "/images/sweater2.png", desc: "Detail Produk:✔ Model: Sweater kasual✔ Warna: Merah merona✔ Bahan: Tebal, hangat & nyaman✔ Ukuran: S, M, L, XL✔ Ideal untuk: Streetwear, hangout, atau gaya kasual sehari-hari" },
    { id: 40, name: "Choco Manis", price: "Rp288.000", image: "/images/sweater3.png", desc: "Detail Produk:✔ Model: Sweater kasual✔ Warna: Cokelat manis (Choco)✔ Bahan: Tebal, lembut & nyaman dipakai✔ Ukuran: S, M, L, XL✔ Ideal untuk: Streetwear, hangout, atau gaya kasual cozy" },
    { id: 41, name: "Sweat Vintage", price: "Rp300.000", image: "/images/sweater4.png", desc: "Detail Produk:✔ Model: Sweater vintage style✔ Warna: Variasi retro (Putih, Cream, Navy, dll)✔ Bahan: Tebal, hangat & nyaman✔ Ukuran: S, M, L, XL✔ Ideal untuk: Streetwear, hangout, atau gaya kasual retro" },
    { id: 42, name: "Vintage Modis", price: "Rp288.000", image: "/images/sweater5.png", desc: "Detail Produk:✔ Model: Outfit vintage modis✔ Warna: Kombinasi retro (Cream, Navy, Maroon, dll)✔ Bahan: Nyaman dipakai & adem✔ Ukuran: S, M, L, XL✔ Ideal untuk: Streetwear, hangout, atau gaya kasual retro stylish" },
    { id: 43, name: "Eortuner", price: "Rp288.000", image: "/images/sweater6.png", desc: "Detail Produk:✔ Model: Sweater kasual Eourtuner ✔ Warna: Hitam / Putih / Variasi sesuai desain✔ Bahan: Tebal, hangat & nyaman dipakai✔ Ukuran: S, M, L, XL✔ Ideal untuk: Streetwear, hangout, atau gaya kasual trendy" },
    { id: 44, name: "Venichten", price: "Rp288.000", image: "/images/sweater7.png", desc: "Detail Produk:✔ Model: Outfit kasual Venichten ✔ Warna: Hitam / Putih / Variasi sesuai desain✔ Bahan: Katun / fleece lembut & nyaman✔ Ukuran: S, M, L, XL✔ Ideal untuk: Streetwear, hangout, atau gaya kasual trendy" },
    { id: 45, name: "VTCN", price: "Rp288.000", image: "/images/sweater8.png", desc: "Detail Produk:✔ Model: Outfit kasual Venichten ✔ Warna: Hitam / Putih / Variasi sesuai desain✔ Bahan: Katun / fleece lembut & nyaman✔ Ukuran: S, M, L, XL✔ Ideal untuk: Streetwear, hangout, atau gaya kasual trendy" },
    { id: 46, name: "F Art", price: "Rp270.000", image: "/images/sweater9.png", desc: "Detail Produk:✔ Model: Outfit kasual grafis Falleu Art ✔ Warna: Hitam / Putih / Variasi sesuai desain✔ Bahan: Katun / fleece lembut & adem✔ Ukuran: S, M, L, XL✔ Ideal untuk: Streetwear, hangout, atau gaya kasual artistic" },
    { id: 47, name: "Boston", price: "Rp300.000", image: "/images/sweater10.png", desc: "Detail Produk:✔ Model: Outfit kasual grafis Boston ✔ Warna: Hitam / Putih / Variasi sesuai desain✔ Bahan: Katun / fleece lembut & nyaman✔ Ukuran: S, M, L, XL✔ Ideal untuk: Streetwear, hangout, atau gaya kasual sporty" },
    { id: 48, name: "Polo Cream Late", price: "Rp144.000", image: "/images/polo1.png", desc: "Detail Produk:✔ Model: Polo kasual Cream Lite ✔ Warna: Cream / Putih / Variasi sesuai desain✔ Bahan: Katun lembut & nyaman✔ Ukuran: S, M, L, XL✔ Ideal untuk: Streetwear, hangout, atau gaya kasual sporty" },
    { id: 49, name: "Polo Vintage Cream", price: "Rp144.000", image: "/images/polo2.png", desc: "Detail Produk:✔ Model: Polo vintage Cream ✔ Warna: Cream / Putih / Variasi sesuai desain✔ Bahan: Katun lembut & nyaman✔ Ukuran: S, M, L, XL✔ Ideal untuk: Streetwear, hangout, atau gaya kasual sporty" },
    { id: 50, name: "Polo Vintage Cream Chocolate", price: "Rp144.000", image: "/images/polo3.png", desc: "Detail Produk:✔ Model: Polo vintage Cream Chocolate ✔ Warna: Cream / Cokelat / Variasi sesuai desain✔ Bahan: Katun lembut & nyaman✔ Ukuran: S, M, L, XL✔ Ideal untuk: Streetwear, hangout, atau gaya kasual sporty" },
    { id: 51, name: "Polo Vintage Day", price: "Rp144.000", image: "/images/polo4.png", desc: "Detail Produk:✔ Model: Polo vintage Day ✔ Warna: Putih / Cream / Variasi sesuai desain✔ Bahan: Katun lembut & nyaman✔ Ukuran: S, M, L, XL✔ Ideal untuk: Streetwear, hangout, atau gaya kasual sporty" },
    { id: 52, name: "Polo Vintage Polos", price: "Rp144.000", image: "/images/polo5.png", desc: "Detail Produk:✔ Model: Polo vintage Polos ✔ Warna: Putih / Cream / Variasi sesuai desain✔ Bahan: Katun lembut & nyaman✔ Ukuran: S, M, L, XL✔ Ideal untuk: Streetwear, hangout, atau gaya kasual sporty" },
    { id: 53, name: "Polo Vintage Polos Elegan", price: "Rp144.000", image: "/images/polo6.png", desc: "Detail Produk:✔ Model: Polo vintage Polos Elegan ✔ Warna: Putih / Cream / Variasi sesuai desain✔ Bahan: Katun lembut & nyaman✔ Ukuran: S, M, L, XL✔ Ideal untuk: Streetwear, hangout, atau gaya kasual sporty" },
    { id: 54, name: "Polo Green Light", price: "Rp144.000", image: "/images/polo7.png", desc: "Detail Produk:✔ Model: Polo vintage Green Light ✔ Warna: Hijau / Variasi sesuai desain✔ Bahan: Katun lembut & nyaman✔ Ukuran: S, M, L, XL✔ Ideal untuk: Streetwear, hangout, atau gaya kasual sporty" },
    { id: 55, name: "Polo Polos Abu Elegan", price: "Rp144.000", image: "/images/polo8.png", desc: "Detail Produk:✔ Model: Polo polos Abu Elegan ✔ Warna: Abu / Variasi sesuai desain✔ Bahan: Katun lembut & nyaman✔ Ukuran: S, M, L, XL✔ Ideal untuk: Streetwear, hangout, atau gaya kasual sporty" },
    { id: 56, name: "Polo Vintage Formal", price: "Rp144.000", image: "/images/polo9.png", desc: "Detail Produk:✔ Model: Polo vintage Formal ✔ Warna: Putih / Cream / Variasi sesuai desain✔ Bahan: Katun lembut & nyaman✔ Ukuran: S, M, L, XL✔ Ideal untuk: Streetwear, hangout, atau gaya kasual sporty" },
    { id: 57, name: "Polo Vintage Semi Kotak", price: "Rp144.000", image: "/images/polo10.png", desc: "Detail Produk:✔ Model: Polo vintage Semi Kotak ✔ Warna: Putih / Cream / Variasi sesuai desain✔ Bahan: Katun lembut & nyaman✔ Ukuran: S, M, L, XL✔ Ideal untuk: Streetwear, hangout, atau gaya kasual sporty" },
    { id: 58, name: "Jaket Vintage 90", price: "Rp400.000", image: "/images/jaket1.png", desc: "Detail Produk:✔ Model: Jaket vintage 90✔ Warna: Cream / Variasi sesuai desain✔ Bahan: Katun / Fleece lembut & nyaman✔ Ukuran: S, M, L, XL✔ Ideal untuk: Streetwear, hangout, atau gaya kasual sporty" },
    { id: 59, name: "Jaket Vintage 90 Chocolate", price: "Rp400.000", image: "/images/jaket2.png", desc: "Detail Produk:✔ Model: Jaket vintage 90 Chocolate ✔ Warna: Cokelat / Variasi sesuai desain✔ Bahan: Katun / Fleece lembut & nyaman✔ Ukuran: S, M, L, XL✔ Ideal untuk: Streetwear, hangout, atau gaya kasual sporty" },
    { id: 60, name: "Jaket Vintage 90 Biru Sejuk", price: "Rp400.000", image: "/images/jaket3.png", desc: "Detail Produk:✔ Model: Jaket vintage Biru Sejuk ✔ Warna: Biru / Variasi sesuai desain✔ Bahan: Katun / Fleece lembut & nyaman✔ Ukuran: S, M, L, XL✔ Ideal untuk: Streetwear, hangout, atau gaya kasual sporty" },
    { id: 61, name: "Jaket Vintage 90 Casual", price: "Rp400.000", image: "/images/jaket4.png", desc: "Detail Produk:✔ Model: Jaket vintage 90 Casual ✔ Warna: Hitam / Putih / Variasi sesuai desain✔ Bahan: Katun / Fleece lembut & nyaman✔ Ukuran: S, M, L, XL✔ Ideal untuk: Streetwear, hangout, atau gaya kasual sporty" },
    { id: 62, name: "Jaket Vintage 90 Elegan", price: "Rp400.000", image: "/images/jaket5.png", desc: "Detail Produk:✔ Model: Jaket vintage 90 Elegan ✔ Warna: Hitam / Putih / Variasi sesuai desain✔ Bahan: Katun / Fleece lembut & nyaman✔ Ukuran: S, M, L, XL✔ Ideal untuk: Streetwear, hangout, atau gaya kasual sporty" },
    { id: 63, name: "Jaket Vintage 90 Biru Sejuk Casual", price: "Rp400.000", image: "/images/jaket6.png", desc: "Detail Produk:✔ Model: Jaket vintage 90 Biru Sejuk Casual ✔ Warna: Biru / Variasi sesuai desain✔ Bahan: Katun / Fleece lembut & nyaman✔ Ukuran: S, M, L, XL✔ Ideal untuk: Streetwear, hangout, atau gaya kasual sporty" }
];

// Quantiti
const minusBtn = document.querySelector('.minus');
const plusBtn = document.querySelector('.plus');
const qtyInput = document.getElementById('qty');

minusBtn.addEventListener('click', () => {
    if (qtyInput.value > 1) qtyInput.value--;
});

plusBtn.addEventListener('click', () => {
    qtyInput.value++;
});


// Ambil ID dari URL
const params = new URLSearchParams(window.location.search);
const id = parseInt(params.get("id"));
console.log("🔍 ID dari URL:", id);

// Cari produk sesuai ID
const product = products.find(p => p.id === id);
console.log("🔍 Produk ditemukan:", product);

// Masukkan ke halaman
if (product) {
    document.querySelector(".product-info h2").textContent = product.name;
    document.querySelector(".price").textContent = product.price;
    document.querySelector(".product-images img").src = product.image;
    document.querySelector(".product-images img").alt = product.name;
    document.querySelector(".product-info p").textContent = product.desc;
} else {
    console.error("❌ Produk tidak ditemukan!");
}

document.getElementById('add-to-cart').addEventListener('click', () => {
    const productId = id; // dari URL
    const quantity = parseInt(qtyInput.value);
  
    const productToAdd = {
      id: productId,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: quantity
    };
  
    // Ambil cart lama dari sessionStorage
    const existingCart = JSON.parse(sessionStorage.getItem('cartItems')) || [];
  
    // Cek apakah produk sudah ada di cart
    const existingProduct = existingCart.find(item => item.id === productId);
  
    if (existingProduct) {
      // Tambahkan quantity
      existingProduct.quantity += quantity;
    } else {
      // Tambahkan produk baru
      existingCart.push(productToAdd);
    }
  
    // Simpan kembali ke sessionStorage
    sessionStorage.setItem('cartItems', JSON.stringify(existingCart));
  
    // Pindah ke cart.html
    window.location.href = 'cart.html';
  });