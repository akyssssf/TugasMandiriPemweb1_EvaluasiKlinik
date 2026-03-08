function submitSurvei(event) {
    // 1. Mencegah halaman reload ketika tombol submit diklik
    event.preventDefault();

    // 2. Memunculkan pop-up alert yang sederhana
    alert("Terimakasih sudah mengisi ulasan.");

    // 3. Mengosongkan isian form (termasuk radio button dan textarea) kembali seperti semula
    document.getElementById("formSurvei").reset();
}