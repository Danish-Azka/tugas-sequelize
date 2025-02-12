const createOrder = async (selectedCartIds, totalHarga, metodeBayar) => {
    try {
        // 1. Buat Order baru
        const newOrder = await Order.create({
            totalPembayaran: totalHarga,
            metodeBayar: metodeBayar
        });

        // 2. Hubungkan Order dengan beberapa Cart
        await newOrder.addCarts(selectedCartIds);

        console.log("Order berhasil dibuat:", newOrder.id);
    } catch (error) {
        console.error("Gagal membuat order", error);
    }
};
