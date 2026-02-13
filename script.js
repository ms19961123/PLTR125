<script>
    // ── Data ──
    const responsibilities = [
      { icon: '&#36;', title: 'Budgeting', body: 'Develop and manage annual operating and capital budgets across all business units. Coordinate cross-departmental budget reviews, track allocations against strategic priorities, and ensure fiscal discipline organization-wide.' },
      { icon: '&#9783;', title: 'Forecasting', body: 'Produce rolling financial forecasts using statistical models and scenario planning. Incorporate macroeconomic indicators, market trends, and operational drivers to deliver reliable projections that guide executive decision-making.' },
      { icon: '&#9733;', title: 'Strategic Planning', body: 'Partner with senior leadership on long-range financial planning, M&A evaluation, and capital allocation strategy. Translate corporate objectives into actionable financial roadmaps with clear milestones and KPIs.' },
      { icon: '&#916;', title: 'Variance Analysis', body: 'Perform detailed actual-vs-budget and actual-vs-forecast variance analysis. Identify root causes of financial deviations, quantify their business impact, and recommend corrective actions to keep performance on track.' },
      { icon: '&#120031;', title: 'Financial Modeling', body: 'Build and maintain sophisticated financial models for valuation, sensitivity analysis, and scenario planning. Support investment decisions, pricing strategies, and new product launches with robust quantitative frameworks.' },
      { icon: '&#9632;', title: 'Dashboards & Reporting', body: 'Design interactive dashboards and automated reporting solutions that provide real-time visibility into financial KPIs. Empower stakeholders with self-service analytics and actionable insights.' },
      { icon: '&#9829;', title: 'Business Partnering', body: 'Serve as trusted financial advisors embedded within business units. Provide proactive insights, challenge assumptions, and help operational leaders make data-driven decisions aligned with company strategy.' }
    ];

    const chartData = [
      { label: 'Q1 2024', revenue: 142, expenses: 118 },
      { label: 'Q2 2024', revenue: 158, expenses: 125 },
      { label: 'Q3 2024', revenue: 149, expenses: 121 },
      { label: 'Q4 2024', revenue: 172, expenses: 134 },
      { label: 'Q1 2025', revenue: 165, expenses: 129 },
      { label: 'Q2 2025', revenue: 183, expenses: 138 },
      { label: 'Q3 2025', revenue: 178, expenses: 142 },
      { label: 'Q4 2025', revenue: 196, expenses: 148 }
    ];

    const teamMembers = [
      { name: 'Sarah Mitchell', title: 'VP, Financial Planning & Analysis', initials: 'SM', bio: 'Leads enterprise-wide FP&A strategy with 15+ years in corporate finance.' },
      { name: 'David Chen', title: 'Senior Financial Analyst', initials: 'DC', bio: 'Specializes in advanced financial modeling and scenario-based forecasting.' },
      { name: 'Rachel Thompson', title: 'Budget Manager', initials: 'RT', bio: 'Oversees annual budgeting processes and cross-functional coordination.' },
      { name: 'Marcus Johnson', title: 'Business Intelligence Lead', initials: 'MJ', bio: 'Designs executive dashboards and drives data analytics initiatives.' },
      { name: 'Priya Patel', title: 'Strategic Planning Analyst', initials: 'PP', bio: 'Partners with leadership on long-range planning and capital allocation.' },
      { name: 'James Rivera', title: 'FP&A Associate', initials: 'JR', bio: 'Supports variance analysis, reporting automation, and ad-hoc analysis.' }
    ];

    // ── Build Accordion ──
    const accordionEl = document.getElementById('accordion');
    responsibilities.forEach((item, i) => {
      const div = document.createElement('div');
      div.className = 'accordion-item';
      div.innerHTML = `
        <button class="accordion-btn" aria-expanded="false">
          <span class="icon-wrap">
            <span class="acc-icon">${item.icon}</span>
            ${item.title}
          </span>
          <span class="chevron">&#9662;</span>
        </button>
        <div class="accordion-body">
          <div class="accordion-body-inner">${item.body}</div>
        </div>`;
      accordionEl.appendChild(div);
    });

    document.querySelectorAll('.accordion-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const item = btn.parentElement;
        const body = btn.nextElementSibling;
        const isOpen = item.classList.contains('open');

        document.querySelectorAll('.accordion-item').forEach(el => {
          el.classList.remove('open');
          el.querySelector('.accordion-body').style.maxHeight = null;
          el.querySelector('.accordion-btn').setAttribute('aria-expanded', 'false');
        });

        if (!isOpen) {
          item.classList.add('open');
          body.style.maxHeight = body.scrollHeight + 'px';
          btn.setAttribute('aria-expanded', 'true');
        }
      });
    });

    // ── Build Chart ──
    const chartWrapper = document.getElementById('chartWrapper');
    const maxVal = Math.max(...chartData.flatMap(d => [d.revenue, d.expenses]));

    // Y-axis
    const yAxis = document.createElement('div');
    yAxis.className = 'y-axis';
    for (let i = 0; i <= 4; i++) {
      const label = document.createElement('span');
      label.textContent = '$' + Math.round(maxVal - (maxVal / 4) * i) + 'M';
      yAxis.appendChild(label);
    }
    chartWrapper.appendChild(yAxis);

    chartData.forEach((d, i) => {
      const group = document.createElement('div');
      group.className = 'chart-bar-group';
      const revH = (d.revenue / maxVal) * 100;
      const expH = (d.expenses / maxVal) * 100;
      group.innerHTML = `
        <div class="bar-pair">
          <div class="bar revenue" style="height:0%" data-height="${revH}">
            <div class="bar-tooltip">$${d.revenue}M</div>
          </div>
          <div class="bar expenses" style="height:0%" data-height="${expH}">
            <div class="bar-tooltip">$${d.expenses}M</div>
          </div>
        </div>
        <span class="bar-label">${d.label}</span>`;
      chartWrapper.appendChild(group);
    });

    // Animate bars when visible
    let chartAnimated = false;
    function animateChart() {
      if (chartAnimated) return;
      const rect = chartWrapper.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.85) {
        chartAnimated = true;
        document.querySelectorAll('.bar').forEach((bar, i) => {
          setTimeout(() => {
            bar.style.height = bar.dataset.height + '%';
            bar.style.opacity = '1';
          }, i * 80);
        });
      }
    }

    // ── Build Team ──
    const teamGrid = document.getElementById('teamGrid');
    teamMembers.forEach(m => {
      const card = document.createElement('div');
      card.className = 'team-card';
      card.innerHTML = `
        <div class="team-avatar">
          <img src="https://api.dicebear.com/7.x/initials/svg?seed=${encodeURIComponent(m.name)}&backgroundColor=8b1a1a&textColor=ffffff" alt="${m.name}" loading="lazy">
        </div>
        <h3>${m.name}</h3>
        <div class="title">${m.title}</div>
        <div class="bio">${m.bio}</div>`;
      teamGrid.appendChild(card);
    });

    // ── Contact Form ──
    document.getElementById('contactForm').addEventListener('submit', e => {
      e.preventDefault();
      document.getElementById('formFields').style.display = 'none';
      document.getElementById('formSuccess').style.display = 'block';
    });

    // ── Mobile Nav ──
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');
    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('open');
    });

    navLinks.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => navLinks.classList.remove('open'));
    });

    // ── Active nav link on scroll ──
    const sections = document.querySelectorAll('section');
    const navAnchors = document.querySelectorAll('.nav-links a');

    function updateActiveLink() {
      let current = '';
      sections.forEach(s => {
        if (window.scrollY >= s.offsetTop - 120) current = s.id;
      });
      navAnchors.forEach(a => {
        a.classList.toggle('active', a.getAttribute('href') === '#' + current);
      });
    }

    // ── Scroll Reveal ──
    function revealOnScroll() {
      document.querySelectorAll('.reveal').forEach(el => {
        if (el.getBoundingClientRect().top < window.innerHeight * 0.88) {
          el.classList.add('visible');
        }
      });
      animateChart();
    }

    window.addEventListener('scroll', () => {
      updateActiveLink();
      revealOnScroll();
    });

    // Initial calls
    revealOnScroll();
    updateActiveLink();
