const cartContainer = document.getElementById('cartContainer');
const totalEl = document.getElementById('total');

function renderCart() {
    let cartItems = JSON.parse(sessionStorage.getItem('cartItems')) || [];
    cartContainer.innerHTML = '';
    let totalPrice = 0;

    if (cartItems.length === 0) {
        cartContainer.innerHTML = '<p>Keranjang kosong.</p>';
        totalEl.textContent = '';
        return;
    }

    cartItems.forEach(item => {
        const priceNumber = parseInt(item.price.replace(/\D/g, ''));
        const subtotal = priceNumber * item.quantity;
        totalPrice += subtotal;

        const div = document.createElement('div');
        div.className = 'cart-item';
        div.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <div class="cart-info">
                <p><strong>${item.name}</strong></p>
                <p>Harga: ${item.price}</p>
                <p>Jumlah: ${item.quantity}</p>
                <p>Subtotal: Rp${subtotal.toLocaleString('id-ID')}</p>
                <div class="actions">
                    <button class="checkoutBtn">Checkout</button>
                    <button class="removeBtn">Hapus</button>
                </div>
            </div>
        `;
        cartContainer.appendChild(div);

        // Checkout button
        div.querySelector('.checkoutBtn').addEventListener('click', () => {
            sessionStorage.setItem('checkoutItem', JSON.stringify(item));
            window.location.href = 'checkout.html';
        });

        // Remove button
        div.querySelector('.removeBtn').addEventListener('click', () => {
            cartItems = cartItems.filter(i => Number(i.id) !== Number(item.id));
            sessionStorage.setItem('cartItems', JSON.stringify(cartItems));
            renderCart();
        });
    });

    totalEl.textContent = `Total Bayar: Rp${totalPrice.toLocaleString('id-ID')}`;
}

renderCart();