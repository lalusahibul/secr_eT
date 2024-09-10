
import { pw as correctPin } from './secret.js';
const userPin = prompt("Masukkan PIN untuk mengakses konten:");
import { judul } from '/secret.js';
import { textContent } from '/secret.js';

if (userPin === correctPin) {

    document.getElementById('judul').textContent = judul;
    document.getElementById('text').innerHTML = textContent;

    document.getElementById('content').style.display = "block";
} else {
    document.getElementById('wrong').textContent = "Access denied! refresh and try again";
}
