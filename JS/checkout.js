document.addEventListener('DOMContentLoaded', () => {
    const productInfoDiv = document.getElementById('productInfo');
    const paymentForm = document.getElementById('paymentForm');
    const confirmationMsg = document.getElementById('confirmationMsg');

    // Ambil item yang akan dibayar
    const checkoutItem = JSON.parse(sessionStorage.getItem('checkoutItem'));

    if (!checkoutItem) {
        productInfoDiv.innerHTML = '<p>Data produk tidak ditemukan. Silakan kembali ke halaman keranjang.</p>';
        paymentForm.style.display = 'none';
        return;
    }

    // Tampilkan info produk
    const priceNumber = parseInt(checkoutItem.price.replace(/\D/g, ''));
    const totalPrice = priceNumber * checkoutItem.quantity;

    productInfoDiv.innerHTML = `
        <p><strong>Produk:</strong> ${checkoutItem.name}</p>
        <p><strong>Harga satuan:</strong> ${checkoutItem.price}</p>
        <p><strong>Jumlah:</strong> ${checkoutItem.quantity}</p>
        <p><strong>Total Bayar:</strong> Rp${totalPrice.toLocaleString('id-ID')}</p>
    `;

    // Handle form submit
    paymentForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const customerName = paymentForm.customerName.value.trim();
        const address = paymentForm.address.value.trim();
        const paymentMethod = paymentForm.paymentMethod.value;

        if (!customerName || !address || !paymentMethod) {
            alert('Mohon isi semua data pembayaran.');
            return;
        }

        // Tampilkan konfirmasi
        confirmationMsg.style.display = 'block';
        confirmationMsg.innerHTML = `
            <h2>Terima kasih, ${customerName}!</h2>
            <p>Pembayaran produk <strong>${checkoutItem.name}</strong> sejumlah ${checkoutItem.quantity} berhasil diproses.</p>
            <p>Metode pembayaran: <strong>${paymentMethod}</strong></p>
            <p>Produk akan dikirim ke alamat: <em>${address}</em></p>
        `;

        // Hapus item ini dari cartItems
        let cartItems = JSON.parse(sessionStorage.getItem('cartItems')) || [];
        cartItems = cartItems.filter(i => Number(i.id) !== Number(checkoutItem.id));
        sessionStorage.setItem('cartItems', JSON.stringify(cartItems));

        // Hapus checkoutItem
        sessionStorage.removeItem('checkoutItem');

        paymentForm.reset();
    });
});
