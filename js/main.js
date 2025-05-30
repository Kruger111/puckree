// ...existing code...
document.addEventListener('DOMContentLoaded', function() {
    const sidebar = document.getElementById('sidebar');
    const toggle = document.getElementById('sidebar-toggle');
    if (toggle) {
        toggle.addEventListener('click', function() {
            sidebar.classList.toggle('open');
        });
    }
});
// ...existing code...
