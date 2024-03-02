document.addEventListener("DOMContentLoaded", function () {
    const aboutBtn = document.getElementById('btn-about');
    const experienceBtn = document.getElementById('btn-experience');

    aboutBtn.classList.add('active')

    aboutBtn.addEventListener('click', function() {
        document.getElementById('about').classList.add('active');
        document.getElementById('experience').classList.remove('active');
        aboutBtn.classList.add('active');
        experienceBtn.classList.remove('active');
    });

    experienceBtn.addEventListener('click', function() {
        document.getElementById('experience').classList.add('active');
        document.getElementById('about').classList.remove('active');
        experienceBtn.classList.add('active');
        aboutBtn.classList.remove('active');
    })

    function createDonutChart(element, skillValue) {
        new Chart(element, {
            type: 'doughnut',
            data: {
                labels: false,
                datasets: [{
                    data: [skillValue, 100 - skillValue],
                    backgroundColor: ['#009688', '#e0e0e0']
                }]
            },
            options: {
                cutout: '60%',
                responsive: false,
                maintainAspectRatio: false,
                legend: { display: false },
                tooltips: { enabled: false }
            }
        });
    }

    createDonutChart(document.getElementById('sqlChart'), 80);
    createDonutChart(document.getElementById('etlChart'), 70);
    createDonutChart(document.getElementById('biChart'), 75);
    createDonutChart(document.getElementById('pyChart'), 72);
});