const posts = [
  {
    "image": "images/communication.jpg",
    "category": "Family Life, Communication",
    "date": "2023-06-01",
    "title": "Building Stronger Family Communication",
    "text": "Healthy families communicate openly and respectfully. Learning to listen actively and express feelings clearly strengthens trust and reduces conflict at home.",
    "author": "Better Health Channel",
    "authorRole": "Health Organization",
    "link": "https://www.betterhealth.vic.gov.au/health/healthyliving/relationships-and-communication"
  },
  {
    "image": "images/educate.jpg",
    "category": "Parenting, Development",
    "date": "2023-03-15",
    "title": "Positive Parenting for Lifelong Impact",
    "text": "Positive parenting focuses on guidance, encouragement, and consistency, helping children develop confidence, responsibility, and emotional security.",
    "author": "CDC",
    "authorRole": "Public Health Organization",
    "link": "https://www.cdc.gov/parents/essentials/index.html"
  },
  {
    "image": "images/time.jpg",
    "category": "Family Bonding, Lifestyle",
    "date": "2022-09-10",
    "title": "The Power of Quality Family Time",
    "text": "Spending intentional time together strengthens relationships, builds trust, and creates lasting memories that support emotional wellbeing.",
    "author": "University of Minnesota Extension",
    "authorRole": "Educational Institution",
    "link": "https://www.extension.umn.edu/family/family-traditions/"
  },
  {
    "image": "images/support.jpg",
    "category": "Support, Relationships",
    "date": "2023-01-20",
    "title": "Creating a Supportive Family Environment",
    "text": "A supportive home environment helps individuals feel valued and understood, fostering resilience and emotional growth.",
    "author": "American Psychological Association",
    "authorRole": "Professional Organization",
    "link": "https://www.apa.org/topics/family-life"
  },
  {
    "image": "images/mindful-family.jpg",
    "category": "Mindfulness, Family Life",
    "date": "2022-11-05",
    "title": "Practicing Mindfulness as a Family",
    "text": "Mindfulness can help families stay present, manage stress, and respond to challenges with patience and understanding.",
    "author": "Mayo Clinic",
    "authorRole": "Medical Center",
    "link": "https://www.mayoclinic.org/tests-procedures/meditation/in-depth/mindfulness-exercises/art-20046356"
  },
  {
    "image": "images/healthy-living.jpg",
    "category": "Health, Family Wellness",
    "date": "2023-04-01",
    "title": "Promoting Healthy Living in the Family",
    "text": "Healthy habits such as regular exercise, balanced nutrition, and proper sleep improve both physical and emotional wellbeing in families.",
    "author": "CDC",
    "authorRole": "Public Health Organization",
    "link": "https://www.cdc.gov/family/index.htm"
  },
  {
    "image": "images/conflict.jpg",
    "category": "Conflict Resolution, Relationships",
    "date": "2023-02-12",
    "title": "Resolving Family Conflicts Peacefully",
    "text": "Conflict is natural, but learning to manage disagreements respectfully helps maintain strong and healthy relationships.",
    "author": "HelpGuide",
    "authorRole": "Nonprofit Organization",
    "link": "https://www.helpguide.org/articles/relationships-communication/conflict-resolution-skills.htm"
  },
  {
    "image": "images/routines.jpg",
    "category": "Family Life, Structure",
    "date": "2021-08-18",
    "title": "Creating Healthy Family Routines",
    "text": "Consistent routines provide stability, reduce stress, and help children feel safe and secure in their daily lives.",
    "author": "Zero to Three",
    "authorRole": "Child Development Organization",
    "link": "https://www.zerotothree.org/resource/establishing-routines/"
  },
  {
    "image": "images/marriage.jpg",
    "category": "Marriage, Relationships",
    "date": "2023-05-10",
    "title": "Strengthening Marital Relationships",
    "text": "Healthy marriages are built on trust, communication, and shared goals, which create a strong foundation for the entire family.",
    "author": "Gottman Institute",
    "authorRole": "Relationship Research Institute",
    "link": "https://www.gottman.com/blog/"
  },
  {
    "image": "images/teens.jpg",
    "category": "Parenting, Adolescents",
    "date": "2023-01-05",
    "title": "Understanding and Parenting Teenagers",
    "text": "Adolescence is a time of growth and change. Supportive parenting helps teens navigate emotions, identity, and independence.",
    "author": "American Psychological Association",
    "authorRole": "Professional Organization",
    "link": "https://www.apa.org/topics/parenting/teens"
  },
  {
    "image": "images/finance.jpg",
    "category": "Finance, Family Life",
    "date": "2023-03-01",
    "title": "Managing Family Finances Wisely",
    "text": "Financial planning and budgeting reduce stress and help families achieve long-term stability and shared goals.",
    "author": "Consumer Financial Protection Bureau",
    "authorRole": "Government Agency",
    "link": "https://www.consumerfinance.gov/consumer-tools/"
  },
  {
    "image": "images/digital.jpg",
    "category": "Technology, Parenting",
    "date": "2023-02-25",
    "title": "Raising Digitally Responsible Children",
    "text": "Teaching children safe and balanced technology use is essential for their development and wellbeing in a digital world.",
    "author": "Common Sense Media",
    "authorRole": "Nonprofit Organization",
    "link": "https://www.commonsensemedia.org/family-tech-planners"
  },
  {
    "image": "images/emotions.jpg",
    "category": "Emotional Development, Children",
    "date": "2022-10-14",
    "title": "Helping Children Build Emotional Intelligence",
    "text": "Children who understand and manage their emotions are better equipped to form healthy relationships and succeed in life.",
    "author": "CASEL",
    "authorRole": "Education Organization",
    "link": "https://casel.org/fundamentals-of-sel/"
  },
  {
    "image": "images/blended.jpg",
    "category": "Family Structure, Relationships",
    "date": "2022-06-30",
    "title": "Thriving in Blended Families",
    "text": "Blended families can succeed with patience, clear roles, and open communication among all members.",
    "author": "Stepfamilies.info",
    "authorRole": "Family Resource Organization",
    "link": "https://www.stepfamilies.info/"
  },
  {
    "image": "images/education-support.jpg",
    "category": "Education, Parenting",
    "date": "2023-01-12",
    "title": "Supporting Children’s Learning at Home",
    "text": "Parental involvement in education boosts children’s confidence, motivation, and academic success.",
    "author": "Edutopia",
    "authorRole": "Education Organization",
    "link": "https://www.edutopia.org/article/parental-involvement-research"
  }
]

const container = document.getElementById("blog-container");

posts.forEach((post, index) => {

  const reverseClass = index % 2 !== 0 ? "reverse" : "";

  const blogHTML = `
    <div class="blog-row ${reverseClass}">
      
      <div class="blog-image">
        <img src="${post.image}" alt="${post.title}">
      </div>

      <div class="blog-content">
        <a href="#" class="category">${post.category}</a>
        <h3>${post.title}</h3>

        <!-- Meta Info -->
        <div class="meta">
          <span class="author">By ${post.author}</span>
          <span class="dot">•</span>
          <span class="date">${post.date}</span>
        </div>

        <p>${post.text}</p>

        <a href="${post.link}" class="blog-btn" target="_blank">Read more</a>
      </div>
    </div>
  `;

  container.innerHTML += blogHTML;

});