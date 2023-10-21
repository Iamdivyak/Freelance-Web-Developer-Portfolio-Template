const pricingData = [
    {
      title: 'UI/UX Design',
      price: 'Rs 1500',
      features: [
        '1 Home Page Design',
        '4 Side Page Design',
        'Responsive Design',
        'Prototype',
        'Source File',
      ],
    },
    {
        title: 'UI/UX Design',
        price: 'Rs 1500',
        features: [
          '1 Home Page Design',
          '4 Side Page Design',
          'Responsive Design',
          'Prototype',
          'Source File',
        ],
      },
      {
        title: 'UI/UX Design',
        price: 'Rs 1500',
        features: [
          '1 Home Page Design',
          '4 Side Page Design',
          'Responsive Design',
          'Prototype',
          'Source File',
        ],
      },
      {
        title: 'UI/UX Design',
        price: 'Rs 1500',
        features: [
          '1 Home Page Design',
          '4 Side Page Design',
          'Responsive Design',
          'Prototype',
          'Source File',
        ],
      },
      {
        title: 'UI/UX Design',
        price: 'Rs 1500',
        features: [
          '1 Home Page Design',
          '4 Side Page Design',
          'Responsive Design',
          'Prototype',
          'Source File',
        ],
      },
      {
        title: 'UI/UX Design',
        price: 'Rs 1500',
        features: [
          '1 Home Page Design',
          '4 Side Page Design',
          'Responsive Design',
          'Prototype',
          'Source File',
        ],
      },
  ];
  
  // Function to create a pricing card
  function createPricingCard(pricingPlan) {
    const card = document.createElement('div');
    card.classList.add('pricing-plan');
  
    card.innerHTML = `
      <h3>${pricingPlan.title}</h3>
      <p class="plan-description">${pricingPlan.price}</p>
      <div class="divider"></div>
      <div class="card-contents">
        ${pricingPlan.features.map(feature => `
          <div class="content-item">
            <span class="tick-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check" viewBox="0 0 16 16">
                <path d="M12.293 4.293a1 1 0 0 1 0 1.414l-7 7a1 1 0 0 1-1.414 0l-4-4a1 1 0 1 1 1.414-1.414L5 9.586l6.293-6.293a1 1 0 0 1 1.414 0z"></path>
              </svg>
            </span>${feature}
          </div>
        `).join('')}
      </div>
      <a href="#" class="btn btn-transparent">Request to order</a>
    `;
  
    return card;
  }
  
  // Function to add pricing cards to the container
  function renderPricingCards() {
    const pricingContainer = document.getElementById('pricing-container');
    pricingData.forEach(pricingPlan => {
      const card = createPricingCard(pricingPlan);
      pricingContainer.appendChild(card);
    });
  }
  
  // Calling the function to render the pricing cards
  renderPricingCards();
  