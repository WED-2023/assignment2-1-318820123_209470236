<!-- <template>
    <div class="background">
      <div class="about-page">
        <div class="container">
          <h1>About Us</h1>
          <p class="intro">
            Welcome to our recipe site! We are a passionate team of developers dedicated to creating the best culinary experience for our users. Our mission is to bring delicious recipes to your kitchen easily and simply and help different chefs share their great recipes so that everyone can try their hand at making them.
          </p>
  
          <h2>Our Team</h2>
          <div class="team-section">
            <div class="team-member" v-for="member in team" :key="member.id">
              <img :src="member.photo" :alt="member.name" class="team-photo">
              <h3>{{ member.name }}</h3>
              <p>{{ member.role }}</p>
              <p>{{ member.bio }}</p>
            </div>
          </div>
  
          <h2>Our Mission</h2>
          <p>
            Our goal is to empower home cooks and food enthusiasts with a wide variety of recipes that are easy to follow and delicious to taste. We believe that cooking should be fun, accessible, and enjoyable for everyone.
          </p>
  
          <h2>Contact Us</h2>
          <p>
            Have any questions or feedback? We'd love to hear from you! Contact us at <a href="mailto:support@vuerecipes.com">support@vuerecipes.com</a>.
          </p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "AboutPage",
    data() {
      return {
        team: [
          {
            id: 1,
            name: "Lior Levy",
            role: "Information systems engineering student",
            bio: "Lior is a third year student at Ben Gurion University, Israel.",
            photo: "https://via.placeholder.com/150"
          },
          {
            id: 2,
            name: "Lior Amitay",
            role: "Information systems engineering student",
            bio: "Lior is a third year student at Ben Gurion University, Israel.",
            photo: "https://via.placeholder.com/150"
          },
        ]
      };
    }
  };
  </script>
  
  <style lang="scss" scoped>
  .background {
    background-image: url('https://static.vecteezy.com/system/resources/thumbnails/008/660/558/small_2x/organic-food-background-hand-drawn-concept-free-vector.jpg ');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .about-page {
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    color: #333;
    padding: 20px;
    background-color: rgba(255, 255, 255, 0.9);
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  
    .container {
      max-width: 800px;
      margin: auto;
      padding: 20px;
    }
  
    h1, h2 {
      color: #981a51;
      margin-bottom: 15px;
    }
  
    .intro {
      font-size: 1.2rem;
      margin-bottom: 20px;
    }
  
    .team-section {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
  
      .team-member {
        width: 45%;
        margin-bottom: 20px;
        text-align: center;
  
        .team-photo {
          width: 150px;
          height: 150px;
          border-radius: 50%;
          margin-bottom: 10px;
        }
  
        h3 {
          margin: 10px 0 5px;
          font-size: 1.4rem;
        }
  
        p {
          margin: 5px 0;
        }
      }
    }
  
    a {
      color: #685555;
      text-decoration: none;
  
      &:hover {
        text-decoration: underline;
      }
    }
  }
  </style> -->