[
  {
    "image": "images/family-communication.jpg",
    "category": "Family Life, Communication",
    "date": "2026-04-10",
    "title": "Building Stronger Family Communication",
    "text": "Healthy families communicate openly and respectfully. Learning to listen actively and express feelings clearly strengthens trust and reduces conflict at home.",
    "authorName": "Dr. Laura Simmons",
    "authorRole": "Family Therapist",
    "link": "https://www.betterhealth.vic.gov.au/health/healthyliving/relationships-and-communication"
  },
  {
    "image": "images/parenting.jpg",
    "category": "Parenting, Development",
    "date": "2026-04-12",
    "title": "Positive Parenting for Lifelong Impact",
    "text": "Positive parenting focuses on guidance, encouragement, and consistency, helping children develop confidence, responsibility, and emotional security.",
    "authorName": "Michael Grant",
    "authorRole": "Parenting Educator",
    "link": "https://www.cdc.gov/parents/essentials/index.html"
  },
  {
    "image": "images/family-time.jpg",
    "category": "Family Bonding, Lifestyle",
    "date": "2026-04-15",
    "title": "The Power of Quality Family Time",
    "text": "Spending intentional time together strengthens relationships, builds trust, and creates lasting memories that support emotional wellbeing.",
    "authorName": "Rachel Adams",
    "authorRole": "Family Life Coach",
    "link": "https://www.extension.umn.edu/family/family-traditions/"
  },
  {
    "image": "images/support-family.jpg",
    "category": "Support, Relationships",
    "date": "2026-04-18",
    "title": "Creating a Supportive Family Environment",
    "text": "A supportive home environment helps individuals feel valued and understood, fostering resilience and emotional growth.",
    "authorName": "Daniel Brooks",
    "authorRole": "Family Advocate",
    "link": "https://www.apa.org/topics/family-life"
  },
  {
    "image": "images/mindful-family.jpg",
    "category": "Mindfulness, Family Life",
    "date": "2026-04-20",
    "title": "Practicing Mindfulness as a Family",
    "text": "Mindfulness can help families stay present, manage stress, and respond to challenges with patience and understanding.",
    "authorName": "Sophia Lee",
    "authorRole": "Mindfulness Educator",
    "link": "https://www.mayoclinic.org/tests-procedures/meditation/in-depth/mindfulness-exercises/art-20046356"
  },
  {
    "image": "images/healthy-living.jpg",
    "category": "Health, Family Wellness",
    "date": "2026-04-22",
    "title": "Promoting Healthy Living in the Family",
    "text": "Healthy habits such as regular exercise, balanced nutrition, and proper sleep improve both physical and emotional wellbeing in families.",
    "authorName": "Ethan Walker",
    "authorRole": "Health Educator",
    "link": "https://www.cdc.gov/family/index.htm"
  },
  {
    "image": "images/conflict.jpg",
    "category": "Conflict Resolution, Relationships",
    "date": "2026-04-25",
    "title": "Resolving Family Conflicts Peacefully",
    "text": "Conflict is natural, but learning to manage disagreements respectfully helps maintain strong and healthy relationships.",
    "authorName": "Dr. Elena Morris",
    "authorRole": "Conflict Resolution Specialist",
    "link": "https://www.helpguide.org/articles/relationships-communication/conflict-resolution-skills.htm"
  },
  {
    "image": "images/routines.jpg",
    "category": "Family Life, Structure",
    "date": "2026-04-28",
    "title": "Creating Healthy Family Routines",
    "text": "Consistent routines provide stability, reduce stress, and help children feel safe and secure in their daily lives.",
    "authorName": "James Carter",
    "authorRole": "Family Consultant",
    "link": "https://www.zerotothree.org/resource/establishing-routines/"
  },
  {
    "image": "images/marriage.jpg",
    "category": "Marriage, Relationships",
    "date": "2026-05-01",
    "title": "Strengthening Marital Relationships",
    "text": "Healthy marriages are built on trust, communication, and shared goals, which create a strong foundation for the entire family.",
    "authorName": "Dr. Karen White",
    "authorRole": "Marriage Counselor",
    "link": "https://www.gottman.com/blog/"
  },
  {
    "image": "images/teens.jpg",
    "category": "Parenting, Adolescents",
    "date": "2026-05-03",
    "title": "Understanding and Parenting Teenagers",
    "text": "Adolescence is a time of growth and change. Supportive parenting helps teens navigate emotions, identity, and independence.",
    "authorName": "Lisa Brown",
    "authorRole": "Youth Development Specialist",
    "link": "https://www.apa.org/topics/parenting/teens"
  },
  {
    "image": "images/finance.jpg",
    "category": "Finance, Family Life",
    "date": "2026-05-05",
    "title": "Managing Family Finances Wisely",
    "text": "Financial planning and budgeting reduce stress and help families achieve long-term stability and shared goals.",
    "authorName": "Andrew Cole",
    "authorRole": "Financial Educator",
    "link": "https://www.consumerfinance.gov/consumer-tools/"
  },
  {
    "image": "images/digital.jpg",
    "category": "Technology, Parenting",
    "date": "2026-05-07",
    "title": "Raising Digitally Responsible Children",
    "text": "Teaching children safe and balanced technology use is essential for their development and wellbeing in a digital world.",
    "authorName": "Nina Patel",
    "authorRole": "Digital Safety Educator",
    "link": "https://www.commonsensemedia.org/family-tech-planners"
  },
  {
    "image": "images/emotions.jpg",
    "category": "Emotional Development, Children",
    "date": "2026-05-09",
    "title": "Helping Children Build Emotional Intelligence",
    "text": "Children who understand and manage their emotions are better equipped to form healthy relationships and succeed in life.",
    "authorName": "Olivia Scott",
    "authorRole": "Child Development Expert",
    "link": "https://casel.org/fundamentals-of-sel/"
  },
  {
    "image": "images/blended.jpg",
    "category": "Family Structure, Relationships",
    "date": "2026-05-11",
    "title": "Thriving in Blended Families",
    "text": "Blended families can succeed with patience, clear roles, and open communication among all members.",
    "authorName": "Mark Johnson",
    "authorRole": "Family Life Educator",
    "link": "https://www.stepfamilies.info/"
  },
  {
    "image": "images/education-support.jpg",
    "category": "Education, Parenting",
    "date": "2026-05-13",
    "title": "Supporting Children’s Learning at Home",
    "text": "Parental involvement in education boosts children’s confidence, motivation, and academic success.",
    "authorName": "Grace Miller",
    "authorRole": "Education Specialist",
    "link": "https://www.edutopia.org/article/parental-involvement-research"
  }
]

// Function to render cards dynamically
function loadCards() {
    const container = document.getElementById('cardsContainer');
    container.innerHTML = '';
    cardsData.forEach(card => {
        const cardHTML = `
        <div class="card">
            <img src="${card.image}" alt="${card.title}" loading="lazy">
            <div class="card-content">
                <div class="card-meta">${card.category} — ${new Date(card.date).toLocaleDateString()}</div>
                <div class="card-title">${card.title}</div>
                <div class="card-text">${card.text}</div>
                <div class="card-author">
                    <img src="${card.authorImage}" alt="${card.authorName}" loading="lazy">
                    <span>${card.authorName} — ${card.authorRole}</span>
                </div>
            </div>
        </div>`;
        container.insertAdjacentHTML('beforeend', cardHTML);
    });
}

// Load cards and footer info on page load
window.addEventListener('DOMContentLoaded', () => {
    loadCards();
    document.getElementById('currentYear').textContent = new Date().getFullYear();
});


