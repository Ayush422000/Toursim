// Smooth scroll to section
function scrollToSection(id) {
    const section = document.getElementById(id);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

// Trip planning logic
const tripForm = document.getElementById('tripForm');
const planList = document.getElementById('planList');
let plans = [];

if (tripForm) {
    tripForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const destination = document.getElementById('destination').value;
        const startDate = document.getElementById('start-date').value;
        const endDate = document.getElementById('end-date').value;
        if (destination && startDate && endDate) {
            plans.push({ destination, startDate, endDate });
            renderPlans();
            tripForm.reset();
        }
    });
}

function renderPlans() {
    planList.innerHTML = '';
    if (plans.length === 0) {
        planList.innerHTML = '<p>No trips planned yet.</p>';
        return;
    }
    plans.forEach((plan, idx) => {
        const div = document.createElement('div');
        div.className = 'plan-item';
        div.innerHTML = `<span><strong>${plan.destination}</strong>: ${plan.startDate} to ${plan.endDate}</span> <button onclick="removePlan(${idx})">Remove</button>`;
        planList.appendChild(div);
    });
}

function removePlan(idx) {
    plans.splice(idx, 1);
    renderPlans();
}

// Contact form feedback
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        contactForm.reset();
        alert('Thank you for contacting us! We will get back to you soon.');
    });
} 