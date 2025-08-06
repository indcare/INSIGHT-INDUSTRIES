// Set dynamic date in sidebar
function setSidebarDate(date) {
  const picker = document.getElementById('sidebar-date-picker');
  if (picker) {
    if (date) {
      picker.value = date;
    } else {
      const today = new Date();
      picker.value = today.toISOString().split('T')[0];
    }
  }
}

document.addEventListener('DOMContentLoaded', function() {
  setSidebarDate();
  const picker = document.getElementById('sidebar-date-picker');
  if (picker) {
    picker.addEventListener('change', function() {
      setSidebarDate(this.value);
      // Trigger event info based on selected date
      const selected = new Date(this.value);
      if (!isNaN(selected)) {
        // Check for 29, 30, or 31 July 2025
        if (selected.getFullYear() === 2025 && selected.getMonth() === 6) { // July is month 6 (0-based)
          if (selected.getDate() === 29) {
            showEventInfo(29);
          } else if (selected.getDate() === 30) {
            showEventInfo(30);
          } else if (selected.getDate() === 31) {
            showEventInfo(31);
          }
        }
      }
    });
  }
});
function loadNews() {
  const content = document.getElementById("main-content");
  content.innerHTML = `
    <h2>Latest News</h2>
    <p>✔ Amrut EXPO 2025 preparations are underway.</p>
    <p>✔ New exhibitors are joining every week!</p>
    <p>✔ The new KICC exhibition will feature expanded halls, more international participants, and exclusive product launches. Stay tuned for updates!</p>
  `;
}

function loadEvents() {
  const content = document.getElementById("main-content");
  content.innerHTML = `
    <h2 style="margin-bottom:12px;">Event Calendar</h2>
    <div style="text-align:left;">
      <span style="display:block;font-size:1.1em;color:#1976d2;font-weight:700;">KICC, Nairobi, Kenya - The Heart of Innovation</span>
      <span style="display:block;font-size:1.1em;font-weight:600;">Don't miss the biggest engineering and technology exhibition in East Africa!</span>
      <span style="display:block;font-size:1.1em;color:#222;font-weight:500;">From 29th to 31st July 2025</span>
      <span style="display:block;font-size:1.1em;color:#222;font-weight:500;">Join us for three days of innovation, networking, and discovery!</span>
    </div>
    
  `;
}

function loadTechnologyToday() {
  const content = document.getElementById("main-content");
  content.innerHTML = `
    <h1> Technology Today at Amrut</h1>
    <h3>Engineering Tomorrow’s Water Solutions Today!</h3>
  
    <p>Welcome to the Technology Spotlight  where innovation meets purpose. At Amrut, we go beyond water purification: we reshape how industries and households experience water. From intelligent automation to sustainable systems, every solution we design is driven by performance, reliability, and a deep commitment to customer needs.
   <br>
    <h3> Innovative Products</h3>
    <p>At Amrut Filtration, we continuously push boundaries by introducing specialized solutions for diverse water treatment needs. Below are a few of our standout innovations and their applications.</p>
    <ul>
      <li><strong>Ultrasonic Aigi Controller</strong>
        <ul>
          <li>For Swimming Pools – Prevents algae formation without chemicals.</li>
          <li>For Cooling Towers – Reduces scale and microbial growth.</li>
          <li>For Lakes / Ponds – Maintains healthy water ecosystems naturally.</li>
        </ul>
      </li>
      <li><strong>Ozone Generator</strong>
        <ul>
          <li>For Water Bottling Plants – Ensures high-level disinfection.</li>
          <li>For Swimming Pools – A chlorine-free alternative.</li>
          <li>For Cooling Towers – Eco-friendly microbial control.</li>
        </ul>
      </li>
      <li><strong>Magnetic Water Conditioner (Softener)</strong>
        <ul>
          <li>For Industry – Reduces scaling in pipes and equipment.</li>
          <li>For Irrigation – Improves soil permeability and water absorption.</li>
          <li>For Domestic Use – Extends appliance life and improves water feel.</li>
        </ul>
      </li>
    </ul>
   
    <div class="gallery-section">
      <h3>In Action: Our Technology </h3>
      <div class="gallery-grid">
        <img src="ultrasonic.png" alt="IoT Dashboard" />
        <img src="ozone-generator.png" alt="Whole-House Filter" />
        <img src="magnetic-water-conditioner.png" alt="Industrial Setup" />
     
      </div>
    </div>
    <div class="read-more-section" style="margin-top:24px; display:flex; justify-content:flex-start;">
      <a href="https://www.indcareafrica.com/innovative-products.html" target="_blank" style="display:inline-block;background:#111;color:#fff;font-size:1.1em;font-weight:700;padding:16px 24px;margin:12px 0;border-radius:12px;text-decoration:none;box-shadow:0 2px 8px rgba(0,0,0,0.12);transition:background 0.2s;width:20%;min-width:140px;max-width:220px;text-align:center;">Read More</a>
    </div>
  
  `;
}
function showEventInfo(day) {
  const content = document.getElementById("main-content");
  let info = "";
  if (day === 29) {
    info = `<h2>29 July 2025 - Opening Day</h2>
      <p>Welcome to the Amrut EXPO! The exhibition opens at 9:00 AM at KICC, Nairobi. Explore the latest in engineering and technology, meet our associates and clients, and enjoy the inaugural networking session.</p>`;
  } else if (day === 30) {
    info = `<h2>30 July 2025 - KICC Engineering Day</h2>
      <p>Join us for a full day of technical sessions, product demos, and expert talks at KICC. Discover innovations, connect with industry leaders, and participate in hands-on workshops.</p>`;
  } else if (day === 31) {
    info = `<h2>31 July 2025 - Closing & Awards</h2>
      <p>The final day features closing remarks, awards for outstanding exhibitors, and a farewell networking lunch. Thank you for being part of Amrut EXPO 2025!</p>`;
  }
  content.innerHTML = info + `<button style='margin-top:18px;' onclick='loadEvents()'>Back to Event Calendar</button>`;
}
